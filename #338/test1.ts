/**
 * 执行用时：184 ms
 * 内存消耗：48.9 MB
 */
export function countBits(num: number): number[] {
  const results: number[] = [];
  for (let i = 0; i < num + 1; i++) {
    results.push(i.toString(2).replace(/0/g, '').length);
  }
  return results;
};
