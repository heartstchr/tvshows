import Axios from 'axios'
import * as types from '../mutation-types'

let CancelToken = null
let source = null

export default store => {
  const { ENDPOINT } = store.getters
  const API = Axios.create({
    baseURL: ENDPOINT
  })
  store.subscribe((mutation) => {
    switch (mutation.type) {
      case types.FETCH_TV_SHOWS:
        if (mutation.payload) {
          fetchTvShows()
        }
        break
    }
    async function fetchTvShows () {
      console.info('-->fetchTvShows')
      if (source) {
        source.cancel('canceled')
      }
      CancelToken = Axios.CancelToken
      source = CancelToken.source()

      try {
        const response = await API.get(`shows`)
        const { tvShows } = response.data
        console.log(tvShows)
        // store.dispatch('fetchTvShowsSuccess', { tvShows })
      }
      catch (error) {
        source = null
        // store.dispatch('fetchTvShowsFailure', error.message)
      }
    }
  })
}
