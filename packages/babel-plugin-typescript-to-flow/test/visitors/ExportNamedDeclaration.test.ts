import { testTransform } from '../transform';

test('export declare type', () => {
  const result = testTransform(`export declare type AccordionStateT = {
    expanded: Array<React.Key>;
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "export type AccordionStateT = {
      expanded: Array<React.Key>
    };"
  `);
  // expect(result.recast).toMatchInlineSnapshot();
});

test('export declare constant', () => {
  const result = testTransform(`export declare const STATE_CHANGE_TYPE: {
    readonly expand: "expand";
};`);
  expect(result.babel).toMatchInlineSnapshot(`
    "declare export var STATE_CHANGE_TYPE: {
      +expand: "expand"
    };"
  `);
  //expect(result.babel).toMatchInlineSnapshot();
});
