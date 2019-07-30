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

      test('generated - class - typePrams(0 - 2)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 2)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 2)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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

      test('generated - class - typePrams(0 - 1)', () => {
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
    describe('react-dom', () => {
      describe('findDOMNode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = findDOMNode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { findDOMNode } from "react-dom";
            
            new findDOMNode();
            
            class A1 extends findDOMNode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { findDOMNode } from "react-dom";
            
            findDOMNode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.findDOMNode();
            
            class A1 extends M.findDOMNode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.findDOMNode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { findDOMNode as t } from "react-dom";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { findDOMNode as t } from "react-dom";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('render', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = render;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typePrams(1)', () => {
          expect(
            transform(`
            import { render } from "react-dom";
            
            new render();
            
            class A1 extends render<P0> {}
            let a1 = new render<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typePrams(1)', () => {
          expect(
            transform(`
            import { render } from "react-dom";
            
            render();
            
            let a1 = render<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.render();
            
            class A1 extends M.render<P0> {}
            let a1 = new M.render<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.render();
            
            let a1 = M.render<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { render as t } from "react-dom";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { render as t } from "react-dom";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('hydrate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = hydrate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typePrams(1)', () => {
          expect(
            transform(`
            import { hydrate } from "react-dom";
            
            new hydrate();
            
            class A1 extends hydrate<P0> {}
            let a1 = new hydrate<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typePrams(1)', () => {
          expect(
            transform(`
            import { hydrate } from "react-dom";
            
            hydrate();
            
            let a1 = hydrate<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.hydrate();
            
            class A1 extends M.hydrate<P0> {}
            let a1 = new M.hydrate<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.hydrate();
            
            let a1 = M.hydrate<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { hydrate as t } from "react-dom";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { hydrate as t } from "react-dom";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createPortal', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createPortal;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createPortal } from "react-dom";
            
            new createPortal();
            
            class A1 extends createPortal {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createPortal } from "react-dom";
            
            createPortal();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.createPortal();
            
            class A1 extends M.createPortal {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.createPortal();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createPortal as t } from "react-dom";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createPortal as t } from "react-dom";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unmountComponentAtNode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unmountComponentAtNode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { unmountComponentAtNode } from "react-dom";
            
            new unmountComponentAtNode();
            
            class A1 extends unmountComponentAtNode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { unmountComponentAtNode } from "react-dom";
            
            unmountComponentAtNode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.unmountComponentAtNode();
            
            class A1 extends M.unmountComponentAtNode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.unmountComponentAtNode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { unmountComponentAtNode as t } from "react-dom";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { unmountComponentAtNode as t } from "react-dom";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('version', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = version;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unstable_batchedUpdates', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unstable_batchedUpdates;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typePrams(5)', () => {
          expect(
            transform(`
            import { unstable_batchedUpdates } from "react-dom";
            
            new unstable_batchedUpdates();
            
            class A1 extends unstable_batchedUpdates<P0, P1, P2, P3, P4> {}
            let a1 = new unstable_batchedUpdates<P0, P1, P2, P3, P4>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typePrams(5)', () => {
          expect(
            transform(`
            import { unstable_batchedUpdates } from "react-dom";
            
            unstable_batchedUpdates();
            
            let a1 = unstable_batchedUpdates<P0, P1, P2, P3, P4>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typePrams(5)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.unstable_batchedUpdates();
            
            class A1 extends M.unstable_batchedUpdates<P0, P1, P2, P3, P4> {}
            let a1 = new M.unstable_batchedUpdates<P0, P1, P2, P3, P4>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typePrams(5)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.unstable_batchedUpdates();
            
            let a1 = M.unstable_batchedUpdates<P0, P1, P2, P3, P4>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typePrams(5)', () => {
          expect(
            transform(`
            import { unstable_batchedUpdates as t } from "react-dom";
            
            new t();
            
            class A1 extends t<P0, P1, P2, P3, P4> {}
            let a1 = new t<P0, P1, P2, P3, P4>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typePrams(5)', () => {
          expect(
            transform(`
            import { unstable_batchedUpdates as t } from "react-dom";
            
            t();
            
            let a1 = t<P0, P1, P2, P3, P4>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unstable_renderSubtreeIntoContainer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unstable_renderSubtreeIntoContainer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typePrams(1)', () => {
          expect(
            transform(`
            import { unstable_renderSubtreeIntoContainer } from "react-dom";
            
            new unstable_renderSubtreeIntoContainer();
            
            class A1 extends unstable_renderSubtreeIntoContainer<P0> {}
            let a1 = new unstable_renderSubtreeIntoContainer<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typePrams(1)', () => {
          expect(
            transform(`
            import { unstable_renderSubtreeIntoContainer } from "react-dom";
            
            unstable_renderSubtreeIntoContainer();
            
            let a1 = unstable_renderSubtreeIntoContainer<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            new M.unstable_renderSubtreeIntoContainer();
            
            class A1 extends M.unstable_renderSubtreeIntoContainer<P0> {}
            let a1 = new M.unstable_renderSubtreeIntoContainer<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react-dom";
            
            M.unstable_renderSubtreeIntoContainer();
            
            let a1 = M.unstable_renderSubtreeIntoContainer<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { unstable_renderSubtreeIntoContainer as t } from "react-dom";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { unstable_renderSubtreeIntoContainer as t } from "react-dom";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('react-dom/server', () => {
      describe('renderToString', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renderToString;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renderToString } from "react-dom/server";
            
            new renderToString();
            
            class A1 extends renderToString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renderToString } from "react-dom/server";
            
            renderToString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            new M.renderToString();
            
            class A1 extends M.renderToString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            M.renderToString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renderToString as t } from "react-dom/server";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renderToString as t } from "react-dom/server";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('renderToStaticMarkup', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renderToStaticMarkup;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renderToStaticMarkup } from "react-dom/server";
            
            new renderToStaticMarkup();
            
            class A1 extends renderToStaticMarkup {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renderToStaticMarkup } from "react-dom/server";
            
            renderToStaticMarkup();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            new M.renderToStaticMarkup();
            
            class A1 extends M.renderToStaticMarkup {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            M.renderToStaticMarkup();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renderToStaticMarkup as t } from "react-dom/server";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renderToStaticMarkup as t } from "react-dom/server";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('renderToNodeStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renderToNodeStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renderToNodeStream } from "react-dom/server";
            
            new renderToNodeStream();
            
            class A1 extends renderToNodeStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renderToNodeStream } from "react-dom/server";
            
            renderToNodeStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            new M.renderToNodeStream();
            
            class A1 extends M.renderToNodeStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            M.renderToNodeStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renderToNodeStream as t } from "react-dom/server";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renderToNodeStream as t } from "react-dom/server";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('renderToStaticNodeStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renderToStaticNodeStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renderToStaticNodeStream } from "react-dom/server";
            
            new renderToStaticNodeStream();
            
            class A1 extends renderToStaticNodeStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renderToStaticNodeStream } from "react-dom/server";
            
            renderToStaticNodeStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            new M.renderToStaticNodeStream();
            
            class A1 extends M.renderToStaticNodeStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/server";
            
            M.renderToStaticNodeStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renderToStaticNodeStream as t } from "react-dom/server";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renderToStaticNodeStream as t } from "react-dom/server";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('version', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = version;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('react-dom/test-utils', () => {
      describe('Simulate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Simulate;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('renderIntoDocument', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renderIntoDocument;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renderIntoDocument } from "react-dom/test-utils";
            
            new renderIntoDocument();
            
            class A1 extends renderIntoDocument {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renderIntoDocument } from "react-dom/test-utils";
            
            renderIntoDocument();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.renderIntoDocument();
            
            class A1 extends M.renderIntoDocument {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.renderIntoDocument();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renderIntoDocument as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renderIntoDocument as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('mockComponent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = mockComponent;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { mockComponent } from "react-dom/test-utils";
            
            new mockComponent();
            
            class A1 extends mockComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { mockComponent } from "react-dom/test-utils";
            
            mockComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.mockComponent();
            
            class A1 extends M.mockComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.mockComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { mockComponent as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { mockComponent as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isElement', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isElement;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isElement } from "react-dom/test-utils";
            
            new isElement();
            
            class A1 extends isElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isElement } from "react-dom/test-utils";
            
            isElement();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.isElement();
            
            class A1 extends M.isElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.isElement();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isElement as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isElement as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isElementOfType', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isElementOfType;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isElementOfType } from "react-dom/test-utils";
            
            new isElementOfType();
            
            class A1 extends isElementOfType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isElementOfType } from "react-dom/test-utils";
            
            isElementOfType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.isElementOfType();
            
            class A1 extends M.isElementOfType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.isElementOfType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isElementOfType as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isElementOfType as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isDOMComponent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isDOMComponent;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isDOMComponent } from "react-dom/test-utils";
            
            new isDOMComponent();
            
            class A1 extends isDOMComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isDOMComponent } from "react-dom/test-utils";
            
            isDOMComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.isDOMComponent();
            
            class A1 extends M.isDOMComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.isDOMComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isDOMComponent as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isDOMComponent as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isCompositeComponent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isCompositeComponent;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isCompositeComponent } from "react-dom/test-utils";
            
            new isCompositeComponent();
            
            class A1 extends isCompositeComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isCompositeComponent } from "react-dom/test-utils";
            
            isCompositeComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.isCompositeComponent();
            
            class A1 extends M.isCompositeComponent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.isCompositeComponent();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isCompositeComponent as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isCompositeComponent as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isCompositeComponentWithType', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isCompositeComponentWithType;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isCompositeComponentWithType } from "react-dom/test-utils";
            
            new isCompositeComponentWithType();
            
            class A1 extends isCompositeComponentWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isCompositeComponentWithType } from "react-dom/test-utils";
            
            isCompositeComponentWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.isCompositeComponentWithType();
            
            class A1 extends M.isCompositeComponentWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.isCompositeComponentWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isCompositeComponentWithType as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isCompositeComponentWithType as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('findAllInRenderedTree', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = findAllInRenderedTree;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { findAllInRenderedTree } from "react-dom/test-utils";
            
            new findAllInRenderedTree();
            
            class A1 extends findAllInRenderedTree {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { findAllInRenderedTree } from "react-dom/test-utils";
            
            findAllInRenderedTree();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.findAllInRenderedTree();
            
            class A1 extends M.findAllInRenderedTree {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.findAllInRenderedTree();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { findAllInRenderedTree as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { findAllInRenderedTree as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('scryRenderedDOMComponentsWithClass', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = scryRenderedDOMComponentsWithClass;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
            
            new scryRenderedDOMComponentsWithClass();
            
            class A1 extends scryRenderedDOMComponentsWithClass {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
            
            scryRenderedDOMComponentsWithClass();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.scryRenderedDOMComponentsWithClass();
            
            class A1 extends M.scryRenderedDOMComponentsWithClass {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.scryRenderedDOMComponentsWithClass();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithClass as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithClass as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('findRenderedDOMComponentWithClass', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = findRenderedDOMComponentWithClass;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
            
            new findRenderedDOMComponentWithClass();
            
            class A1 extends findRenderedDOMComponentWithClass {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
            
            findRenderedDOMComponentWithClass();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.findRenderedDOMComponentWithClass();
            
            class A1 extends M.findRenderedDOMComponentWithClass {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.findRenderedDOMComponentWithClass();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithClass as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithClass as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('scryRenderedDOMComponentsWithTag', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = scryRenderedDOMComponentsWithTag;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
            
            new scryRenderedDOMComponentsWithTag();
            
            class A1 extends scryRenderedDOMComponentsWithTag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
            
            scryRenderedDOMComponentsWithTag();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.scryRenderedDOMComponentsWithTag();
            
            class A1 extends M.scryRenderedDOMComponentsWithTag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.scryRenderedDOMComponentsWithTag();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithTag as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedDOMComponentsWithTag as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('findRenderedDOMComponentWithTag', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = findRenderedDOMComponentWithTag;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
            
            new findRenderedDOMComponentWithTag();
            
            class A1 extends findRenderedDOMComponentWithTag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
            
            findRenderedDOMComponentWithTag();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.findRenderedDOMComponentWithTag();
            
            class A1 extends M.findRenderedDOMComponentWithTag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.findRenderedDOMComponentWithTag();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithTag as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { findRenderedDOMComponentWithTag as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('scryRenderedComponentsWithType', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = scryRenderedComponentsWithType;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { scryRenderedComponentsWithType } from "react-dom/test-utils";
            
            new scryRenderedComponentsWithType();
            
            class A1 extends scryRenderedComponentsWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { scryRenderedComponentsWithType } from "react-dom/test-utils";
            
            scryRenderedComponentsWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.scryRenderedComponentsWithType();
            
            class A1 extends M.scryRenderedComponentsWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.scryRenderedComponentsWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedComponentsWithType as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { scryRenderedComponentsWithType as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('findRenderedComponentWithType', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = findRenderedComponentWithType;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { findRenderedComponentWithType } from "react-dom/test-utils";
            
            new findRenderedComponentWithType();
            
            class A1 extends findRenderedComponentWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { findRenderedComponentWithType } from "react-dom/test-utils";
            
            findRenderedComponentWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.findRenderedComponentWithType();
            
            class A1 extends M.findRenderedComponentWithType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.findRenderedComponentWithType();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { findRenderedComponentWithType as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { findRenderedComponentWithType as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('act', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = act;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { act } from "react-dom/test-utils";
            
            new act();
            
            class A1 extends act {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { act } from "react-dom/test-utils";
            
            act();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            new M.act();
            
            class A1 extends M.act {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react-dom/test-utils";
            
            M.act();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { act as t } from "react-dom/test-utils";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { act as t } from "react-dom/test-utils";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });
  });
});
