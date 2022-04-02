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
        getMiniUser({ user }) {
            console.log('user', user);
            const { _id, fullname, username } = user
            return { _id, fullname, username }
        },
        loggedinUser({ loggedinUser }) { return loggedinUser },
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users;
        },
        setUser(state, { user }) {
            state.user = user
        }
    },
    actions: {
        async setUser( { commit }, { userId }) {
            const user = await userService.getById(userId)
            commit({type:'setUser', user})
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