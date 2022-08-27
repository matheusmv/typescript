const userObjectOne: {
  id: number;
  username: string;
  password: string;
} = {
  id: 1,
  username: 'jhon',
  password: '123456',
};

console.log(userObjectOne);

const userObjectTwo: {
  id?: number;
  username: string;
  password: string;
} = {
  username: 'alex',
  password: '123456',
};

console.log(userObjectTwo);

const userObjectThree: Record<string, unknown> = {
  id: '3',
  username: 'maria',
  password: '123456',
};

console.log(userObjectThree);

const userObjectFour: {
  id?: number;
  username: string;
  password: string;
  [key: string]: unknown;
} = {
  id: 4,
  username: 'frank',
  password: '123456',
  email: 'frank@email.com',
};

console.log(userObjectFour);

const userObjectFive: {
  readonly id: number;
  username: string;
  password: string;
} = {
  id: 5,
  username: 'alice',
  password: '123456',
};

console.log(userObjectFive);
