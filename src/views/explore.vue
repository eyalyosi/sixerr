<template>
  <section>
    <explore-filter @setFilter="setFilter" />
    <gig-list v-if="gigs" :gigs="gigs" />
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
      console.log(filterBy);
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },
  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    },
  },
  created() {

    // if (!category) {
    //   console.log('sddsf');
    // }
    // // console.log();
    // const filterBy = {}
    // // console.log(filterBy);
    this.$store.dispatch({ type: "setFilter", filterBy: {} });
  },
  components: {
    gigList,
    exploreFilter,
  },
};
</script>
