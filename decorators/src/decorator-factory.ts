type Constructor = new (...args: any[]) => any;

export function whitValues(props?: Record<string, unknown>) {
  return function (target: Constructor): Constructor {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        for (const key in props) {
          if (!this[key]) this[key] = props[key];
        }
      }
    };
  };
}

@whitValues({
  id: 1,
  username: 'jhon',
  password: '12345',
  email: 'jhon@email.com',
})
export class User {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public email?: string,
  ) {}
}

const jhon = new User();
console.log(jhon);
