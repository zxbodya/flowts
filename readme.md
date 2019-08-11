# Flow to Typescript

## Usage:

`npm install -g flowts`

```
Usage: flowts [options] [command]

Options:
  -V, --version                  output the version number
  -R, --no-recast                use babel generator instead of recast
  -P, --no-prettier              do not run prettier on converted code
  -h, --help                     output usage information

Commands:
  folder [options] [folders...]  Convert all files in specified folders
```

## Converting all js files in specified folders
 
```
Usage: flowts folder ./src ./test

Convert all files in specified folders

Options:
  --no-allow-js  convert all js files, including without flow to TypeScript
  --no-remove    keep js files after appropriate ts files were created
  -h, --help     output usage information

```
