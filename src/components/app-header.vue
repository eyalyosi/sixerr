<template>
  <header>
    <main class="main-header" ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }">
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
        <!-- <gig-filter @setFilter="setFilter" /> -->
      </div>
      <nav class="nav">
        <router-link to="/explore">
          <a href>Explore</a>
        </router-link>
        <router-link to>Become A Seller</router-link>
        <router-link to="/">Login</router-link>
        <router-link class="join" to>Join</router-link>
      </nav>
    </main>
  </header>
</template>

<script>
// import gigFilter from "./gig-filter.vue";
export default {
  data() {
    return {
      stickyNav: null,
      headerObserver: null,



    }
  },

  methods: {
    // setFilter(filterBy) {
    //   this.$store.dispatch({ type: "setFilter", filterBy });
    // },
    onHeaderObserved(entries) {
      entries.forEach((entry) => {
        this.stickyNav = entry.isIntersecting ? false : true;
      });
    },
  },

  mounted() {
    this.headerObserver = new IntersectionObserver(this.onHeaderObserved, {
      rootMargin: "-91px 0px 0px",
    });
    this.headerObserver.observe(this.$refs.header);
  },

  components: {
  }

}

</script>
