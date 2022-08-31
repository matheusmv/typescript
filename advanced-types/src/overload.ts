type Operation = {
  (x: number): number;
  (x: number, y: number): number;
  (...numbers: number[]): number;
};

const add: Operation = (x: number, y?: number, ...numbers: number[]) => {
  if (numbers.length > 0)
    return x + (y || 0) + numbers.reduce((acc, value) => acc + value, 0);

  return x + (y || 0);
};

console.log(add(2));
console.log(add(2, 2));
console.log(add(2, 2, 2, 2));
