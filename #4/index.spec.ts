import { startTest } from '../utils';

const fnName = 'findMedianSortedArrays';
const units: Array<[any[], any]> = [
  [[[1, 3], [2]], 2.00000],
  [[[1, 2], [3, 4]], 2.50000],
  [[[0, 0], [0, 0]], 0.00000],
  [[[], [1]], 1.00000],
  [[[2], []], 2.00000],
];

export default startTest(__dirname, fnName, units);
