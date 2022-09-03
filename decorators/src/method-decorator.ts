export function logMethod(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);
}

export class User {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public email?: string,
  ) {}

  @logMethod
  toString(): string {
    return `User [id: ${this.id}, username: ${this.username}, password: ${this.password}, email: ${this.email}]`;
  }
}

const alex = new User(1, 'alex', '12345', 'alex@email.com');
console.log(alex.toString());
