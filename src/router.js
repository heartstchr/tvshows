import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'
import Error404 from './containers/Error404'
import Genres from './containers/Genres'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
        name: 'genres',
        path: '/genres',
        component: Genres
      },
    // - * ---------------------
    {
      path: '*',
      component: Error404
    }
  ]
})
