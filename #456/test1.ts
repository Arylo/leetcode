/**
 * 执行用时：1476 ms
 * 内存消耗：53.3 MB
 */
export function find132pattern(nums: number[]): boolean {
  if (nums.length < 3) return false;
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const leftArr = nums.slice(0, maxIndex);
  if (!(maxIndex === 0 || maxIndex === nums.length - 1)) {
    const min = Math.min(...leftArr);
    const rightArr = nums.slice(maxIndex + 1).filter(v => v < max);
    if (rightArr.length > 0) {
      const result = Math.max(...rightArr) > min;
      if (result) return result;
    }
  }
  nums.splice(maxIndex, 1)
  return find132pattern(nums);
};
