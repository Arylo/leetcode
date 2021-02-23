import assert from 'assert';
import glob from 'glob';
import path from 'path';

export const startTest = (cwd: string, functionName: string, units: Array<[any[], any]>) => {
  console.log(`Q ${path.basename(cwd)}`);
  const filenames = glob.sync("*[^.spec].ts", { cwd });
  if (filenames.length === 0) {
    console.error('-', 'Miss File');
  }
  filenames.forEach((filename) => {
    const fnModule = require(path.resolve(cwd, filename))
    const fn = fnModule[functionName];
    if (typeof fn !== 'function') {
      console.error('-', functionName, 'Miss');
      return;
    }

    try {
      units.forEach((unit, index) => {
        assert.deepStrictEqual(fn(...unit[0]), unit[1]);
      });
      console.log('-', filename, 'Pass');
    } catch (error) {
      console.log('-', filename, 'Fail');
    }
  });
};

