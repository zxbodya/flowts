// tslint:disable-next-line:no-namespace
declare namespace pluginTester {
  // tslint:disable:no-any
  export interface TesterOption {
    plugin: any;
    snapshot?: boolean;
    tests: Test[];
  }

  export interface Test {
    title?: string;
    code?: string;
    output?: string;
    snapshot?: boolean;
    fixture?: string;
    outputFixture?: string;
  }
}

// eslint-disable-next-line no-redeclare
declare function pluginTester(option: pluginTester.TesterOption): void;

export = pluginTester;
