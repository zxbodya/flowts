import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'simple case',
      code: `// @flow
new A<number>();`,
      output: `new A<number>();`,
    },
  ],
});
