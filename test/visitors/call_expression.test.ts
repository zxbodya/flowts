import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'simple case',
      code: `// @flow
createPlugin<number>();`,
      output: `createPlugin<number>();`,
    },
    {
      title: 'more complicated case',
      code: `// @flow
createPlugin<*, mixed>();`,
      output: `createPlugin<any, unknown>();`,
    },
  ],
});
