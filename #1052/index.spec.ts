import { startTest } from '../utils';

const customers = [1, 0, 1, 2, 1, 1, 7, 5];
const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
const X = 3;

const fnName = 'maxSatisfied';
const units: Array<[any[], any]> = [
  [[customers, grumpy, X], 16],
];

export default startTest(__dirname, fnName, units);
