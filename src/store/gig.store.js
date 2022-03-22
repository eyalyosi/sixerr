// import { toyService } from '../services/toy.service.js';

export default {
  state: {
    toys: null,
  },
  getters: {
    // getToys(state) {
    //   return state.toys;
    // },
    // getLabels(state) {
    //   return state.labels;
    // },
    // isLoading(state) {
    //   return state.isLoading
    // },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
  },
  actions: {
  }
};
