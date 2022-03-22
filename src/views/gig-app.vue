<template>
  <section>
    <gig-filter />
    <gig-list />
  </section>
</template>


<script>
import gigList from '../components/gig-list.vue'
import gigFilter from '../components/gig-filter.vue'
export default {
  name: 'gig-app',
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    gigs() {
      return this.$store.getters.getGigs;
    }
  },
  components: {
    gigList,
    gigFilter,
  }


}
</script>

