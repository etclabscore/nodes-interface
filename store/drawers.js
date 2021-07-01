export const state = () => ({
  charts: true,
})

export const mutations = {
  SET_CHARTS(state, enabled) {
    state.charts = enabled
  },
}

export const actions = {
  toggleCharts({ commit, state }) {
    commit('SET_CHARTS', !state.charts)
  },
  set_charts({ commit }, enabled) {
    commit('SET_CHARTS', enabled)
  },
}
