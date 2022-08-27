let x;

console.log(typeof x);

if (typeof x === 'undefined') x = 20;

console.log(typeof x);

export function createPerson(
  firstName: string,
  lastName?: string, // string | undefined
): {
  firstName: string;
  lastName?: string; // string | undefined
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;

  return null;
}

console.log(squareOf(2));
console.log(squareOf('2') === null);
