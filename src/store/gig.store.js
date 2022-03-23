import { gigService } from '../services/gig.service.js';

export default {
  state: {
    gigs: null,
    filterBy: null,
    categories: gigService.createCatergories()
  },
  getters: {
    getGigs({ gigs, filterBy }) {
      console.log(filterBy);
      if (!filterBy) return gigs
      const regex = new RegExp(filterBy.category, 'i')
      return gigs.filter((gig) => regex.test(gig.category))
    },

    reviwersLength(state) {
      return state.gig
    },
    getCategories(state) {
      return state.categories
    }
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
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
    reviwersLength(state) {
      return state.gigs
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
    },
    filterBy({ commit }, { filterBy }) {
      console.log(filterBy);
      commit({ type: 'setFilter', filterBy });

    },
  }
}