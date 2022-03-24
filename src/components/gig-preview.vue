<template>
  <div class="gig-preview flex">
    <article class="gig-preview-box" @click="goToDetail">
      <div class="gig-img-box">
        <!-- <carusel-gigpreview :images="images"></carusel-gigpreview> -->
        <img :src="images" alt="" />
      </div>
      <!-- {{images}} -->
      <section class="preview-card">
        <div class="seller-info flex">
          <img :src="gigSellerImg" alt="seller image" />
          <span class="seller-name-level">
            <div class="seller-name flex flex-start">
              {{ gig.owner.fullname }}
            </div>
            <div class="seller-level">Level {{ gig.owner.level }} Seller</div>
          </span>
        </div>
      </section>

      <div class="gig-title">{{ gig.title }}</div>
      <div class="gig-rate flex">
        <p class="rating">⭐{{ gigRate }}</p>
        <p class="rating-length">({{ gigReviewersLength }})</p>
      </div>
      <section class="footer-preview flex space-between">
        <span class="like">❤</span>
        <div class="price flex column">
          <small class="small">Starting at</small>
          <span>{{ gig.price }}</span>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import { gigService } from "../services/gig.service.js";
import caruselGigpreview from "../components/carusel-gigpreview.vue";
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    gigService,
    caruselGigpreview,
  },
  computed: {
    gigImg() {
      return this.gig.image;
    },
    gigSellerImg() {
      return this.gig.owner.imgUrl;
    },
    category() {
      return this.gigService.createCatergories();
    },
    images() {
      return this.gig.image[0];
      // return this.gig.image;
    },
    gigRate() {
      // const res =
      //   this.gig.reviewers.reduce((acc, review) => {
      //     acc += +review.rate;
      //     return acc;
      //   }, 0) / this.gig.reviewers.length;
      // return res.toFixed(1);
    },
    gigReviewersLength() {
      // return this.gig.reviewers.length;
    },
  },
  methods: {
    goToDetail() {
      this.$router.push(`/gig/${this.gig._id}`);
    },
  },
};
</script>
