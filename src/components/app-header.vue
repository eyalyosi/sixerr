<template>
  <header
    class="app-header full"
    :class="{ 'change-color': scrollPosition > 50 }"
  >
    <main class="main-header" ref="nav">
      <div class="main-layout header-flex">
        <div class="logo-and-search">
          <h1 to="/">
            <router-link class="logo" to="/">
              <div class="logo-part">
                <p :class="$route.meta.logoClass">
                  Sixerr
                  <span class="point">.</span>
                </p>
              </div>
            </router-link>
          </h1>
          <gig-filter-header @setFilter="setFilter"></gig-filter-header>
        </div>
        <nav class="nav">
          <p @click="showAllCategories" class="explore">Explore</p>
          <router-link :class="$route.meta.logoClass" to="/order-app"
            >Become A Seller</router-link
          >
          <a :class="$route.meta.logoClass">Login</a>

          <a @click="toggleLogin" :class="$route.meta.logoClass">Sign in</a>
          <a @click="toggleSignup" class="join">Join</a>
          <div class="login-modal" v-if="!isLogin">
            <login v-on="(close = false)" />
          </div>
          <div class="signup-modal" v-if="!isSignUp">
            <signup />
          </div>
        </nav>
      </div>
    </main>
  </header>
</template>

<script>
import gigFilter from "./gig-filter.vue";
import login from "./login.vue";
import signup from "./signup.vue";
import gigFilterHeader from "./gig.filter.header.vue";

export default {
  data() {
    return {
      // stickyNav: null,
      // headerObserver: null,
      scrollPosition: null,
      isSignUp: true,
      isLogin: true,
      filterBy: {
        category: "",
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    setFilter(filterBy) {
      console.log("filterBy:", filterBy);
      this.$emit("setFilter", { ...filterBy });
      this.$store.dispatch({ type: "setFilter", filterBy });
      this.$router.push("/explore");
    },

    showAllCategories() {
      this.setFilter("");
      console.log("route:", this.$route);
      if (this.$route.path === "/explore") return;
      this.$router.push("/explore");
    },

    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
    toggleSignup() {
      this.isSignUp = !this.isSignUp;
    },

    updateScroll() {
      if (!this.isHome) {
        return;
      }
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
  },
  watch: {
    isHome: {
      handler() {
        if(!this.isHome) this.scrollPosition = 0
      }
    }
  },

  components: {
    gigFilter,
    login,
    signup,
    gigFilterHeader,
  },
};
</script>


<style>
.explore {
  cursor: pointer;
}
</style>