import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { detectOptions, SourceOptions } from './detectOptions';
import * as readPkg from 'read-pkg';
import { PackageJson } from 'read-pkg';
import { Options } from './repoCli';
import { VERSION } from './config';
import inquirer from 'inquirer';

interface PackageFileInfo {
  packagePath: string;
  packageData: PackageJson;
  // hasPackageErrors: boolean;
}

type NamedPackageFileInfo = PackageFileInfo & {
  hasPackageErrors: false;
  packageData: { name: string };
};
const configFileName = 'flow-ts-config.json';

function readConfig(configPath: string) {
  return JSON.parse(fs.readFileSync(configPath, { encoding: 'utf8' }));
}

function writeConfig(configPath: string, configData: any) {
  const data = JSON.stringify(configData, null, 2);
  return fs.writeFileSync(configPath, data, {
    encoding: 'utf8',
  });
}

export async function convertRepository(repoPath: string, options: Options) {
  const configPath = path.resolve(repoPath, configFileName);
  const config: {
    recast: boolean;
    packages: { [k: string]: {} };
    version: string;
    prettier: boolean;
  } = {
    version: VERSION,
    prettier: options.prettier,
    recast: options.recast,
    // todo: allowJS
    // todo: gitignore
    // todo: ignores: [],
    packages: {
      // path => config
    },
  };

  if (fs.existsSync(configPath)) {
    try {
      const existingConfig = readConfig(configPath);
      // todo: improve config loading, considering
      // - tool version
      // - possibility of some files to be removed
      // - new ignores added effectively ignoring some packages
      // - etc
      Object.assign(config, existingConfig);
      console.log('Config was loaded');
    } catch (e) {
      console.log('Failing to load config file. Exiting.');
      console.error(e);
      process.exit(1);
    }
  } else {
    console.log('no configuration file found, generating it');
    writeConfig(configPath, config);
  }

  console.log(
    'Searching for package.json files, to detect separate packages in repository'
  );
  const packagePaths = await globby('**/package.json', {
    cwd: repoPath,
    onlyFiles: true,
    gitignore: true,
    followSymbolicLinks: false,
    dot: true,
    ignore: ['**/node_modules/**'],
  });
  console.log(`${packagePaths.length} packages found.`);
  console.log('Processing package data');
  const newIgnores = [];
  let newPackages = 0;
  const packages: PackageFileInfo[] = [];

  // todo: rearrange packages into tree before processing
  for (const packagePath of packagePaths) {
    if (config.packages[packagePath]) continue;
    let packageData!: readPkg.PackageJson;
    let packageErrors;
    const retry = true;
    while (retry) {
      try {
        packageData = readPkg.sync({
          cwd: path.dirname(path.resolve(repoPath, packagePath)),
        });
      } catch (e) {
        packageErrors = e;
        console.error(`Error loading package.json:\n  - ${packagePath}\n`);
        console.error(packageErrors);
        const [answer] = await inquirer.prompt([
          {
            type: 'list',
            options: [
              {
                name: 'Retry',
                value: 'retry',
              },
              {
                name: 'Ignore files in package',
                value: 'ignore',
              },
              {
                name:
                  'Ignore package (if part of other package - files would be converted)',
                value: 'ignore-package',
              },
            ],
          },
        ]);

        if (answer === 'retry') {
          continue;
        } else if (answer === 'ignore') {
          newIgnores.push(path.join(path.dirname(packagePath), '**'));
        } else if (answer === 'ignore-package') {
          newIgnores.push(packagePath);
        } else {
          console.error('Unexpected choice ' + answer);
          process.exit(1);
        }
      }

      if (!packageData.name) {
        console.log('Package name if missing in file:\n  ' + packagePath);
        const [answer] = await inquirer.prompt([
          {
            type: 'list',
            options: [
              {
                name:
                  'Use as unnamed (can not be used as dependency by other packages in repository)',
                value: 'unnamed',
              },
              {
                name: 'Reload',
                value: 'retry',
              },
            ],
          },
        ]);

        if (answer === 'retry') {
          continue;
        } else if (answer === 'unnamed') {
          config.packages[packagePath] = {};
          newPackages += 1;
        } else {
          console.error('Unexpected choice ' + answer);
          process.exit(1);
        }
      }

      packages.push({
        packagePath,
        packageData,
      } as PackageFileInfo);
    }
  }
  console.log(`${newPackages} new packages added to configuration`);
  console.log(
    'Checking package names, to detect dependencies between packages'
  );
  const namedPackages = new Map<string, NamedPackageFileInfo>();
  for (const info of packages) {
    const name = info.packageData.name;
    if (!name) continue;
    const existingNamed = namedPackages.get(name);
    if (existingNamed) {
      console.error(
        [
          `Duplicate package names "${name}", in files:`,
          `  - ${info.packagePath}`,
          `  - ${existingNamed.packagePath}`,
        ].join('\n')
      );
      // todo: ignore folder?
      continue;
    }

    // todo: (?) interactive UI
    // todo: (?) retry mechanism

    namedPackages.set(name, info as NamedPackageFileInfo);
  }
  console.log('Detecting nested packages, to be converted separately');

  interface FolderInfo {
    packageInfo?: PackageFileInfo;
    children: Map<string, FolderInfo>;
  }

  const rootFolder: FolderInfo = {
    children: new Map(),
    packageInfo: undefined,
  };

  for (const info of packages) {
    const parts = info.packagePath.split('/');
    if (parts.length === 1) {
      rootFolder.packageInfo = info;
    }
    for (
      let index = 0, l = parts.length - 1, currentFolders = rootFolder.children;
      index < l;
      index += 1
    ) {
      const name = parts[index];
      let folder = currentFolders.get(name);
      if (!folder) {
        folder = {
          children: new Map(),
          packageInfo: undefined,
        };
        currentFolders.set(name, folder);
      }
      // last part
      if (index === l - 1) {
        folder.packageInfo = info;
      }
      currentFolders = folder.children;
    }
  }

  function walkFolders(
    rootFolder: FolderInfo
  ): Array<{
    packageInfo: PackageFileInfo;
    excludes: string[][];
    parts: string[];
  }> {
    const packages = [];

    for (const [name, folder] of rootFolder.children) {
      const r = walkFolders(folder);
      packages.push(
        ...r.map(({ excludes, packageInfo, parts }) => ({
          packageInfo,
          parts: [name, ...parts],
          excludes: excludes.map(e => [name, ...e]),
        }))
      );
    }
    if (rootFolder.packageInfo) {
      packages.push({
        packageInfo: rootFolder.packageInfo,
        parts: [],
        excludes: packages.map(({ parts }) => parts),
      });
    }
    return packages;
  }

  const packagesWithExcludes = walkFolders(rootFolder);

  console.log('Generating configuration for migration');

  const baseConfig = {
    // glob for matching source files
    sources: '**/*.{js,mjs,jsx,js.flow}',
    // globs to ignore some files
    ignores: ['**/node_modules/**'],
    // npm org names to look for typings
    // typeRoots: ['@types'],
  };

  // todo: (?) confirm config
  // todo: (?) save intermediate results

  // scan files for
  //  - parse errors
  //  - need for allowJs
  //  - module usages

  let currentPackageNumber = 1;

  for (const { packageInfo, excludes } of packagesWithExcludes) {
    console.log(
      `[${currentPackageNumber}/${packagesWithExcludes.length}] package: ${
        packageInfo.packageData.name
          ? `${packageInfo.packageData.name} (${packageInfo.packagePath})`
          : `${packageInfo.packagePath}`
      }`
    );
    currentPackageNumber += 1;

    const config = {
      ...baseConfig,
      sources: packageInfo.packagePath.replace(
        'package.json',
        baseConfig.sources
      ),
      ignores: baseConfig.ignores.concat(
        excludes.map(e => `${e.join('/')}/**`)
      ),
    };

    console.log(
      `Searching for source files matching ${
        config.sources
      }\nIgnoring files matching:\n${config.ignores.map(i => `  - ${i}`)}`
    );

    const files = globby.sync(config.sources, {
      cwd: repoPath,
      onlyFiles: true,
      dot: true,
      ignore: config.ignores,
      gitignore: true,
    });

    console.log(`found ${files.length} files`);
    console.log('detecting options (jsx, dependencies used in code)');

    const sources = [];
    let currentFileNumber = 1;
    for (const relativePath of files) {
      console.log(`[${currentFileNumber}/${files.length}] ${relativePath}`);
      currentFileNumber += 1;
      const filepath = path.join(repoPath, relativePath);
      const source = fs.readFileSync(filepath, { encoding: 'utf8' });
      let options: SourceOptions;
      try {
        options = detectOptions(source, relativePath);
        sources.push({ relativePath, source, options });
      } catch (e) {
        console.error(
          [`Failed to parse source code in file:`, `  - ${relativePath}`].join(
            '\n'
          )
        );
        console.error(e);
        // todo:
        //  - ignore file
        //  - retry
        //  - ignore folder (^, ^^, …)
      }
    }

    console.log('combining usage info');
    const declaredDependencies = {};
    if (packageInfo.packageData) {
      Object.assign(
        declaredDependencies,
        packageInfo.packageData.peerDependencies,
        packageInfo.packageData.devDependencies,
        packageInfo.packageData.dependencies
      );
    }
    const usedDependencies = new Set();
    const usedImports = new Set();
    const usedFlowImports = new Set();
    let hasJSX = false;
    let hasJS = false;
    for (const { relativePath, options } of sources) {
      if (options.isJSX) {
        hasJSX = true;
      }
      if (!options.isFlow) {
        hasJS = true;
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      for (const [importName] of options.imports) {
        const isRelative = importName.startsWith('.');
        if (isRelative) {
          const resolvedImport = path
            .resolve('/' + path.dirname(relativePath), importName)
            .substr(1);
          usedImports.add(resolvedImport);
          if (options.isFlow) {
            usedFlowImports.add(resolvedImport);
          }
        } else {
          usedDependencies.add(importName.split('/')[0]);
        }
      }
    }
    const tsconfig: {
      compilerOptions: {
        allowJs?: boolean;
        jsx?: 'react' | 'react-native' | 'preserve' | 'none';
        strict?: boolean;
      };
    } = {
      compilerOptions: {
        strict: false,
      },
    };

    if (hasJS) {
      tsconfig.compilerOptions.allowJs = true;
    }
    if (hasJSX) {
      tsconfig.compilerOptions.jsx = 'react';
    }
  }
  // todo: (?) unused dependencies - suggest deleting them
  // todo: git ignores

  // install dependency intersection without monorepo projects into temporary folder
  // check types:
  //  - builtin ts
  //  - builtin flow
  //  - installed flow-def
  //  - external definitely typed
  //  - internal definitely typed (?)

  return packages;
  // todo: do not follow symlinks
}
