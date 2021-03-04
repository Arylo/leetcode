/**
 * 执行用时：84 ms
 * 内存消耗：39.4 MB
 */
export class MyQueue {
  private arr: number[] = [];
  constructor() {
  }

  push(x: number): void {
    this.arr.push(x);
  }

  pop(): number {
    return this.arr.shift() as number;
  }

  peek(): number {
    return this.arr[0];
  }

  empty(): boolean {
    return this.arr.length === 0;
  }
}
