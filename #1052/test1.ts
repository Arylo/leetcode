/**
 * 执行用时：8780 ms
 * 内存消耗：43.1 MB
 */
export function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  const arr: number[] = [];
  for (let i = 0; i < customers.length - X + 1; i += 1) {
    let num = 0;
    customers.forEach((customer, index) => {
      if (grumpy[index] === 0 || (i <= index && index < i + X)) {
        num += customer;
      }
    });
    arr.push(num);
  }
  return Math.max(...arr);
};
