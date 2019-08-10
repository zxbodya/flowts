import * as fs from 'fs';
import * as path from 'path';
import * as commander from 'commander';
import { FlowConfig } from './FlowConfig';
import * as globby from 'globby';

async function main(cwd: string, options: object) {
  // is git repository and have uncommitted changes - show error
  // if package.json not exist - show
  let packageJsonPath = path.join(cwd, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error(
      `${packageJsonPath} not found, make sure to point to project root`
    );
    return;
  }

  let packageLockJsonPath = path.join(cwd, 'package-lock.json');
  const isNpm = fs.existsSync(packageLockJsonPath);
  let yarnLock = path.join(cwd, 'yarn.lock');
  const isYarn = fs.existsSync(yarnLock);

  let packageManager: 'npm' | 'yarn' = isNpm ? 'npm' : isYarn ? 'yarn' : 'npm';
  if (isYarn && isNpm) {
    console.warn('detected both yarn and npm - using npm');
  } else if (!isYarn && !isNpm) {
    console.warn('no package manager specific lock file found - using npm');
  } else {
    console.log(`detected package manager: ${packageManager}`);
  }

  let flowConfigPath = path.join(cwd, '.flowconfig');
  const flowConfig = new FlowConfig(cwd);
  if (!fs.existsSync(flowConfigPath)) {
    console.warn('.flowconfig is not found in project root');
    // todo: case when .flowconfig is in subfolder, like src/.flowconfig
  } else {
    flowConfig.parse(fs.readFileSync(flowConfigPath, { encoding: 'utf-8' }));
  }

  const nestedProjects = globby.sync('**/package.json', {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**'],
    gitignore: true,
  });

  const ignore = nestedProjects.map(path =>
    path.replace(/\/package.json$/, '**/*')
  );

  const files = globby.sync('**/*.{js,jsx,js.flow}', {
    cwd,
    onlyFiles: true,
    dot: true,
    ignore: ['**/node_modules/**'].concat(ignore),
    gitignore: true,
  });

  // flow included files
  // flow untyped
  // flow ignored

  // flow + ts -> rules
}

const program = new commander.Command()
  .name('flowts')
  .usage('./src')
  .parse(process.argv);

Promise.all(program.args.map(dir => main(dir, program.opts()))).then(
  () => {
    console.log('done');
  },
  e => {
    console.error(e);
  }
);
