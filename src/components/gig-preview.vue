<template>
  <duv class="gig-preview">
    <article class="gig-preview-box" @click="goToDetail">
      {{ gig.category }}
      <div class="gig-img-box">
        <img :src="gigImg" alt="gig image" />
      </div>
      <section class="preview-card">
        <div class="seller-info">
          <img :src="gigSellerImg" alt="seller image" />
          <span class="seller-name-level">
            <div class="seller-name">{{ gig.owner.fullname }}</div>
            <div>Level {{ gig.owner.level }} Seller</div>
          </span>
        </div>
      </section>

      <div class="gig-title">{{ gig.title }}</div>
      <div class="gig-rate">
        <p class="rating">⭐{{ gigRate }}</p>
        <p>({{ gigReviewersLength }})</p>
      </div>
      <section class="footer-preview flex">
        <span>❤</span>
        <div>
          <small class="small">Starting at</small>
          <span>{{ gig.price }}</span>
        </div>
      </section>
    </article>
  </duv>
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
      return this.gig.owner.imgUrl;
    },
    category() {
      return this.gigService.createCatergories();
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
