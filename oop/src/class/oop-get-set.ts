export class User {
  constructor(
    private _id: number,
    private _username: string,
    private _password: string,
    private _email: string,
  ) {}

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  toString(): string {
    return `User
    id: ${this.id}
    username: ${this.username}
    password: ${this.password}
    email: ${this.email}`;
  }
}

const jhon = new User(1, 'jhon', '12345', 'jhon@email.com');

jhon.password = '123456';

console.log(jhon.toString());
