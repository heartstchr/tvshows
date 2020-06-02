import * as types from '../mutation-types'
import axios from 'axios'

// initial state
const state = {
  tvshows: [],
  popularTvShows:[],
  tvshowsDetails:{},
  fetching: false,
  fetched: false,
  errorMessage: '',
  genresTvShows: {},
  seasons:[],
  casts:[],
  crews:[],
  uniqueGenres:[
    "Drama",
    "Action",
    "Comedy",
    "Romance",
    "Horror",
    "Family"
  ]
}

// getters
const getters = {
  tvshows: state => state.tvshows,
  popularTvShows: state => state.popularTvShows,
  isTvShowsFetching: state => state.fetching,
  isTvShowsFetched: state => state.fetched,
  allGenres: state=> state.uniqueGenres,
  genresTvShows: state => state.genresTvShows,
  tvshowsDetails: state => state.tvshowsDetails,
  seasons: state => state.seasons,
  casts: state => state.casts,
  crews: state => state.crews
}

// actions
const actions = {
  getTvShows({ commit, getters }) {
    axios.get(`${getters.ENDPOINT}shows`).then(res => (commit(types.FETCH_TV_SHOWS, res.data)))
      .catch(err =>( console.log(err)));
  },
  getTvShowDetails({ commit, getters }, id) {
    axios.get(`${getters.ENDPOINT}shows/${id}?embed[]=episodes&embed[]=cast&embed[]=crew`)
      .then(res => {
        commit(types.FETCH_TV_SHOWS_DETAILS, res.data)
      })
      .catch();
  },
  fetchTvShowsSuccess({ commit }, tvshows) {
    commit(types.FETCH_TV_SHOWS, tvshows)
  }
}

// mutations
const mutations = {
  [types.FETCH_TV_SHOWS](state, tvshows) {
    let allGenres=[];
    let genresTvShows = {};
    tvshows.forEach(element => {
      allGenres.push(...element.genres);
    });
    let uniqueGenres = allGenres.filter( onlyUnique );
    uniqueGenres.forEach((genres) => {
      genresTvShows[genres]=[]
      tvshows.forEach(element => {
        if (element.genres.includes(genres)) genresTvShows[genres].push(element);
      });
      genresTvShows[genres] = genresTvShows[genres].slice(0, this.slideRange);
    });
    state.fetching = false
    state.fetched = true
    state.tvshows = tvshows
    state.popularTvShows = state.tvshows.sort((a, b) =>
      a.rating.average > b.rating.average ? -1 : 1
    )
    state.uniqueGenres = uniqueGenres
    state.genresTvShows =genresTvShows
  },
  [types.FETCH_TV_SHOWS_DETAILS](state, tvshowsDetails){
    state.seasons = tvshowsDetails._embedded.episodes.reduce(function(r, a) {
      r[a.season] = r[a.season] || [];
      r[a.season].push(a);
      return r;
    }, Object.create(null));
    state.casts = tvshowsDetails._embedded.cast
    state.crews = tvshowsDetails._embedded.crew
    state.tvshowsDetails = tvshowsDetails
  }
}


function onlyUnique(value, index, self) { 
  return self.indexOf(value) === index;
}

export default {
  state,
  getters,
  actions,
  mutations
}
