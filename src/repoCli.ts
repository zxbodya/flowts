import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { convertRepository } from './convertRepository';

export interface Options {
  readonly recast: boolean;
  readonly prettier: boolean;
}

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('flowts')
  .version(pkg.version)
  .description('Migrate project at specified path')
  .option('-R, --no-recast', 'use babel generator instead of recast', false)
  .option('-P, --no-prettier', 'do not run prettier on converted code', false)
  .usage('path/to/git/repository')
  .parse(process.argv);

const args = program.args;
const opts = program.opts() as Options;

if (args.length === 0) {
  console.error('Please specify project root');
  process.exit(1);
}
if (args.length > 1) {
  console.error('Only one project root can be specified');
  process.exit(1);
}

convertRepository(args[0], opts).then(
  () => {
    console.log('done');
    process.exit(0);
  },
  e => {
    console.error(e);
    process.exit(1);
  }
);
