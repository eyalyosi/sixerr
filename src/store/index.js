import { createStore } from 'vuex';
import gigStore from './modules/gig.store.js';
import userStore from './modules/user.store.js'
const store = createStore({
    strict: true,
    state: {
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        gigStore,
        userStore,
    },
});

export default store;
