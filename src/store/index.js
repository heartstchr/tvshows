import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


import route from './modules/route.module'
import config from './modules/config.module'
import tvShows from './modules/tvshows.module'


Vue.use(Vuex)

const plugins = [
  createPersistedState({
    storage: window.sessionStorage
  })
]

export default new Vuex.Store({
  modules: {
    config,
    route,
    tvShows
  },
  strict: true,
  plugins: plugins
})