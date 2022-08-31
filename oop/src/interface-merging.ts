interface User {
  username: string;
  password: string;
}

interface User {
  id: number;
  createdAt: Date;
}

interface User {
  email: string;
}

const jhon: User = {
  id: 1,
  username: 'jhon',
  password: '123456',
  email: 'jhon@email.com',
  createdAt: new Date(),
};

console.log(jhon);
