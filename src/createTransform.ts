import * as babel from '@babel/core';
import * as prettier from 'prettier';
import recastPlugin from './recastPlugin';
import { PluginItem } from '@babel/core';
import { Options } from 'prettier';

/**
 * Helper utility creating function transforming the code given plugins array
 * @param plugins
 * @param prettierConfig
 * @param recast
 */
export function createTransform(
  plugins: PluginItem[],
  { prettierConfig = {} as Options, recast = true } = {}
) {
  const transformPlugins: PluginItem[] = [];
  if (recast) {
    transformPlugins.push(recastPlugin);
  }

  return function transform(code: string) {
    const transformResult = babel.transformSync(code, {
      babelrc: false,
      plugins: [...transformPlugins, ...plugins],
    });

    if (transformResult === null) {
      throw new Error(
        'babel.transformSync returned null, probably configuration issue'
      );
    }
    prettierConfig.parser = 'typescript';
    return prettier.format(transformResult.code as string, prettierConfig);
  };
}
