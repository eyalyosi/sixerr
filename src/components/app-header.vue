<template>
  <header class="app-header full" :class="{ 'change-color': scrollPosition > 50 }">
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
          <form class="search-bar-header" :class="{ 'search-header': scrollPosition > 100 }">
            <div>
              <div class="sticky-search">
                <img src="../assets/logo/magnifying-glass.png" alt />
                <input type="text" value="Find Services" />
                <button class="search-header-btn">Search</button>
              </div>
            </div>
          </form>
          <!-- <gig-filter
          @setFilter="setFilter"
          class="hidden"
          :class="{ 'search-header-box': scrollPosition > 50 }"
          />-->
        </div>
        <nav class="nav">
          <router-link to="/explore">
            <a :class="$route.meta.logoClass" href>Explore</a>
          </router-link>
          <router-link :class="$route.meta.logoClass" to="/order-app">Become A Seller</router-link>
          <a :class="$route.meta.logoClass">Sign in</a>
          <a class="join">Join</a>
          <div class="login-modal" v-if="login">
            <!-- <login /> -->
          </div>
          <div class="signup-modal" v-if="signup">
            <!-- <signup /> -->
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
export default {
  data() {
    return {
      // stickyNav: null,
      // headerObserver: null,
      scrollPosition: null,
      login: true,
      signup: true,
      isSignUp: false




    }
  },
  created() {
    window.addEventListener('scroll', this.updateScroll);

  },

  methods: {
    // setFilter(filterBy) {
    //   this.$store.dispatch({ type: "setFilter", filterBy });
    // },
    // onHeaderObserved(entries) {
    //   entries.forEach((entry) => {
    //     this.stickyNav = entry.isIntersecting ? false : true;
    //   });
    // },



    updateScroll() {
      if (!this.isHome) {
        // console.log('isnt home');
        return
      }
      this.scrollPosition = window.scrollY
      // console.log(this.scrollPosition);
    },

  },



  mounted() {
    // this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
    //   rootMargin: "-91px 0px 0px",
    // });
    // this.headerObserver.observe(this.$refs.header);
    window.addEventListener('scroll', this.updateScroll);
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    }
  },
  // watch: {
  //   '$route.path': {
  //     immediate: true,
  //     handler() {
  //       console.log(this.$route.path);
  //       this.scrollPosition > 50

  //     }

  //   },

  // },

  components: {
    gigFilter,
    login,
    signup
  }

}

</script>


<style>
</style>