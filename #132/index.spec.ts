import { startTest } from '../utils';

const fnName = 'minCut';
const units: Array<[any[], any]> = [
  [
    ['aab'], 
    1,
  ],
  [
    ['a'], 
    0,
  ],
  [
    ['ab'], 
    1,
  ],
  [
    ['dabbac'], 
    2,
  ],
  [
    ['dabbaccb'], 
    3,
  ],
  [
    ['efe'], 
    0,
  ],
  [
    ['coder'], 
    4,
  ],
  [
    ['cabababcbc'], 
    3,
  ],
  [
    ['aaabaa'], 
    2,
  ],
  [
    ['aabaaa'], 
    2,
  ],
];

export default startTest(__dirname, fnName, units);
