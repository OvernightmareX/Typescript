import { OrderManager } from "./class/orderManager.js";
import { Customer, OrderItem, Order, Product } from "./utils/interface.js";

let idOrder: number = 0;

function createOrder(client: Customer, articles: OrderItem[]): Order{

    let order: Order = {
        id: `${idOrder++}`,
        customer: client, 
        items: articles, 
        status: "en attente"
    };

    return order; 
} 

function calculateTotal(order: Order){
    let sum: number = 0; 

    order.items.forEach((item) => {
        sum += item.product.price * item.quantity; 
    });
    return sum; 
}

let products: Product[] = [
    {id: "0",name: "épée", price: 12,stock: 5},
    {id: "1",name: "arc", price: 5,stock: 4},
    {id: "2",name: "baguette", price: 25,stock: 3},
    {id: "3",name: "hache", price: 95,stock: 2}
];    

let items: OrderItem[] = [
    {product: products[0], quantity: 1}, 
    {product: products[1], quantity: 2}, 
    {product: products[2], quantity: 3}, 
    {product: products[3], quantity: 4}
];

let clientTest: Customer = {id:"0", name:"Geralt", email:"Loup@kearmorhen.com"};

let orderManager: OrderManager = new OrderManager(); 

console.log("Ajout d'une commande :");
orderManager.addOrder(createOrder(clientTest,items));
orderManager.addOrder(createOrder(clientTest,items));
console.table(orderManager.orders); 

console.log("GetOrder avec l'id 1 :");
console.log(orderManager.getOrderById("1")); 

console.log("Changement des status : ");
orderManager.updateOrdersByStatus("0", "expédiée"); 
orderManager.updateOrdersByStatus("1", "livrée"); 
console.table(orderManager.orders); 

console.log("Affichage des commande avec le statue 'livrée' : ");
console.table(orderManager.listOrdersByStatus("livrée")); 

console.log("Suppression de la commande avec l'id 1 : ");
orderManager.removeOrder("1"); 
console.table(orderManager.orders); 

console.log("Calcul de la commande d'id 0");
console.log(calculateTotal(orderManager.getOrderById("0"))+"€"); 