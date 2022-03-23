import { gigService } from '../../services/gig.service.js'

export default {
  state: {
    gigs: null,
    filterBy: null
  },
  getters: {
    // getGigs(state) {
    //   return state.gigs;
    // },
    getGigs({ gigs, filterBy }) {
      if (!filterBy) return gigs
      const regex = new RegExp(filterBy.title, 'i')
      return gigs.filter((gig) => regex.test(gig.title))
    },
  },


  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
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
      gigService.query(state.filterBy).then((gigs) => {
        commit({ type: 'setGigs', gigs })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },

  }
}

