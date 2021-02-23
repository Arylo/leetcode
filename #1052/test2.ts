/**
 * 执行用时：8888 ms
 * 内存消耗：42.8 MB
 */
export function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  let max = 0;
  for (let i = 0; i < customers.length - X + 1; i += 1) {
    let num = 0;
    customers.forEach((customer, index) => {
      if (grumpy[index] === 0 || (i <= index && index < i + X)) {
        num += customer;
      }
    });
    max < num && (max = num);
  }
  return max;
};
