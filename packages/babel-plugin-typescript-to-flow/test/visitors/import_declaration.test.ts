import { testTransform } from '../transform';

xtest('import type statement', () => {
  const result = testTransform(`import type { A } from "module";
import type { B, C } from './mod';
import type D from './mod';`);
  const flow = `import type { A } from "module";
import type { B, C } from './mod';
import type D from './mod';`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('import type specifier', () => {
  const result = testTransform(`import A, { C } from "module";
import type { B } from "module";
import type { D, E } from "module";`);
  const flow = `import A, { type B, C } from "module";
import { type D, type E } from "module";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('import type specifier with comment', () => {
  const result = testTransform(`// comment
import A, { C } from "module";
import type { B } from "module";`);
  const flow = `// comment
import A, { type B, C } from "module";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('mixed type imports', () => {
  const result = testTransform(`import type A from "module";
import type { B } from "module";`);
  const flow = `import type A, { B } from "module";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('mixed type imports with comments', () => {
  const result = testTransform(`// comment
import type A from "module";
import type { B } from "module";`);
  const flow = `// comment
import type A, { B } from "module";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});

xtest('import typeof', () => {
  const result = testTransform(`type N = typeof import("a");
type A = typeof import("a").A;
type B = typeof import("a").B;
type C = typeof import("a").default;
import type { E } from "a";
type D = typeof import("a").D;
import { F } from "a";
type G = typeof import("a").G;
import { H } from "a";
type J = typeof import("a").J;
import type { I } from "a";`);
  const flow = `import typeof * as N from "a";
import typeof { A } from "a";
import { typeof B } from "a";
import typeof C from "a";
import { typeof D, type E } from "a";
import { F, typeof G } from "a";
import { H, type I, typeof J } from "a";`;
  // expect(result.babel).toMatchInlineSnapshot();
  // expect(result.recast).toMatchInlineSnapshot();
});
