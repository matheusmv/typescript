/* https://www.typescriptlang.org/docs/handbook/utility-types.html */

const jhon: Record<string, string | number> = {
  id: 1,
  username: 'jhon',
  password: '12345',
};

console.log(jhon);

type User = {
  id?: number;
  username?: string;
  password?: string;
};

type Client = Required<User>;

const alex: Client = {
  id: 2,
  username: 'alex',
  password: '12345',
};

console.log(alex);

type IncompleteCliente = Partial<Client>;

const mary: IncompleteCliente = {
  username: 'mary',
};

console.log(mary);

type ClientReadonly = Readonly<Client>;

const carl: ClientReadonly = {
  id: 3,
  username: 'carl',
  password: '12345',
};

console.log(carl);

type UserDetails = Pick<User, 'username' | 'password'>;

const userAuth: UserDetails = {
  username: carl.username,
  password: carl.password,
};

console.log(userAuth);

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

/* eslint-disable */
type AB = Exclude<ABC, CDE>;
type C = Extract<ABC, CDE>;
/* eslint-enable */

type AccountMongo = {
  _id: string;
  username: string;
  email: string;
};

type AccountAPI = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const userMongo: AccountMongo = {
  _id: '60f532903ded77001064ae92',
  username: 'will',
  email: 'will@email.com',
};

const userAPI: AccountAPI = {
  id: userMongo._id,
  username: userMongo.username,
  email: userMongo.email,
};

console.log(userMongo);
console.log(userAPI);
