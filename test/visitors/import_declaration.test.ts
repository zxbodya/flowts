import * as pluginTester from 'babel-plugin-tester';
import plugin from '../../src';

pluginTester({
  plugin,
  tests: [
    {
      title: 'import type statement',
      code: `import type { A } from "module";
import type { B, C } from './mod';
import type D from './mod';`,
      output: `import type { A } from "module";
import type { B, C } from './mod';
import type D from './mod';`,
    },
    {
      title: 'import type specifier',
      code: `import A, { type B, C } from "module";
import { type D, type E } from "module";`,
      output: `import A, { C } from "module";
import type { B } from "module";
import type { D, E } from "module";`,
    },
    {
      title: 'mixed type imports',
      code: `import type A, { B } from "module";`,
      output: `import type A from "module";
import type { B } from "module";`,
    },
  ],
});
