import {
  Discount,
  FiftyPercentDiscount,
  TenPercentDiscount,
  NoDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toEqual(10.99);
  });

  it('should have ten percent discount', () => {
    const sut = createSut(TenPercentDiscount);

    expect(sut.calculate(1000)).toEqual(900);
  });

  it('should have fifty percent discount', () => {
    const sut = createSut(FiftyPercentDiscount);

    expect(sut.calculate(150.5)).toEqual(75.25);
  });
});
