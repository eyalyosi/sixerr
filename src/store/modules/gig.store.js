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

      if(filterBy.category) {
        return gigsDisplay?.filter((gig) => gig.category === filterBy.category)
      }

      // if (filterBy.category === "Data Entry") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy.category)
      // }
      // if (filterBy.category === "Arts and Crafts") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Marketing") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Translation") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Research and Summeries") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Write & Translation") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Video explainers") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
      // if (filterBy.category === "Logo design") {
      //   return gigsDisplay.filter((gig) => gig.category === filterBy)
      // }
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

