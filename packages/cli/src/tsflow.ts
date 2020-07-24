import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { convert } from './convertToFlow';

export interface Options {
  readonly recast: boolean;
  readonly prettier: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly interactiveRename: boolean;
}

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('tsflow')
  .version(pkg.version)
  .description('TypeScript to Flow migration tool')
  .option(
    '-r, recast',
    'use recast instead of babel generator(warning: likely not working correctly in some cases)',
    false
  )
  .option('-P, --no-prettier', 'do not run prettier on converted code', false)
  .usage('[options] ./path/to/project')
  // .option(
  //   '--interactive-rename',
  //   'Wait for interactive confirmation after renaming, before writing converted code (allowing to have separate commit to better preserve file history)',
  //   false
  // )
  .option(
    '-i, --include <includeGlob>',
    'Glob expression of files to include, default: "**/*.{ts}"',
    '**/*.ts'
  )
  .option<string[]>(
    '-x, --exclude <excludeGlob>',
    'Additional excludes glob expression (by default node_modules and files from .gitignore is excluded)',
    (a, b) => [...b, a],
    []
  )
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

convert(args[0], opts).then(
  () => {
    console.log('done');
    process.exit(0);
  },
  e => {
    console.error(e);
    process.exit(1);
  }
);
