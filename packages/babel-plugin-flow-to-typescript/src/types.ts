import { BabelPluginPass } from './types/BabelPluginPass';

export interface PluginOptions {
  isJSX: boolean;
}

export interface PluginPass extends BabelPluginPass<PluginOptions> {
  set(key: 'isModuleDeclaration', value: boolean): void;
  get(key: 'isModuleDeclaration'): boolean;
}
