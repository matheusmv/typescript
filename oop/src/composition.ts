export class User {
  constructor(
    private _id: number,
    private _username: string,
    private _password: string,
    private _email: string,
    private _address: Address,
    private _role: UserRole,
  ) {}
}

type Role = 'ADMIN' | 'MANAGER' | 'USER';

export class UserRole {
  constructor(private _role: Role) {}
}

export class Address {
  constructor(
    private _street: string,
    private _city: string,
    private _state: string,
    private _zipCode: string,
  ) {}
}

const jhon = new User(
  1,
  'jhon',
  '12345',
  'jhon@email.com',
  new Address('stree 1', 'city 1', 'state 1', '11111111'),
  new UserRole('USER'),
);

console.log(jhon);
