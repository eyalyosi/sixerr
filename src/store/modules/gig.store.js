import { gigService } from '../../services/gig.service.js'

export default {
  state: {
    gigs: null,
    filterBy: { title: '', catergory: '', delivery: '', level: '' },
    categories: gigService.getCategories()
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getGigs(state) {

      if (state.filterBy.title) {
        return state.gigs.filter(gig => gig.title.includes(state.filterBy.title))
      }

      if (state.filterBy.category) {
        return state.gigs.filter(gig => gig.category === state.filterBy.category)
      }

      if(state.filterBy.delivery) {
        return state.gigs.filter(gig => gig.daysToMake === state.filterBy.delivery)
      }
      if(state.filterBy.level) {
        console.log(state.filterBy);
        return state.gigs.filter(gig => gig.owner.level === state.filterBy.level)
      }

      return state.gigs

    },
    // getFilterBy(state) {
    //   return state.filterBy
    // }
  },
  mutations: {
    setGigs(state, { gigs }) {
      state.gigs = gigs;
    },
    setFilter(state, { filterBy }) {
      console.log('filter:', filterBy);
      state.filterBy= filterBy

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
        console.log(gigs);
        commit({ type: 'setGigs', gigs })
      } catch {
        console.log('error');
      }
    },

    async saveGig({ dispatch }, payload) {
      try {
        await toyService.save(payload.gig)
        dispatch('loadGigs')
      } catch (err) {
        console.log('Couldnt save gig', err)
        commit({
          type: 'setIsError',
          isError: true
        })
      }
    },
    //   saveGig({ commit, dispatch }, { gig }) {
    //     gigService.save(gig).then((gig) => {
    //         commit({ type: 'saveGig', gig })
    //     })
    // },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },
  }
}

