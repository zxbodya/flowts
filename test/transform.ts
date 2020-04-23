import * as babel from '@babel/core';
import plugin from '../src';
import recastPlugin from './recastPlugin';

type TestCase = {
  title: string;
  code: string;
  output: string;
  recast?: string;
};
type TesterOptions = {
  tests: TestCase[];
};

export function pluginTester({ tests }: TesterOptions) {
  for (const testCase of tests) {
    test(testCase.title, () => {
      const transformBabelResult = babel.transformSync(testCase.code.trim(), {
        babelrc: false,
        plugins: [plugin],
      });

      const transformRecastResult = babel.transformSync(testCase.code.trim(), {
        babelrc: false,
        plugins: [plugin, recastPlugin],
      });

      if (transformBabelResult === null || transformRecastResult === null) {
        throw new Error(
          'babel.transformSync returned null, probably configuration issue'
        );
      }
      expect(transformBabelResult.code).toMatch(testCase.output.trim());
      expect(transformRecastResult.code).toMatch(
        (testCase.recast ? testCase.recast : testCase.output).trim()
      );
    });
  }
}
