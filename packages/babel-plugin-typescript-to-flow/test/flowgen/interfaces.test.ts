import { testTransformDts } from '../transform';

it('should handle single interface', () => {
  const ts = `
interface User {
  firstName: string
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface User {
      firstName: string
    }"
  `);
  //   const result2 = compiler.compileDefinitionString(ts, {
  //     interfaceRecords: true,
  //   });
  //   expect(beautify(result2)).toMatchInlineSnapshot(`
  // "declare type User = {
  //   firstName: string
  // };
  // "
  // `);
});

it('should handle interface inheritance', () => {
  const ts = `
interface User {
  firstName: string
}
interface SpecialUser extends User {
  nice: number
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface User {
      firstName: string
    }
    declare interface SpecialUser extends User {
      nice: number
    }"
  `);
  //   const result2 = compiler.compileDefinitionString(ts, {
  //     interfaceRecords: true,
  //   });
  //   expect(beautify(result2)).toMatchInlineSnapshot(`
  // "declare type User = {
  //   firstName: string
  // };
  // declare type SpecialUser = {
  //   ...$Exact<User>,
  //
  //   nice: number
  // };
  // "
  // `);
});

//todo:
xit('should handle interface merging', () => {
  const ts = `
interface User {
  firstName: string
}
interface User {
  lastName: string
}
interface User {
  username: string
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface User {
      firstName: string;
      lastName: string;
      username: string;
    }
    "
  `);
  //   const result2 = compiler.compileDefinitionString(ts, {
  //     interfaceRecords: true,
  //   });
  //   expect(beautify(result2)).toMatchInlineSnapshot(`
  // "declare type User = {
  //   firstName: string,
  //   lastName: string,
  //   username: string
  // };
  // "
  // `);
});

it('should handle all properties', () => {
  const ts = `
interface Props {
  "aria-label": string;
  "aria-labelledby"?: number;
  color: string;
  [key: string]: string;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface Props {
      "aria-label": string,
      "aria-labelledby"?: number,
      color: string,
      [key: string]: string,
    }"
  `);
});

it('should support readonly modifier', () => {
  const ts = `
interface Helper {
  readonly name: string;
  readonly callback: () => void;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface Helper {
      +name: string,
      +callback: () => void,
    }"
  `);
});

// todo: call signatures
xit('should support call signature', () => {
  const ts = `
  declare interface ObjectSchemaConstructor {
    <T extends object>(fields?: ObjectSchemaDefinition<T>): ObjectSchema<T>;
    new (): ObjectSchema<{}>;
  }
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface ObjectSchemaConstructor {
      <T: { [key: string]: any }>(
        fields?: ObjectSchemaDefinition<T>
      ): ObjectSchema<T>;
      new(): ObjectSchema<{ ... }>;
    }
    "
  `);
});

// todo: call signatures
xit('should remove this in call signature', () => {
  const ts = `
interface Arc<This, Datum> {
  (this: This, d: Datum, ...args: any[]): string | null;
}

interface D<This, Datum> {
  new (this: This, d: Datum, ...args: any[]);
}

interface C<This, Datum> {
  (this: This, d: Datum, ...args: any[]);
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface Arc<This, Datum> {
      (d: Datum, ...args: any[]): string | null;
    }
    declare interface D<This, Datum> {
      new(d: Datum, ...args: any[]): void;
    }
    declare interface C<This, Datum> {
      (d: Datum, ...args: any[]): any;
    }
    "
  `);
});

// todo: call signatures
xit('should remove generic defaults in call signature', () => {
  const ts = `
interface AbstractLevelDOWNConstructor {
    <K = any, V = any>(location: string): AbstractLevelDOWN<K, V>;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface AbstractLevelDOWNConstructor {
      <K, V>(location: string): AbstractLevelDOWN<K, V>;
    }
    "
  `);
});

it('should support omitting generic defaults in types, classes, interfaces', () => {
  const ts = `
interface Foo<T = symbol, U = number> {}
interface FooBar extends Foo {}
type Bar<T = number, U = string> = {}
class Baz<T = string, U = number> {}

declare var a: Foo
declare var b: Bar
declare var c: Baz

declare var d: Foo<any>
declare var e: Bar<any>
declare var f: Baz<any>
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface Foo<T = Symbol, U = number> {}
    declare interface FooBar extends Foo {}
    declare type Bar<T = number, U = string> = {};
    declare class Baz<T = string, U = number> {}
    declare var a: Foo;
    declare var b: Bar;
    declare var c: Baz;
    declare var d: Foo<any>;
    declare var e: Bar<any>;
    declare var f: Baz<any>;"
  `);
});

// todo:
xit('should support optional methods', () => {
  const ts = `
interface Example<State> {
  required<R>(value: any, state: State): true;
  optional?<R>(value: any, state: State): false;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface Example<State> {
      required<R>(value: any, state: State): true;
      optional?: <R>(value: any, state: State) => false;
    }
    "
  `);
});

it('should handle toString property name', () => {
  const ts = `
interface A {
  toString(): string
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface A {
      toString(): string
    }"
  `);
});

// todo:
xit('should handle untyped object binding pattern', () => {
  const ts = `
interface ObjectBinding {
  (): void;
  ({}): void;
  ({ a, b }): void;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface ObjectBinding {
      (): void,
      (x: {}): void,
      (x: { a: any, b: any }): void,
    }"
  `);
});

// todo:
xit('should handle untyped array binding pattern', () => {
  const ts = `
interface ArrayBinding {
  (): void;
  ([]): void;
  ([ a, b ]): void;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface ArrayBinding {
      (): void;
      (x: any): void;
      (x: any): void;
    }
    "
  `);
});

// todo:
xit('should handle typed object binding pattern', () => {
  const ts = `
interface ObjectBinding {
  (): void;
  ({}: any): void;
  ({ a, b }: { a: string, b: number }): void;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface ObjectBinding {
      (): void;
      (x: any): void;
      (x: {
        a: string,
        b: number,
        ...
      }): void;
    }
    "
  `);
});

//todo:
xit('should handle typed array binding pattern', () => {
  const ts = `
interface ArrayBinding {
  (): void;
  ([]: []): void;
  ([ a, b ]: [string, number]): void;
}
`;
  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface ArrayBinding {
      (): void;
      (x: []): void;
      (x: [string, number]): void;
    }
    "
  `);
});
