/* eslint-disable @typescript-eslint/no-empty-function */

import { CartItem } from '../interfaces/cart-item';
import { CustomerOrderProtocol } from '../interfaces/customer';
import { MessagingProtocol } from '../interfaces/messaging';
import { PersistenceProtocol } from '../interfaces/persistence';
import { ShoppingCartProtocol } from '../interfaces/shopping-cart';
import { Order } from './order';

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistenceMock = new PersistenceMock();
  const customerMock = new CustomerMock();
  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistenceMock,
    customerMock,
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistenceMock,
    customerMock,
  };
};

describe('Order', () => {
  afterEach(() => jest.clearAllMocks());

  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });

  it('should checkout if cart is not empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(false);

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });

  it('should send message', () => {
    const { sut, messagingMock } = createSut();
    const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();

    expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistenceMock } = createSut();
    const persistenceMockSpy = jest.spyOn(persistenceMock, 'saveOrder');

    sut.checkout();

    expect(persistenceMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCartMock } = createSut();
    const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkout();

    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});

class ShoppingCartMock implements ShoppingCartProtocol {
  addItem(item: CartItem): void {}

  removeItem(index: number): void {}

  get items(): readonly CartItem[] {
    return [];
  }

  total(): number {
    return 0;
  }

  totalWithDiscount(): number {
    return 0;
  }

  isEmpty(): boolean {
    return false;
  }

  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(message: string): void {}
}

class PersistenceMock implements PersistenceProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrderProtocol {
  getName(): string {
    return '';
  }

  getId(): string {
    return '';
  }
}
