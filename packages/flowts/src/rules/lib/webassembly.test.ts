import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/webassembly.js', () => {
  describe('globals', () => {
    describe('ExportedFunctionExoticObject', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ExportedFunctionExoticObject;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ExportedFunctionExoticObject();
            
            class A1 extends ExportedFunctionExoticObject {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$Module', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$Module;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$Module();
            
            class A1 extends WebAssembly$Module {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$Instance', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$Instance;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$Instance();
            
            class A1 extends WebAssembly$Instance {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$Memory', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$Memory;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$Memory();
            
            class A1 extends WebAssembly$Memory {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$Table', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$Table;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$Table();
            
            class A1 extends WebAssembly$Table {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$CompileError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$CompileError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$CompileError();
            
            class A1 extends WebAssembly$CompileError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$LinkError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$LinkError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$LinkError();
            
            class A1 extends WebAssembly$LinkError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$RuntimeError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$RuntimeError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$RuntimeError();
            
            class A1 extends WebAssembly$RuntimeError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly$instantiate', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly$instantiate;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebAssembly$instantiate();
            
            class A1 extends WebAssembly$instantiate {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            WebAssembly$instantiate();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebAssembly', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebAssembly;
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
