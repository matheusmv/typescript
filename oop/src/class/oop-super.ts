export class Metadata {
  private readonly createdAt: Date = new Date();

  constructor(protected id: number) {}

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getCreatedAt(): string {
    return this.createdAt.toUTCString();
  }
}

export class User extends Metadata {
  constructor(
    id: number,
    private username: string,
    private password: string,
    private email: string,
  ) {
    super(id);
  }

  toString(): string {
    return `id: ${this.id}\nusername: ${this.username}\npassword: ${
      this.password
    }\nemail: ${this.email}\ncreated: ${super.getCreatedAt()}`;
  }
}

const jhon = new User(1, 'jhon', '12345', 'jhon@email.com');

console.log(jhon);
console.log(jhon.toString());
