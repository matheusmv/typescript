export function randomFunction(): never {
  throw new Error('random error');
}

try {
  randomFunction();
} catch (e: unknown) {
  console.error(e);
}
