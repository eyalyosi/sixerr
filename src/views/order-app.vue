<template>
    <section class="main-layout">
        <table>
            <tr>
                <th>Order ID</th>
                <th>Created At</th>
                <th>Gig ID</th>
                <th>Gig Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Seller Name</th>
                <th>Buyer Name</th>
            </tr>
            <tr class="order-table" v-for="order in getOrders" :key="order">
                <td>{{ order._id }}</td>
                <td>{{ order.createdAt }}</td>
                <td>{{ order.gig._id }}</td>
                <td>{{ order.gig.name }}</td>
                <td>{{ order.gig.price }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.seller.fullname }}</td>
                <td>{{ order.buyer.fullname }}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import { orderService } from "../services/order.service";
import { gigService } from "../services/gig.service";

export default {
  data() {
    return {
      gig: null,
      ordersBy: null,
    };
  },
  created() {
    this.orders = this.$store
      .dispatch({ type: "getOrders" })
      .then(function (ordersBy) {
        console.log(ordersBy);
        // return ordersBy
      });
  },

  computed: {
    getOrders() {
      return this.$store.getters.orders;
    },
  },
  components: {
    gigService,
    orderService,
  },
};
</script>

 -->
