type Metadata = {
  id: number;
  createdAt: Date;
};

type ContactInfo = {
  email: string;
  phoneNumber: string;
};

type User = {
  uuid: Metadata['id'];
  username: string;
  password: string;
  email: ContactInfo['email'];
  phoneNumber: ContactInfo['phoneNumber'];
  createdAt: Metadata['createdAt'];
};

const jhon: User = {
  uuid: 1,
  username: 'jhon',
  password: '12345',
  email: 'jhon@email.com',
  phoneNumber: '11111-1111',
  createdAt: new Date(),
};

console.log(jhon);
