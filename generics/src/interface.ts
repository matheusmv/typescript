export interface Comparable<T> {
  compare(object: T): boolean;
}

export interface Repository<K, T extends Comparable<T>> {
  findAll(): T[];
  findById(id: K): T | null;
  save(object: T): void;
  saveAll(...objects: T[]): void;
  update(id: K, object: T): void;
  deleteById(id: K): void;
}

export class User implements Comparable<User> {
  constructor(
    public id: number | null,
    public username: string | null,
    public password: string | null,
    public email: string | null,
  ) {}

  compare(object: User): boolean {
    return this?.id === object?.id;
  }
}

export class UserRepository implements Repository<number, User> {
  private db: User[] = [];

  findAll(): User[] {
    return [...this.db];
  }

  findById(id: number): User | null {
    return this.db.find((user) => user.id === id) ?? null;
  }

  save(object: User): void {
    this.db.push(object);
  }

  saveAll(...objects: User[]): void {
    this.db.push(...objects);
  }

  update(id: number, object: User): void {
    const user = this.findById(id);

    if (user) {
      user.username = object?.username ?? user.username;
      user.password = object?.password ?? user.password;
      user.email = object?.email ?? user.email;
    }
  }

  deleteById(id: number): void {
    this.db = this.db.filter((user) => user.id !== id);
  }
}

export class UserService {
  constructor(private repository: Repository<number, User>) {}

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

  updateUser(id: number, user: User): void {
    this.repository.update(id, user);
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

let mary = userService.findUserById(3) as User;
mary.password = '1234567';

userService.updateUser(3, mary);

mary = userService.findUserById(3) as User;
console.log(mary);
