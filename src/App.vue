<template>
  <div
    @click="toggleScreen('addClass', 'modal-open')"
    class="main-screen"
    :class="{ 'modal-open': isScreen }"
  ></div>
  <section>
    <app-header :class="$route.meta.headerClass" @toggleScreen="toggleScreen" />

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
      isScreen: false

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
    toggleScreen(addRemoveClass, className) {
      const el = document.body;
      this.isScreen = !this.isScreen;
      if (addRemoveClass === 'addClass') {
        el.classList.add('modal-open');
      } else {
        el.classList.remove(className);
      }
    }
  },




  mounted() {

  },

}

</script>