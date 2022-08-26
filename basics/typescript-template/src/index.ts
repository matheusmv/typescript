import { sum, sub, mul, div, pow, Operation } from './operations';

type Result = {
  operation: string;
  leftArg: number;
  rightArg: number;
  evalFunc: Operation;
};

const results: Result[] = [
  { operation: '+', leftArg: 2, rightArg: 6, evalFunc: sum },
  { operation: '-', leftArg: 2, rightArg: 6, evalFunc: sub },
  { operation: '*', leftArg: 2, rightArg: 6, evalFunc: mul },
  { operation: '/', leftArg: 2, rightArg: 6, evalFunc: div },
  { operation: '^', leftArg: 2, rightArg: 6, evalFunc: pow },
];

results.forEach((result) => {
  const operationResult: number = result.evalFunc(
    result.leftArg,
    result.rightArg,
  );

  console.log(
    `${result.leftArg} ${result.operation} ${result.rightArg} = ${operationResult}`,
  );
});
