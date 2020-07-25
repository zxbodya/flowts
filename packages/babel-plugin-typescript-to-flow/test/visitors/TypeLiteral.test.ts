import { testTransform } from '../transform';

test('Intersection type', () => {
  const result = testTransform(`let a: {
  x: number;
} & {
  y: string;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x: number
    } & {
      y: string
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: indexer', () => {
  const result = testTransform(`let a: {
  [x: string]: number;
  [x: number]: boolean;
};`);
  const flow = `let a: {
  [x:string]: number,
  [x:number]: boolean
};`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number,
      [x: number]: boolean,
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: indexer to mapped type - skip indexer', () => {
  const result = testTransform(`let a: {
  [x: string]: number;
};`);
  const flow = `let a: {
  [x:string]: number;
};`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: string]: number
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: indexer to mapped type', () => {
  const result = testTransform(`let a: { [x in A]: number };`);
  const flow = `let a: {
  [x:A]: number;
};`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      [x: A]: number
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: type literal with variance', () => {
  const result = testTransform(`let a: {
  readonly b: string;
  c: number;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      +b: string,
      c: number,
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: type literal with indexer with variance', () => {
  const result = testTransform(`let a: {
  readonly [x: string]: string;
};
let b: {
  [x: string]: string;
};`);
  const flow = `let a: { +[x:string]: string };
let b: { -[x:string]: string };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      +[x: string]: string
    };
    let b: {
      [x: string]: string
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: type literal with spread operator', () => {
  const result = testTransform(`let a: {
  b: string;
} & T;`);
  const flow = `let a: { b: string, ...T };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      b: string
    } & T;"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Type literal: deep type literal with spread operator', () => {
  const result = testTransform(`let a: {
  b: {
    c: T;
  } & U;
};`);
  const flow = `let a: { b: { c: T, ...U} };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      b: {
        c: T
      } & U
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Maybe type: type literal', () => {
  const result = testTransform(`let a: {
  x: string | undefined | null;
};`);
  const flow = `let a: { x: ?string };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x: string | void | null
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('Maybe type: type literal with optional key', () => {
  const result = testTransform(`let a: {
  x?: string | null;
};`);
  const flow = `let a: { x?: ?string };`;
  expect(result.babel).toMatchInlineSnapshot(`
    "let a: {
      x?: string | null
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});
