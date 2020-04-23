import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declare variable',
      code: `declare var screen: Screen;`,
      output: `declare var screen: Screen;`,
    },
  ],
});
