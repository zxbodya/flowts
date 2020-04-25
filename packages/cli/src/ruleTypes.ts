import { NodePath } from '@babel/traverse';

export interface GlobalFixContext {
  lib(...libs: string[]): void;
  // import from typescript module
  import(moduleName: string, exportName: string): void;
  // import form other flow module which is also to be fixed
  importFlow(moduleName: string, exportName: string): void;
  // references to all identifiers with usign export or global
  referencePaths: NodePath[];
}

export interface NamedFixContext {
  renameExport(newExportName: string): void;
  // references to all identifiers with using export or global
  referencePaths: NodePath[];
}

export interface RuleSet {
  globals: {
    [k: string]: (context: GlobalFixContext) => void;
  };
  modules: {
    [k: string]: {
      // typings package to install for module
      types?: string;
      // libs: string[];
      exports: {
        [k: string]: (context: NamedFixContext) => void;
      };
    };
  };
}
