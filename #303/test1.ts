export function sumRange(nums: number[], i: number, j: number) {
  return new NumArray(nums).sumRange(i, j);
}

/**
 * 执行用时：476 ms
 * 内存消耗：47.4 MB
 */
class NumArray {
  private nums: number[] = [];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(i: number, j: number): number {
    return this.nums.slice(i, j + 1).reduce((total, v) => (total += v), 0);
  }
}
