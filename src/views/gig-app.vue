<template>
  <section>
    <gig-list :gigs="gigs" />
    <category-list />
  </section>
</template>

<script>
import gigList from "../components/gig-list.vue";
import categoryList from "../components/category-list.vue";
export default {
  name: "gig-app",
  data() {
    return {};
  },
  methods: {
    computed: {
      gigs() {
        return this.$store.getters.getGigs;
      },

      components: {
        gigList,
        categoryList,
      },
    },
  },
};
</script>
