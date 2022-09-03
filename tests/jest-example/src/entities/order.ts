import { CustomerOrderProtocol } from '../interfaces/customer';
import { MessagingProtocol } from '../interfaces/messaging';
import { OrderStatus } from '../interfaces/order-status';
import { PersistenceProtocol } from '../interfaces/persistence';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messenger: MessagingProtocol,
    private readonly persistence: PersistenceProtocol,
    private readonly customer: CustomerOrderProtocol,
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
    console.log(`client: ${this.customer.getName()}, ${this.customer.getId()}`);
  }
}
