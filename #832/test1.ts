/**
 * 执行用时：760 ms
 * 内存消耗：39.7 MB
 */
export function flipAndInvertImage(A: number[][]): number[][] {
  return A.map((a) => {
    return a.reverse().map((v) => v ? 0 : 1);
  });
};
