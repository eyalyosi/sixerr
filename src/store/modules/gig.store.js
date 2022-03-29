import { gigService } from '../../services/gig.service.js'

export default {
  state: {
    gigs: null,
    filterBy: null,
    categories: gigService.createCatergories()
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getGigs({ gigs, filterBy }) {
      // console.log(filterBy.delivery);
      if (!filterBy) return gigs
      const gigsDisplay = JSON.parse(JSON.stringify(gigs))
      const regex = new RegExp(filterBy.title, 'i')

      function isMatchText(gig) {
        if (!filterBy.txt) return true
        return regex.test(gig.title)
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
    saveToy(state, { gig }) {
      const idx = state.gigs.findIndex((currGig) => currGig._id === gig._id)
      if (idx !== -1) state.gigs.splice(idx, 1, gig)
      else state.gigs.push(gig)
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
    saveToy({ commit, dispatch }, { gig }) {
      gigService.save(gig).then((gig) => {
        commit({ type: 'saveGig', gig })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadGigs' })
    },
  }
}

