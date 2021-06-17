import { version } from '../package.json'

export const state = () => ({
  static: version, // static template version
  mobile: false, // global isMobile?
})

export const mutations = {
  SET_MOBILE(state, mobile) {
    state.mobile = mobile
  },
}

export const actions = {
  set_mobile({ commit, state }, isMobile) {
    if (isMobile !== state.mobile) {
      commit('SET_MOBILE', isMobile)
    }
  },
}
