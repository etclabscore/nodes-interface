import mockData from '../assets/mockNode4.json'
import forkIds from '../assets/forkIds.json'

export const state = () => ({
  raw: [], // full list of nodes (all data) (used by nodes page)
  clients: {}, // data for clients table (used by home page)
  forkIds: {}, // data for forkIds table (used by home page)
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
  SET_FORKIDS(state, forkIds) {
    state.forkIds = {
      table: forkIds,
      chart: {
        series: Object.values(forkIds),
        labels: Object.keys(forkIds),
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
  set_nodes({ commit, state }) {
    if (!state.updated) {
      const { nodes, clients, forkIds, protocols } = parseNodes(mockData)
      commit('SET_NODES', nodes)
      commit('SET_CLIENTS', clients)
      commit('SET_FORKIDS', forkIds)
      commit('SET_PROTOCOLS', protocols)
    }
  },
}

const parseNodes = function (nodes) {
  const clients = {}
  const forkIds = {}
  const protocols = {}
  const nodesFiltered = []
  for (const node of nodes) {
    const name = node.name.split('/')
    node.fullname = node.name
    node.name = name[0]
    node.release = name[1]
    node.platform = name[2]
    node.extra = name[3]
    node.forkId = {
      tag: getForkId(node.protocols.eth.forkId.current),
      current: node.protocols.eth.forkId.hash,
      next: node.protocols.eth.forkId.next,
    }
    // if (node.networkID === 1) {
    if (clients[node.name]) {
      clients[node.name] = clients[node.name] + 1
    } else {
      clients[node.name] = 1
    }
    if (forkIds[node.protocols.eth.forkId.tag]) {
      forkIds[node.protocols.eth.forkId.tag] =
        forkIds[node.protocols.eth.forkId.tag] + 1
    } else {
      forkIds[node.protocols.eth.forkId.tag] = 1
    }
    if (protocols[node.protocols.eth.version]) {
      protocols[node.protocols.eth.version] =
        protocols[node.protocols.eth.version] + 1
    } else {
      protocols[node.protocols.eth.version] = 1
    }
    nodesFiltered.push(node)
    // }
  }
  return { nodes: nodesFiltered, clients, forkIds, protocols }
}

const getForkId = function (hash) {
  return forkIds[hash] || hash
}
