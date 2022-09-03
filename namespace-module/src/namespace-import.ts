// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="namespace.ts" />

/*
  "module": "AMD" or "System"
  "outFile": "./dist"

  or

  npx tsc src/namespace-import.ts --outFile ./dist/namespace-import.js
*/

console.log(MyApp.port);
console.log(MyApp.Operations.sum(4, 4));
