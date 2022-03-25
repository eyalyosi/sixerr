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
      if (!filterBy) return gigs
      const gigsDisplay = JSON.parse(JSON.stringify(gigs))
      if (filterBy === "Data Entry") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Arts and Crafts") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Marketing") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Translation") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Research and Summeries") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Write & Translation") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Video explainers") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      if (filterBy === "Logo design") {
        return gigsDisplay.filter((gig) => gig.category === filterBy)
      }
      const regex = new RegExp(filterBy.title, 'i')
      return gigsDisplay.filter((gig) => regex.test(gig.title))
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

