/**
 * 执行用时：148 ms
 * 内存消耗：41.7 MB
 */
export function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;

  const map: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!map[j]) map[j] = [];
      map[j][i] = matrix[i][j];
    }
  }
  return map;
};
