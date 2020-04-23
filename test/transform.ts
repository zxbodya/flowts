import * as babel from '@babel/core';
import plugin from '../src';

type TestCase = {
  title: string;
  code: string;
  output: string;
};
type TesterOptions = {
  tests: TestCase[];
};

export function transform(code: string) {
  const transformResult = babel.transformSync(code, {
    babelrc: false,
    plugins: [plugin],
  });

  if (transformResult === null) {
    throw new Error(
      'babel.transformSync returned null, probably configuration issue'
    );
  }
  return transformResult.code as string;
}

export function pluginTester({ tests }: TesterOptions) {
  for (const testCase of tests) {
    test(testCase.title, () => {
      expect(transform(testCase.code).trim()).toMatch(testCase.output.trim());
    });
  }
}
