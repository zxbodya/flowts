# babel-plugin-typescript-to-flow

[Babel] plugin to convert [TypeScript] code into [Flow]

If you are looking for converting `.d.ts` files to Flow definitions - be sure check [flowgen] first.

## Why? 
While main goal of this repository is to de the opposite (to help migrate from Flow to TypeScript),
in many cases it is preferable to do so gradually.
 
Especially when having multiple other projects depending on support for Flow.
To do so there is a need to generate Flow type definitions from TypeScript `.d.ts` files.

Why not [flowgen] - this should be similar to "flow to typescript", and so - keeping it simpler.

However, [flowgen] does wonderful job converting the definitions files. Also, as confirmed while doing this - because TypeScript has more language features, converting it to Flow is harder.

## Purpose

The focus is on converting `.d.ts` files.

However, it is not limited to only definition files, and many features already are supported.

## Status

Work in progress. Some features are missing.

Currently, not actively working on it - instead, to focus on using [flowgen].

For the test cases that might be not covered - check `test` folder, there are some skipped test cases, to be implemented. 

[babel]: https://github.com/babel/babel
[flow]: https://github.com/facebook/flow
[typescript]: https://github.com/Microsoft/TypeScript
[flowgen]: (https://github.com/joarwilk/flowgen)
