<template>
  <section v-if="gig" class="gig-page main-layout">
    <div class="info-side">
      <div class="details-title-info">
        <h1>{{ gig.title }}</h1>
        <div class="seller-info">
          <div class="profile-img">
            <img :src="gigSellerImg" alt="seller image" class="seller-img" />
          </div>
          <p class="owner-name">{{ gig.owner.fullname }}</p>
          <p>Level {{ gig.owner.level }} Seller</p>
          |
          <div v-if="gig.owner.rate">
 
            <p>({{ getStars }})</p>
          </div>
          <!-- <img
            src="https://cdn.iconscout.com/icon/free/png-256/star-bookmark-favorite-shape-rank-16-28621.png"
            alt=""
          /> -->
        </div>
      </div>
      <carusel-details :images="images"></carusel-details>
      <!-- <div class="carusel-img" v-for="image in images" :key="gig.image">
      <img :src="image" />-->
      <div>
        <!-- <carusel-details :images="images"></carusel-details> -->
      </div>
      <div class="reviews">
        <p>What people loved about this seller</p>
        <a href>See all reviews</a>
      </div>
      <caruser-details-review :user="currUser" v-if="currUser" />
      <div class="about-gig">
        <p class="about-title">About This Gig</p>
        <p class="about-text">{{ gig.about }}</p>
      </div>
      <p class="about-title">About The Seller</p>

      <div class="about-seller">
        <div class="seller-profile">
          <div class="profile-img-about">
            <img :src="gigSellerImg" alt="seller image" class="seller-img" />
          </div>
        </div>
        <div class="rate-profile">
          <p>{{ gig.owner.fullname }}</p>
          <p>({{ getStars }})</p>
          <button class="contact-me-btn">Contact Me</button>
        </div>
      </div>
      <div class="seller-info-details">
        <div class="info-table">
          <ul>
            <li>
              From
              <br />
              <b>{{ gig.loc }}</b>
            </li>
            <li>
              Avg. response time
              <br />
              <b>{{ gig.avgResponceTime }}</b>
            </li>
            <li>
              Member since
              <br />
              <b>{{ gig.avgResponceTime }}</b>
            </li>
            <li>
              Last delivery
              <br />
              <b>{{ gig.lastDelivery }}</b>
            </li>
          </ul>
        </div>
        <div class="seller-description">{{ gig.description }}</div>
      </div>
      <progress-bar-details :user="currUser" v-if="currUser" />
      <div v-if="currUser">
        <div
          class="reviews-wrap"
          v-for="review in currUser.reviews"
          :key="review"
        >
          <ul class="review-list">
            <li class="review-user">
              <div class="user-profile-image">
                <img :src="review.by.imgUrl" alt />
              </div>
              <div class="header-info">
                <div class="reviewer-details">
                  <p>{{ review.by.fullname }}</p>
                  <div class="review-rating">
                    <span class="star">⭐</span>
                    <p>{{ review.rate }}</p>
                  </div>
                </div>
                <div class="reviewer-sub-details">
                  <div class="country">
                    <img :src="review.by.flag" alt class="country-flag" />
                    <p>{{ review.by.country }}</p>
                  </div>
                </div>
              </div>
              <div class="review-description">
                <p>{{ review.txt }}</p>
              </div>
              <div class="review-published">
                <p>{{ review.reviewedAt }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="check-out-section">
      <div class="check-out-part">
        <div class="checkout-title">
          <p class="service">{{ gig.category }}</p>
          <p class="price">$&nbsp;{{ gig.price }}</p>
        </div>
        <div class="additional-info">
          <div class="delivery-wrapper">
            <div class="img-clock">
              <img src="../assets/logo/clock.png" alt />
              <p>{{ gig.daysToMake }} &nbsp;Days Delivery</p>
            </div>
          </div>
          <div class="revision-wrapper">
            <img src="../assets/logo/cycle.png" alt />
            <p>{{ gig.daysToMake }} &nbsp;Revisions</p>
          </div>
        </div>
        <div class="buy-btn">
          <button @click="addOrder">Continue (${{ gigPrice }})</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig.service.js";
import caruselDetails from "../components/carusel-details.vue";
import { orderService } from "../services/order.service.js";
import { userService } from "../services/user.service.js";
import progressBarDetails from "../components/progress-bar-details.vue";
import ProgressBarDetails from "../components/progress-bar-details.vue";
import caruserDetailsReview from "../components/caruser-details-review.vue";
// import { id } from "element-plus/lib/locale";


export default {
  name: "gig-detail",
  data() {
    return {
      gig: null,
      images: "",
      rates: "",
      orderToAdd: null,
      currUser: null,
    };
  },
  async created() {
    const { _id } = this.$route.params;
    await gigService.getById(_id).then((gig) => {
      this.gig = gig;
      this.images = gig.image;
      this.rates = gig.owner.rate;
      this.orderToAdd = orderService.getEmptyOrder();
      this.orderToAdd.gig._id = gig._id;
      this.orderToAdd.gig.name = gig.category;
      this.orderToAdd.gig.price = gig.price;
      this.orderToAdd.seller = gig.owner;

      this.$store.dispatch({type:'setUser', userId: '624440b1f11c47915c617278'}).then(() => {
      this.orderToAdd.buyer = this.getMiniUser
      })
      const userId = this.gig.owner._id;
      userService.getById(userId).then((user) => {
        this.currUser = user;
        console.log(this.currUser);
      });
    });
  },
  computed: {
    getMiniUser() {
      return this.$store.getters.getMiniUser
    },
    gigSellerImg() {
      return this.gig.owner.imgUrl;
    },
    userImg() {
      return this.user.imgUrl;
    },
    gigImg() {
      return this.gig.image;
    },
    orders() {
      return this.$store.getters.orders;
    },
    getUser() {
      return this.user;
    },
    getStars() {
      let stars = "";
      for (let index = 0; index < this.gig.owner.rate; index++) {
        stars += "⭐";
      }
      return stars;
    },
  },

  methods: {
    async addOrder() {
      // TODO- add order with all details
      // console.log(this.gig);
      // console.log(this.currUser);
      this.orderToAdd = orderService.getEmptyOrder();

      //TODO - order id??
      this.orderToAdd.buyer._id = this.currUser._id;
      this.orderToAdd.buyer.name = this.currUser.fullname;
      this.orderToAdd.seller._id = this.gig.owner._id;
      this.orderToAdd.seller.name = this.gig.owner.fullname;
      this.orderToAdd.gig._id = this.gig._id;
      this.orderToAdd.gig.name = this.gig.category;
      this.orderToAdd.gig.price = this.gig.price;
      console.log(this.orderToAdd);
      this.$store.dispatch({ type: "addOrder", order: this.orderToAdd });
      this.$router.push("/user-profile");
      // try {
      //   await this.$store.dispatch({ type: "addOrder", order: this.orderToAdd });
      //   this.$router.push("/user-profile");
      // } catch (err) {
      //   console.log("err", err);
      // }
    },
  },
  components: {
    caruselDetails,
    progressBarDetails,
    ProgressBarDetails,
    caruserDetailsReview,
    
  },
};
</script>


<style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
