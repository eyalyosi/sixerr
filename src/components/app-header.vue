<template>
  <header class="app-header" :class="{ 'change-color': scrollPosition > 50 }">
    <main class="main-header" ref="nav">
      <div class="logo-and-search">
        <h1 to="/">
          <router-link class="logo" to="/">
            <div class="logo-part">
              <p>
                Sixerr
                <span class="point">.</span>
              </p>
            </div>
          </router-link>
        </h1>
        <form class="search-bar-header hidden" :class="{ 'search-header': scrollPosition > 50 }">
          <div>
            <div class="sticky-search">
              <img src="../assets/logo/magnifying-glass.png" alt />
              <input type="text" value="Try Logo" />
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
          <a href>Explore</a>
        </router-link>
        <router-link to="/order-app">Become A Seller</router-link>
        <router-link to="/">Login</router-link>
        <router-link class="join" to>Join</router-link>
      </nav>
    </main>
  </header>
</template>

<script>
import gigFilter from "./gig-filter.vue";
export default {
  data() {
    return {
      // stickyNav: null,
      // headerObserver: null,
      scrollPosition: null




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
        console.log('isnt home');
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
    gigFilter
  }

}

</script>


