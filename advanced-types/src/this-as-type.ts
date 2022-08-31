export class Calculator {
  constructor(public value: number) {}

  add(value: number): this {
    this.value += value;
    return this;
  }

  sub(value: number): this {
    this.value -= value;
    return this;
  }

  mul(value: number): this {
    this.value *= value;
    return this;
  }

  div(value: number): this {
    this.value /= value;
    return this;
  }

  get(): number {
    return this.value;
  }
}

export class SubCalculator extends Calculator {
  pow(value: number): this {
    this.value **= value;
    return this;
  }
}

const calc = new SubCalculator(10);

console.log(calc.add(5).mul(2).pow(2).get());

export class User {
  constructor(
    private id: number | null,
    private username: string | null,
    private password: string | null,
  ) {}
}

export class UserBuilder {
  private id: number | null = null;
  private username: string | null = null;
  private password: string | null = null;

  setId(id: number): this {
    this.id = id;
    return this;
  }

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  build(): User {
    return new User(this.id, this.username, this.password);
  }
}

const jhon = new UserBuilder()
  .setId(1)
  .setUsername('jhon')
  .setPassword('12345')
  .build();

console.log(jhon);
