import { startTest } from '../utils';

const fnName = 'calculate';
const units: Array<[any[], any]> = [
  [
    ["1 + 1"],
    2,
  ],
  [
    [" 2-1 + 2 "],
    3,
  ],
  [
    ["(1+(4+5+2)-3)+(6+8)"],
    23,
  ],
];

export default startTest(__dirname, fnName, units);
