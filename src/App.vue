<template>
  <section class="main-section">
    <app-header :class="$route.meta.headerClass" />

    <div class="main-content-container">
      <router-view />
    </div>
    <app-footer />
  </section>
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