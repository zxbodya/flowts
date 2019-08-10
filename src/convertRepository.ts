import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { detectOptions, SourceOptions } from './detectOptions';
import * as readPkg from 'read-pkg';
import { PackageJson } from 'read-pkg';

interface PakageFileInfo {
  packagePath: string;
  packageData: PackageJson;
  hasPackageErrors: boolean;
}

type NamedPakageFileInfo = PakageFileInfo & {
  hasPackageErrors: false;
  packageData: { name: string };
};

async function prepare(repoPath: string) {
  console.log('Migration from Flow to TypeScript started!');
  console.log('Searching for package.json files');
  const packagePaths = await globby('**/package.json', {
    cwd: repoPath,
    onlyFiles: true,
    gitignore: true,
    followSymbolicLinks: false,
    dot: true,
    ignore: ['**/node_modules/**'],
  });
  console.log(`${packagePaths.length} files found.`);
  console.log('Loading package data');
  const packages: PakageFileInfo[] = [];
  for (const packagePath of packagePaths) {
    let packageData;
    let hasPackageErrors = false;
    try {
      packageData = readPkg.sync({
        cwd: path.dirname(path.resolve(repoPath, packagePath)),
      });
    } catch (e) {
      console.error(`Error loading package.json:\n  - ${packagePath}\n`);
      console.error(e);
      hasPackageErrors = true;
    }

    packages.push({
      packagePath,
      packageData,
      hasPackageErrors,
    } as PakageFileInfo);
  }
  console.log(`${packages.length} successfully loaded`);
  console.log(
    'Checking package names, to detect dependencies between packages'
  );
  const namedPackages = new Map<string, NamedPakageFileInfo>();
  for (const info of packages) {
    if (info.hasPackageErrors) continue;
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

    namedPackages.set(name, info as NamedPakageFileInfo);
  }
  console.log('Detecting nested packages, to be converted separately');
  interface FolderInfo {
    packageInfo?: PakageFileInfo;
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
    packageInfo: PakageFileInfo;
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

prepare('../yarn')
  .catch(e => {
    console.error(e);
  })
  .then(() => process.exit(0));
