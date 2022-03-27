import { orderService } from '../../services/order.service'
// import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_ABOUT_YOU } from '../../services/socket.service.js'

export default {
    state: {
        orders: orderService.query()
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
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        getOrders({ commit, state }) {
            orderService.query().then((orders) => {
                commit({ type: 'setOrders', orders })
                console.log(orders);
            })
        },

        addOrder({ commit, dispatch }, { order }) {
            orderService.addOrder(order).then((order) => {
                commit({ type: 'addOrder', order })
            })
        },

        removeOrder({ commit }, { orderId }) {
            orderService.removeOrder(orderId);
            commit({ type: 'removeOrder', orderId })

        },

    }
}