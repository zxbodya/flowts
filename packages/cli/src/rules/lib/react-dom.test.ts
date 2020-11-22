import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/react-dom.js', () => {
  describe('globals', () => {
    describe('SyntheticEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 2)', () => {
        expect(
          transform(`
            new SyntheticEvent();
            
            class A1 extends SyntheticEvent {};
            class A2 extends SyntheticEvent<P0> {}
            let a2 = new SyntheticEvent<P0>();
            
            class A3 extends SyntheticEvent<P0, P1> {}
            let a3 = new SyntheticEvent<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticAnimationEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticAnimationEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticAnimationEvent();
            
            class A1 extends SyntheticAnimationEvent {};
            class A2 extends SyntheticAnimationEvent<P0> {}
            let a2 = new SyntheticAnimationEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticClipboardEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticClipboardEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticClipboardEvent();
            
            class A1 extends SyntheticClipboardEvent {};
            class A2 extends SyntheticClipboardEvent<P0> {}
            let a2 = new SyntheticClipboardEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticCompositionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticCompositionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticCompositionEvent();
            
            class A1 extends SyntheticCompositionEvent {};
            class A2 extends SyntheticCompositionEvent<P0> {}
            let a2 = new SyntheticCompositionEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticInputEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticInputEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticInputEvent();
            
            class A1 extends SyntheticInputEvent {};
            class A2 extends SyntheticInputEvent<P0> {}
            let a2 = new SyntheticInputEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticUIEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticUIEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 2)', () => {
        expect(
          transform(`
            new SyntheticUIEvent();
            
            class A1 extends SyntheticUIEvent {};
            class A2 extends SyntheticUIEvent<P0> {}
            let a2 = new SyntheticUIEvent<P0>();
            
            class A3 extends SyntheticUIEvent<P0, P1> {}
            let a3 = new SyntheticUIEvent<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticFocusEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticFocusEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticFocusEvent();
            
            class A1 extends SyntheticFocusEvent {};
            class A2 extends SyntheticFocusEvent<P0> {}
            let a2 = new SyntheticFocusEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticKeyboardEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticKeyboardEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticKeyboardEvent();
            
            class A1 extends SyntheticKeyboardEvent {};
            class A2 extends SyntheticKeyboardEvent<P0> {}
            let a2 = new SyntheticKeyboardEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticMouseEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticMouseEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 2)', () => {
        expect(
          transform(`
            new SyntheticMouseEvent();
            
            class A1 extends SyntheticMouseEvent {};
            class A2 extends SyntheticMouseEvent<P0> {}
            let a2 = new SyntheticMouseEvent<P0>();
            
            class A3 extends SyntheticMouseEvent<P0, P1> {}
            let a3 = new SyntheticMouseEvent<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticDragEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticDragEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticDragEvent();
            
            class A1 extends SyntheticDragEvent {};
            class A2 extends SyntheticDragEvent<P0> {}
            let a2 = new SyntheticDragEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticWheelEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticWheelEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticWheelEvent();
            
            class A1 extends SyntheticWheelEvent {};
            class A2 extends SyntheticWheelEvent<P0> {}
            let a2 = new SyntheticWheelEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticPointerEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticPointerEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticPointerEvent();
            
            class A1 extends SyntheticPointerEvent {};
            class A2 extends SyntheticPointerEvent<P0> {}
            let a2 = new SyntheticPointerEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticTouchEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticTouchEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticTouchEvent();
            
            class A1 extends SyntheticTouchEvent {};
            class A2 extends SyntheticTouchEvent<P0> {}
            let a2 = new SyntheticTouchEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SyntheticTransitionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SyntheticTransitionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new SyntheticTransitionEvent();
            
            class A1 extends SyntheticTransitionEvent {};
            class A2 extends SyntheticTransitionEvent<P0> {}
            let a2 = new SyntheticTransitionEvent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$JSXIntrinsics', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 extends $JSXIntrinsics {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
