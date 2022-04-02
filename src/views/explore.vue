<template>
  <section >
    <explore-filter v-if="gigs " @setFilter="setFilter" />
    <gig-list v-if="gigs && gigs.length" :gigs="gigs" />
    <p v-else class="user-msg-explore">No Gigs maching your search, try clearing filters</p>
  </section>
</template>
<script>
import gigList from "../components/gig-list.vue";
import exploreFilter from "../components/explore-filter.vue";
export default {
  name: "explore",
  data() {
    return {};
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    },

  },
  watch: {
    getFilterBy: {
      handler() {
        this.$store.dispatch("loadGigs");
      },
      deep: true,
    },
  },
  created() {
    // location.reload();


  },
  components: {
    gigList,
    exploreFilter,
  },
};
</script>
