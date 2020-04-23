import { pluginTester } from '../transform';

pluginTester({
  tests: [
    {
      title: 'declare empty named module',
      code: `declare module 'react' {
  declare module.exports: A;
}`,
      output: `declare module 'react' {
  let __exports: A;
  export = __exports;
}`,
      recast: `declare module 'react' {
  let __exports: A;
  export = __exports
}`,
    },
    {
      title: 'declare empty named module',
      code: `declare module 'react' {
  declare module.exports: {
    a: number,
  };
}`,
      output: `declare module 'react' {
  let __exports: {
    a: number;
  };
  export = __exports;
}`,
      recast: `declare module 'react' {
  let __exports: {
    a: number
  };

  export = __exports
}`,
    },
  ],
});
