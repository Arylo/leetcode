import { startTest } from '../utils';

const fnName = 'reverseBits';
const units: Array<[any[], any]> = [
  [
    [43261596], 
    964176192,
  ],
  [
    [4294967293], 
    3221225471,
  ],
  [
    [43261596], 
    964176192,
  ],
  [
    [4294967293], 
    3221225471,
  ],
];

export default startTest(__dirname, fnName, units);
