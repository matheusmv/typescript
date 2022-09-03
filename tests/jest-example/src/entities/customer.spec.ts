import { IndividualCustomer, EnterpriseCustomer } from './customer';

afterAll(() => jest.clearAllMocks());

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
) => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('jhon', 'doe', '111.111.111-11');

    expect(sut).toHaveProperty('firstName', 'jhon');
    expect(sut).toHaveProperty('lastName', 'doe');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods getName and getId for individual customers', () => {
    const sut = createIndividualCustomer('jhon', 'doe', '111.111.111-11');

    expect(sut.getName()).toEqual('jhon doe');
    expect(sut.getId()).toEqual('111.111.111-11');
  });
});

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('company 1', '11.111.111/1111-11');

    expect(sut).toHaveProperty('name', 'company 1');
    expect(sut).toHaveProperty('cnpj', '11.111.111/1111-11');
  });

  it('should have methods getName and getId for enterprise customers', () => {
    const sut = createEnterpriseCustomer('company 1', '11.111.111/1111-11');

    expect(sut.getName()).toEqual('company 1');
    expect(sut.getId()).toEqual('11.111.111/1111-11');
  });
});
