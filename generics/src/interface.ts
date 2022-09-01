export interface Comparable<T> {
  compareTo(object: T): number;
}

export interface IRepository<K, T extends Comparable<T>> {
  findAll(): T[];
  findById(id: K): T | null;
  save(object: T): void;
  saveAll(...objects: T[]): void;
  update(id: K, callback: (object: T) => T): void;
  deleteById(id: K): void;
}

export class User implements Comparable<User> {
  constructor(
    public id: number | null,
    public username: string | null,
    public password: string | null,
    public email: string | null,
  ) {}

  compareTo(object: User): number {
    return (this?.id ?? 0) - (object?.id ?? 0);
  }
}

export class UserMemoryRepository implements IRepository<number, User> {
  private db: User[] = [];

  findAll(): User[] {
    return [...this.db];
  }

  findById(id: number): User | null {
    return this.db.find((user) => user.id === id) ?? null;
  }

  save(user: User): void {
    this.db.push(user);
  }

  saveAll(...users: User[]): void {
    this.db.push(...users);
  }

  update(id: number, callback: (user: User) => User): void {
    let user = this.findById(id);

    if (user) {
      user = callback(user);
    }
  }

  deleteById(id: number): void {
    this.db = this.db.filter((user) => user.id !== id);
  }
}

export class UserService {
  constructor(private repository: IRepository<number, User>) {}

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

  updateUser(id: number, userDetails: User): void {
    this.repository.update(id, (user) => {
      user.username = userDetails?.username ?? user.username;
      user.password = userDetails?.password ?? user.password;
      user.email = userDetails?.email ?? user.email;

      return user;
    });
  }

  deleteUserById(id: number): void {
    this.repository.deleteById(id);
  }
}

const userService = new UserService(new UserMemoryRepository());

userService.createUsers(
  new User(1, 'jhon', '12345', 'jhon@email.com'),
  new User(2, 'alex', '12345', 'alex@email.com'),
  new User(3, 'mary', '12345', 'mary@email.com'),
  new User(4, 'carl', '12345', 'carl@email.com'),
);

const users = userService.findAllUsers();
console.log(users.sort((a, b) => -a.compareTo(b)));

let mary = userService.findUserById(3) as User;
mary.password = '1234567';

userService.updateUser(3, mary);

mary = userService.findUserById(3) as User;
console.log(mary);
