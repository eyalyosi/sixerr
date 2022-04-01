<template>
  <section class="main-layout">
    <div class="user-profile-main-content">
      <div class="user-profile-info-card">
        <div class="user-profile-img-card">
          <user-avatar />

          <!-- <img-upload @save="saveImg" /> -->
          <!-- <img-list :imgUrls="imgUrls" @setAvatar="setAvatar" /> -->
          <!-- img-list render the imgs -->

          <!-- user-avatar show the clicked img as profile -->
        </div>
        <div class="username-name">{{ username }}</div>
        <div class="edit-profile">
          <img
            src="../img/240_F_92207930_yYUGJ54mCXRFs5RyydyrmdayYOQ58ZWx.jpg"
            alt=""
          />
        </div>
        <div class="user-from-member">
          <div class="user-from">
            <div>
              <img class="from-img" src="https://cdn-icons.flaticon.com/png/512/2794/premium/2794650.png?token=exp=1648811150~hmac=c3b7755fb31fe4983f217b158f59ec45" alt="" />
              <span >From</span>
            </div>
            <div class="from-font">Israel</div>
          </div>
          <div class="user-member">
            <div>
              <img class="user-img-info" src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="" />
              <span>Member since</span>
            </div>
            <div class="from-font">Apr 2022</div>
          </div>
        </div>
      </div>
      <div class="user-orders">
        <button>Create New Gig</button>
      </div>
    </div>
  </section>
</template>

<script>
import userAvatar from "../components/user-avatar.vue";
export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {},
  created() {},
  computed: {
    username() {
      const userName = this.$store.getters.loggedinUser.username;
      const cpitalUserName =
        userName.charAt(0).toUpperCase() + userName.slice(1);
      return cpitalUserName;
    },
  },
  components: {
    userAvatar,
  },
};
</script>

<style></style>
