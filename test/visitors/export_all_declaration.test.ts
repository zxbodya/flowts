import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'Removes type from export all declaration',
      code: `export type * from 'module';`,
      output: `export * from 'module';`,
    },
  ],
});
