import * as t from '@babel/types';
import { BabelPluginPass } from './types/BabelPluginPass';

export interface Logger {
  error: (message: string) => void;
  warn: (message: string) => void;
  log: (message: string) => void;
}

export interface NodeLogger {
  error: (node: t.Node, message: string) => void;
  warn: (node: t.Node, message: string) => void;
  log: (node: t.Node, message: string) => void;
}

export interface PluginOptions {
  isJSX?: boolean;
  legacyImports?: boolean;
  logger?: Logger;
}

export interface PluginPass extends BabelPluginPass<PluginOptions> {
  set(key: 'isModuleDeclaration', value: boolean): void;
  set(key: 'logger', value: NodeLogger): void;
  get(key: 'isModuleDeclaration'): boolean;
  get(key: 'logger'): NodeLogger;
}
