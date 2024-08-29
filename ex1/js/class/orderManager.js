export class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        let order = this.orders.find((element) => element.id == id);
        return order;
    }
    updateOrdersByStatus(id, status) {
        let orderToUpdate = this.getOrderById(id);
        orderToUpdate.status = status;
    }
    listOrdersByStatus(status) {
        let orderList = [];
        this.orders.forEach((order) => {
            if (order.status == status)
                orderList.push(order);
        });
        return orderList;
    }
    removeOrder(id) {
        let index = this.orders.indexOf(this.getOrderById(id));
        this.orders.splice(index, index + 1);
    }
}
