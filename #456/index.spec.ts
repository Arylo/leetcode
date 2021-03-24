import { startTest } from '../utils';

const fnName = 'find132pattern';
const units: Array<[any[], any]> = [
  [
    [[1,2,3,4]], 
    false,
  ],
  [
    [[3,1,4,2]], 
    true,
  ],
  [
    [[-1,3,2,0]], 
    true,
  ],
  [
    [[1,4,0,-1,-2,-3,-1,-2]], 
    true,
  ],
  [
    [[-2,1,1]], 
    false,
  ],
];

export default startTest(__dirname, fnName, units);
