function multiplyAllNumbers(...numbers: Array<number>): number {
  return numbers.reduce((acc, value) => acc * value, 1);
}

console.log(multiplyAllNumbers(1, 2, 3, 4, 5));

function concatenateAllStrings(...words: string[]): string {
  return words.join('');
}

console.log(concatenateAllStrings('0', 'x', 'C', 'A', 'F', 'E'));

function allStringsToUpperCase(...words: string[]): Array<string> {
  return words.map((word) => word.toUpperCase());
}

console.log(allStringsToUpperCase('one', 'two', 'three', 'four', 'five'));

const vowels: readonly string[] = ['a', 'e', 'i', 'o', 'u'];

console.log(vowels);

const words: ReadonlyArray<string> = ['blue', 'orange', 'car', 'bike'];

console.log(words);
