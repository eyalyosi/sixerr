<template>
  <div class="hero-section">
    <div class="hero-img">
      <img :src="image" alt="hero image" />
    </div>
    <div class="hero-box">
      <div class="hero-container main-layout flex space-between">
        <div class="hero-content">
          <h1>
            Find the perfect
            <span>freelance</span>
            <br />services for your business
          </h1>

          <gig-filter @setFilter="setFilter" />
          <div class="popular-categories">
            <p>Popular:</p>
            <span>
              <a>Website Design</a>
            </span>
            <span>
              <a>Wordpress</a>
            </span>
            <span>
              <a>Logo Design</a>
            </span>
            <span>
              <a>Music</a>
            </span>
          </div>
        </div>
        <div class="seller-star-name-box">
          <div class="seller-star-name">
            <p class="stars-hero">⭐⭐⭐⭐⭐</p>
            <p class="seller-name-hero">{{ sellerName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gigFilter from "./gig-filter.vue";
export default {
  data() {
    return {
      images: [
        "src/img/hero11.jpg",
        "src/img/hero12.jpg",
        "src/img/hero13.jpg",
        "src/img/hero14.jpg",
        "src/img/hero15.jpg",
        "src/img/hero16.jpg",
        "src/img/hero10.jpg",
      ],
      image: "src/img/hero10.jpg",
      sellerNames: [
        "Andrea, Fashion Designer",
        "Suzan, Bar Owner",
        "James, Marketing Expert",
        "Suzanne, Full Stack Developer",
        "Christian, Podcast Editor",
        "Pamela, Project Manager",
        "Shiva, Video Editor",
      ],
      sellerName: "Shiva, Video Editor",
    };
  },

  methods: {
    setImage() {
      var i = 0;
      const that = this;
      setInterval(function () {
        that.image = that.images[i];
        i = i + 1;
        if (i === that.images.length) {
          i = 0;
        }
      }, 5000);
    },
    setSellerName() {
      var i = 0;
      const that = this;
      setInterval(function () {
        that.sellerName = that.sellerNames[i];
        i = i + 1;
        if (i === that.sellerNames.length) {
          i = 0;
        }
      }, 5000);
    },
    setFilter(filterBy) {
      this.$store.dispatch({ type: "setFilter", filterBy });
    },
  },

  computed: {},
  created() {
    this.setImage();
    this.setSellerName();
  },
  components: {
    gigFilter,
  },
};
</script>
