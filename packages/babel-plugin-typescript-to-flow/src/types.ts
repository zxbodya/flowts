import { BabelPluginPass } from './types/BabelPluginPass';

export interface PluginOptions {
  isJSX: boolean;
}

export type PluginPass = BabelPluginPass<PluginOptions>;
