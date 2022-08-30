type OP = '+' | '-' | '*' | '/';

export class MathExpression {
  static readonly ADD: OP = '+';
  static readonly SUB: OP = '-';
  static readonly MUL: OP = '*';
  static readonly DIV: OP = '/';

  static eval(l: number, op: OP, r: number): void {
    switch (op) {
      case this.ADD:
        this.message(`${l} ${op} ${r} = ${this.add(l, r)}`);
        break;
      case this.SUB:
        this.message(`${l} ${op} ${r} = ${this.sub(l, r)}`);
        break;
      case this.MUL:
        this.message(`${l} ${op} ${r} = ${this.mul(l, r)}`);
        break;
      case this.DIV:
        this.message(`${l} ${op} ${r} = ${this.div(l, r)}`);
        break;
      default:
    }
  }

  private static message(message: string): void {
    console.log(message);
  }

  private static add(l: number, r: number): number {
    return l + r;
  }

  private static sub(l: number, r: number): number {
    return l - r;
  }

  private static mul(l: number, r: number): number {
    return l * r;
  }

  private static div(l: number, r: number): number | Error {
    if (r === 0) throw new Error('/ by zero');

    return l / r;
  }
}

MathExpression.eval(2, MathExpression.ADD, 2);
MathExpression.eval(2, MathExpression.SUB, 2);
MathExpression.eval(2, MathExpression.MUL, 2);
MathExpression.eval(2, MathExpression.DIV, 2);
