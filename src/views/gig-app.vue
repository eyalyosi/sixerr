<template>
  <section>
    <gig-filter @setFilter="setFilter" />
    <gig-list :gigs="gigs" />
    
  </section>
</template>


<script>
import gigList from '../components/gig-list.vue'
import gigFilter from '../components/gig-filter.vue'
import catList from '../components/category-list.vue'
export default {
  name: 'gig-app',
  data() {
    return {
      // filterBy: null,
    };
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'filterBy', filterBy });

    },
    computed: {
      gigs() {
        return this.$store.getters.getGigs;
      }
    },


    components: {
      gigList,
      gigFilter,
      catList
    }


  }
}
</script>

