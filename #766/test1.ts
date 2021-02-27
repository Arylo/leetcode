/**
 * 执行用时：112 ms
 * 内存消耗：39.7 MB
 */
export function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
    }
  }

  return true;
};
