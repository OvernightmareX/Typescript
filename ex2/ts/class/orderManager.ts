import { Order, Status } from "../utils/interface.js";

export class OrderManager {
    orders: Order[] = []; 

    addOrder(order: Order){
        this.orders.push(order);
    }

    getOrderById(id: string): Order{
        let order: Order = this.orders.find((element) => element.id == id);
        return order; 
    }

    updateOrdersByStatus(id: string, status: Status){
        let orderToUpdate: Order = this.getOrderById(id); 
        orderToUpdate.status = status; 
    }

    listOrdersByStatus(status: Status): Order[]{
        let orderList: Order[] = []; 

        this.orders.forEach((order) => {
            if(order.status == status)
                orderList.push(order); 
        })
        return orderList; 
    }

    removeOrder(id:string){
        let index: number = this.orders.indexOf(this.getOrderById(id));
        this.orders.splice(index, index+1);
    }
}