import * as commander from 'commander';
import * as fs from 'fs';
import * as path from 'path';

import { convert } from './convert';
import readline from 'readline';

import util from 'util';
import { exec as exec_cb } from 'child_process';
const exec = util.promisify(exec_cb);

export interface Options {
  readonly recast: boolean;
  readonly prettier: boolean;
  readonly allowJs: boolean;
  readonly gitignore: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly interactiveRename: boolean;
  readonly commitRenameCommand: string;
  readonly dryRun: boolean;
  readonly legacyImports: boolean;
  readonly keepAnnotatedJs: boolean;
}

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('flowts')
  .version(pkg.version)
  .description('Flow to TypeScript migration tool')
  .option('-R, --no-recast', 'use babel generator instead of recast', true)
  .option('-P, --no-prettier', 'do not run prettier on converted code', true)
  .option(
    '--no-gitignore',
    'also convert files which are listed in gitignore files',
    true
  )
  .usage('[options] ./path/to/project')
  .option(
    '--no-allow-js',
    'convert all JS files to TypeScript(including without Flow)',
    true
  )
  .option(
    '--keep-annotated-js',
    'do not rename js files without types even if there is @flow/@noflow annotation',
    false
  )
  .option(
    '--interactive-rename',
    'Wait for interactive confirmation after renaming, before writing converted code (allowing to have separate commit to better preserve file history)',
    false
  )
  .option(
    '--commit-rename-command <commitRenameCommand>',
    'Command to commit file renames. To be used instead of interactive-rename',
    ''
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
  .option(
    '--remove-all-import-extensions',
    'When enabled - removes all converted file extensions in relative imports (by default only extensions for converted files are removed)',
    false
  )
  .option(
    '--keep-import-extensions',
    'Disables removal of converted file extensions in imports for converted files(can to result in unresolved imports, if for example ".js" was in import for converted file)',
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

const {
  exclude: excludeGlobs,
  interactiveRename,
  commitRenameCommand,
  ...restOptions
} = opts;

const convertOptions = {
  ...restOptions,
  exclude: ['**/node_modules/**', ...excludeGlobs],
  renameHook:
    interactiveRename || commitRenameCommand
      ? async () => {
          if (commitRenameCommand) {
            const { stdout, stderr } = await exec(commitRenameCommand);
            console.log('stdout:', stdout);
            console.log('stderr:', stderr);
          } else {
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
