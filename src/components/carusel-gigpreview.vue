<template>
  <div class="image-preview">

  </div>
</template>

<script>
export default {
  name: "carusel-gigpreview",
  props: {
    images: Array,
  },
  components: {},
  computed: {
    gigImg() {
      console.log(gig);
      //   return this.gig.image;
    },
  },
}
</script>
