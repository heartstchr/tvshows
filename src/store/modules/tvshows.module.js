import * as types from '../mutation-types'
import axios from 'axios'

// initial state
const state = {
  tvShows: [],
  mappings: [],
  fetching: false,
  fetched: false,
  errorMessage: ''
}

// getters
const getters = {
  tvShows: state => state.tvShows,
  isTvShowsFetching: state => state.fetching,
  isTvShowsFetched: state => state.fetched
}

// actions
const actions = {
    fetchTvShows ({ getters }) {
        console.info('getters', getters)
        return axios.get(`${getters.ENDPOINT}shows`)
    }
}

// mutations
const mutations = {
    [types.FETCH_TV_SHOWS] (state) {
        state.fetching = true
        state.fetched = false
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}
