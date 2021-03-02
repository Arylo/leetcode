import { startTest } from '../utils';

const fnName = 'twoSum';
const units: Array<[any[], any]> = [
  [[[2,7,11,15], 9], [0,1]],
  [[[3,2,4], 6], [1,2]],
  [[[3,3], 6], [0,1]],
];

export default startTest(__dirname, fnName, units);
