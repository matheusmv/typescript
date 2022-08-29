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

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  displayEmployees(): void {
    this.employees.forEach((employee) => {
      const template = 'id: %d\nname: %s %s\ncreated: %s\n';
      console.log(
        template,
        employee.getId(),
        employee.getFirstName(),
        employee.getLastName(),
        employee.getCreatedAt(),
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

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getCreatedAt(): string {
    return this.createdAt.toUTCString();
  }
}

const jhon = new Employee(1, 'Jhon', 'Doe');
const alex = new Employee(2, 'Alex', 'Jhones');
const mary = new Employee(3, 'Mary', 'Jane');

const companyA = new Company('company A', '11111-1111', '11.111.111/0001-11');

companyA.addEmployee(jhon);
companyA.addEmployee(alex);
companyA.addEmployee(mary);

companyA.displayEmployees();
