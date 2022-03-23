<template>
  <section v-if="gig">
    <h1>{{ gig.title }}</h1>
    <div class="seller-info-details">
      <img :src="gigSellerImg" alt="seller image" />
      <div>{{ gig.owner.fullname }}</div>
      <div>{{ gig.owner.level }}</div>
    </div>
    <div class="gig-rate-details">
      <p>⭐{{ gig.owner.rate }}</p>
      <!-- <p>({{ gigReviewersLength }})</p> -->
      {{gig.about}}
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig.service.js";

export default {
  name: "gig-detail",
  data() {
    return {
      gig: null,
    };
  },
  created() {
    const id = this.$route.params.gigId;
    gigService.getById(id).then((gig) => {
      this.gig = gig;
    });
  },
  methods: {},
  computed: {
    gigSellerImg() {
      return this.gig.imgUrl;
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
  components: {},
};
</script>
