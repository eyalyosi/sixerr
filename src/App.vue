<template>
<<<<<<< HEAD
    <!-- //OFIR, I COMMENT THE HEADER FUNCTION UP BECAUSE I COULDNT 
    //SEE WHAT IM RENDERING, OR-->
    <!-- <app-header class="app-header" :class="{ change_color: scrollPosition > 50 }" /> -->
    <app-header class="app-header" />
    <router-view />
=======
  <section>
    <app-header :class="$route.meta.headerClass" />

    <div>
      <router-view />
    </div>
>>>>>>> 060c98fc050c8d410c81626aaf116614a6458750
    <app-footer />
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