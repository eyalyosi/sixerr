<template>
    <section class="login section">
        <div class="logout-container" v-if="loggedinUser">
            <h2>Hello {{ loggedinUser.fullname }}</h2>
            <button @click="logout">Logout</button>
        </div>
        <div class="login-container" v-if="!loggedinUser && !isSignUp">
            <h3>Login</h3>
            <form @submit.prevent="login" class="login-details">
                <input type="text" v-model="username" placeholder="Enter username" />
                <input type="text" v-model="password" placeholder="Enter password" />
                <button>Login</button>
            </form>
        </div>
    </section>
</template>
<script>

import { userService } from "../services/user.service.js"
export default {
    data() {
        return {
            nickname: '',
            username: '',
            password: '',
            fullname: '',
            loggedinUser: userService.getLoggedinUser(),

        }
    },
    methods: {
        login() {
            userService.login(this.username, this.password).then((user) => (this.loggedinUser = user))
        },

        logout() {
            userService.logout().then(() => (this.loggedinUser = null))
        },
    },
    computed: {
        //     signUpBtnText() {
        //         if (this.isSignUp) return 'Back'
        //         else return 'Sign up'
        //     },
        // },
    }
}

</script>
