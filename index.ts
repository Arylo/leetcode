import glob from 'glob';
import path from 'path';

glob.sync('#*/index.spec.ts', { cwd: __dirname }).forEach((filename) => {
  return require(path.resolve(__dirname, filename));
});
