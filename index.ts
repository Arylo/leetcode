import glob from 'glob';
import path from 'path';
import chalk from 'chalk';

const results = glob.sync('#*/index.spec.ts', { cwd: __dirname })
  .sort((a, b) => {
    return Number(path.dirname(a).replace('#', '')) - Number(path.dirname(b).replace('#', ''));
  })
  .map<[number, [string, number, {source: any, target: any}][]]>((filename) => {
    const m = require(path.resolve(__dirname, filename));
    return m.default ?? m;
  })
  .reduce<[number, {path: string;index: number; result: {source: string; target: string;} }[]]>((result, [p, f]) => {
    result[0] += p;
    f.forEach((item) => {
      result[1].push({
        path: item[0],
        index: item[1],
        result: item[2],
      });
    });
    return result;
  }, [0, []]);

console.log('--------------------------------')
console.log('------------ RESULT ------------')
console.log('--------------------------------')

results[1].forEach(({path, index, result}) => {
  let [source, target] = [result.source, result.target];
  source = typeof source === 'object' ? JSON.stringify(source) : source;
  target = typeof target === 'object' ? JSON.stringify(target) : target;
  console.log(`
    [Unit${index}] ${path}
    ${chalk.white(`target: ${target}`)}
    ${chalk.white(`return: ${source}`)}
  `);
})
results[0] && console.log(chalk.green(`${results[0]} PASS`))
results[1].length && console.log(chalk.red(`${results[1].length} FAIL`))
