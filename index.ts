import glob from 'glob';
import path from 'path';
import chalk from 'chalk';

const results = glob.sync('#*/index.spec.ts', { cwd: __dirname })
  .sort((a, b) => {
    return Number(path.dirname(a).replace('#', '')) - Number(path.dirname(b).replace('#', ''));
  })
  .map((filename) => {
    const m = require(path.resolve(__dirname, filename));
    return m.default ?? m;
  })
  .reduce((result, [p, f]) => {
    result[0] += p;
    result[1] += f;
    return result;
  });

console.log('--------------------------------')
console.log('------------ RESULT ------------')
console.log('--------------------------------')
results[0] && console.log(chalk.green(`${results[0]} PASS`))
results[1] && console.log(chalk.red(`${results[1]} FAIL`))
