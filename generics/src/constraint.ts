type GetValue = <O, K extends keyof O>(object: O, key: K) => O[K];

const obtainValue: GetValue = (object, key) => object[key];

const color = {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
};

console.log(obtainValue(color, 'green'));
