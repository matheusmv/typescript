export function getterAndSetter(
  classPrototype: any,
  name: string | symbol,
): any {
  let propertyValue: any;

  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.toUpperCase();
        return;
      }
      propertyValue = value;
    },
  };
}

export class User {
  @getterAndSetter id?: number;
  @getterAndSetter username?: string;
  @getterAndSetter password?: string;
  @getterAndSetter email?: string;

  constructor(
    id?: number,
    username?: string,
    password?: string,
    email?: string,
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
  }

  toString(): string {
    return `User [id: ${this.id}, username: ${this.username}, password: ${this.password}, email: ${this.email}]`;
  }
}

const alex = new User(1, 'alex', '12345', 'alex@email.com');
console.log(alex.toString());
