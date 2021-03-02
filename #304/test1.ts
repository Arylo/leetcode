export function sumRegion(matrix: number[][], row1: number, col1: number, row2: number, col2: number) {
  return new NumMatrix(matrix).sumRegion(row1, col1, row2, col2);
}

/**
 * 执行用时：216 ms
 * 内存消耗：43 MB
 */
class NumMatrix {
  private matrix: number[][] = [];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let total = 0;
    for (let i = row1; i < row2 + 1; i++) {
      for (let j = col1; j < col2 + 1; j++) {
        total += this.matrix[i][j];
      }
    }
    return total;
  }
}
