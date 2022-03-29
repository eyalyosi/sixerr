import { gigService } from '../../services/gig.service.js'

export default {
  state: {
    gigs: null,
    filterBy: null,
    categories: gigService.getCategories()
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getGigs({ gigs, filterBy }) {
      if (!filterBy) return gigs
      const gigsDisplay = JSON.parse(JSON.stringify(gigs))
      const regex = new RegExp(filterBy.title, 'i')

      if(filterBy.category) {
        return gigsDisplay?.filter((gig) => gig.category === filterBy.category)
      }

      function isMatchCategory(gig) {
        if (!filterBy.category) return true
        return gig.category === filterBy.category
      }

      function isMatchDelivery(gig) {
        if (!filterBy.delivery) return true
        return gig.daysToMake <= filterBy.delivery
      }

      return gigsDisplay.filter((gig) => isMatchText(gig) && isMatchCategory(gig) && isMatchDelivery(gig));

    },
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
        commit({ type: 'setGigs', gigs })
      } catch {
        console.log('error');
      }
    },
    // loadGigs({ commit, state }) {
    //   gigService.query(state.filterBy).then((gigs) => {
    //     commit({ type: 'setGigs', gigs })
    //   })
    // },
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

