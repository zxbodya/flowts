import { testTransform } from '../transform';

it('should handle empty enums', () => {
  const ts = `enum Empty { }`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var Empty: {||};
"
`);
});

it('should handle basic enums', () => {
  const ts = `enum Label {
    LABEL_OPTIONAL,
    LABEL_REQUIRED,
    LABEL_REPEATED,
  }
type A = Label
type B = Label.LABEL_OPTIONAL
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var Label: {|
  +LABEL_OPTIONAL: 0, // 0
  +LABEL_REQUIRED: 1, // 1
  +LABEL_REPEATED: 2 // 2
|};
declare type A = $Values<typeof Label>;
declare type B = typeof Label.LABEL_OPTIONAL;
"
`);
});

it('should handle number enums', () => {
  const ts = `enum Label {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    NEGATIVE = -123,
    DECIMAL = 3.14,
  }
type A = Label
type B = Label.TWO
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var Label: {|
  +ONE: 1, // 1
  +TWO: 2, // 2
  +THREE: 3, // 3
  +NEGATIVE: -123, // -123
  +DECIMAL: 3.14 // 3.14
|};
declare type A = $Values<typeof Label>;
declare type B = typeof Label.TWO;
"
`);
});

it('should handle string enums', () => {
  const ts = `enum Label {
    LABEL_OPTIONAL = 'LABEL_OPTIONAL',
    LABEL_REQUIRED = 'LABEL_REQUIRED',
    LABEL_REPEATED = 'LABEL_REPEATED',
  }
type A = Label
type B = Label.LABEL_REQUIRED
`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare var Label: {|
  +LABEL_OPTIONAL: \\"LABEL_OPTIONAL\\", // \\"LABEL_OPTIONAL\\"
  +LABEL_REQUIRED: \\"LABEL_REQUIRED\\", // \\"LABEL_REQUIRED\\"
  +LABEL_REPEATED: \\"LABEL_REPEATED\\" // \\"LABEL_REPEATED\\"
|};
declare type A = $Values<typeof Label>;
declare type B = typeof Label.LABEL_REQUIRED;
"
`);
});
