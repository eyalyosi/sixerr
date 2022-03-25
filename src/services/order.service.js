// import { httpService } from './http-service'
import { storageService } from './async-storage-service.js'
import { utilService } from './util-service.js'
const ORDER_KEY = 'order'

export const orderService = {
    query,
    addOrder,
    removeOrder,
    getOrderById
}

_createOrders()

function query() {
    return storageService.query(ORDER_KEY)
}

function getOrderById(orderId) {
    console.log('orderId:', orderId);
    return storageService.get(ORDER_KEY, orderId);
}

function addOrder(order) {
    if (order._id) return storageService.put(ORDER_KEY, order);
    else return storageService.post(ORDER_KEY, order);
}

function removeOrder(orderId) {
    return storageService.delete(ORDER_KEY, orderId)

}

function _createOrders() {
    let orders = utilService.loadFromStorage(ORDER_KEY);
    if (!orders || !orders.length) {

        orders = [
            {

            _id: "o1225",
            createdAt: 9898989,
            buyer: "mini-user",
            seller: "mini-user",
            gig: {
                _id: "i101",
                name: "Design Logo",
                price: 20
            },
            status: 'pending'
        }]

        utilService.saveToStorage(ORDER_KEY, orders);
    }
    return orders;
}
