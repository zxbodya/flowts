import { testTransform } from '../transform';

it('should handle static methods ES6 classes', () => {
  const ts = `class Observable<T> implements Subscribable<T> {
    create: Function;
    static create: Function;
    lift<R>(operator: Operator<T, R>): Observable<R>;
    static lift<R>(operator: Operator<T, R>): Observable<R>;
    readonly foo: number;
    static readonly bar: string;
    baz?: string;
    readonly quux?: number;
    static quick?: symbol;
    static readonly fox?: string;
    jump?: ()=> void;
    readonly jump?: () => void;
    static readonly jump?: () => void;
  }`;
  const result = testTransform(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare class Observable<T> implements Subscribable<T> {
  create: Function,
  static create: Function,
  lift<R>(operator: Operator<T, R>): Observable<R>,
  static lift<R>(operator: Operator<T, R>): Observable<R>,
  +foo: number,
  static +bar: string,
  baz?: string,
  +quux?: number,
  static quick?: Symbol,
  static +fox?: string,
  jump?: () => void,
  +jump?: () => void,
  static +jump?: () => void,
}"
`);
});
