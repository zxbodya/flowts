import * as pluginTester from 'babel-plugin-tester';
import plugin from '../../src';

pluginTester({
  plugin,
  tests: [
    {
      title: 'export type',
      code: `type Something = void;
export type { Something };`,
      output: `type Something = void;
export type { Something };`,
    },
    {
      title: 'export type from',
      code: `export type { B } from "./mod";`,
      output: `export type { B } from "./mod";`,
    },
  ],
});
