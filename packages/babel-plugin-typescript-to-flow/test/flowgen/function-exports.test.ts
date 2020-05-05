import { testTransformDts } from '../transform';

it('should handle exported es module functions', () => {
  const ts = `export function routerReducer(state?: RouterState, action?: Action): RouterState;
export function syncHistoryWithStore(history: History, store: Store<any>, options?: SyncHistoryWithStoreOptions): History & HistoryUnsubscribe;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare export function routerReducer(state?: RouterState, action?: Action): RouterState;
declare export function syncHistoryWithStore(history: History, store: Store<any>, options?: SyncHistoryWithStoreOptions): History & HistoryUnsubscribe;"
`);
});

it('should handle toString function overload', () => {
  const ts = `export function toString(): void;
export function toString(e: number): void;
export function toString(b: string): void;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare export function toString(): void;
declare export function toString(e: number): void;
declare export function toString(b: string): void;"
`);
});

it('should handle default exported es module functions', () => {
  const ts = `export default function routerReducer(state?: RouterState, action?: Action): RouterState;`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare export default function routerReducer(state?: RouterState, action?: Action): RouterState;"`
  );
});

it('should handle function overload es module functions', () => {
  const ts = `export function routerReducer(state?: RouterState, action?: Action): RouterState;
export function routerReducer(state?: RouterState): RouterState;
`;
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(`
"declare export function routerReducer(state?: RouterState, action?: Action): RouterState;
declare export function routerReducer(state?: RouterState): RouterState;"
`);
});

it('should remove this annotation from functions', () => {
  const ts =
    'function addClickListener(onclick: (this: void, e: Event) => void): void;';
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare function addClickListener(onclick: (e: Event) => void): void;"`
  );
});

it('should remove default parameters from functions', () => {
  const ts =
    'function addClickListener<T = Error>(onclick: (e: Event) => void): T;';
  const result = testTransformDts(ts);
  expect(result.babel).toMatchInlineSnapshot(
    `"declare function addClickListener<T = Error>(onclick: (e: Event) => void): T;"`
  );
});
