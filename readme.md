# FlowTS 

Tooling to help in migration from Flow to TypeScript, or from TypeScript to Flow(work in progress).

Current status:

 - Flow to TypeScript already works quite well
 - TypeScript to Flow still very much work in progress - currently mostly focused on definitions files(to help automate type generation for Flow users)

## Flow to TypeScript:

`npm install -g flowts`

```
Usage: flowts [options] ./path/to/project

Flow to TypeScript migration tool

Options:
  -V, --version                output the version number
  -R, --no-recast              use babel generator instead of recast
  -P, --no-prettier            do not run prettier on converted code
  --no-allow-js                convert all JS files to TypeScript(including without Flow)
  --interactive-rename         Wait for interactive confirmation after renaming, before writing converted code 
                                 (allowing to have separate commit to better preserve file history) (default: false)
  -i, --include <includeGlob>  Glob expression of files to include,
                               default: "**/*.{js,mjs,jsx,js.flow}" (default: "**/*.{js,mjs,jsx,js.flow}")
  -x, --exclude <excludeGlob>  Additional excludes glob expression (by default node_modules 
                               and files from .gitignore is excluded) (default: "**/node_modules/**")
  -h, --help                   display help for command
```


### How it works

1. Convert source code using: [babel-plugin-flow-to-typescript](packages/babel-plugin-flow-to-typescript)
2. Do some additional fixes for types embedded in flow library (for example react types are somewhat different from typescript version)
3. Prints code using recast (https://github.com/benjamn/recast), so most of the formatting is preserved.
4. Because not all formatting can be preserved - it also re-formats code using prettier (assumption is that converted codebase is using it, and there is configured in standard way, like having `.prettierrc`). Also be sure you already have prettier 2.0 (it needed for TypeScript 3.8)
5. Before writing converted file - script verifies that there are no changes other than type annotations (all errors are logged - so, be sure to check logs and to adjustments accordingly)

### Project priorities

1. Only type annotation should be changed, so code after migration is in "working" state
2. Type information should be preserved as much as possible
3. When possible formatting and comments should be preserved

### Cavearts

There might be unexpected formatting changes, or bugs related to using recast - it is good, but there can be bugs…

Rarely, but sometimes:

- there might be unexpected formatting changes
- some comments might be removed

## TypeScript to Flow (work in progress - consider this experimental)

Currently, focused mostly on definition files - see more details in [babel-plugin-typescript-to-flow](packages/babel-plugin-typescript-to-flow) readme. 

Generates `.js`/`.js.flow` files, without removing original `.ts`/`.d.ts` files.   

```
Usage: tsflow [options] ./path/to/project

TypeScript to Flow migration tool

Options:
  -V, --version                output the version number
  -r, recast                   use recast instead of babel generator(warning: not working correctly in some cases) (default: false)
  -P, --no-prettier            do not run prettier on converted code
  -i, --include <includeGlob>  Glob expression of files to include, default: "**/*.{ts}" (default: "**/*.ts")
  -x, --exclude <excludeGlob>  Additional excludes glob expression (by default node_modules and files from .gitignore is excluded) (default: [])
  -h, --help                   display help for command
```
