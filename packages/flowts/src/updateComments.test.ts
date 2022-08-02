import { updateComments } from './updateComments';

describe('updateComments', function () {
  test('removing comments', () => {
    expect(
      updateComments(
        `
        // hello
        const a = 1;
        /* here */
        export { a };
        // it was
    `,
        () => {
          return { type: 'remove' };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "
              const a = 1;
              export { a };
          "
    `);
  });

  test('keep empty lines when removing comments', () => {
    expect(
      updateComments(
        `
        // hello
        const a = 1;

        /* here */
        export { a };

        // it was
        export default 1;
    `,
        () => {
          return { type: 'remove' };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "
              const a = 1;

              export { a };

              export default 1;
          "
    `);
  });

  test('replace comments', () => {
    expect(
      updateComments(
        `
        /*::
        import type {
          Asset,
          Bundle,
          BundleGroup,
          MutableBundleGraph,
          PluginOptions,
        } from "@parcel/types";
        import type { SchemaEntity } from "@parcel/utils";
        */
        const a = 1;
        export { a };
    `,
        comment => {
          return {
            type: 'replace',
            code: comment.value.substring(5, comment.value.length - 2),
          };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "
                    import type {
                Asset,
                Bundle,
                BundleGroup,
                MutableBundleGraph,
                PluginOptions,
              } from \\"@parcel/types\\";
              import type { SchemaEntity } from \\"@parcel/utils\\";
            
              const a = 1;
              export { a };
          "
    `);
  });

  test('removing comments in jsx', () => {
    expect(
      updateComments(
        `
        let a = (
          <div>
            {/* comment to remove */}
            <Hello/>
          </div>
        );
    `,
        () => {
          return { type: 'remove' };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "
              let a = (
                <div>
                  <Hello/>
                </div>
              );
          "
    `);
  });

  test('removing comments - no empty line at file start', () => {
    expect(
      updateComments(
        `// hello
        const a = 1;
    `,
        () => {
          return { type: 'remove' };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "        const a = 1;
          "
    `);
    expect(
      updateComments(
        `/* hello */
        const a = 1;
    `,
        () => {
          return { type: 'remove' };
        },
        {
          syntax: 'typescript',
          isJSX: true,
        }
      )
    ).toMatchInlineSnapshot(`
      "        const a = 1;
          "
    `);
  });
});
