import { BabelFile, PluginObj, Visitor } from '@babel/core';
import * as t from '@babel/types';
import { codeFrameColumns } from '@babel/code-frame';
import { ImportDeclaration } from './visitors/ImportDeclaration';
import { OpaqueType } from './visitors/OpaqueType';
import { TypeAnnotation } from './visitors/TypeAnnotation';
import { TypeCastExpression } from './visitors/TypeCastExpression';
import { TypeParameterDeclaration } from './visitors/TypeParameterDeclaration';
import { ClassDeclaration } from './visitors/ClassDeclaration';
import { DeclareClass } from './visitors/DeclareClass';
import { InterfaceDeclaration } from './visitors/InterfaceDeclaration';
import { DeclareFunction } from './visitors/DeclareFunction';
import { Program } from './visitors/Program';
import { TypeAlias } from './visitors/TypeAlias';
import { FunctionDeclaration } from './visitors/FunctionDeclaration';
import { CallExpression } from './visitors/CallExpression';
import { DeclareVariable } from './visitors/DeclareVariable';
import { DeclareTypeAlias } from './visitors/DeclareTypeAlias';
import { DeclareInterface } from './visitors/DeclareInterface';
import { DeclareOpaqueType } from './visitors/DeclareOpaqueType';
import { DeclareModuleExports } from './visitors/DeclareModuleExports';
import { DeclareModule } from './visitors/DeclareModule';
import { DeclareExportDeclaration } from './visitors/DeclareExportDeclaration';
import { NewExpression } from './visitors/NewExpression';
import { ArrowFunctionExpression } from './visitors/ArrowFunctionExpression';
import { PluginOptions, PluginPass } from './types';
import { TSModuleDeclaration } from './visitors/TSModuleDeclaration';
import { ExportAllDeclaration } from './visitors/ExportAllDeclaration';
import { ObjectMethod } from './visitors/ObjectMethod';
import { DeclareExportAllDeclaration } from './visitors/DeclareExportAllDeclaration';
import { Pattern } from './visitors/Pattern';
import { ForOfStatement } from './visitors/ForOfStatement';
import { EnumDeclaration } from './visitors/EnumDeclaration';

const visitor: Visitor<PluginPass> = {
  Program,
  TypeAnnotation,
  TypeAlias,
  TypeParameterDeclaration,
  ImportDeclaration,
  TypeCastExpression,
  OpaqueType,
  DeclareClass,
  ClassDeclaration,
  ClassExpression: ClassDeclaration,
  ExportAllDeclaration,
  InterfaceDeclaration,
  DeclareFunction,
  FunctionDeclaration,
  CallExpression,
  OptionalCallExpression: CallExpression,
  DeclareVariable,
  DeclareTypeAlias,
  DeclareInterface,
  DeclareOpaqueType,
  DeclareModuleExports,
  DeclareModule,
  DeclareExportDeclaration,
  DeclareExportAllDeclaration,
  NewExpression,
  ArrowFunctionExpression,
  TSModuleDeclaration,
  ObjectMethod,
  TemplateElement(path: any) {
    // workaround for indentation when reprinting template string with recast
    // see packages/babel-plugin-flow-to-typescript/test/RecastWorkarounds.test.ts
    // https://github.com/benjamn/recast/issues/833
    path.node.original = null;
  },
  Pattern,
  ForOfStatement,
  EnumDeclaration,
};

export default (_babel: any, opts: PluginOptions = {} as PluginOptions) => {
  if (typeof opts.isJSX === 'undefined') {
    opts.isJSX = true;
  }
  if (typeof opts.legacyImports === 'undefined') {
    opts.legacyImports = true;
  }
  return {
    name: 'babel-plugin-flow-to-typescript',
    visitor,

    manipulateOptions(_babel: any, parserOpts) {
      parserOpts.plugins.push(['flow', { enums: true }]);
      if (opts.isJSX) {
        parserOpts.plugins.push('jsx');
      }
      parserOpts.plugins.push('classProperties');
      parserOpts.plugins.push('objectRestSpread');
      parserOpts.plugins.push('optionalChaining');
      parserOpts.plugins.push('nullishCoalescingOperator');
      parserOpts.plugins.push(['decorators', { decoratorsBeforeExport: true }]);
      parserOpts.plugins.push('dynamicImport');
      parserOpts.allowReturnOutsideFunction = true;
    },
    pre(this: PluginPass, file: BabelFile) {
      const logger = this.opts.logger || {
        error: console.error.bind(console),
        warn: console.log.bind(console),
        log: console.log.bind(console),
      };
      const oldMessages = new Set<string>();
      function createLogger(log: (message: string) => void) {
        return (node: t.Node, message: string) => {
          const loc = node && node.loc;

          const highlightCode: boolean = file.opts.highlightCode ?? true;

          let msg = message;
          if (loc) {
            msg +=
              '\n' +
              codeFrameColumns(
                file.code,
                {
                  start: {
                    line: loc.start.line,
                    column: loc.start.column + 1,
                  },
                  end:
                    loc.end && loc.start.line === loc.end.line
                      ? {
                          line: loc.end.line,
                          column: loc.end.column + 1,
                        }
                      : undefined,
                },
                { highlightCode }
              );
          }
          if (!oldMessages.has(msg)) {
            log(msg);
            oldMessages.add(msg);
          }
        };
      }
      this.set('logger', {
        error: createLogger(logger.error),
        warn: createLogger(logger.warn),
        log: createLogger(logger.log),
      });
    },
  } as PluginObj<PluginPass>;
};
