import assert from 'assert';
import glob from 'glob';
import path from 'path';

const customers = [1, 0, 1, 2, 1, 1, 7, 5];
const grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
const X = 3;

const fnName = 'maxSatisfied';
const args = [customers, grumpy, X];
const result = 16;

console.log(`Q ${path.basename(__dirname)}`);
glob.sync("*[^.spec].ts", { cwd: __dirname }).forEach((filename) => {
  const fn = require(path.resolve(__dirname, filename))

  try {
    assert.deepStrictEqual(fn[fnName](...args), result);
    console.log('-', filename, 'Pass');
  } catch (error) {
    console.log('-', filename, 'Fail');
  }
});
