import * as babel from '@babel/core';
import * as prettier from 'prettier';
import recastPlugin from '@flowts/babel-plugin-recast';
import tsTypesPlugin from './tsTypesPlugin';
import removeImportExtensionPlugin from './removeImportExtensionPlugin';
import { sharedParserPlugins } from './sharedParserPlugins';
import { detectOptions, type SourceOptions } from './detectOptions';
import flowToTSPlugin from '@zxbodya/babel-plugin-flow-to-typescript';
import { PluginItem } from '@babel/core';
import { ParserPlugin } from '@babel/parser';

type Logger = {
  warn: typeof console.warn;
  log: typeof console.warn;
  error: typeof console.warn;
};

export async function convertFile(
  source: string,
  opts?: {
    sourceFilePath?: string;
    targetFilePath?: string;
    recast?: boolean;
    prettier?: boolean;
    prettierOptions?: prettier.Options;
    fileOptions?: SourceOptions;
    legacyImports?: boolean;
    logger?: Logger;
    /**
     * Additional babel plugin codemods with type fixes to apply on converted code.
     * Each plugin is to be run separately in order they are provided. To avoid possible conflicts.
     *
     * Because of the verification step after codemods - changes should be limited to changing only type annotations or comments.
     * @param opts
     */
    getTypeFixesBabelPlugins?: (opts: {
      isJSX: boolean;
    }) => PluginItem[] | null | undefined;
    removeImportExtensions?: boolean;
  }
) {
  const logger: Logger = opts?.logger ?? console;
  const removeImportExtensions = opts?.removeImportExtensions ?? true;
  const sourceFilePath = opts?.sourceFilePath ?? 'source.js';
  const targetFilePath = opts?.targetFilePath ?? 'target.ts';
  const transformPlugins = [];
  if (opts?.recast ?? true) {
    transformPlugins.push(recastPlugin);
  }

  const fileOptions =
    opts?.fileOptions || detectOptions(source, sourceFilePath);
  const isJSX = fileOptions.isJSX;
  const isConvertedFile = (source: string) => {
    return /^\./.test(source);
  };

  const flowParserPlugins: ParserPlugin[] = [];
  flowParserPlugins.push('flow');
  if (isJSX) {
    flowParserPlugins.push('jsx');
  }

  const tsSyntax = await babel.transformAsync(source as string, {
    compact: false,
    babelrc: false,
    configFile: false,
    filename: sourceFilePath,
    plugins: [
      ...transformPlugins,
      [flowToTSPlugin, { isJSX, legacyImports: !!opts?.legacyImports, logger }],
    ],
    generatorOpts: {
      decoratorsBeforeExport: true,
    },
    parserOpts: {
      allowReturnOutsideFunction: true,
      plugins: [...sharedParserPlugins, ...flowParserPlugins],
    },
  });

  if (tsSyntax === null) {
    throw new Error(
      'babel.transformAsync returned null - probably there is some configuration error'
    );
  }

  const postMigrationFixes: PluginItem[] = [];
  if (removeImportExtensions)
    postMigrationFixes.push([removeImportExtensionPlugin, { isConvertedFile }]);
  postMigrationFixes.push([tsTypesPlugin, { isJSX }]);
  const additionalFixes =
    opts?.getTypeFixesBabelPlugins && opts.getTypeFixesBabelPlugins({ isJSX });

  if (additionalFixes) postMigrationFixes.push(...additionalFixes);

  let ts = tsSyntax.code as string;
  for (const fixPlugin of postMigrationFixes) {
    const fixResult = await babel.transformAsync(ts as string, {
      compact: false,
      babelrc: false,
      configFile: false,
      filename: targetFilePath,
      plugins: [...transformPlugins, fixPlugin],
      generatorOpts: {
        decoratorsBeforeExport: true,
      },
      parserOpts: {
        allowReturnOutsideFunction: true,
        plugins: [
          'typescript',
          ...(isJSX ? ['jsx' as const] : []),
          ...sharedParserPlugins,
        ],
      },
    });

    if (fixResult === null) {
      throw new Error(
        'babel.transformSync returned null - probably there is some configuration error'
      );
    }
    ts = fixResult.code as string;
  }

  let result = ts;
  if (opts?.prettier) {
    let prettierConfig: prettier.Options = opts?.prettierOptions ?? {};
    let configFile: string | null | undefined;
    try {
      configFile = await prettier.resolveConfigFile(targetFilePath);
      prettierConfig = (await prettier.resolveConfig(targetFilePath)) || {};
    } catch (e) {
      if (!configFile) {
        logger.warn(`failed to find prettier config for ${targetFilePath}`);
      }
    }

    try {
      prettierConfig.parser = 'babel-ts';
      result = prettier.format(result, {
        ...prettierConfig,
        // avoid changing template strings
        embeddedLanguageFormatting: 'off',
      });
    } catch (e) {
      // retry using different parser - this can be helpful with flow type comments in some edge cases
      prettierConfig.parser = 'typescript';

      try {
        result = prettier.format(result, {
          ...prettierConfig,
          // avoid changing template strings
          embeddedLanguageFormatting: 'off',
        });
      } catch (e) {
        logger.warn('prettier formatting failed');
        console.error(e);
      }
    }
  }
  return result;
}
