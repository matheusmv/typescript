function filter<T>(array: Array<T>, callback: (value: T) => boolean): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

function map<T>(array: Array<T>, callback: (value: T) => T): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

function reduce<T>(
  array: Array<T>,
  callback: (acc: T, value: T) => T,
  initValue: T,
): T {
  let acc: T = initValue;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i]);
  }

  return acc;
}

const numbers = [1, 2, 3, 4, 5];

console.log(filter(numbers, (number) => number % 2 !== 0));
console.log(map(numbers, (number) => number * 2));
console.log(reduce(numbers, (acc, number) => acc + number, 0));

const letters = ['a', 'b', 'c'];

console.log(filter(letters, (letter) => letter !== 'a'));
console.log(map(letters, (letter) => letter.toUpperCase()));
console.log(reduce(letters, (acc, letter) => acc + letter, ''));
