export class Product {
  constructor(private _name: string, private _price: number) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }
}

export class SelectedProduct {
  constructor(private _product: Product, private _quantity: number) {}

  get name(): string {
    return this._product.name;
  }

  get price(): number {
    return this._product.price;
  }

  get quantity(): number {
    return this._quantity;
  }
}

export class ShoppingCart {
  private readonly products: Array<SelectedProduct> = [];

  addProduct(product: Product, quantity: number): void {
    this.products.push(new SelectedProduct(product, quantity));
  }

  quantity(): number {
    return this.products.reduce((acc, product) => acc + product.quantity, 0);
  }

  total(): number {
    return this.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
  }
}

const cart1 = new ShoppingCart();

cart1.addProduct(new Product('Smartphone', 1749.9), 1);
cart1.addProduct(new Product('Book', 49.9), 3);
cart1.addProduct(new Product('Chair', 609.5), 1);

console.log(cart1);
console.log(cart1.quantity());
console.log(cart1.total());
