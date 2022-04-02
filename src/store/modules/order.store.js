import { orderService } from '../../services/order.service'
// import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_ABOUT_YOU } from '../../services/socket.service.js'

export default {
    state: {
        orders: []
    },
    getters: {
        orders(state) {
            return state.orders
        },
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        saveOrder(state, { order }) {
            const idx = state.orders.findIndex((currOrder) => currOrder._id === order._id)
            if (idx !== -1) state.orders.splice(idx, 1, order)
            else state.orders.push(order)
            console.log(state.orders);
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async addOrder({ commit, dispatch }, { order }) {
            try {
                await orderService.save(order)
                commit({ type: 'saveOrder', order })
            } catch {
                console.log('Cannot save order');
            }
        },
        // addOrder({ commit, dispatch }, { order }) {
        //     orderService.save(order).then((order) => {
        //         commit({ type: 'addOrder', order })
        //     })
        // },
        getOrders({ commit, state }) {
            orderService.query().then((orders) => {
                commit({ type: 'setOrders', orders })
                console.log(orders);
            })
        },
        removeOrder({ commit }, { orderId }) {
            orderService.removeOrder(orderId);
            commit({ type: 'removeOrder', orderId })
        },
    }
}