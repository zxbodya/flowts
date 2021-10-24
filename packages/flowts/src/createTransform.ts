import * as babel from '@babel/core';
import * as prettier from 'prettier';
import recastPlugin from '@flowts/babel-plugin-recast';
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
      compact: false,
      babelrc: false,
      configFile: false,
      plugins: [...transformPlugins, ...plugins],
    });

    if (transformResult === null) {
      throw new Error(
        'babel.transformSync returned null, probably configuration issue'
      );
    }
    prettierConfig.parser = 'babel-ts';
    return prettier.format(transformResult.code as string, {
      ...prettierConfig,
      // avoid changing template strings
      embeddedLanguageFormatting: 'off',
    });
  };
}
