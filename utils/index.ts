import assert from 'assert';
import glob from 'glob';
import path from 'path';
import chalk from 'chalk';

export const startTest = (cwd: string, functionName: string, units: Array<[any[], any]>) => {
  const result = [0, 0];

  console.log(`Q ${path.basename(cwd)}`);
  const filenames = glob.sync("*[^.spec].ts", { cwd });
  if (filenames.length === 0) {
    console.error('-', chalk.bgYellow('Miss File'));
  }
  filenames.forEach((filename) => {
    const fnModule = require(path.resolve(cwd, filename))
    const fn = fnModule[functionName];
    if (typeof fn !== 'function') {
      console.error('-', chalk.bgYellow(`Miss ${functionName}`));
      return;
    }
    if (units.length === 0) {
      console.error('-', chalk.bgYellow('Miss Units'));
      return;
    }

    units.forEach((unit, index) => {
      try {
        assert.deepStrictEqual(fn(...unit[0]), unit[1]);
        console.log('-', filename, `[${index}]`, chalk.green('Pass'));
        result[0] += 1;
      } catch (error) {
        console.log('-', filename, `[${index}]`, chalk.red('Fail'));
        result[1] += 1;
      }
    });
  });

  return result;
};

