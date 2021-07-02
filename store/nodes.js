import axios from 'axios'
import forks from '../assets/forks.json'

export const state = () => ({
  raw: [], // full list of nodes (all data) (used by nodes page)
  clients: {}, // data for clients table (used by home page)
  forks: {}, // data for forkIds table (used by home page)
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
      table: protocols,
      chart: {
        series: Object.values(protocols),
        labels: Object.keys(protocols),
      },
    }
    state.updated = true
  },
}

export const actions = {
  async set_nodes({ commit, state }) {
    if (!state.updated) {
      // TODO(iquidus): handle this better
      const { data } = await axios.get(
        'https://peers.etccore.in/v2/admin_peers.result.json'
      )

      const { nodes, clients, forks, protocols } = parseNodes(data)
      commit('SET_NODES', nodes)
      commit('SET_CLIENTS', clients)
      commit('SET_FORKIDS', forks)
      commit('SET_PROTOCOLS', protocols)
    }
  },
}

const parseNodes = function (nodes) {
  const clients = {}
  const forks = {
    current: {},
    next: {},
  }
  const protocols = {}
  const nodesFiltered = []

  for (const node of nodes) {
    // filter out any nodes that didnt get past handshake.
    if (node.protocols.eth !== 'handshake') {
      const name = node.name.split('/')
      node.client = {
        name: name[0],
        release: name[1],
        platform: name[2],
        extra: name[3],
      }

      if (clients[node.client.name]) {
        clients[node.client.name] = clients[node.client.name] + 1
      } else {
        clients[node.client.name] = 1
      }

      node.protocols.eth.forkId.tag = getForkId(node.protocols.eth.forkId.hash)
      node.protocols.eth.forkId.nextTag = getForkBlock(
        node.protocols.eth.forkId.next
      )

      if (forks.current[node.protocols.eth.forkId.tag]) {
        forks.current[node.protocols.eth.forkId.tag] =
          forks.current[node.protocols.eth.forkId.tag] + 1
      } else {
        forks.current[node.protocols.eth.forkId.tag] = 1
      }

      if (forks.next[node.protocols.eth.forkId.nextTag]) {
        forks.next[node.protocols.eth.forkId.nextTag] =
          forks.next[node.protocols.eth.forkId.nextTag] + 1
      } else {
        forks.next[node.protocols.eth.forkId.nextTag] = 1
      }

      if (protocols[node.protocols.eth.version]) {
        protocols[node.protocols.eth.version] =
          protocols[node.protocols.eth.version] + 1
      } else {
        protocols[node.protocols.eth.version] = 1
      }
      nodesFiltered.push(node)
    }
  }
  return { nodes: nodesFiltered, clients, forks, protocols }
}

const getForkId = function (hash) {
  return forks.id[hash] || hash
}

const getForkBlock = function (number) {
  return forks.block[number] || number
}
