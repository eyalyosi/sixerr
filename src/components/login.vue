<template>
    <section class="login section">
        <!-- <div class="logout-container" v-if="loggedinUser"> -->
        <!-- <button @click="logout">Logout</button> -->
        <!-- </div> -->
        <div class="login-container" v-if="!loggedinUser && !isSignUp">
            <h3>Sign In to Sixerr</h3>
            <form @submit.prevent="login" class="login-details">
                <input type="text" v-model="username" placeholder="Enter username" />
                <input type="text" v-model="password" placeholder="Enter password" />
                <button>Continue</button>
            </form>
            <div class="login-footer flex">
                <p>Not a member yet?</p>
                <a href>Join Now</a>
            </div>
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
