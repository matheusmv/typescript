export function logMethodParameter(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

export class User {
  constructor(
    @logMethodParameter public id?: number,
    @logMethodParameter public username?: string,
    @logMethodParameter public password?: string,
    @logMethodParameter public email?: string,
  ) {}

  equals(@logMethodParameter object: User): boolean {
    return (
      this.id === object.id &&
      this.username === object.username &&
      this.password === object.password &&
      this.email === object.email
    );
  }
}

const alex = new User(1, 'alex', '12345', 'alex@email.com');
console.log(alex.equals(alex));
