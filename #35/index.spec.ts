import { startTest } from '../utils';

const fnName = 'searchInsert';
const units: Array<[any[], any]> = [
  [[[1,3,5,6], 5], 2],
  [[[1,3,5,6], 2], 1],
  [[[1,3,5,6], 7], 4],
  [[[1,3,5,6], 0], 0],
];

startTest(__dirname, fnName, units);
