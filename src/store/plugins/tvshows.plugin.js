import Axios from 'axios'
import * as types from '../mutation-types'

export default store => {
  const { ENDPOINT } = store.getters
  const API = Axios.create({
    baseURL: ENDPOINT
  })
  store.subscribe((mutation) => {
    console.log(mutation.type)
    switch (mutation.type) {
      case types.FETCH_TV_SHOWS:
        fetchTvShows()
        break
    }
    async function fetchTvShows() {
      console.info('-->fetchTvShows')
      try {
        const response = await API.get(`shows`)
        store.dispatch('fetchTvShowsSuccess', response.data)
      }
      catch (error) {
        // store.dispatch('fetchTvShowsFailure', error.message)
      }
    }
  })
}
