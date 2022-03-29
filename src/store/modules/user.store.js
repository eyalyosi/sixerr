import { userService } from "../../services/user.service"
export default {
    state: {
        users: null,
        user: null
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    },
    mutations: {
        setUsers(state, { users }) {
            state.users = users;
        },
    },
    actions: {
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