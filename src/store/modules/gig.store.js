import { gigService } from '../../services/gig.service.js'

export default {
  state: {
    gigs: null,
    filterBy: { title: '', catergory: '', delivery: '' },
    categories: gigService.getCategories(),
    // filterBy: null,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getGigs(state) {
      // console.log(state.filterBy);
      if (!state.gigs) return
      if (state.filterBy.title) {
        // console.log(state.filterBy);
        return state.gigs.filter(gig => gig.title.includes(state.filterBy.title))
      }
      if (state.filterBy.category) {
        return state.gigs.filter(gig => gig.category === state.filterBy.category)
      }
      if (state.filterBy.delivery) {
        return state.gigs.filter(gig => gig.daysToMake === state.filterBy.delivery)
      }
      return state.gigs
    },
    // getFilterBy(state) {
    //   return state.filterBy
    // },

    // getGigs({ gigs, filterBy }) {
    //   if (!filterBy) return gigs
    //   const gigsDisplay = JSON.parse(JSON.stringify(gigs))
    //   const regex = new RegExp(filterBy.title, 'i')

    //   if(filterBy.category) {
    //     return gigsDisplay?.filter((gig) => gig.category === filterBy.category)
    //   }

    //   function isMatchCategory(gig) {
    //     if (!filterBy.category) return true
    //     return gig.category === filterBy.category
    //   }

    //   function isMatchDelivery(gig) {
    //     if (!filterBy.delivery) return true
    //     return gig.daysToMake <= filterBy.delivery
    //   }

    //   return gigsDisplay.filter((gig) => isMatchText(gig) && isMatchCategory(gig) && isMatchDelivery(gig));
    // }
    // getGigs(state) {
    //   return state.gigs
    // },
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
    saveGig(state, { gig }) {
      const idx = state.gigs.findIndex((currGig) => currGig._id === gig._id)
      if (idx !== -1) state.gigs.splice(idx, 1, gig)
      else state.gigs.push(gig)
    },
  },
  actions: {
    async loadGigs({ commit, state }) {
      try {
        const gigs = await gigService.query(state.filterBy)
        // console.log('Gigs from loadGigs');
        commit({ type: 'setGigs', gigs })
      } catch {
        console.log('error');
      }
    },
    async saveGig({ dispatch }, payload) {
      try {
        await gigService.save(payload.gig)
        dispatch('loadGigs')
      } catch (err) {
        console.log('Couldnt save gig', err)
        commit({
          type: 'setIsError',
          isError: true
        })
      }
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },
  }
}

