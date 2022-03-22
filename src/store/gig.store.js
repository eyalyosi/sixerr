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
    // async loadGigs({ commit, state }) {
    //   try {
    //     var gigs = gigService.query()
    //     commit({ type: 'setGigs', gigs })
    //   } catch (err) {
    //     console.error('Cannot Load toys', err);
    //     throw err;
    //   }
    // }
    loadGigs({ commit, state }) {
      gigService.query().then((gigs) => {
        commit({ type: 'setGigs', gigs })
      })
    }
  }
}