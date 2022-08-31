export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public email: string,
  ) {}
}

export interface Repository<T> {
  findById(id: number): T | null;
  findAll(): T[];
  save(object: T): void;
  saveAll(...objects: T[]): void;
  update(object: T): void;
  deleteById(id: number): void;
}

export class UserRepository implements Repository<User> {
  private db: User[] = [];

  findById(id: number): User | null {
    const user = this.db.find((user) => user.id === id);

    if (user) return user;

    return null;
  }

  findAll(): User[] {
    return [...this.db];
  }

  save(object: User): void {
    this.db.push(object);
  }

  saveAll(...objects: User[]): void {
    this.db.push(...objects);
  }

  update(object: User): void {
    const user = this.findById(object.id);

    if (user) {
      user.username = object.username;
      user.password = object.password;
      user.email = object.email;
    }
  }

  deleteById(id: number): void {
    this.db = this.db.filter((user) => user.id !== id);
  }
}

export class UserService {
  constructor(private repository: Repository<User>) {}

  findAllUsers(): User[] {
    return this.repository.findAll();
  }

  findUserById(id: number): User | null {
    return this.repository.findById(id);
  }

  createUser(user: User): void {
    this.repository.save(user);
  }

  createUsers(...users: User[]): void {
    this.repository.saveAll(...users);
  }

  updateUser(user: User): void {
    this.repository.update(user);
  }

  deleteUserById(id: number): void {
    this.repository.deleteById(id);
  }
}

const userService = new UserService(new UserRepository());

userService.createUsers(
  new User(1, 'jhon', '12345', 'jhon@email.com'),
  new User(2, 'alex', '12345', 'alex@email.com'),
  new User(3, 'mary', '12345', 'mary@email.com'),
  new User(4, 'carl', '12345', 'carl@email.com'),
);

const users = userService.findAllUsers();
console.log(users);
