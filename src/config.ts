import * as fs from 'fs';
import * as path from 'path';

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

export const VERSION = pkg.version;
