import * as babel from '@babel/core';
import plugin from '../src';
import recastPlugin from '@flowts/babel-plugin-recast';

function createTransform(plugins: any[]) {
  return function transform(code: string): string {
    const result = babel.transformSync(code.trim(), {
      babelrc: false,
      configFile: false,
      plugins,
    });
    if (result === null) {
      throw new Error(
        'babel.transformSync returned null, probably configuration issue'
      );
    }
    return result.code as string;
  };
}

const babelTransform = createTransform([plugin]);
const recastTransform = createTransform([plugin, recastPlugin]);

export function testTransform(code: string): { babel: string; recast: string } {
  return {
    babel: babelTransform(code),
    recast: recastTransform(code),
  };
}
