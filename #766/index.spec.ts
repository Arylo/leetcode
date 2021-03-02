import { startTest } from '../utils';

const fnName = 'isToeplitzMatrix';
const units: Array<[any[], any]> = [
  [
    [[[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]]],
    true,
  ],
  [
    [[[1, 2], [2, 2]]],
    false,
  ],
  [
    [[[11, 74, 0, 93], [40, 11, 74, 7]]],
    false,
  ],
];

export default startTest(__dirname, fnName, units);
