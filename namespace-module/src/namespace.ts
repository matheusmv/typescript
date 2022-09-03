/* eslint-disable @typescript-eslint/no-namespace */
namespace MyApp {
  export const port = 8080;

  export class User {
    constructor(
      public id: number,
      public username: string,
      public password: string,
    ) {}
  }

  export namespace Operations {
    export function sum(x: number, y: number): number {
      return x + y;
    }
  }
}

console.log(MyApp.port);

const jhon = new MyApp.User(1, 'jhon', '12345');
console.log(jhon);

console.log(MyApp.Operations.sum(2, 2));
