import { CartItem } from '../interfaces/cart-item';
import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';

const createDiscountMock = () => {
  class DiscountMock extends Discount {}

  return new DiscountMock();
};

const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return { sut, discountMock };
};

const createSutWithTwoProducts = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  const products = [
    createCartItemMock('Product a', 49),
    createCartItemMock('Product b', 1),
  ];

  sut.addItem(products[0]);
  sut.addItem(products[1]);

  return { sut, discountMock, products };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithTwoProducts();

    expect(sut.items.length).toEqual(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithTwoProducts();

    expect(sut.total()).toEqual(50);
    expect(sut.totalWithDiscount()).toEqual(50);
  });

  it('should add products and clear cart', () => {
    const { sut } = createSutWithTwoProducts();

    expect(sut.items.length).toEqual(2);
    sut.clear();
    expect(sut.items.length).toEqual(0);
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should remove products', () => {
    const { sut } = createSutWithTwoProducts();

    expect(sut.items.length).toEqual(2);

    sut.removeItem(0);
    expect(sut.items.length).toEqual(1);
    expect(sut.isEmpty()).toBeFalsy();

    sut.removeItem(0);
    expect(sut.items.length).toEqual(0);
    expect(sut.isEmpty()).toBeTruthy();
  });
});
