# Flow to Typescript

## Usage:

`npm install -g flowts`

```
Usage: flowts [options] ./path/to/project

Flow to TypeScript migration tool

Options:
  -V, --version                output the version number
  -R, --no-recast              use babel generator instead of recast
  -P, --no-prettier            do not run prettier on converted code
  --no-allow-js                convert all JS files to TypeScript(including without Flow)
  --no-remove                  keep js files after appropriate ts files were created
  -i, --include <includeGlob>  Glob expression of files to include, default: "**/*.{js,mjs,jsx,js.flow}" (default: "**/*.{js,mjs,jsx,js.flow}")
  -x, --exclude <excludeGlob>  Additional excludes glob expression (by default node_modules and files from .gitignore is excluded) (default: "**/node_modules/**")
  -h, --help                   output usage information

```

