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
          <p>Level {{ gig.owner.level }} Seller</p>|
          <div v-if="gig.owner.rate">
            <p>⭐ ({{ gig.owner.rate }})</p>
          </div>
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
          <p>⭐ ({{ gig.owner.rate }})</p>
          <a>Contact Me</a>
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
      <div class="rate-section"></div>
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
          <button @click="saveOrder">Continue (${{ gig.price }})</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig.service.js";
import caruselDetails from "../components/carusel-details.vue"
export default {
  name: "gig-detail",
  data() {
    return {
      gig: null,
      images: '',
      rates: '',
      orderToSeller: null
    };
  },
  created() {
    const { _id } = this.$route.params;
    gigService.getById(_id).then((gig) => {
      this.gig = gig;
      this.images = gig.image
      this.rates = gig.owner.rate
      console.log('rates:', this.rates);
    })
  },
  methods: {
    saveOrder() {
      const { _id } = this.$route.params;
      console.log(_id);
      this.$store.dispatch({ type: 'saveOrder', order: this.orderToSeller, id: _id }).then(() => {
        this.$router.push('/order-app')
      })
    },


  },
  computed: {
    gigSellerImg() {
      return this.gig.owner.imgUrl;
    },
    gigImg() {
      return this.gig.image
    },
  },
  components: {
    caruselDetails
  },
};
</script>
