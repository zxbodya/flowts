import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declare empty named module',
      code: `declare module "react" {}`,
      output: `declare module "react" {}`,
    },
    {
      title: 'declare module "React"',
      code: `declare module React {}`,
      output: `declare module "React" {}`,
    },
  ],
});
