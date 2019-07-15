interface Context {
  warnOnce(...args: any): void;
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
