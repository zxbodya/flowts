import { testTransformDts } from '../transform';

xit('should handle exports', () => {
  const ts = `
export default module
export { module }
export { module as newModule }
export { GeneratorOptions } from "@babel/generator";
export { GeneratorOptions as NewGeneratorOptions } from "@babel/generator";
export * from 'typescript';
//enable when typescript supports
//export traverse, { Visitor, NodePath } from "@babel/traverse";
//export template from "@babel/template";
//export * as t from "@babel/types";`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare export default typeof module;
declare export { module };
declare export { module as newModule };
declare export { GeneratorOptions } from \\"@babel/generator\\";
declare export {
  GeneratorOptions as NewGeneratorOptions
} from \\"@babel/generator\\";
declare export * from \\"typescript\\"
"
`);
});

it('should handle unnamed default export', () => {
  const ts = `
export default function(): void;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare export default function fn(): void;"`
  );
});
