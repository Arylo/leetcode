import { startTest } from '../utils';

const fnName = 'isMonotonic';
const units: Array<[any[], any]> = [
  [
    [[1,2,2,3]],
    true,
  ],
  [
    [[6,5,4,4]],
    true,
  ],
  [
    [[1,3,2]],
    false,
  ],
  [
    [[1,2,4,5]],
    true,
  ],
  [
    [[1,1,1]],
    true,
  ],
];

export default startTest(__dirname, fnName, units);
