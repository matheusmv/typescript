export type CartItem = { name: string; price: number };
export type OderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OderStatus = 'open';

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OderStatus {
    return this._orderStatus;
  }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    const result = this._items
      .reduce((acc, value) => acc + value.price, 0)
      .toFixed(2);

    return Number.parseFloat(result);
  }

  checkout(): void {
    if (this.isEmpty()) {
      this.sendMessage('The shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `your order with a total of ${this.total()} has been received`,
    );
    this.saveOrder();
    this.clear();
  }

  saveOrder(): void {
    console.log('order saved successfully');
  }

  clear(): void {
    this._items.length = 0;
    console.log('shopping cart has been cleaned');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'Product a', price: 49.91 });
shoppingCart.addItem({ name: 'Product b', price: 9.9123 });
shoppingCart.addItem({ name: 'Product c', price: 1.59 });

console.log(shoppingCart.orderStatus);
console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
