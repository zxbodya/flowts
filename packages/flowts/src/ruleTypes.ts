import { NodePath } from '@babel/traverse';

export interface GlobalFixContext {
  // import from typescript module
  import(moduleName: string, exportName: string): void;
  renameGlobal(newName: string): void;
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
      /**
       * True if module "default" export can be used instead of namespace import
       */
      commonjs?: boolean;
      exports: {
        [k: string]: false | ((context: NamedFixContext) => void);
      };
    };
  };
}
