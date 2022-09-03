import { CartItem } from '../interfaces/cart-item';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  get items(): Readonly<CartItem[]> {
    return this._items;
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

  clear(): void {
    this._items.length = 0;
    console.log('shopping cart has been cleaned');
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
