<template>
  <section>
    <hero-cmp />
    <carousel-category
      v-if="categories.length"
      :categories="categories"
      @explore="explore"
      class="main-layout"
    />
    <main-info-cmp />
    <!-- <category-list v-if="categories" :categories="categories" @explore="explore"/> -->
    {{ getUsers }}
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
    return {
      scrollPosition: null,

    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    explore(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;

    },
    // getUsers() {
    // //  return this.$store.getters.users;
    //   const users = this.$store.getters.getUsers;
    //   console.log(users);
    // }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  components: {
    categoryList,
    carouselCategory,
    heroCmp,
    mainInfoCmp,



  },
};
</script>

