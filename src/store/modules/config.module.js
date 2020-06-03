import * as types from '../mutation-types'

const state = {
  ENDPOINT: 'http://api.tvmaze.com/',
  leftDrawerOpen: false
}

// getters
const getters = {
  ENDPOINT: state => state.ENDPOINT,
  leftDrawerOpen: state => state.leftDrawerOpen
}
// actions
const actions = {
  toggelMenu({state,commit}){
    commit(types.TOGGEL_MENU, state.leftDrawerOpen)
  }
}

// mutations
const mutations = {
  [types.TOGGEL_MENU](state, leftDrawerOpen){
    state.leftDrawerOpen= !leftDrawerOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
