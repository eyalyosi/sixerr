<template>
  <hero-cmp />
  <section >
    <carousel-category v-if="categories.length" :categories="categories" @explore="explore" />
    <main-info-cmp />
    <!-- <category-list v-if="categories" :categories="categories" @explore="explore"/> -->
  </section>
</template>

<script>

import categoryList from "../components/category-list.vue";
import carouselCategory from "../components/carousel-category.vue";
import heroCmp from "../components/hero-cmp.vue";
import mainInfoCmp from '../components/main-info-cmp.vue'

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
    categoryList,
    carouselCategory,
    heroCmp,
    mainInfoCmp

  },
};
</script>
