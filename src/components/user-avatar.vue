<template>
  <div>
    <label class="user-avatar-container" for="imgUploader">
      <input
        type="file"
        name="img-uploader"
        id="imgUploader"
        @change="handleFile"
      />

      <img v-if="userAvatar" :src="userAvatar" alt="" />
      <img v-else src="../img/portrait.png" alt="" />
    </label>
    <el-avatar :src="loggedInUser.img" class="user-avatar-info">
      {{ defaultProfilePicture }}
    </el-avatar>
  </div>

  <!-- 
  <div class="user-avatar-container">
    <h2>Profile picture</h2>
    <img v-if="imgUrl" :src="imgUrl" alt="" />
    <img v-else src="../img/portrait.png" alt="" />
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      user: null,
      userAvatar: null,
    };
  },
  methods: {
    handleFile(event) {
      let imgFile;
      imgFile = event.target.files[0];
      console.log(imgFile.name);
      this.userAvatar = imgFile.name;
      console.log(typeof this.userAvatar);
    },
  },
  computed: {
    defaultProfilePicture() {
      const username = this.$store.getters.loggedinUser.username;
      return username.charAt(0).toUpperCase();
    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
