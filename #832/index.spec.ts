import { startTest } from '../utils';

const fnName = 'flipAndInvertImage';
const units: Array<[any[], any]> = [
  [
    [[[1,1,0],[1,0,1],[0,0,0]]],
    [[1,0,0],[0,1,0],[1,1,1]],
  ],
  [
    [[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]],
    [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]],
  ],
];

startTest(__dirname, fnName, units);
