type Product = {
  id: number;
  name: string;
  price: number;
  souldOut: boolean;
  toString(): string;
};

describe('object values', () => {
  const productA: Product = {
    id: 1,
    name: 'Product a',
    price: 49.5,
    souldOut: false,
    toString: function (): string {
      return `Product [${this.id},${this.name},${this.price},${this.souldOut}]`;
    },
  };

  it('should test jest assertions', () => {
    const referenceToProductA: Product = productA;
    const expectedProduct: Product = { ...productA };

    expect(referenceToProductA).toBe(productA);
    expect(expectedProduct).not.toBe(productA);
    expect(expectedProduct).toEqual(productA);

    expect(productA.id).toEqual(1);
    expect(productA.name).toEqual('Product a');
    expect(productA.price).toBeGreaterThan(40);
    expect(productA.souldOut).toBeFalsy();

    expect(productA).toHaveProperty('id', 1);
    expect(productA).toHaveProperty('name', 'Product a');
    expect(productA).toHaveProperty('price', 49.5);
    expect(productA).toHaveProperty('souldOut', false);
    expect(productA).toHaveProperty('toString');

    expect(productA.toString()).toEqual(expectedProduct.toString());
  });
});
