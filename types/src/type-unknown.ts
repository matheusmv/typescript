let x: unknown;

x = 10;
x = 'Jhon';
x = 17.6;

switch (typeof x) {
  case 'number':
    console.log(`x is a number: ${x}`);
    break;
  case 'string':
    console.log(`x is a string: ${x}`);
    break;
  default:
    console.log(x);
}
