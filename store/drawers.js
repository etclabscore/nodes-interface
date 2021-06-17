export const state = () => ({
  navigation: false,
  toc: false,
})

export const mutations = {
  SET_NAVIGATION(state, enabled) {
    state.navigation = enabled
  },
  SET_TOC(state, enabled) {
    state.toc = enabled
  },
}

export const actions = {
  toggleNavigation({ commit, state }) {
    commit('SET_NAVIGATION', !state.navigation)
  },
  toggleToc({ commit, state }) {
    commit('SET_TOC', !state.toc)
  },
  set_navigation({ commit }, enabled) {
    commit('SET_NAVIGATION', enabled)
  },
  set_toc({ commit }, enabled) {
    commit('SET_TOC', enabled)
  },
}
