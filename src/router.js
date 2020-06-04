import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './containers/Home'
import Search from './containers/Search'
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
      component: Home,
      meta: {
        title: 'Dashbord | Tv Shows',
      }
    },
    {
      name: 'search',
      path: '/search/:q',
      component: Search,
      meta: {
        title: 'Search | Tv Shows',
      }
    },
    {
      name: 'singleTvshows',
      path: '/tvshows/:id',
      component: SingleTvshows,
      meta: {
        title: 'Details of Tv shows | Tv Shows',
      }
    },
    {
      name: 'genres',
      path: '/genres',
      component: Genres,
      meta: {
        title: 'Genres | Tv Shows',
      }
    },
    {
      name: 'singleGenres',
      path: '/genres/:type',
      component: SingleGenres,
      meta: {
        title: 'All tv shows from Genres | Tv Shows',
      }
    },
    // - * ---------------------
    {
      path: '*',
      component: Error404,
      meta: {
        title: 'Error | Tv Shows',
      }
    }
  ]
})
