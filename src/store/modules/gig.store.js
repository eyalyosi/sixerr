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
      console.log(gigs);
      if (!filterBy) return gigs
    //  const filter = JSON.parse(JSON.stringify(filterBy))
      console.log(filterBy);
      if (filterBy === "Data Entry") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "Arts and Crafts") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "Data Entry") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "Marketing") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "Translation") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "Research and Summeries") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "video-explainers") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
      if (filterBy === "write linkedin profile") {
        return gigs.filter((gig) => gig.category = filterBy)
      }
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

