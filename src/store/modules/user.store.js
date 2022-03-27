import { userService } from "../../services/user.service"
export default {
    state: {
        users: [],
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
        loadUsers({ commit, state }) {
            userService.query().then((users) => {
                commit({ type: 'setUsers', users })
            })
        },
    }
}