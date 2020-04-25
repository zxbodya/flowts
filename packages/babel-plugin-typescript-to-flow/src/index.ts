import { PluginObj, Visitor } from '@babel/core';
import { PluginOptions, PluginPass } from './types';

const visitor: Visitor<PluginPass> = {};

// tslint:disable-next-line:no-any
export default (_babel: any, opts: PluginOptions = {} as PluginOptions) => {
  if (typeof opts.isJSX === 'undefined') {
    opts.isJSX = true;
  }
  return {
    name: 'babel-plugin-flow-to-typescript',
    visitor,

    // tslint:disable-next-line:no-any
    manipulateOptions(_babel: any, parserOpts) {
      parserOpts.plugins.push('flow');
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
