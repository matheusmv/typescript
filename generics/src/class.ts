export interface IStack<T> {
  push(object: T): void;
  pop(): T | null;
  peek(): T | null;
  isEmpty(): boolean;
  length(): number;
}

export class Node<T> {
  constructor(public value: T, public next: Node<T> | null) {}
}

export class StackImpl<T> implements IStack<T> {
  private size = 0;
  private top: Node<T> | null = null;
  private base: Node<T> | null = null;

  push(object: T): void {
    const newNode = new Node(object, this.top);

    if (this.base === null) this.base = newNode;

    this.top = newNode;

    this.increaseSize();
  }

  pop(): T | null {
    const topNode = this.top;

    if (this.length() === 1) {
      this.top = null;
      this.base = null;
    } else {
      this.top = topNode?.next ?? null;
    }

    this.decreaseSize();

    return topNode?.value ?? null;
  }

  peek(): T | null {
    return this.top?.value ?? null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  length(): number {
    return this.size;
  }

  private increaseSize(): void {
    this.size += 1;
  }

  private decreaseSize(): void {
    this.size -= 1;
  }
}

const stackOfNumbers = new StackImpl<number>();

stackOfNumbers.push(0);
stackOfNumbers.push(1);
stackOfNumbers.push(2);
stackOfNumbers.push(3);
stackOfNumbers.push(4);

console.log(stackOfNumbers.peek());
stackOfNumbers.pop();
stackOfNumbers.pop();
console.log(stackOfNumbers.peek());
console.log(stackOfNumbers.isEmpty());
console.log(stackOfNumbers.length());
