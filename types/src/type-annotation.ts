/* eslint-disable */

let firstName: string = 'Jhon';
let age: number = 30
let ofAge: boolean = age > 18;
let plusSimbol: symbol = Symbol('+');
let id: bigint = 10n;


let numberArray: Array<number> = [ 0, 1, 1, 2, 3, 5, 8 ];
let stringArray: string[] = [ 'a', 'b', 'c', 'd', 'e'];


let personObject: {
  firstName: string,
  lastName?: string,
  age: number,
  birthDate?: Date
} = {
  firstName: "Alex",
  age: 27,
  birthDate: new Date('01-05-1995')
};


function sum(x: number, y: number): number {
  return x * y;
}

const sub: (x: number, y: number) => number = (x, y) => x - y;
