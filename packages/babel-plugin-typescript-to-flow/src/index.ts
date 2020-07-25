import { PluginObj, Visitor } from '@babel/core';
import { PluginOptions, PluginPass } from './types';
import { TSTypeAliasDeclaration } from './visitors/TSTypeAliasDeclaration';
import { ArrowFunctionExpression } from './visitors/ArrowFunctionExpression';
import { TSTypeAnnotation } from './visitors/TSTypeAnnotation';
import { TSAsExpression } from './visitors/TSAsExpression';
import { NewExpression } from './visitors/NewExpression';
import { CallExpression } from './visitors/CallExpression';
import { TSTypeParameterDeclaration } from './visitors/TSTypeParameterDeclaration';
import { TSInterfaceDeclaration } from './visitors/TSInterfaceDeclaration';
import { TSDeclareFunction } from './visitors/TSDeclareFunction';
import { ClassDeclaration } from './visitors/ClassDeclaration';
import { ExportDefaultDeclaration } from './visitors/ExportDefaultDeclaration';
import { ExportNamedDeclaration } from './visitors/ExportNamedDeclaration';
import { VariableDeclaration } from './visitors/VariableDeclaration';
import { Program } from './visitors/Program';

const visitor: Visitor<PluginPass> = {
  TSTypeAliasDeclaration,
  ArrowFunctionExpression,
  TSTypeAnnotation,
  TSAsExpression,
  NewExpression,
  CallExpression,
  TSTypeParameterDeclaration,
  TSInterfaceDeclaration,
  TSDeclareFunction,
  ClassDeclaration,
  ExportDefaultDeclaration,
  ExportNamedDeclaration,
  VariableDeclaration,
  Program,
};

// tslint:disable-next-line:no-any
export default (_babel: any, opts: PluginOptions = {} as PluginOptions) => {
  if (typeof opts.isJSX === 'undefined') {
    opts.isJSX = true;
  }
  if (typeof opts.isAmbientContext === 'undefined') {
    opts.isAmbientContext = false;
  }
  return {
    name: 'babel-plugin-typescript-to-flow',
    visitor,

    manipulateOptions(_babel: any, parserOpts) {
      parserOpts.plugins.push('typescript');
      if (opts.isJSX) {
        parserOpts.plugins.push('jsx');
      }
      parserOpts.plugins.push('classProperties');
      parserOpts.plugins.push('objectRestSpread');
      parserOpts.plugins.push('optionalChaining');
      parserOpts.plugins.push('nullishCoalescingOperator');
      parserOpts.plugins.push('dynamicImport');
    },
  } as PluginObj<PluginPass>;
};
