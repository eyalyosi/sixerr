<template>
  <header>
    <main class="main-header">
      <div class="logo-and-search">
        <h1 to="/">
          <router-link class="logo" to="/">
            <div class="logo-part">
             <p>Sixerr<span class="point">.</span></p> 
            </div>
          </router-link>
        </h1>
        <gig-filter @setFilter="setFilter" />
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
import gigFilter from "./gig-filter.vue";
export default {
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
  components: {
    gigFilter,
  },
};
</script>
