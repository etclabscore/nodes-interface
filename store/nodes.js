import axios from 'axios'
import forks from '../assets/forks.json'

export const state = () => ({
  raw: [], // full list of nodes (all data) (used by nodes page)
  clients: {}, // data for clients table (used by home page)
  forks: {}, // data for forkIds table (used by home page)
  countries: {}, // country data for heat map
  protocols: {
    eth: {},
    snap: {},
  },
  updated: false,
})

export const mutations = {
  SET_NODES(state, raw) {
    state.raw = raw
  },
  SET_CLIENTS(state, clients) {
    state.clients = {
      table: clients,
      chart: {
        series: Object.values(clients),
        labels: Object.keys(clients),
      },
    }
  },
  SET_FORKIDS(state, forks) {
    state.forks.current = {
      table: forks.current,
      chart: {
        series: Object.values(forks.current),
        labels: Object.keys(forks.current),
      },
    }
    state.forks.next = {
      table: forks.next,
      chart: {
        series: Object.values(forks.next),
        labels: Object.keys(forks.next),
      },
    }
  },
  SET_PROTOCOLS(state, protocols) {
    state.protocols = {
      eth: {
        table: protocols.eth,
        chart: {
          series: Object.values(protocols.eth),
          labels: Object.keys(protocols.eth),
        },
      },
      snap: {
        table: protocols.snap,
        chart: {
          series: Object.values(protocols.snap),
          labels: Object.keys(protocols.snap),
        },
      },
    }
    state.updated = true
  },
  SET_COUNTRIES(state, countries) {
    state.countries = countries
  },
}

export const actions = {
  async set_nodes({ commit, state }) {
    if (!state.updated) {
      // TODO(iquidus): handle this better
      const { data } = await axios.get('https://peers.etccore.in/v5/nodes.json')

      const { nodes, clients, forks, protocols, countries } = parseNodes(data)
      commit('SET_NODES', nodes)
      commit('SET_CLIENTS', clients)
      commit('SET_FORKIDS', forks)
      commit('SET_PROTOCOLS', protocols)
      commit('SET_COUNTRIES', countries)
    }
  },
}

const parseNodes = function (nodes) {
  const clients = {}
  const forks = {
    current: {},
    next: {},
  }
  const protocols = {
    eth: {},
    snap: {},
  }
  const countries = {}
  const nodesFiltered = []

  for (const node of nodes) {
    // filter out any nodes that didnt get past handshake.
    if (node.protocols.eth !== 'handshake' && node.protocols.eth.version > 0) {
      const name = node.name.split('/')
      node.client = {
        name: name[0] ? name[0] : '-',
        release: name[1] ? name[1] : '-',
        platform: name[2] ? name[2] : '-',
        extra: name[3] ? name[3] : '',
      }

      clients[node.client.name] = clients[node.client.name]
        ? clients[node.client.name] + 1
        : 1

      if (node.protocols.eth.forkId) {
        node.protocols.eth.forkId.tag = getForkId(
          node.protocols.eth.forkId.hash
        )
        node.protocols.eth.forkId.nextTag = getForkBlock(
          node.protocols.eth.forkId.next
        )
        forks.current[node.protocols.eth.forkId.tag] = forks.current[
          node.protocols.eth.forkId.tag
        ]
          ? forks.current[node.protocols.eth.forkId.tag] + 1
          : 1

        forks.next[node.protocols.eth.forkId.nextTag] = forks.next[
          node.protocols.eth.forkId.nextTag
        ]
          ? forks.next[node.protocols.eth.forkId.nextTag] + 1
          : 1
      }

      const e = 'v' + node.protocols.eth.version
      protocols.eth[e] = protocols.eth[e] ? protocols.eth[e] + 1 : 1

      if (node.protocols.snap) {
        const s = 'v' + node.protocols.snap.version
        protocols.snap[s] = protocols.snap[s] ? protocols.snap[s] + 1 : 1
      } else {
        protocols.snap['-'] = protocols.snap['-'] ? protocols.snap['-'] + 1 : 1
      }

      countries[node.ip_info.country] = countries[node.ip_info.country]
        ? countries[node.ip_info.country] + 1
        : 1

      nodesFiltered.push(node)
    }
  }
  return { nodes: nodesFiltered, clients, forks, protocols, countries }
}

const getForkId = function (hash) {
  return forks.id[hash] || hash
}

const getForkBlock = function (number) {
  return forks.block[number] || number
}
