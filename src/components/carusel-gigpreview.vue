<template>
  <div class="image-preview">
    <!-- <el-carousel indicator-position="none"> -->
    <!-- <el-carousel-item v-for="image in images" :key="item"> -->
    <!-- <el-carousel-item v-for="image in images" :key="item">
    <img src="image" alt="" />-->
    <!-- {{image}} -->
    <!-- </el-carousel-item> -->
    <!-- </el-carousel> -->
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
