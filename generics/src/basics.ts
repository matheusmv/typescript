type FilterCallback<T> = (value: T) => boolean;

function filter<T>(array: Array<T>, callback: FilterCallback<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

type MapCallback<T> = (value: T) => T;

function map<T>(array: Array<T>, callback: MapCallback<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

type ReduceCallback<T> = (acc: T, value: T) => T;

function reduce<T>(
  array: Array<T>,
  callback: ReduceCallback<T>,
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
