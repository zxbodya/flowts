import * as commander from 'commander';
import * as fs from 'fs';
import { promises as promisesFS } from 'fs';

import * as path from 'path';

import { convert } from './convert';

import globby from 'globby';
import ora from 'ora';
import { updateComments } from './updateComments';

export interface Options {
  readonly prettier: boolean;
  readonly gitignore: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly dryRun: boolean;
}

const program = new commander.Command();

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')
);

program
  .name('flowts-uncomment-flow-types')
  .version(pkg.version)
  .description('Helper to uncomment flow types')
  .option(
    '--no-gitignore',
    'also include files which are listed in gitignore files',
    true
  )
  .usage('[options] ./path/to/project')
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

const { exclude: excludeGlobs, ...restOptions } = opts;

const convertOptions = {
  ...restOptions,
  exclude: ['**/node_modules/**', ...excludeGlobs],
};

type UncommentFlowTypesOptions = {
  readonly gitignore: boolean;
  readonly include: string;
  readonly exclude: string[];
  readonly dryRun: boolean;
};
async function uncommentFlowTypes(
  cwd: string,
  opts: UncommentFlowTypesOptions
) {
  console.log('options:', opts);
  const spinner = ora().start(`processing files in ${cwd}`);

  const files = await globby(opts.include, {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: opts.exclude,
    gitignore: opts.gitignore,
  });
  spinner.info('uncommenting types');
  const totalStr = `${files.length}`;
  let currentCount = 0;
  for (const file of files) {
    const currentStr = `${currentCount}`.padStart(totalStr.length, ' ');
    spinner.start(`[${currentStr}/${totalStr}] ${file}`);
    try {
      const filepath = path.join(cwd, file);
      const source = await promisesFS.readFile(filepath, { encoding: 'utf8' });

      const result = updateComments(
        source,
        comment => {
          const longExp = /^(?:::|flow-include\s)\s*(.*)$/s;
          // /*::
          // type MyAlias = {
          //   foo: number,
          //   bar: boolean,
          //   baz: string,
          // };
          // */

          // /*flow-include
          // type Foo = {
          //   foo: number,
          //   bar: boolean,
          //   baz: string
          // };
          // */

          // function method(param /*:: : string */) /*:: : number */ {
          const longMatch = comment.value.match(longExp);

          if (longMatch) {
            return { type: 'replace', code: longMatch[1] };
          }
          const shortExp = /^\s*:\s*(.*)$/s;
          // function method(value /*: MyAlias */) /*: boolean */ {
          const shortMatch = comment.value.match(shortExp);

          if (shortMatch) {
            return { type: 'replace', code: ':' + shortMatch[1] };
          }
          return { type: 'skip' };
        },
        {
          isJSX: true,
          syntax: 'flow',
          filename: filepath,
        }
      );

      if (!opts.dryRun) {
        await promisesFS.writeFile(filepath, result);
      }
    } catch (e) {
      spinner.fail(file);
      spinner.fail('error while trying to detect options');
      console.error(e);
      spinner.start();
    }
    currentCount += 1;
  }
  spinner.succeed('finished');
}

uncommentFlowTypes(args[0], convertOptions).then(
  () => {
    console.log('done');
    process.exit(0);
  },
  e => {
    console.error(e);
    process.exit(1);
  }
);
