import glob from 'glob';
import path from 'path';

glob.sync('#*/index.spec.ts', { cwd: __dirname })
  .sort((a, b) => {
    return Number(path.dirname(a).replace('#', '')) - Number(path.dirname(b).replace('#', ''));
  })
  .forEach((filename) => {
    return require(path.resolve(__dirname, filename));
  });
