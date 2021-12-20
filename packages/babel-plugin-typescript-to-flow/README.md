# babel-plugin-typescript-to-flow

[Babel] plugin to convert [TypeScript] code into [Flow]

If you are looking for converting `.d.ts` files to Flow definitions - be sure check [flowgen] first.

## Usage 

Most convenient - via `tsflow` utility, which currently is part of [flowts](https://github.com/zxbodya/flowts).

## Usage as babel plugin:

Installation:

```
npm install babel-plugin-typescript-to-flow
```

Plugin options:

```
{
  // should be true when source code is from `d.ts` file
  isAmbientContext: boolean 
}
``` 

## Why? 
While main goal of this repository is to do the opposite (to help migrate from Flow to TypeScript),
in many cases it is preferable to do so gradually.
 
Especially when having multiple other projects depending on support for Flow.
To do so there is a need to generate Flow type definitions from TypeScript `.d.ts` files.

Why not [flowgen]:

 - this should be similar to "flow to typescript", and so - keeping it simpler.
 - because this plugin manipulates AST instead of generating the text directly - there is a bit more flexibility about what is possible.   

However, [flowgen] does wonderful job converting the definitions files.
There are probably cases where it currently does better job comparing to this plugin. 

## Purpose

The focus is on converting `.d.ts` files.

However, it is not limited to only definition files, and a lot of features already are supported.

## Status

Still work in progress. Some features are missing.

For the test cases that might be not covered - check `test` folder, there are some skipped test cases, to be implemented. 

[babel]: https://github.com/babel/babel
[flow]: https://github.com/facebook/flow
[typescript]: https://github.com/Microsoft/TypeScript
[flowgen]: (https://github.com/joarwilk/flowgen)
