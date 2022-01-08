import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { convert } from './convert';
import readline from 'readline';

export interface Options {
  readonly recast: boolean;
  readonly prettier: boolean;
  readonly allowJs: boolean;
  readonly gitignore: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly interactiveRename: boolean;
  readonly dryRun: boolean;
  readonly legacyImports: boolean;
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
    '--no-gitignore',
    'also convert files which are listed in gitignore files',
    false
  )
  .usage('[options] ./path/to/project')
  .option(
    '--no-allow-js',
    'convert all JS files to TypeScript(including without Flow)',
    false
  )
  .option(
    '--interactive-rename',
    'Wait for interactive confirmation after renaming, before writing converted code (allowing to have separate commit to better preserve file history)',
    false
  )
  .option(
    '-i, --include <includeGlob>',
    'Glob expression of files to include, default: "**/*.{js,mjs,jsx,js.flow}"',
    '**/*.{js,mjs,jsx,js.flow}'
  )
  .option<string[]>(
    '-x, --exclude <excludeGlob>',
    'Additional excludes glob expression (by default node_modules and files from .gitignore is excluded)',
    (a, b) => [...b, a],
    []
  )

  .option('--dry-run', 'Do not save changes after migration', false)
  .option(
    '--legacy-imports',
    'Do not use mixed type/value imports allowed in TS 4.5+',
    false
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

const { exclude: excludeGlobs, interactiveRename, ...restOptions } = opts;

const convertOptions = {
  ...restOptions,
  exclude: ['**/node_modules/**', ...excludeGlobs],
  renameHook: interactiveRename
    ? async () => {
        await new Promise(resolve => {
          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
          });
          rl.question('Press <enter> to write converted code:', () => {
            rl.close();
            resolve(undefined);
          });
        });
      }
    : async () => {
        // do not wait - continue to writing the results
      },
};

convert(args[0], convertOptions).then(
  () => {
    console.log('done');
    process.exit(0);
  },
  e => {
    console.error(e);
    process.exit(1);
  }
);
