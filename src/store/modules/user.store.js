import { userService } from "../../services/user.service"
export default {
    state: {
        users: null,
        user: null,
        loggedinUser: userService.getLoggedinUser(),
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        loggedinUser({ loggedinUser }) { return loggedinUser },
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users;
        },
        setLoggedinUser(state, { user }) {
            // state.loggedinUser = user
            state.loggedinUser = (user) ? { ...user } : null;
        },
    },
    actions: {
        async login({ commit }, { cred }) {
            const user = await userService.login(cred)
            commit({ type: 'setLoggedinUser', user })
        },
        async signup({ commit }, { userCred }) {
            try {
                const user = await userService.signup(userCred)
                commit({ type: 'setLoggedinUser', user })
                return user;
            } catch (err) {
                console.log('userStore: Error in signup', err)
                throw err
            }
        },
        async loadUsers({ commit, state }) {
            try {
                const users = await userService.query()
                console.log('users:', users);
                commit({ type: 'setUsers', users })
            } catch {
                console.log('error');
            }
        },
        async logout({ commit }) {
            try {
                await userService.logout()
                commit({ type: 'setLoggedinUser', user: null })
            } catch (err) {
                console.log('userStore: Error in logout', err)
                throw err
            }
        },
    }
}