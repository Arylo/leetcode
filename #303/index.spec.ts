import { startTest } from '../utils';

const nums = [-2, 0, 3, -5, 2, -1];

const fnName = 'sumRange';
const units: Array<[any[], any]> = [
  [
    [nums, 0, 2],
    1,
  ],
  [
    [nums, 2, 5],
    -1,
  ],
  [
    [nums, 0, 5],
    -3,
  ],
];

export default startTest(__dirname, fnName, units);
