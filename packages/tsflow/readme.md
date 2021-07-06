# Flow to Typescript

## Usage:

`npm install -g tsflow`

```
Usage: tsflow [options] ./path/to/project

TypeScript to Flow migration tool

Options:
  -V, --version                output the version number
  -r, recast                   use recast instead of babel generator(warning:
                               not working correctly in some cases) (default:
                               false)
  -P, --no-prettier            do not run prettier on converted code
  -i, --include <includeGlob>  Glob expression of files to include, default:
                               "**/*.{ts}" (default: "**/*.ts")
  -x, --exclude <excludeGlob>  Additional excludes glob expression (by default
                               node_modules and files from .gitignore is
                               excluded) (default: [])
  -h, --help                   display help for command
```

## Cavearts

this is very much work in progress, and if converting just type definitions - flowgen likely is a better option
