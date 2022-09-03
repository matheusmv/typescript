import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistence } from './services/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { NoDiscount } from './entities/discount';
import { IndividualCustomer } from './entities/customer';

const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messenger = new Messaging();
const persistence = new Persistence();
const customer = new IndividualCustomer('jhon', 'doe', '111.111.111-11');
const order = new Order(shoppingCart, messenger, persistence, customer);

shoppingCart.addItem(new Product('Product a', 49.91));
shoppingCart.addItem(new Product('Product b', 9.9123));
shoppingCart.addItem(new Product('Product c', 1.59));

console.log(order.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
