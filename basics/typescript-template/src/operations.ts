export type Operation = (x: number, y: number) => number;

export const sum: Operation = (x, y) => x + y;
export const sub: Operation = (x, y) => x - y;
export const mul: Operation = (x, y) => x * y;
export const div: Operation = (x, y) => x / y;
export const pow: Operation = (x, y) => Math.pow(x, y);
