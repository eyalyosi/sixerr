<template>
  <li>
    <img :src="category" alt />
    <p>{{ gig.price }}</p>
    <p>{{ gig.fullname }}</p>
  </li>
</template>

<script>
import { gigService } from "../services/gig.service.js"
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    gigService

  },
  computed: {
    gigImg() {
      return this.gig.image
    },
    category() {
      console.log(this.gigs);
      // return this.gigService.createCatergories()
    },
    methods: {
    },

  }

}
</script>
