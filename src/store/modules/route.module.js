import Store from '../'
import router from '../../router'


router.afterEach((to) => {
  switch (to.name) {
    case 'home':
      Store.dispatch('getTvShows')
      break
    case 'genere':
      Store.dispatch('getTvShows')
      break
  }
})

const localState = {
  active: { name: 'home' }
}

const actions = {
}

const mutations = {
}

const getters = {}

export default {
  state: localState,
  getters,
  actions,
  mutations
}
