import { testTransform } from '../transform';

it('should handle imports', () => {
  const ts = `import { GeneratorOptions } from "@babel/generator";
import traverse, { Visitor, NodePath } from "@babel/traverse";
import { Visitor as NewVisitor } from "@babel/traverse";
import template from "@babel/template";
import * as t from "@babel/types";
import v, * as d from "typescript";`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
    "import { GeneratorOptions } from \\"@babel/generator\\";
    import traverse, { Visitor, NodePath } from \\"@babel/traverse\\";
    import { Visitor as NewVisitor } from \\"@babel/traverse\\";
    import template from \\"@babel/template\\";
    import * as t from \\"@babel/types\\";
    import v, * as d from \\"typescript\\";"
  `);
});

//todo:
xit('should handle imports inside module', () => {
  const ts = `
declare module "@babel/core" {
  import { GeneratorOptions } from "@babel/generator";
  import traverse, { Visitor, NodePath } from "@babel/traverse";
  import { Visitor as NewVisitor } from "@babel/traverse";
  import template from "@babel/template";
  import * as t from "@babel/types";
  import v, * as d from 'typescript';
}
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare module \\"@babel/core\\" {
      import type { GeneratorOptions } from \\"@babel/generator\\";

      import type traverse, { Visitor, NodePath } from \\"@babel/traverse\\";

      import type { Visitor as NewVisitor } from \\"@babel/traverse\\";

      import typeof template from \\"@babel/template\\";

      import typeof * as t from \\"@babel/types\\";

      import typeof v, * as d from \\"typescript\\";
    }
    "
  `);
});

it('should handle import type', () => {
  const ts = `
type S = typeof import('http')
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type S = $Exports<\\"http\\">;"`
  );
});
