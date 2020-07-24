import { BabelPluginPass } from './types/BabelPluginPass';

export interface PluginOptions {
  isJSX: boolean;
  isAmbientContext: boolean;
}

export type PluginPass = BabelPluginPass<PluginOptions>;
