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
    const stu = createIndividualCustomer('jhon', 'doe', '111.111.111-11');

    expect(stu).toHaveProperty('firstName', 'jhon');
    expect(stu).toHaveProperty('lastName', 'doe');
    expect(stu).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods getName and getId for individual customers', () => {
    const stu = createIndividualCustomer('jhon', 'doe', '111.111.111-11');

    expect(stu.getName()).toEqual('jhon doe');
    expect(stu.getId()).toEqual('111.111.111-11');
  });
});

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const stu = createEnterpriseCustomer('company 1', '11.111.111/1111-11');

    expect(stu).toHaveProperty('name', 'company 1');
    expect(stu).toHaveProperty('cnpj', '11.111.111/1111-11');
  });

  it('should have methods getName and getId for enterprise customers', () => {
    const stu = createEnterpriseCustomer('company 1', '11.111.111/1111-11');

    expect(stu.getName()).toEqual('company 1');
    expect(stu.getId()).toEqual('11.111.111/1111-11');
  });
});
