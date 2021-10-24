import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/react.js', () => {
  describe('globals', () => {
    describe('React$Node', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$Node {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Component', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = React$Component;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1 - 2)', () => {
        expect(
          transform(`
            new React$Component();
            
            class A1 extends React$Component<P0> {}
            let a1 = new React$Component<P0>();
            
            class A2 extends React$Component<P0, P1> {}
            let a2 = new React$Component<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$PureComponent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = React$PureComponent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1 - 2)', () => {
        expect(
          transform(`
            new React$PureComponent();
            
            class A1 extends React$PureComponent<P0> {}
            let a1 = new React$PureComponent<P0>();
            
            class A2 extends React$PureComponent<P0, P1> {}
            let a2 = new React$PureComponent<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('LegacyReactComponent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = LegacyReactComponent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new LegacyReactComponent();
            
            class A1 extends LegacyReactComponent<P0, P1> {}
            let a1 = new LegacyReactComponent<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$AbstractComponentStatics', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$AbstractComponentStatics {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$StatelessFunctionalComponent', () => {
      test('generated - type - typeParams(1)', () => {
        expect(
          transform(`
            let a1: React$StatelessFunctionalComponent<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typeParams(1)', () => {
        expect(
          transform(`
            class A1 implements React$StatelessFunctionalComponent<P0> {}
            interface I1 extends React$StatelessFunctionalComponent<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$ComponentType', () => {
      test('generated - type - typeParams(1)', () => {
        expect(
          transform(`
            let a1: React$ComponentType<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typeParams(1)', () => {
        expect(
          transform(`
            class A1 implements React$ComponentType<P0> {}
            interface I1 extends React$ComponentType<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$ElementType', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$ElementType {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Element', () => {
      test('generated - type - typeParams(1)', () => {
        expect(
          transform(`
            let a1: React$Element<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typeParams(1)', () => {
        expect(
          transform(`
            class A1 implements React$Element<P0> {}
            interface I1 extends React$Element<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$MixedElement', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$MixedElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Key', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$Key {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Ref', () => {
      test('generated - type - typeParams(1)', () => {
        expect(
          transform(`
            let a1: React$Ref<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typeParams(1)', () => {
        expect(
          transform(`
            class A1 implements React$Ref<P0> {}
            interface I1 extends React$Ref<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Context', () => {
      test('generated - type - typeParams(1)', () => {
        expect(
          transform(`
            let a1: React$Context<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typeParams(1)', () => {
        expect(
          transform(`
            class A1 implements React$Context<P0> {}
            interface I1 extends React$Context<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Portal', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$Portal {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$FragmentType', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements React$FragmentType {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    describe('react', () => {
      describe('DOM', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DOM;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('PropTypes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = PropTypes;
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

      describe('checkPropTypes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = checkPropTypes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { checkPropTypes } from "react";
            
            new checkPropTypes();
            
            class A1 extends checkPropTypes<P0> {}
            let a1 = new checkPropTypes<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { checkPropTypes } from "react";
            
            checkPropTypes();
            
            let a1 = checkPropTypes<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.checkPropTypes();
            
            class A1 extends M.checkPropTypes<P0> {}
            let a1 = new M.checkPropTypes<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.checkPropTypes();
            
            let a1 = M.checkPropTypes<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { checkPropTypes as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { checkPropTypes as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createClass', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createClass;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { createContext } from "react";
            
            new createContext();
            
            class A1 extends createContext<P0> {}
            let a1 = new createContext<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { createContext } from "react";
            
            createContext();
            
            let a1 = createContext<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.createContext();
            
            class A1 extends M.createContext<P0> {}
            let a1 = new M.createContext<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.createContext();
            
            let a1 = M.createContext<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createContext as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createContext as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createElement', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createElement;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('cloneElement', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = cloneElement;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createFactory', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createFactory;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { createFactory } from "react";
            
            new createFactory();
            
            class A1 extends createFactory<P0> {}
            let a1 = new createFactory<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { createFactory } from "react";
            
            createFactory();
            
            let a1 = createFactory<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.createFactory();
            
            class A1 extends M.createFactory<P0> {}
            let a1 = new M.createFactory<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.createFactory();
            
            let a1 = M.createFactory<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createFactory as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createFactory as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createRef', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createRef;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { createRef } from "react";
            
            new createRef();
            
            class A1 extends createRef<P0> {}
            let a1 = new createRef<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { createRef } from "react";
            
            createRef();
            
            let a1 = createRef<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.createRef();
            
            class A1 extends M.createRef<P0> {}
            let a1 = new M.createRef<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.createRef();
            
            let a1 = M.createRef<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createRef as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { createRef as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isValidElement', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isValidElement;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isValidElement } from "react";
            
            new isValidElement();
            
            class A1 extends isValidElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isValidElement } from "react";
            
            isValidElement();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.isValidElement();
            
            class A1 extends M.isValidElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.isValidElement();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isValidElement as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isValidElement as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Component', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Component;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('PureComponent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = PureComponent;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('StatelessFunctionalComponent', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { StatelessFunctionalComponent } from "react";
            
            let a1: StatelessFunctionalComponent<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { StatelessFunctionalComponent } from "react";
            
            class A1 implements StatelessFunctionalComponent<P0> {}
            interface I1 extends StatelessFunctionalComponent<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.StatelessFunctionalComponent<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.StatelessFunctionalComponent<P0> {}
            interface I1 extends M.StatelessFunctionalComponent<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { StatelessFunctionalComponent as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { StatelessFunctionalComponent as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ComponentType', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { ComponentType } from "react";
            
            let a1: ComponentType<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { ComponentType } from "react";
            
            class A1 implements ComponentType<P0> {}
            interface I1 extends ComponentType<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.ComponentType<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ComponentType<P0> {}
            interface I1 extends M.ComponentType<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ComponentType as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ComponentType as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('AbstractComponent', () => {
        test('generated - type - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import type { AbstractComponent } from "react";
            
            let a1: AbstractComponent<P0>;
            let a2: AbstractComponent<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import type { AbstractComponent } from "react";
            
            class A1 implements AbstractComponent<P0> {}
            interface I1 extends AbstractComponent<P0> {}
            
            class A2 implements AbstractComponent<P0, P1> {}
            interface I2 extends AbstractComponent<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.AbstractComponent<P0>;
            let a2: M.AbstractComponent<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.AbstractComponent<P0> {}
            interface I1 extends M.AbstractComponent<P0> {}
            
            class A2 implements M.AbstractComponent<P0, P1> {}
            interface I2 extends M.AbstractComponent<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import type { AbstractComponent as t } from "react";
            
            let a1: t<P0>;
            let a2: t<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import type { AbstractComponent as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
            class A2 implements t<P0, P1> {}
            interface I2 extends t<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('MixedElement', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { MixedElement } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { MixedElement } from "react";
            
            class A1 implements MixedElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.MixedElement {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { MixedElement as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { MixedElement as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ElementType', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { ElementType } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { ElementType } from "react";
            
            class A1 implements ElementType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ElementType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { ElementType as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { ElementType as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Element', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { Element } from "react";
            
            let a1: Element<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { Element } from "react";
            
            class A1 implements Element<P0> {}
            interface I1 extends Element<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Element<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Element<P0> {}
            interface I1 extends M.Element<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Element as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Element as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Fragment', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Fragment;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Key', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { Key } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { Key } from "react";
            
            class A1 implements Key {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Key {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { Key as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { Key as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Ref', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { Ref } from "react";
            
            let a1: Ref<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { Ref } from "react";
            
            class A1 implements Ref<P0> {}
            interface I1 extends Ref<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Ref<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Ref<P0> {}
            interface I1 extends M.Ref<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Ref as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Ref as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Node', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { Node } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { Node } from "react";
            
            class A1 implements Node {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Node {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { Node as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { Node as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TransportObject', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { TransportObject } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { TransportObject } from "react";
            
            class A1 implements TransportObject {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.TransportObject {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { TransportObject as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { TransportObject as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TransportValue', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { TransportValue } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { TransportValue } from "react";
            
            class A1 implements TransportValue {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.TransportValue {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { TransportValue as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { TransportValue as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Context', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { Context } from "react";
            
            let a1: Context<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { Context } from "react";
            
            class A1 implements Context<P0> {}
            interface I1 extends Context<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Context<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Context<P0> {}
            interface I1 extends M.Context<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Context as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Context as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Portal', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { Portal } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { Portal } from "react";
            
            class A1 implements Portal {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Portal {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { Portal as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { Portal as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ConcurrentMode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ConcurrentMode;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('StrictMode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = StrictMode;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Suspense', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Suspense;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ElementProps', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementProps } from "react";
            
            let a1: ElementProps<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementProps } from "react";
            
            class A1 implements ElementProps<P0> {}
            interface I1 extends ElementProps<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.ElementProps<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ElementProps<P0> {}
            interface I1 extends M.ElementProps<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementProps as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementProps as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ElementConfig', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementConfig } from "react";
            
            let a1: ElementConfig<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementConfig } from "react";
            
            class A1 implements ElementConfig<P0> {}
            interface I1 extends ElementConfig<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.ElementConfig<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ElementConfig<P0> {}
            interface I1 extends M.ElementConfig<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementConfig as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementConfig as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ElementRef', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementRef } from "react";
            
            let a1: ElementRef<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementRef } from "react";
            
            class A1 implements ElementRef<P0> {}
            interface I1 extends ElementRef<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.ElementRef<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ElementRef<P0> {}
            interface I1 extends M.ElementRef<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementRef as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ElementRef as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Config', () => {
        test('generated - type - typeParams(2)', () => {
          expect(
            transform(`
            import type { Config } from "react";
            
            let a1: Config<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(2)', () => {
          expect(
            transform(`
            import type { Config } from "react";
            
            class A1 implements Config<P0, P1> {}
            interface I1 extends Config<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Config<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Config<P0, P1> {}
            interface I1 extends M.Config<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import type { Config as t } from "react";
            
            let a1: t<P0, P1>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import type { Config as t } from "react";
            
            class A1 implements t<P0, P1> {}
            interface I1 extends t<P0, P1> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ChildrenArray', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { ChildrenArray } from "react";
            
            let a1: ChildrenArray<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { ChildrenArray } from "react";
            
            class A1 implements ChildrenArray<P0> {}
            interface I1 extends ChildrenArray<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.ChildrenArray<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ChildrenArray<P0> {}
            interface I1 extends M.ChildrenArray<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ChildrenArray as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { ChildrenArray as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Children', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Children;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('forwardRef', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = forwardRef;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(2)', () => {
          expect(
            transform(`
            import { forwardRef } from "react";
            
            new forwardRef();
            
            class A1 extends forwardRef<P0, P1> {}
            let a1 = new forwardRef<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(2)', () => {
          expect(
            transform(`
            import { forwardRef } from "react";
            
            forwardRef();
            
            let a1 = forwardRef<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.forwardRef();
            
            class A1 extends M.forwardRef<P0, P1> {}
            let a1 = new M.forwardRef<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.forwardRef();
            
            let a1 = M.forwardRef<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import { forwardRef as t } from "react";
            
            new t();
            
            class A1 extends t<P0, P1> {}
            let a1 = new t<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import { forwardRef as t } from "react";
            
            t();
            
            let a1 = t<P0, P1>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('memo', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = memo;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { memo } from "react";
            
            new memo();
            
            class A1 extends memo<P0> {}
            let a1 = new memo<P0>();
            
            class A2 extends memo<P0, P1> {}
            let a2 = new memo<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { memo } from "react";
            
            memo();
            
            let a1 = memo<P0>();
            let a2 = memo<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.memo();
            
            class A1 extends M.memo<P0> {}
            let a1 = new M.memo<P0>();
            
            class A2 extends M.memo<P0, P1> {}
            let a2 = new M.memo<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.memo();
            
            let a1 = M.memo<P0>();
            let a2 = M.memo<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { memo as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
            class A2 extends t<P0, P1> {}
            let a2 = new t<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { memo as t } from "react";
            
            t();
            
            let a1 = t<P0>();
            let a2 = t<P0, P1>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lazy', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lazy;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { lazy } from "react";
            
            new lazy();
            
            class A1 extends lazy<P0> {}
            let a1 = new lazy<P0>();
            
            class A2 extends lazy<P0, P1> {}
            let a2 = new lazy<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { lazy } from "react";
            
            lazy();
            
            let a1 = lazy<P0>();
            let a2 = lazy<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.lazy();
            
            class A1 extends M.lazy<P0> {}
            let a1 = new M.lazy<P0>();
            
            class A2 extends M.lazy<P0, P1> {}
            let a2 = new M.lazy<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.lazy();
            
            let a1 = M.lazy<P0>();
            let a2 = M.lazy<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { lazy as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
            class A2 extends t<P0, P1> {}
            let a2 = new t<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1 - 2)', () => {
          expect(
            transform(`
            import { lazy as t } from "react";
            
            t();
            
            let a1 = t<P0>();
            let a2 = t<P0, P1>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('MaybeCleanUpFn', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { MaybeCleanUpFn } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { MaybeCleanUpFn } from "react";
            
            class A1 implements MaybeCleanUpFn {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.MaybeCleanUpFn {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { MaybeCleanUpFn as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { MaybeCleanUpFn as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useContext } from "react";
            
            new useContext();
            
            class A1 extends useContext<P0> {}
            let a1 = new useContext<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useContext } from "react";
            
            useContext();
            
            let a1 = useContext<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useContext();
            
            class A1 extends M.useContext<P0> {}
            let a1 = new M.useContext<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useContext();
            
            let a1 = M.useContext<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useContext as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useContext as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useState', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useState;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useState } from "react";
            
            new useState();
            
            class A1 extends useState<P0> {}
            let a1 = new useState<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useState } from "react";
            
            useState();
            
            let a1 = useState<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useState();
            
            class A1 extends M.useState<P0> {}
            let a1 = new M.useState<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useState();
            
            let a1 = M.useState<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useState as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useState as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Dispatch', () => {
        test('generated - type - typeParams(1)', () => {
          expect(
            transform(`
            import type { Dispatch } from "react";
            
            let a1: Dispatch<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typeParams(1)', () => {
          expect(
            transform(`
            import type { Dispatch } from "react";
            
            class A1 implements Dispatch<P0> {}
            interface I1 extends Dispatch<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Dispatch<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Dispatch<P0> {}
            interface I1 extends M.Dispatch<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Dispatch as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import type { Dispatch as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useReducer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useReducer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(2)', () => {
          expect(
            transform(`
            import { useReducer } from "react";
            
            new useReducer();
            
            class A1 extends useReducer<P0, P1> {}
            let a1 = new useReducer<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import { useReducer } from "react";
            
            new useReducer();
            
            class A1 extends useReducer<P0, P1, P2> {}
            let a1 = new useReducer<P0, P1, P2>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(2)', () => {
          expect(
            transform(`
            import { useReducer } from "react";
            
            useReducer();
            
            let a1 = useReducer<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import { useReducer } from "react";
            
            useReducer();
            
            let a1 = useReducer<P0, P1, P2>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useReducer();
            
            class A1 extends M.useReducer<P0, P1> {}
            let a1 = new M.useReducer<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useReducer();
            
            class A1 extends M.useReducer<P0, P1, P2> {}
            let a1 = new M.useReducer<P0, P1, P2>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(2)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useReducer();
            
            let a1 = M.useReducer<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useReducer();
            
            let a1 = M.useReducer<P0, P1, P2>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import { useReducer as t } from "react";
            
            new t();
            
            class A1 extends t<P0, P1> {}
            let a1 = new t<P0, P1>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import { useReducer as t } from "react";
            
            new t();
            
            class A1 extends t<P0, P1, P2> {}
            let a1 = new t<P0, P1, P2>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(2)', () => {
          expect(
            transform(`
            import { useReducer as t } from "react";
            
            t();
            
            let a1 = t<P0, P1>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(2) - typeParams(3)', () => {
          expect(
            transform(`
            import { useReducer as t } from "react";
            
            t();
            
            let a1 = t<P0, P1, P2>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useRef', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useRef;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useRef } from "react";
            
            new useRef();
            
            class A1 extends useRef<P0> {}
            let a1 = new useRef<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useRef } from "react";
            
            useRef();
            
            let a1 = useRef<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useRef();
            
            class A1 extends M.useRef<P0> {}
            let a1 = new M.useRef<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useRef();
            
            let a1 = M.useRef<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useRef as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useRef as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useDebugValue', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useDebugValue;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { useDebugValue } from "react";
            
            new useDebugValue();
            
            class A1 extends useDebugValue {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { useDebugValue } from "react";
            
            useDebugValue();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useDebugValue();
            
            class A1 extends M.useDebugValue {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useDebugValue();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { useDebugValue as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { useDebugValue as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useEffect', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useEffect;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { useEffect } from "react";
            
            new useEffect();
            
            class A1 extends useEffect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { useEffect } from "react";
            
            useEffect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useEffect();
            
            class A1 extends M.useEffect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useEffect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { useEffect as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { useEffect as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useLayoutEffect', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useLayoutEffect;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { useLayoutEffect } from "react";
            
            new useLayoutEffect();
            
            class A1 extends useLayoutEffect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { useLayoutEffect } from "react";
            
            useLayoutEffect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useLayoutEffect();
            
            class A1 extends M.useLayoutEffect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useLayoutEffect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { useLayoutEffect as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { useLayoutEffect as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useCallback', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useCallback;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useCallback } from "react";
            
            new useCallback();
            
            class A1 extends useCallback<P0> {}
            let a1 = new useCallback<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useCallback } from "react";
            
            useCallback();
            
            let a1 = useCallback<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useCallback();
            
            class A1 extends M.useCallback<P0> {}
            let a1 = new M.useCallback<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useCallback();
            
            let a1 = M.useCallback<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useCallback as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useCallback as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useMemo', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useMemo;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useMemo } from "react";
            
            new useMemo();
            
            class A1 extends useMemo<P0> {}
            let a1 = new useMemo<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useMemo } from "react";
            
            useMemo();
            
            let a1 = useMemo<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useMemo();
            
            class A1 extends M.useMemo<P0> {}
            let a1 = new M.useMemo<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useMemo();
            
            let a1 = M.useMemo<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useMemo as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useMemo as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useImperativeHandle', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useImperativeHandle;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useImperativeHandle } from "react";
            
            new useImperativeHandle();
            
            class A1 extends useImperativeHandle<P0> {}
            let a1 = new useImperativeHandle<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useImperativeHandle } from "react";
            
            useImperativeHandle();
            
            let a1 = useImperativeHandle<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useImperativeHandle();
            
            class A1 extends M.useImperativeHandle<P0> {}
            let a1 = new M.useImperativeHandle<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useImperativeHandle();
            
            let a1 = M.useImperativeHandle<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useImperativeHandle as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useImperativeHandle as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useDeferredValue', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useDeferredValue;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { useDeferredValue } from "react";
            
            new useDeferredValue();
            
            class A1 extends useDeferredValue<P0> {}
            let a1 = new useDeferredValue<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { useDeferredValue } from "react";
            
            useDeferredValue();
            
            let a1 = useDeferredValue<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useDeferredValue();
            
            class A1 extends M.useDeferredValue<P0> {}
            let a1 = new M.useDeferredValue<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useDeferredValue();
            
            let a1 = M.useDeferredValue<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useDeferredValue as t } from "react";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { useDeferredValue as t } from "react";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useTransition', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = useTransition;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { useTransition } from "react";
            
            new useTransition();
            
            class A1 extends useTransition {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { useTransition } from "react";
            
            useTransition();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.useTransition();
            
            class A1 extends M.useTransition {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.useTransition();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { useTransition as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { useTransition as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('startTransition', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = startTransition;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { startTransition } from "react";
            
            new startTransition();
            
            class A1 extends startTransition {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { startTransition } from "react";
            
            startTransition();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            new M.startTransition();
            
            class A1 extends M.startTransition {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            M.startTransition();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { startTransition as t } from "react";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { startTransition as t } from "react";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Interaction', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { Interaction } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { Interaction } from "react";
            
            class A1 implements Interaction {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Interaction {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { Interaction as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { Interaction as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ProfilerOnRenderFnType', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { ProfilerOnRenderFnType } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { ProfilerOnRenderFnType } from "react";
            
            class A1 implements ProfilerOnRenderFnType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.ProfilerOnRenderFnType {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { ProfilerOnRenderFnType as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { ProfilerOnRenderFnType as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Profiler', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Profiler;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TimeoutConfig', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { TimeoutConfig } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { TimeoutConfig } from "react";
            
            class A1 implements TimeoutConfig {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.TimeoutConfig {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { TimeoutConfig as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { TimeoutConfig as t } from "react";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('default', () => {
        test('has no test', () => {});
      });
    });

    describe('React', () => {
      describe('default', () => {
        test('has no test', () => {});
      });
    });

    describe('#flow-internal-react-server-module', () => {
      describe('createElement', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createElement;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Node', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import type { Node } from "#flow-internal-react-server-module";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import type { Node } from "#flow-internal-react-server-module";
            
            class A1 implements Node {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "#flow-internal-react-server-module";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "#flow-internal-react-server-module";
            
            class A1 implements M.Node {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import type { Node as t } from "#flow-internal-react-server-module";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import type { Node as t } from "#flow-internal-react-server-module";
            
            class A1 implements t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('default', () => {
        test('has no test', () => {});
      });
    });
  });
});
