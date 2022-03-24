
<template>
  <div>
    <!-- <vueper-slides>
      <vueper-slide v-for="image in images" :key="image" :title="slide.title" :content="slide.content"/>
      <img :src="image" alt="">
    </vueper-slides> -->

  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  props: ["images"],
  data() {
    return {
      slides: [
        {
          title: 'Slide #1',
          content: 'Slide content.'
        }
      ]
    }
  },
  created() {
    console.log(this.images);
  },
  components: {
    VueperSlides,
    VueperSlide,

  },
  methods: {

  }
}


</script>

<style scoped>
.el-carousel-item {
  display: flex;
}
img {
  width: 20px;
}
</style>







      