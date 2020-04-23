import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declares inside of a module',
      code: `declare module React {
  declare class A {}
}`,
      output: `declare module "React" {
  class A {}
}`,
    },
    {
      title: 'declares outside of a module',
      code: `declare module React {}

declare class A {}
`,
      output: `declare module "React" {}

declare class A {}
`,
    },
  ],
});
