import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


import route from './modules/route.module'
import config from './modules/config.module'
import tvShows from './modules/tvshows.module'

import tvshowsPlugin from './plugins/tvshows.plugin'

Vue.use(Vuex)

const plugins = [
  tvshowsPlugin,
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