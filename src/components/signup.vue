<template>
    <button @click="isSignUp = !isSignUp" v-if="!loggedinUser"></button>
    <div class="sign-up-container" v-if="!loggedinUser && isSignUp">
        <h3>Join Sixerr</h3>
        <form @submit.prevent="signup" class="signup-details">
            <input type="text" v-model="fullname" placeholder="Enter fullname" />
            <input type="text" v-model="username" placeholder="Enter username" />
            <input type="text" v-model="password" placeholder="Enter password" />
            <button>Continue</button>
            <h4>By joining I agree to receive emails from Sixerr.</h4>
        </form>
    </div>
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
            isSignUp: false,
        }
    },
    methods: {
        signup() {
            userService.signup(this.fullname, this.username, this.password).then((user) => (this.loggedinUser = user))
        },


    }

}
</script>
