<template>
  <header>
    <!-- <img class="bg-img" src="https://ninerr.herokuapp.com/static/media/28-9-4.9d5e2f7a99fd2b32073a.jpg" alt=""> -->
    <!-- <h1 to="/">Sixerr<span class="point">.</span></h1> -->
    <h1 to="/">
      <router-link to="/">
        Sixerr
        <span class="point">.</span>
      </router-link>
    </h1>
    <gig-filter @setFilter="setFilter" />
    <nav class="nav">
      <router-link to="/explore">
        <a href>Explore</a>
      </router-link>
      <router-link to>Become A Seller</router-link>
      <router-link to="/">Login</router-link>
      <router-link class="join" to>Join</router-link>
    </nav>
  </header>
</template>

<script>
import gigFilter from "./gig-filter.vue";
export default {
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: "filterBy", filterBy });
    },
  },
  components: {
    gigFilter,
  },
};
</script>
