import { testTransform } from '../transform';

it('should handle simple tuples', () => {
  const ts = `
  type T1 = [number, string?];
  `;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type T1 = [number, string | void];"`
  );
});

// todo: tuples with rest
xit('should handle tuples with rest', () => {
  const ts = `
  type T1 = [number, ...string];
  `;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare type T2 = [number] & string[];"`
  );
});
