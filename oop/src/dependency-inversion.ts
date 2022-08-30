export class UserService {
  constructor(private repository: DB) {}

  findUserById(id: number): unknown {
    return this.repository.findById(id);
  }
}

export abstract class DB {
  constructor(
    protected readonly username: string,
    protected readonly password: string,
    protected readonly database: string,
  ) {}

  protected abstract connect(): unknown;
  protected abstract close(): unknown;
  abstract findById(id: number): unknown;

  protected verifyCredentials(): boolean {
    return true;
  }
}

export class MySQLImpl extends DB {
  constructor(
    username: string,
    password: string,
    database: string,
    private host: string,
    private port: number,
  ) {
    super(username, password, database);
  }

  connect(): unknown {
    if (!this.verifyCredentials()) throw new Error('connect error.');

    return `connected to database: mysql://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`;
  }

  close(): unknown {
    if (!this.verifyCredentials()) throw new Error('close error.');

    return `connection to: mysql://${this.username}:${this.password}@${this.host}:${this.port}/${this.database} closed`;
  }

  findById(id: number): unknown {
    this.connect();
    const result = `Executing: SELECT * FROM users WHERE id = ${id};`;
    this.close();
    return result;
  }
}

export class MongoDBImpl extends DB {
  constructor(
    username: string,
    password: string,
    database: string,
    private host: string,
    private port: number,
  ) {
    super(username, password, database);
  }

  connect(): unknown {
    if (!this.verifyCredentials()) throw new Error('connect error.');

    return `connected to database: mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`;
  }

  close(): unknown {
    if (!this.verifyCredentials()) throw new Error('close error.');

    return `connection to: mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.database} closed`;
  }

  findById(id: number): unknown {
    this.connect();
    const result = `Executing: db.users.find({_id: ${id}});`;
    this.close();
    return result;
  }
}

const userServiceMysql = new UserService(
  new MySQLImpl('admin', 'password', 'company', 'localhost', 3306),
);

const userServiceMongo = new UserService(
  new MongoDBImpl('admin', 'password', 'company', 'localhost', 27017),
);

console.log(userServiceMysql.findUserById(1));
console.log(userServiceMongo.findUserById(1));
