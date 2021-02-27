import { startTest } from '../utils';

const fnName = 'transpose';
const units: Array<[any[], any]> = [
  [
    [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
    [[1, 4, 7], [2, 5, 8], [3, 6, 9]],
  ],
  [
    [[[1, 2, 3], [4, 5, 6]]],
    [[1, 4], [2, 5], [3, 6]],
  ],
  [
    [[[2, 4, -1], [-10, 5, 11], [18, -7, 6]]],
    [[2, -10, 18], [4, 5, -7], [-1, 11, 6]],
  ],
];

startTest(__dirname, fnName, units);
