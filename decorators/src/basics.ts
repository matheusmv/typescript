export function stringsToLowerCase<T extends new (...args: any[]) => any>(
  target: T,
): T {
  return class extends target {
    constructor(...args: any[]) {
      for (const prop in args) {
        if (typeof args[prop] === 'string')
          args[prop] = args[prop].toLowerCase();
      }
      super(...args);
    }
  };
}

@stringsToLowerCase
export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
  ) {}
}

const jhon = new User(1, 'JHON', '123456', 'JHON@EMAIL.COM');
console.log(jhon);
