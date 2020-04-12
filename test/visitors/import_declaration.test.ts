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
      title: 'import type specifier with comment',
      code: `// comment
import A, { type B, C } from "module";`,
      output: `// comment
import A, { C } from "module";
import type { B } from "module";`,
    },
    {
      title: 'mixed type imports',
      code: `import type A, { B } from "module";`,
      output: `import type A from "module";
import type { B } from "module";`,
    },
    {
      title: 'mixed type imports with comments',
      code: `// comment
import type A, { B } from "module";`,
      output: `// comment
import type A from "module";
import type { B } from "module";`,
    },
    {
      title: 'import typeof',
      code: `import typeof * as N from "a";
import typeof { A } from "a";
import { typeof B } from "a";
import typeof C from "a";
import { typeof D, type E } from "a";
import { F, typeof G } from "a";
import { H, type I, typeof J } from "a";`,
      output: `type N = typeof import("a");
type A = typeof import("a").A;
type B = typeof import("a").B;
type C = typeof import("a").default;
import type { E } from "a";
type D = typeof import("a").D;
import { F } from "a";
type G = typeof import("a").G;
import { H } from "a";
type J = typeof import("a").J;
import type { I } from "a";`,
    },
  ],
});
