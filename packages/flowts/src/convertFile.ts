import * as babel from '@babel/core';
import tsToFlowPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import * as prettier from 'prettier';
import recastPlugin from '@flowts/babel-plugin-recast';
import tsTypesPlugin from './tsTypesPlugin';
import removeImportExtensionPlugin from './removeImportExtensionPlugin';
import { sharedParserPlugins } from './sharedParserPlugins';

export async function convertFile(
  source: string,
  options?: {
    sourceFilePath?: string;
    targetFilePath?: string;
    recast?: boolean;
    prettier?: boolean;
    prettierOptions?: prettier.Options;
  }
) {
  const sourceFilePath = options?.sourceFilePath ?? 'source.js';
  const targetFilePath = options?.targetFilePath ?? 'target.ts';
  const transformPlugins = [];
  if (options?.recast ?? true) {
    transformPlugins.push(recastPlugin);
  }
  const isJSX = false;
  const isConvertedFile = () => true;

  const tsSyntax = await babel.transformAsync(source, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename: sourceFilePath,
    plugins: [...transformPlugins, [tsToFlowPlugin, { isJSX }]],
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [...sharedParserPlugins],
    },
  });

  if (tsSyntax === null) {
    throw new Error(
      'babel.transformAsync returned null - probably there is some configuration error'
    );
  }

  const ts = await babel.transformAsync(tsSyntax.code as string, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename: targetFilePath,
    plugins: [
      ...transformPlugins,
      [tsTypesPlugin, { isJSX }],
      [removeImportExtensionPlugin, { isConvertedFile }],
    ],
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: ['typescript', ...sharedParserPlugins],
    },
  });

  if (ts === null) {
    throw new Error(
      'babel.transformSync returned null - probably there is some configuration error'
    );
  }

  let result = ts.code as string;
  if (options?.prettier) {
    let prettierOptions: prettier.Options = options?.prettierOptions ?? {};
    let configFile: string | null | undefined;
    try {
      configFile = await prettier.resolveConfigFile(targetFilePath);
      prettierOptions = (await prettier.resolveConfig(targetFilePath)) || {};
    } catch (e) {
      if (!configFile) {
        console.warn(`failed to find prettier config for ${targetFilePath}`);
      }
    }

    try {
      prettierOptions.parser = prettierOptions.parser ?? 'babel-ts';
      result = prettier.format(result, {
        ...prettierOptions,
        // avoid changing template strings
        embeddedLanguageFormatting: 'off',
      });
    } catch (e) {
      // retry using different parser - this can be helpful with flow type comments in some edge cases
      prettierOptions.parser = 'typescript';

      try {
        result = prettier.format(result, {
          ...prettierOptions,
          // avoid changing template strings
          embeddedLanguageFormatting: 'off',
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  return result;
}
