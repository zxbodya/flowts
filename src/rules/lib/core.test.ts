import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/core.js', () => {
  describe('globals', () => {
    describe('NaN', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NaN;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Infinity', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Infinity;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('undefined', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = undefined;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('parseInt', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = parseInt;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new parseInt();
            
            class A1 extends parseInt {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            parseInt();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('parseFloat', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = parseFloat;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new parseFloat();
            
            class A1 extends parseFloat {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            parseFloat();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('isNaN', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = isNaN;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new isNaN();
            
            class A1 extends isNaN {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            isNaN();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('isFinite', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = isFinite;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new isFinite();
            
            class A1 extends isFinite {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            isFinite();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('decodeURI', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = decodeURI;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new decodeURI();
            
            class A1 extends decodeURI {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            decodeURI();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('decodeURIComponent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = decodeURIComponent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new decodeURIComponent();
            
            class A1 extends decodeURIComponent {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            decodeURIComponent();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('encodeURI', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = encodeURI;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new encodeURI();
            
            class A1 extends encodeURI {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            encodeURI();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('encodeURIComponent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = encodeURIComponent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new encodeURIComponent();
            
            class A1 extends encodeURIComponent {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            encodeURIComponent();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Object', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Object;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Object();
            
            class A1 extends Object {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolHasInstance', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolHasInstance;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolHasInstance();
            
            class A1 extends $SymbolHasInstance {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymboIsConcatSpreadable', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymboIsConcatSpreadable;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymboIsConcatSpreadable();
            
            class A1 extends $SymboIsConcatSpreadable {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolIterator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolIterator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolIterator();
            
            class A1 extends $SymbolIterator {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolMatch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolMatch;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolMatch();
            
            class A1 extends $SymbolMatch {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolMatchAll', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolMatchAll;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolMatchAll();
            
            class A1 extends $SymbolMatchAll {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolReplace', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolReplace;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolReplace();
            
            class A1 extends $SymbolReplace {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolSearch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolSearch;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolSearch();
            
            class A1 extends $SymbolSearch {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolSpecies', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolSpecies;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolSpecies();
            
            class A1 extends $SymbolSpecies {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolSplit', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolSplit;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolSplit();
            
            class A1 extends $SymbolSplit {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolToPrimitive', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolToPrimitive;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolToPrimitive();
            
            class A1 extends $SymbolToPrimitive {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolToStringTag', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolToStringTag;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolToStringTag();
            
            class A1 extends $SymbolToStringTag {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolUnscopables', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolUnscopables;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolUnscopables();
            
            class A1 extends $SymbolUnscopables {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Symbol', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Symbol;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Symbol();
            
            class A1 extends Symbol {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Function', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Function;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Function();
            
            class A1 extends Function {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Boolean', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Boolean;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Boolean();
            
            class A1 extends Boolean {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Number', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Number;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Number();
            
            class A1 extends Number {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Math', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Math;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$ReadOnlyArray', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $ReadOnlyArray;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $ReadOnlyArray();
            
            class A1 extends $ReadOnlyArray<P0> {}
            let a1 = new $ReadOnlyArray<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new Array();
            
            class A1 extends Array<P0> {}
            let a1 = new Array<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('String', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = String;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new String();
            
            class A1 extends String {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('RegExp', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = RegExp;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new RegExp();
            
            class A1 extends RegExp {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Date', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Date;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Date();
            
            class A1 extends Date {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CallSite', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CallSite;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CallSite();
            
            class A1 extends CallSite {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Error', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Error;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Error();
            
            class A1 extends Error {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('EvalError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = EvalError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new EvalError();
            
            class A1 extends EvalError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('RangeError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = RangeError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new RangeError();
            
            class A1 extends RangeError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ReferenceError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ReferenceError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ReferenceError();
            
            class A1 extends ReferenceError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntaxError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntaxError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SyntaxError();
            
            class A1 extends SyntaxError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TypeError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TypeError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TypeError();
            
            class A1 extends TypeError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('URIError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = URIError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new URIError();
            
            class A1 extends URIError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('JSON', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = JSON;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new JSON();
            
            class A1 extends JSON {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$iterate', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $iterate;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $iterate();
            
            class A1 extends $iterate<P0> {}
            let a1 = new $iterate<P0>();
            
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable - typeParams(1)', () => {
        expect(
          transform(`
            $iterate();
            
            let a1 = $iterate<P0>();
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$asyncIterator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $asyncIterator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $asyncIterator();
            
            class A1 extends $asyncIterator<P0> {}
            let a1 = new $asyncIterator<P0>();
            
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable - typeParams(1)', () => {
        expect(
          transform(`
            $asyncIterator();
            
            let a1 = $asyncIterator<P0>();
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$ReadOnlyMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $ReadOnlyMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new $ReadOnlyMap();
            
            class A1 extends $ReadOnlyMap<P0, P1> {}
            let a1 = new $ReadOnlyMap<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Map', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Map;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new Map();
            
            class A1 extends Map<P0, P1> {}
            let a1 = new Map<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$ReadOnlyWeakMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $ReadOnlyWeakMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new $ReadOnlyWeakMap();
            
            class A1 extends $ReadOnlyWeakMap<P0, P1> {}
            let a1 = new $ReadOnlyWeakMap<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WeakMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WeakMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new WeakMap();
            
            class A1 extends WeakMap<P0, P1> {}
            let a1 = new WeakMap<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$ReadOnlySet', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $ReadOnlySet;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $ReadOnlySet();
            
            class A1 extends $ReadOnlySet<P0> {}
            let a1 = new $ReadOnlySet<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Set', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Set;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new Set();
            
            class A1 extends Set<P0> {}
            let a1 = new Set<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$ReadOnlyWeakSet', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $ReadOnlyWeakSet;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $ReadOnlyWeakSet();
            
            class A1 extends $ReadOnlyWeakSet<P0> {}
            let a1 = new $ReadOnlyWeakSet<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WeakSet', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WeakSet;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new WeakSet();
            
            class A1 extends WeakSet<P0> {}
            let a1 = new WeakSet<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Promise', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Promise;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new Promise();
            
            class A1 extends Promise<P0> {}
            let a1 = new Promise<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$await', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $await;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new $await();
            
            class A1 extends $await<P0> {}
            let a1 = new $await<P0>();
            
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable - typeParams(1)', () => {
        expect(
          transform(`
            $await();
            
            let a1 = $await<P0>();
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ArrayBuffer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ArrayBuffer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ArrayBuffer();
            
            class A1 extends ArrayBuffer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$TypedArray', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $TypedArray;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $TypedArray();
            
            class A1 extends $TypedArray {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Int8Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Int8Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Int8Array();
            
            class A1 extends Int8Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Uint8Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Uint8Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Uint8Array();
            
            class A1 extends Uint8Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Uint8ClampedArray', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Uint8ClampedArray;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Uint8ClampedArray();
            
            class A1 extends Uint8ClampedArray {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Int16Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Int16Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Int16Array();
            
            class A1 extends Int16Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Uint16Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Uint16Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Uint16Array();
            
            class A1 extends Uint16Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Int32Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Int32Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Int32Array();
            
            class A1 extends Int32Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Uint32Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Uint32Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Uint32Array();
            
            class A1 extends Uint32Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Float32Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Float32Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Float32Array();
            
            class A1 extends Float32Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Float64Array', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Float64Array;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Float64Array();
            
            class A1 extends Float64Array {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DataView', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DataView;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DataView();
            
            class A1 extends DataView {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('btoa', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = btoa;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new btoa();
            
            class A1 extends btoa {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            btoa();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('atob', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = atob;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new atob();
            
            class A1 extends atob {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            atob();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('escape', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = escape;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new escape();
            
            class A1 extends escape {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            escape();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('unescape', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = unescape;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new unescape();
            
            class A1 extends unescape {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            unescape();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TimeoutID', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends TimeoutID {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IntervalID', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends IntervalID {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('clearInterval', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = clearInterval;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new clearInterval();
            
            class A1 extends clearInterval {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            clearInterval();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('clearTimeout', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = clearTimeout;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new clearTimeout();
            
            class A1 extends clearTimeout {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            clearTimeout();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('setTimeout', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = setTimeout;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new setTimeout();
            
            class A1 extends setTimeout<P0> {}
            let a1 = new setTimeout<P0>();
            
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable - typeParams(1)', () => {
        expect(
          transform(`
            setTimeout();
            
            let a1 = setTimeout<P0>();
          `)
        ).toMatchSnapshot();
      });
    });

    describe('setInterval', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = setInterval;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new setInterval();
            
            class A1 extends setInterval<P0> {}
            let a1 = new setInterval<P0>();
            
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable - typeParams(1)', () => {
        expect(
          transform(`
            setInterval();
            
            let a1 = setInterval<P0>();
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Reflect', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Reflect;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Proxy', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Proxy;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new Proxy();
            
            class A1 extends Proxy<P0> {}
            let a1 = new Proxy<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('global', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = global;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('module', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = module;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('require', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = require;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('exports', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = exports;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$Flow$ModuleRef', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends $Flow$ModuleRef {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('console', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = console;
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
