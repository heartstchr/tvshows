import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'
import Error404 from './containers/Error404'
import Genres from './containers/Genres'
import SingleGenres from './containers/SingleGenres'
import SingleTvshows from './containers/SingleTvshows'

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
      name: 'singleTvshows',
      path: '/tvshows/:id',
      component: SingleTvshows
    },
    {
      name: 'genres',
      path: '/genres',
      component: Genres
    },
    {
      name: 'singleGenres',
      path: '/genres/:type',
      component: SingleGenres
    },
    // - * ---------------------
    {
      path: '*',
      component: Error404
    }
  ]
})
