<!-- <template>
  <div class="img-list-container">
    <div v-html="listHeader"></div>
    <img
      v-for="(imgUrl, idx) in imgUrls"
      :src="imgUrl"
      :key="idx"
      alt="img..."
      @click="setAsAvatar(imgUrl)"
    />
  </div>
</template>

<script>
  export default {
    props: {
      imgUrls: Array,
    },
    computed: {
      listHeader() {
        return this.imgUrls && this.imgUrls.length
          ? '<h2>Images list</h2><h3>Click an image to set as profile picture</h3>'
          : '<h2>No images</h2>';
      },
    },
    methods: {
      setAsAvatar(imgUrl) {
        this.$emit('setAvatar', imgUrl);
        //emit to set the clicked img, then show it in the profile component
      },
    },
  };
</script>

<style>
  .img-list-container {
    margin: 8px;
    /* display: flex; */
    /* flex-wrap: wrap; */
  }
  .img-list-container img {
    height: 100px;
    margin-inline-end: 4px;
  }
</style> -->
