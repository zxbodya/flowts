import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/indexeddb.js', () => {
  describe('globals', () => {
    describe('IDBEnvironment', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBEnvironment {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBFactory', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBFactory {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBRequest', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBRequest {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBOpenDBRequest', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBOpenDBRequest {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBDatabase', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBDatabase {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBTransaction', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBTransaction {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBObjectStore', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBObjectStore {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBIndex', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBIndex {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBKeyRange', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBKeyRange {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBCursor', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBCursor {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IDBCursorWithValue', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IDBCursorWithValue {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
