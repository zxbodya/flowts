import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declare type alias',
      code: `declare type DOMHighResTimeStamp = number;`,
      output: `declare type DOMHighResTimeStamp = number;`,
    },
  ],
});
