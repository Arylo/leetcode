import { startTest } from '../utils';

const fnName = 'countBits';
const units: Array<[any[], any]> = [
  [
    [2], 
    [0,1,1],
  ],
  [
    [5], 
    [0,1,1,2,1,2],
  ],
];

export default startTest(__dirname, fnName, units);
