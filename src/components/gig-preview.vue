<template>
  <li class="gig-preview-box">
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
    <div class="gig-title">
      {{ gig.title }}
    </div>
    <div class="gig-rate">
      <p>{{ gigRate }}</p>
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
      // console.log(this.gig.reviewers);
      //     const gig = this.gig;
      //     const rateAvg = [];

      //   const res =
      //     this.gig.reviewers.reduce((a, b) => {
      //     //   console.log(+rate);
      //       const rate = this.gig.reviewers.rate;
      //       console.log(rate);
      //       b = rate;
      //       a + b;
      //     }, 0) / this.gig.reviewers.length;

      //   return res;
      //     const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

      //     average([99, 45, 26, 7, 11, 122, 22]);
      var res = 0;

      var rates = this.gig.reviewers.map((reviewer) => {
        //   console.log(reviewer.rate);
        reviewer.rate;
      });
      console.log(rates);

    //   const averageBy = (arr, fn) =>
    //     arr
    //       .map(typeof fn === "function" ? fn : (val) => val[fn])
    //       .reduce((acc, val) => acc + val, 0) / arr.length;

      //   this.gig.reviewers.forEach((reviewer) => {
      //     var rate = +reviewer.rate;

      //     console.log(typeof rate);

      //     res += rate;
      //     console.log(res);
      //     var avg = res / this.gig.reviewers.length;
      //     console.log(avg);
      //     return avg;
      //     //   reviewer.rate
      //   });
    },
    gigReviewersLength() {
      return this.gig.reviewers.length;
    },
    methods: {},
  },
};
</script>
