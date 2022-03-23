<template>
  <section>
    <category-list v-if="categories" :categories="categories" @explore="explore"/>
    
  </section>
</template>

<script>

import categoryList from "../components/category-list.vue";

export default {
  name: "gig-app",
  data() {
    return {};
  },
  methods: {
    explore(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;

    },
  },
  components: {
    categoryList
  },
};
</script>
