const number = 1;

describe('testing the constant number', () => {
  it('must have the value one', () => {
    expect(number).toBe(1);
  });

  test('must have a value greater than zero', () => {
    expect(number).toBeGreaterThan(0);
  });
});
