import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { convert } from './convert';

export interface Options {
  readonly recast: boolean;
  readonly prettier: boolean;
  readonly allowJs: boolean;
  readonly remove: boolean;
  readonly include: string;
  readonly exclude: string;
  readonly justRename: boolean;
  readonly inPlace: boolean;
}

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('flowts')
  .version(pkg.version)
  .description('Flow to TypeScript migration tool')
  .option('-R, --no-recast', 'use babel generator instead of recast', false)
  .option('-P, --no-prettier', 'do not run prettier on converted code', false)
  .option(
    '-j, --just-rename',
    "just rename the files; don't convert them",
    false
  )
  .option(
    '-i, --in-place',
    'convert files in place without renaming them',
    false
  )
  .usage('[options] ./path/to/project')
  .option(
    '--no-allow-js',
    'convert all JS files to TypeScript(including without Flow)',
    false
  )
  .option(
    '--no-remove',
    'keep js files after appropriate ts files were created',
    false
  )
  .option(
    '-i, --include <includeGlob>',
    'Glob expression of files to include, default: "**/*.{js,mjs,jsx,js.flow}"',
    '**/*.{js,mjs,jsx,js.flow}'
  )
  .option(
    '-x, --exclude <excludeGlob>',
    'Additional excludes glob expression (by default node_modules and files from .gitignore is excluded)',
    '**/node_modules/**'
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

if (opts.inPlace && opts.justRename) {
  console.error("Can't use --in-place and --just-rename together");
  process.exit(1);
}
if (!opts.remove && opts.inPlace) {
  console.warn('--no-remove does nothing when --in-place is set');
}
if (!opts.remove && opts.justRename) {
  console.warn('--no-remove does nothing when --just-rename is set');
}
if (!opts.recast && opts.justRename) {
  console.warn('--no-recast does nothing when --just-rename is set');
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
