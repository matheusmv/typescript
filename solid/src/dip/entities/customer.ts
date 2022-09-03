import {
  CustomerOrderProtocol,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from '../interfaces/customer';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrderProtocol
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getId(): string {
    return `${this.cpf}`;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrderProtocol
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return `${this.name}`;
  }

  getId(): string {
    return `${this.cnpj}`;
  }
}
