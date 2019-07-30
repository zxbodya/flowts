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
            class A1 extends React$Node {};
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

      test('generated - class - typePrams(1 - 2)', () => {
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

      test('generated - class - typePrams(1 - 2)', () => {
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

      test('generated - class - typePrams(2)', () => {
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
            class A1 extends React$AbstractComponentStatics {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$StatelessFunctionalComponent', () => {
      test('generated - type - typePrams(1)', () => {
        expect(
          transform(`
            let a1: React$StatelessFunctionalComponent<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typePrams(1)', () => {
        expect(
          transform(`
            class A1 implements React$StatelessFunctionalComponent<P0> {}
            interface I1 extends React$StatelessFunctionalComponent<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$ComponentType', () => {
      test('generated - type - typePrams(1)', () => {
        expect(
          transform(`
            let a1: React$ComponentType<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typePrams(1)', () => {
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
            class A1 extends React$ElementType {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Element', () => {
      test('generated - type - typePrams(1)', () => {
        expect(
          transform(`
            let a1: React$Element<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typePrams(1)', () => {
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
            class A1 extends React$MixedElement {};
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
            class A1 extends React$Key {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Ref', () => {
      test('generated - type - typePrams(1)', () => {
        expect(
          transform(`
            let a1: React$Ref<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typePrams(1)', () => {
        expect(
          transform(`
            class A1 implements React$Ref<P0> {}
            interface I1 extends React$Ref<P0> {}
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('React$Context', () => {
      test('generated - type - typePrams(1)', () => {
        expect(
          transform(`
            let a1: React$Context<P0>;
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface - typePrams(1)', () => {
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
            class A1 extends React$Portal {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    describe('react', () => {
      describe('DOM', () => {
        test('has no test', () => {});
      });

      describe('PropTypes', () => {
        test('has no test', () => {});
      });

      describe('version', () => {
        test('has no test', () => {});
      });

      describe('checkPropTypes', () => {
        test('has no test', () => {});
      });

      describe('createClass', () => {
        test('has no test', () => {});
      });

      describe('createContext', () => {
        test('has no test', () => {});
      });

      describe('createElement', () => {
        test('has no test', () => {});
      });

      describe('cloneElement', () => {
        test('has no test', () => {});
      });

      describe('createFactory', () => {
        test('has no test', () => {});
      });

      describe('createRef', () => {
        test('has no test', () => {});
      });

      describe('isValidElement', () => {
        test('has no test', () => {});
      });

      describe('Component', () => {
        test('has no test', () => {});
      });

      describe('PureComponent', () => {
        test('has no test', () => {});
      });

      describe('StatelessFunctionalComponent', () => {
        test('has no test', () => {});
      });

      describe('ComponentType', () => {
        test('has no test', () => {});
      });

      describe('AbstractComponent', () => {
        test('has no test', () => {});
      });

      describe('MixedElement', () => {
        test('has no test', () => {});
      });

      describe('ElementType', () => {
        test('has no test', () => {});
      });

      describe('Element', () => {
        test('has no test', () => {});
      });

      describe('Fragment', () => {
        test('has no test', () => {});
      });

      describe('Key', () => {
        test('has no test', () => {});
      });

      describe('Ref', () => {
        test('has no test', () => {});
      });

      describe('Node', () => {
        test('has no test', () => {});
      });

      describe('Context', () => {
        test('has no test', () => {});
      });

      describe('Portal', () => {
        test('has no test', () => {});
      });

      describe('ConcurrentMode', () => {
        test('has no test', () => {});
      });

      describe('StrictMode', () => {
        test('has no test', () => {});
      });

      describe('Suspense', () => {
        test('has no test', () => {});
      });

      describe('ElementProps', () => {
        test('has no test', () => {});
      });

      describe('ElementConfig', () => {
        test('has no test', () => {});
      });

      describe('ElementRef', () => {
        test('has no test', () => {});
      });

      describe('Config', () => {
        test('has no test', () => {});
      });

      describe('ChildrenArray', () => {
        test('has no test', () => {});
      });

      describe('Children', () => {
        test('has no test', () => {});
      });

      describe('forwardRef', () => {
        test('has no test', () => {});
      });

      describe('memo', () => {
        test('has no test', () => {});
      });

      describe('lazy', () => {
        test('has no test', () => {});
      });

      describe('MaybeCleanUpFn', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { MaybeCleanUpFn } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { MaybeCleanUpFn } from "react";
            
            class A1 extends MaybeCleanUpFn {};
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
            
            class A1 extends M.MaybeCleanUpFn {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { MaybeCleanUpFn as t } from "react";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { MaybeCleanUpFn as t } from "react";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useContext', () => {
        test('has no test', () => {});
      });

      describe('useState', () => {
        test('has no test', () => {});
      });

      describe('Dispatch', () => {
        test('generated - type - typePrams(1)', () => {
          expect(
            transform(`
            import { Dispatch } from "react";
            
            let a1: Dispatch<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - typePrams(1)', () => {
          expect(
            transform(`
            import { Dispatch } from "react";
            
            class A1 implements Dispatch<P0> {}
            interface I1 extends Dispatch<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            let a1: M.Dispatch<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace - typePrams(1)', () => {
          expect(
            transform(`
            import * as M from "react";
            
            class A1 implements M.Dispatch<P0> {}
            interface I1 extends M.Dispatch<P0> {}
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { Dispatch as t } from "react";
            
            let a1: t<P0>;
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed - typePrams(1)', () => {
          expect(
            transform(`
            import { Dispatch as t } from "react";
            
            class A1 implements t<P0> {}
            interface I1 extends t<P0> {}
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('useReducer', () => {
        test('has no test', () => {});
      });

      describe('useRef', () => {
        test('has no test', () => {});
      });

      describe('useDebugValue', () => {
        test('has no test', () => {});
      });

      describe('useEffect', () => {
        test('has no test', () => {});
      });

      describe('useLayoutEffect', () => {
        test('has no test', () => {});
      });

      describe('useCallback', () => {
        test('has no test', () => {});
      });

      describe('useMemo', () => {
        test('has no test', () => {});
      });

      describe('useImperativeHandle', () => {
        test('has no test', () => {});
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
  });
});
