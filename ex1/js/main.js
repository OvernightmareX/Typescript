import { OrderManager } from "./class/orderManager.js";
let idOrder = 0;
function createOrder(client, articles) {
    let order = {
        id: `${idOrder++}`,
        customer: client,
        items: articles,
        status: "en attente"
    };
    return order;
}
function calculateTotal(order) {
    let sum = 0;
    order.items.forEach((item) => {
        sum += item.product.price * item.quantity;
    });
    return sum;
}
let products = [
    { id: "0", name: "épée", price: 12, stock: 5 },
    { id: "1", name: "arc", price: 5, stock: 4 },
    { id: "2", name: "baguette", price: 25, stock: 3 },
    { id: "3", name: "hache", price: 95, stock: 2 }
];
let items = [
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 2 },
    { product: products[2], quantity: 3 },
    { product: products[3], quantity: 4 }
];
let clientTest = { id: "0", name: "Geralt", email: "Loup@kearmorhen.com" };
let orderManager = new OrderManager();
console.log("Ajout d'une commande :");
orderManager.addOrder(createOrder(clientTest, items));
orderManager.addOrder(createOrder(clientTest, items));
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
console.log(calculateTotal(orderManager.getOrderById("0")) + "€");
