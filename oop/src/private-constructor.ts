export class Connection {
  constructor(private inUse: boolean = false) {}

  isInUse(): boolean {
    return this.inUse;
  }

  setInUse(status: boolean): void {
    this.inUse = status;
  }

  query(sql: string): unknown {
    return `Executed ${sql} in Connection ${this}`;
  }
}

export class ConnectionPool {
  private static readonly POOL_SIZE: number = 2;
  private static instance: ConnectionPool;
  private connectionPool: Connection[];

  private constructor(pool: Connection[]) {
    this.connectionPool = pool;
  }

  static getInstance(): ConnectionPool {
    if (this.instance) {
      console.log('instance already created');
      return this.instance;
    }

    console.log('new instance');

    const pool: Connection[] = [];
    for (let i = 0; i < this.POOL_SIZE; i++) {
      pool.push(new Connection());
    }

    this.instance = new ConnectionPool(pool);

    return this.instance;
  }

  getConnection(): Connection | null {
    const connection = this.connectionPool
      .filter((conn) => !conn.isInUse())
      .at(0);

    if (!connection) {
      return null;
    }

    connection.setInUse(true);

    return connection;
  }

  leaveConnection(connection: Connection): void {
    connection.setInUse(false);
  }
}

async function executeQuery(
  sql: string,
  pool: ConnectionPool,
): Promise<unknown> {
  const connection = pool.getConnection();

  if (connection) {
    const result = await connection.query(sql);
    pool.leaveConnection(connection);
    return result;
  }

  return 'unable to perform query';
}

Promise.all([
  executeQuery(
    'SELECT * FROM users LIMIT 0, 10;',
    ConnectionPool.getInstance(),
  ),
  executeQuery(
    'SELECT * FROM products LIMIT 0, 10;',
    ConnectionPool.getInstance(),
  ),
  executeQuery(
    'SELECT * FROM movies LIMIT 0, 10;',
    ConnectionPool.getInstance(),
  ),
  executeQuery(
    'SELECT * FROM books LIMIT 0, 10;',
    ConnectionPool.getInstance(),
  ),
]).then((result) => console.log(result));
