<template>
    <p>SELLER PAGE</p>
    <!-- <p>{{ orders.seller }}</p> -->
</template>


<script>import { orderService } from "../services/order.service"


export default {

    data() {
        return {
            orders: null
        }

    },
    created() {
        // const { id } = this.$route.params
        // if (id) {
        //     console.log(id);
        //     orderService.getOrderById(id).then((order) => (this.orderToAdd = order))

        // }
        this.orders = this.$store.getters.getOrders
        // console.log(this.orders);

    },
    computed: {


    },
    action: {

    }
}


</script>