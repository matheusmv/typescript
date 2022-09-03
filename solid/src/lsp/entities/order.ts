import { ShoppingCart } from './shopping-cart';
import { OrderStatus } from '../interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistence } from '../services/persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messenger: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('The shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messenger.sendMessage(
      `your order with a total of ${this.cart.totalWithDiscount()} has been received`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
