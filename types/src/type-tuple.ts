const clientData: [number, string] = [1, 'Jhon'];

console.log(clientData);

clientData[0] = 2;
clientData[1] = 'Alex';

console.log(clientData);

const userRow: readonly [number, string, string?] = [1, 'Ana'];

console.log(userRow);

const productRow: readonly [number, string, ...string[]] = [
  4,
  'car',
  'black',
  'v8',
];

console.log(productRow);
