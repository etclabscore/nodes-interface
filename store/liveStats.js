import axios from 'axios'
import config from '~/params/config.json'
import { parseNodeVersion } from '~/utils'

export const state = () => ({
  raw: [],
  latestBlockNumber: 0,
  now: new Date(),
  intervalTimer: null,
})

export const mutations = {
  SET_LIVE_STATS(state, raw) {
    state.raw = raw
  },
  SET_LATEST_BLOCK_NUMBER(state, latestBlockNumber) {
    state.latestBlockNumber = latestBlockNumber
  },

  NOW(state) {
    state.now = new Date()
  },

  SET_INTERVAL_TIMER(state, callback) {
    state.intervalTimer = setInterval(() => {
      if (callback) {
        callback()
      }
      this.dispatch('liveStats/set_live_stats')
    }, config.apiEndpoints.liveStatsFetchInterval * 1000)
  },

  CLEAR_INTERVAL_TIMER(state) {
    if (state.intervalTimer) {
      clearInterval(state.intervalTimer)
      state.intervalTimer = null
    }
  },
}

export const actions = {
  async set_live_stats({ commit }) {
    const { data } = await axios.get(config.apiEndpoints.liveStats)

    const { liveStats, latestBlockNumber } = parseLiveStats(data)

    commit('SET_LATEST_BLOCK_NUMBER', latestBlockNumber)
    commit('SET_LIVE_STATS', liveStats)
  },

  auto_polling({ commit, state }) {
    if (!state.intervalTimer) {
      commit('SET_INTERVAL_TIMER', () => commit('NOW'))
    }
  },

  clear_auto_polling({ commit }) {
    commit('CLEAR_INTERVAL_TIMER')
  },
}

const parseLiveStats = function (liveStats) {
  liveStats = liveStats.map((node) => {
    return {
      ...node,
      blockNumber: parseInt(node.blockNumber, 16),
      ...parseNodeVersion(node.clientVersion),
    }
  })

  const latestBlockNumber = liveStats.reduce((acc, node) => {
    if (node.blockNumber > acc) {
      acc = node.blockNumber
    }
    return acc
  }, 0)

  return { liveStats, latestBlockNumber }
}
