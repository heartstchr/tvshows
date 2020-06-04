import Store from '../'
import router from '../../router'


router.afterEach((to) => {
  switch (to.name) {
    case 'home':
      Store.dispatch('getTvShows')
      break
    case 'genres':
      Store.dispatch('getTvShows')
      break
    case 'search':
      Store.dispatch('searchTvShows', to.params.q)
      break
  }
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
});
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
