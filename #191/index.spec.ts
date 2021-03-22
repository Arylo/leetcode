import { startTest } from '../utils';

const fnName = 'hammingWeight';
const units: Array<[any[], any]> = [
  [
    [parseInt('1011', 2)], 
    3,
  ],
  [
    [parseInt('10000000', 2)], 
    1,
  ],
  [
    [parseInt('11111111111111111111111111111101', 2)], 
    31,
  ],
];

export default startTest(__dirname, fnName, units);
