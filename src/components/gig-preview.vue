<template>
  <li class="gig-preview-box" @click="goToDetail">
    <div class="gig-img-box">
      <img :src="gigImg" alt="gig image" />
    </div>
    <div class="seller-info">
      <img :src="gigSellerImg" alt="seller image" />
      <div class="seller-name-level">
        <div>{{ gig.fullname }}</div>
        <div>{{ gig.level }}</div>
      </div>
    </div>
    <div class="gig-title">{{ gig.title }}</div>
    <div class="gig-rate">
      <p>⭐{{ gigRate }}</p>
      <p>({{ gigReviewersLength }})</p>
    </div>
    <div>
      <span> ❤ </span>
      <div>
        <span>Starting at </span>
        <span>{{ gig.price }}</span>
      </div>
    </div>
  </li>
</template>

<script>
import { gigService } from "../services/gig.service.js";
export default {
  name: "gig-preview",
  props: {
    gig: Object,
  },
  components: {
    gigService,
  },
  computed: {
    gigImg() {
      return this.gig.image;
    },
    gigSellerImg() {
      return this.gig.imgUrl;
    },
    category() {
      return this.gigService.createCatergories();
    },
    gigRate() {
<<<<<<< HEAD
      //   const gig = this.gig;
      //   const rateAvg = [];

      //   const res =
      //     this.gig.reviewers.reduce((a, b) => {
      //       console.log(rate);
      //       const rate = reviewers.rate;
      //         console.log(rate);
      //       b = rate;
      //       a + b;
      //     }, 0) / arr.length;

      //   return res;
      //   const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

      //   average([99, 45, 26, 7, 11, 122, 22]);

      // gig.reviewers.forEach(reviewer => {
      //     reviewer.rate
      // });
=======
      const res =
        this.gig.reviewers.reduce((acc, review) => {
          acc += +review.rate;
          return acc;
        }, 0) / this.gig.reviewers.length;
      return res.toFixed(1);
>>>>>>> f6e495797edaa8be4b3861372a1d6c3ce0da9237
    },
    gigReviewersLength() {
      return this.gig.reviewers.length;
    },
  },
  methods: {
    goToDetail() {
      this.$router.push(`/gig/${this.gig._id}`);
    },
  },
};
</script>
