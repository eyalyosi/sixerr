<template>
  <section>
    <app-header />
    <hero-cmp />

    <div class="main-layout">
      <router-view />
    </div>
    <app-footer />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";
import appFooter from "./components/app-footer.vue";
import heroCmp from "./components/hero-cmp.vue";

export default {
  name: "App",
  created() {
    this.$store.dispatch({ type: "loadGigs" });
  },
  components: {
    appHeader,
    appFooter,
    heroCmp

  },
  computed: {},
  methods: {
  },
};
</script>
