import { startTest } from '../utils';

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];

const fnName = 'sumRegion';
const units: Array<[any[], any]> = [
  [
    [matrix, 2, 1, 4, 3],
    8,
  ],
  [
    [matrix, 1, 1, 2, 2],
    11,
  ],
  [
    [matrix, 1, 2, 2, 4],
    12,
  ],
];

startTest(__dirname, fnName, units);
