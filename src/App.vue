<template>
<<<<<<< HEAD
  <!-- <section> -->

    <!-- //OFIR, I COMMENT THE HEADER FUNCTION UP BECAUSE I COULDNT 
//SEE WHAT IM RENDERING, OR -->
    <!-- <app-header class="app-header" :class="{ change_color: scrollPosition > 50 }" /> -->
    <app-header class="app-header"/>
    <div>
=======
  <section class="main-section">
    <app-header :class="$route.meta.headerClass" />

    <div class="main-content-container">
>>>>>>> ab6c45e58c6e879049f1a041ca570be3d3f2d6ea
      <router-view />
    </div>
    <app-footer />
  <!-- </section> -->
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";

export default {
  name: "App",
  data() {
    return {

    };
  },
  created() {
    this.$store.dispatch({ type: "loadGigs" });
  },
  components: {
    appHeader,
    appFooter,
  },
  computed: {},
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
}
</script>