import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'opaque type',
      code: `opaque type A = B;`,
      output: `type A = B;`,
    },
    {
      title: 'opaque type with super type',
      code: `opaque type A: S = B;`,
      output: `type A = B;`,
    },
  ],
});
