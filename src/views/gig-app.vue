<template>
  <section>
    <category-list v-if="categories" :categories="categories" />
    <gig-list v-if="gigs" :gigs="gigs" />
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
  methods: {},
  computed: {
    gigs() {
      return this.$store.getters.getGigs;

    },
    categories() {
      return this.$store.getters.getCategories;

    },
  },
  components: {
    gigList,
    categoryList,
  },
};
</script>
