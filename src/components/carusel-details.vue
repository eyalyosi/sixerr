
<template>
  <div>


  </div>
</template>

<script>


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







      