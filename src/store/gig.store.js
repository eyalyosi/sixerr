import { gigService } from '../services/gig.service.js';

export default {
  state: {
    gigs: null,
  },
  getters: {
    getGigs(state) {
      return state.gigs;
    },
    // getLabels(state) {
    //   return state.labels;
    // },
    // isLoading(state) {
    //   return state.isLoading
    // },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
  },
  actions: {
    loadGigs({ commit, state }) {
      var gigs = gigService.query()
      console.log(gigs);
      commit({ type: 'setGigs', gigs })
    }
  }
};
