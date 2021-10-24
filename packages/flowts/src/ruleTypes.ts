import { NodePath } from '@babel/traverse';

export interface GlobalFixContext {
  // import from typescript module
  import(moduleName: string, exportName: string): void;
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
    [k: string]: false | ((context: GlobalFixContext) => void);
  };
  modules: {
    [k: string]: {
      exports: {
        [k: string]: false | ((context: NamedFixContext) => void);
      };
    };
  };
}
