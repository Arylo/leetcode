import { startTest } from '../utils';

const fnName = 'removeDuplicates';
const units: Array<[any[], any]> = [
  [
    ['abbaca'], 
    'ca',
  ],
];

export default startTest(__dirname, fnName, units);
