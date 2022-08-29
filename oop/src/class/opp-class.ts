export class Company {
  readonly name: string;
  public readonly phoneNumber: string;
  private readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, phoneNumber: string, cnpj: string) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.cnpj = cnpj;
  }

  set Employee(employee: Employee) {
    this.employees.push(employee);
  }

  addEmployees(...employees: Employee[]): void {
    this.employees.push(...employees);
  }

  displayEmployees(): void {
    this.employees.forEach((employee) => {
      const template = 'id: %d\nname: %s %s\ncreated: %s\n';
      console.log(
        template,
        employee.Id,
        employee.FirstName,
        employee.LastName,
        employee.CreatedAt,
      );
    });
  }
}

export class Employee {
  private readonly createdAt: Date = new Date();

  constructor(
    private id: number,
    private firstName: string,
    private lastName: string,
  ) {}

  get Id(): number {
    return this.id;
  }

  set Id(id: number) {
    this.id = id;
  }

  get FirstName(): string {
    return this.firstName;
  }

  set FirstName(firstName: string) {
    this.firstName = firstName;
  }

  get LastName(): string {
    return this.lastName;
  }

  set LastName(lastName: string) {
    this.lastName = lastName;
  }

  get CreatedAt(): string {
    return this.createdAt.toUTCString();
  }
}

const jhon = new Employee(1, 'Jhon', 'Doe');
const alex = new Employee(2, 'Alex', 'Jhones');
const mary = new Employee(3, 'Mary', 'Jane');

const companyA = new Company('company A', '11111-1111', '11.111.111/0001-11');

companyA.Employee = jhon;
companyA.addEmployees(alex, mary);

companyA.displayEmployees();
