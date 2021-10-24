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
            class A1 implements IDBEnvironment {};
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
            class A1 implements IDBFactory {};
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
            class A1 implements IDBRequest {};
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
            class A1 implements IDBOpenDBRequest {};
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
            class A1 implements IDBDatabase {};
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
            class A1 implements IDBTransaction {};
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
            class A1 implements IDBObjectStore {};
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
            class A1 implements IDBIndex {};
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
            class A1 implements IDBKeyRange {};
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
            class A1 implements IDBCursor {};
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
            class A1 implements IDBCursorWithValue {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
