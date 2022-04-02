import { userService } from "../../services/user.service"
export default {
    state: {
        users: null,
        user: null
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getMiniUser({ user }) {
            console.log('user', user);
            const { _id, fullname, username } = user
            return { _id, fullname, username }
        }
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
        // loadUsers({ commit, state }) {
        //     userService.query().then((users) => {
        //         commit({ type: 'setUsers', users })
        //     })
        // },
    }
}