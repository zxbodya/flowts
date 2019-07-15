interface Context {
  warnOnce(...args: any): void;
  // import from typescript module
  import(moduleName: string, exportName: string): void;
  // import form other flow module which is also to be fixed
  importFlow(moduleName: string, exportName: string): void;
}

interface Fix {
  fix(context: Context): void;
}

export interface RuleSet {
  globals: {
    [k: string]: Fix;
  };
  modules: {
    [k: string]: {
      // typings package to install for module
      types?: string;
      exports: {
        [k: string]: Fix;
      };
    };
  };
}
