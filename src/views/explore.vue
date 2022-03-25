<template>
  <section class="main-layout">
    <gig-list v-if="gigs" :gigs="gigs" />
  </section>
</template>
<script>
import gigList from "../components/gig-list.vue";
export default {
  name: "explore",
  data() {
    return {};
  },
  methods: {},
  computed: {
    gigs() {
      return this.$store.getters.getGigs;
      //   const x = this.$store.getters.getGigs;
      //   console.log(x);
    },
  },
  components: {
    gigList,
  },
};
</script>
