<template>
  <section>
    <gig-list :gigs="gigs" />
  </section>
</template>


<script>
import gigList from '../components/gig-list.vue';
export default {
  name: "gig-app",
  data() {
    return {
    };
  },
  methods: {

    computed: {
      gigs() {
        return this.$store.getters.getGigs;
      },

      components: {
        gigList,
      }
    },
  }
}

</script>

