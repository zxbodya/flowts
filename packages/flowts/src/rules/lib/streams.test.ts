import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/streams.js', () => {
  describe('globals', () => {
    describe('TextEncoder', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextEncoder;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextEncoder();
            
            class A1 extends TextEncoder {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReadableStreamController', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReadableStreamController;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReadableStreamController();
            
            class A1 extends ReadableStreamController {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReadableStreamBYOBRequest', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReadableStreamBYOBRequest;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReadableStreamBYOBRequest();
            
            class A1 extends ReadableStreamBYOBRequest {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReadableByteStreamController', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReadableByteStreamController;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReadableByteStreamController();
            
            class A1 extends ReadableByteStreamController {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReadableStreamReader', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReadableStreamReader;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReadableStreamReader();
            
            class A1 extends ReadableStreamReader {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('UnderlyingSource', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends UnderlyingSource {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TransformStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TransformStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TransformStream();
            
            class A1 extends TransformStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReadableStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReadableStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReadableStream();
            
            class A1 extends ReadableStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WritableStreamController', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends WritableStreamController {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('UnderlyingSink', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends UnderlyingSink {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WritableStreamWriter', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends WritableStreamWriter {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WritableStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WritableStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WritableStream();
            
            class A1 extends WritableStream {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
