import assert from 'assert';
import glob from 'glob';
import path from 'path';
import chalk from 'chalk';

export const startTest = (cwd: string, functionName: string, units: Array<[any[], any]>) => {
  const result: [number, [string, number, {source: any, target: any}][]] = [0, []];

  console.log(`Q ${path.basename(cwd)}`);
  const filenames = glob.sync("*[^.spec|.d].ts", { cwd });
  if (filenames.length === 0) {
    console.error('-', chalk.bgYellow('Miss File'));
  }
  filenames.forEach((filename) => {
    const fnPath = path.resolve(cwd, filename);
    const fnModule = require(fnPath)
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
      const startAt = process.hrtime.bigint();
      const source = fn(...unit[0]);
      const target = unit[1];
      try {
        assert.deepStrictEqual(source, unit[1]);
        const cost = process.hrtime.bigint() - startAt;
        console.log('-', filename, `[${index}]`, chalk.green('Pass'), chalk.green(`[${cost / BigInt(1000)}μs]`));
        result[0] += 1;
      } catch (error) {
        console.log('-', filename, `[${index}]`, chalk.red('Fail'));
        result[1].push([fnPath, index, { source, target }]);
      }
    });
  });

  return result;
};

