import { BabelPluginPass } from './types/babel_plugin_pass';

export interface PluginOptions {
  isJSX: boolean;
}

export type PluginPass = BabelPluginPass<PluginOptions>;
