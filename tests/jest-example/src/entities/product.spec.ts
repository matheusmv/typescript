import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    const sut = createSut('Product a', 49.9);

    expect(sut).toHaveProperty('name', 'Product a');
    expect(sut.price).toBeCloseTo(49.9);
  });
});
