import { testTransformDts } from '../transform';

it('should handle string literals in function argument "overloading"', () => {
  const ts = `
  interface MyObj {
      on(event: 'error', cb: (err: Error) => void): this;
      on(event: 'close', cb: (code: number, message: string) => void): this;
      on(event: 'message', cb: (data: any, flags: { binary: boolean }) => void): this;
      on(event: 'ping', cb: (data: any, flags: { binary: boolean }) => void): this;
      on(event: 'pong', cb: (data: any, flags: { binary: boolean }) => void): this;
      on(event: 'open', cb: () => void): this;
      on(event: string, listener: (...args: any[]) => void): this;
  }
`;

  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare interface MyObj {
      on(event: "error", cb: (err: Error) => void): this,
      on(event: "close", cb: (code: number, message: string) => void): this,
      on(event: "message", cb: (data: any, flags: {
        binary: boolean
      }) => void): this,
      on(event: "ping", cb: (data: any, flags: {
        binary: boolean
      }) => void): this,
      on(event: "pong", cb: (data: any, flags: {
        binary: boolean
      }) => void): this,
      on(event: "open", cb: () => void): this,
      on(event: string, listener: (...args: any[]) => void): this,
    }"
  `);
});

it('should handle exported constant string literals', () => {
  const ts = `
  export declare const SET_NAME = "my/lib/SET_NAME";
  export declare const SET_STAGE = "my/lib/SET_STAGE";
  `;

  const result = testTransformDts(ts);

  expect(result.babel).toMatchInlineSnapshot(`
    "declare export var SET_NAME;
    declare export var SET_STAGE;"
  `);
});
