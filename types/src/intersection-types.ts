type FisrtName = { firstName: string };
type LastName = { lastName: string };
type Email = { email: string };

type Person = FisrtName | LastName | Email;

const jhon: Person = {
  firstName: 'Jhon',
  email: 'jhon@email.com',
};

console.log(jhon);

type Contact = FisrtName & LastName & Email;

const alex: Contact = {
  firstName: 'Alex',
  lastName: 'Jones',
  email: 'alex@email.com',
};

console.log(alex);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type A = AB & AC & AD;

const a: A = 'A';

console.log(a);
