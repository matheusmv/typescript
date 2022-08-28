type customMapCallback<T> = (t: T) => T;

export function customMap<T>(
  array: Array<T>,
  callbackFunction: customMapCallback<T>,
): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
}

const words: string[] = ['a', 'b', 'c'];

console.log(customMap<string>(words, (word) => word.toUpperCase()));

const numbers: number[] = [1, 2, 3, 4];

console.log(customMap<number>(numbers, (number) => number * number));
