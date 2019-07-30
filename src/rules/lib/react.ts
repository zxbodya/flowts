import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/react.js:13:0

        declare type React$Node =
          | null
          | boolean
          | number
          | string
          | React$Element<any>
          | React$Portal
          | Iterable<?React$Node>;
        */
    React$Node(context) {
      context.importFlow('react', 'Node');
      context.warnOnce('Rule for global "React$Node" is not verified');
    },

    /*
        lib/react.js:26:0

        declare class React$Component<Props, State = void> {
          // fields

          props: Props;
          state: State;

          // action methods

          setState(
            partialState: ?$Shape<State> | ((State, Props) => ?$Shape<State>),
            callback?: () => mixed,
          ): void;

          forceUpdate(callback?: () => void): void;

          // lifecycle methods

          constructor(props?: Props, context?: any): void;
          render(): React$Node;
          componentWillMount(): mixed;
          UNSAFE_componentWillMount(): mixed;
          componentDidMount(): mixed;
          componentWillReceiveProps(
            nextProps: Props,
            nextContext: any,
          ): mixed;
          UNSAFE_componentWillReceiveProps(
            nextProps: Props,
            nextContext: any,
          ): mixed;
          shouldComponentUpdate(
            nextProps: Props,
            nextState: State,
            nextContext: any,
          ): boolean;
          componentWillUpdate(
            nextProps: Props,
            nextState: State,
            nextContext: any,
          ): mixed;
          UNSAFE_componentWillUpdate(
            nextProps: Props,
            nextState: State,
            nextContext: any,
          ): mixed;
          componentDidUpdate(
            prevProps: Props,
            prevState: State,
            prevContext: any,
          ): mixed;
          componentWillUnmount(): mixed;
          componentDidCatch(
            error: Error,
            info: { componentStack: string, ... }
          ): mixed;

          // long tail of other stuff not modeled very well

          refs: any;
          context: any;
          getChildContext(): any;
          static displayName?: ?string;
          static childContextTypes: any;
          static contextTypes: any;
          static propTypes: any;

          // We don't add a type for `defaultProps` so that its type may be entirely
          // inferred when we diff the type for `defaultProps` with `Props`. Otherwise
          // the user would need to define a type (which would be redundant) to override
          // the type we provide here in the base class.
          //
          // static defaultProps: $Shape<Props>;
        }
        */
    React$Component(context) {
      context.importFlow('react', 'Component');
      context.warnOnce('Rule for global "React$Component" is not verified');
    },

    /*
        lib/react.js:100:0

        declare class React$PureComponent<Props, State = void>
          extends React$Component<Props, State> {
          // TODO: Due to bugs in Flow's handling of React.createClass, some fields
          // already declared in the base class need to be redeclared below. Ideally
          // they should simply be inherited.

          props: Props;
          state: State;
        }
        */
    React$PureComponent(context) {
      context.importFlow('react', 'PureComponent');
      context.warnOnce('Rule for global "React$PureComponent" is not verified');
    },

    /*
        lib/react.js:114:0

        declare class LegacyReactComponent<Props, State>
          extends React$Component<Props, State> {
          // additional methods

          replaceState(state: State, callback?: () => void): void;

          isMounted(): bool;

          // TODO: Due to bugs in Flow's handling of React.createClass, some fields
          // already declared in the base class need to be redeclared below. Ideally
          // they should simply be inherited.

          props: Props;
          state: State;
        }
        */
    LegacyReactComponent(context) {
      context.warnOnce(
        'Rule for global "LegacyReactComponent" is not verified'
      );
    },

    /*
        lib/react.js:130:0

        declare type React$AbstractComponentStatics = {
          displayName?: ?string,
          // This is only on function components, but trying to access name when
          // displayName is undefined is a common pattern.
          name?: ?string,
          ...
        };
        */
    React$AbstractComponentStatics(context) {
      context.warnOnce(
        'Rule for global "React$AbstractComponentStatics" is not verified'
      );
    },

    /*
        lib/react.js:143:0

        declare type React$StatelessFunctionalComponent<Props> = {
          (props: Props, context: any): React$Node,
          displayName?: ?string,
          propTypes?: any,
          contextTypes?: any,
          ...
        };
        */
    React$StatelessFunctionalComponent(context) {
      context.importFlow('react', 'StatelessFunctionalComponent');
      context.warnOnce(
        'Rule for global "React$StatelessFunctionalComponent" is not verified'
      );
    },

    /*
        lib/react.js:159:0

        declare type React$ComponentType<-Config> = React$AbstractComponent<Config, mixed>;
        */
    React$ComponentType(context) {
      context.importFlow('react', 'ComponentType');
      context.warnOnce('Rule for global "React$ComponentType" is not verified');
    },

    /*
        lib/react.js:169:0

        declare type React$ElementType =
          | string
          | React$AbstractComponent<empty, mixed>;
        */
    React$ElementType(context) {
      context.importFlow('react', 'ElementType');
      context.warnOnce('Rule for global "React$ElementType" is not verified');
    },

    /*
        lib/react.js:177:0

        declare type React$Element<+ElementType: React$ElementType> = {|
          +type: ElementType,
          +props: React$ElementProps<ElementType>,
          +key: React$Key | null,
          +ref: any,
        |};
        */
    React$Element(context) {
      context.importFlow('react', 'Element');
      context.warnOnce('Rule for global "React$Element" is not verified');
    },

    /*
        lib/react.js:184:0

        declare type React$MixedElement = React$Element<React$ElementType>;
        */
    React$MixedElement(context) {
      context.importFlow('react', 'MixedElement');
      context.warnOnce('Rule for global "React$MixedElement" is not verified');
    },

    /*
        lib/react.js:190:0

        declare type React$Key = string | number;
        */
    React$Key(context) {
      context.importFlow('react', 'Key');
      context.warnOnce('Rule for global "React$Key" is not verified');
    },

    /*
        lib/react.js:195:0

        declare type React$Ref<ElementType: React$ElementType> =
          | { -current: React$ElementRef<ElementType> | null, ... }
          | ((React$ElementRef<ElementType> | null) => mixed)
          | number | string;
        */
    React$Ref(context) {
      context.importFlow('react', 'Ref');
      context.warnOnce('Rule for global "React$Ref" is not verified');
    },

    /*
        lib/react.js:204:0

        declare type React$Context<T> = {
          Provider: React$ComponentType<{
            value: T,
            children?: React$Node,
            ...
          }>,
          Consumer: React$ComponentType<{ children: (value: T) => ?React$Node, ... }>,
          // Optional, user-specified value for custom display label in React DevTools.
          displayName?: string,
          ...
        }
        */
    React$Context(context) {
      context.importFlow('react', 'Context');
      context.warnOnce('Rule for global "React$Context" is not verified');
    },

    /*
        lib/react.js:220:0

        declare opaque type React$Portal;
        */
    React$Portal(context) {
      context.importFlow('react', 'Portal');
      context.warnOnce('Rule for global "React$Portal" is not verified');
    },
  },

  modules: {
    react: {
      libs: [],

      exports: {
        /*
                lib/react.js:223:2

                declare export var DOM: any;
                */
        DOM(context) {
          context.warnOnce(
            'Rule for export "DOM" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:224:2

                declare export var PropTypes: ReactPropTypes;
                */
        PropTypes(context) {
          context.warnOnce(
            'Rule for export "PropTypes" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:225:2

                declare export var version: string;
                */
        version(context) {
          context.warnOnce(
            'Rule for export "version" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:227:2

                declare export function checkPropTypes<V>(
                    propTypes : any,
                    values: V,
                    location: string,
                    componentName: string,
                    getStack: ?(() => ?string)
                  ) : void;
                */
        checkPropTypes(context) {
          context.warnOnce(
            'Rule for export "checkPropTypes" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:235:2

                declare export var createClass: React$CreateClass;
                */
        createClass(context) {
          context.warnOnce(
            'Rule for export "createClass" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:236:2

                declare export function createContext<T>(
                    defaultValue: T,
                    calculateChangedBits: ?(a: T, b: T) => number,
                  ): React$Context<T>;
                */
        createContext(context) {
          context.warnOnce(
            'Rule for export "createContext" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:240:2

                declare export var createElement: React$CreateElement;
                */
        createElement(context) {
          context.warnOnce(
            'Rule for export "createElement" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:241:2

                declare export var cloneElement: React$CloneElement;
                */
        cloneElement(context) {
          context.warnOnce(
            'Rule for export "cloneElement" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:242:2

                declare export function createFactory<ElementType: React$ElementType>(
                    type: ElementType,
                  ): React$ElementFactory<ElementType>;
                */
        createFactory(context) {
          context.warnOnce(
            'Rule for export "createFactory" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:245:2

                declare export function createRef<T>(
                  ): {|current: null | T|};
                */
        createRef(context) {
          context.warnOnce(
            'Rule for export "createRef" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:248:2

                declare export function isValidElement(element: any): boolean;
                */
        isValidElement(context) {
          context.warnOnce(
            'Rule for export "isValidElement" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:250:2

                declare export var Component: typeof React$Component;
                */
        Component(context) {
          context.warnOnce(
            'Rule for export "Component" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:251:2

                declare export var PureComponent: typeof React$PureComponent;
                */
        PureComponent(context) {
          context.warnOnce(
            'Rule for export "PureComponent" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:252:2

                declare export type StatelessFunctionalComponent<P> =
                    React$StatelessFunctionalComponent<P>;
                */
        StatelessFunctionalComponent(context) {
          context.warnOnce(
            'Rule for export "StatelessFunctionalComponent" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:254:2

                declare export type ComponentType<-P> = React$ComponentType<P>;
                */
        ComponentType(context) {
          context.warnOnce(
            'Rule for export "ComponentType" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:255:2

                declare export type AbstractComponent<
                    -Config,
                    +Instance = mixed,
                  > = React$AbstractComponent<Config, Instance>;
                */
        AbstractComponent(context) {
          context.warnOnce(
            'Rule for export "AbstractComponent" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:259:2

                declare export type MixedElement = React$MixedElement;
                */
        MixedElement(context) {
          context.warnOnce(
            'Rule for export "MixedElement" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:260:2

                declare export type ElementType = React$ElementType;
                */
        ElementType(context) {
          context.warnOnce(
            'Rule for export "ElementType" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:261:2

                declare export type Element<+C> = React$Element<C>;
                */
        Element(context) {
          context.warnOnce(
            'Rule for export "Element" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:262:2

                declare export var Fragment: ({ children?: React$Node, ... }) => React$Node;
                */
        Fragment(context) {
          context.warnOnce(
            'Rule for export "Fragment" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:263:2

                declare export type Key = React$Key;
                */
        Key(context) {
          context.warnOnce(
            'Rule for export "Key" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:264:2

                declare export type Ref<C> = React$Ref<C>;
                */
        Ref(context) {
          context.warnOnce(
            'Rule for export "Ref" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:265:2

                declare export type Node = React$Node;
                */
        Node(context) {
          context.warnOnce(
            'Rule for export "Node" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:266:2

                declare export type Context<T> = React$Context<T>;
                */
        Context(context) {
          context.warnOnce(
            'Rule for export "Context" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:267:2

                declare export type Portal = React$Portal;
                */
        Portal(context) {
          context.warnOnce(
            'Rule for export "Portal" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:268:2

                declare export var ConcurrentMode: ({ children?: React$Node, ... }) => React$Node;
                */
        ConcurrentMode(context) {
          context.warnOnce(
            'Rule for export "ConcurrentMode" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:269:2

                declare export var StrictMode: ({ children?: React$Node, ... }) => React$Node;
                */
        StrictMode(context) {
          context.warnOnce(
            'Rule for export "StrictMode" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:271:2

                declare export var Suspense: React$ComponentType<{
                    children?: React$Node,
                    fallback?: React$Node,
                    ...
                  }>;
                */
        Suspense(context) {
          context.warnOnce(
            'Rule for export "Suspense" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:277:2

                declare export type ElementProps<C> = React$ElementProps<C>;
                */
        ElementProps(context) {
          context.warnOnce(
            'Rule for export "ElementProps" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:278:2

                declare export type ElementConfig<C> = React$ElementConfig<C>;
                */
        ElementConfig(context) {
          context.warnOnce(
            'Rule for export "ElementConfig" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:279:2

                declare export type ElementRef<C> = React$ElementRef<C>;
                */
        ElementRef(context) {
          context.warnOnce(
            'Rule for export "ElementRef" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:280:2

                declare export type Config<Props, DefaultProps> = React$Config<Props, DefaultProps>;
                */
        Config(context) {
          context.warnOnce(
            'Rule for export "Config" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:282:2

                declare export type ChildrenArray<+T> = $ReadOnlyArray<ChildrenArray<T>> | T;
                */
        ChildrenArray(context) {
          context.warnOnce(
            'Rule for export "ChildrenArray" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:283:2

                declare export var Children: {
                    map<T, U>(
                      children: ChildrenArray<T>,
                      fn: (child: $NonMaybeType<T>, index: number) => U,
                      thisArg?: mixed,
                    ): Array<$NonMaybeType<U>>,
                    forEach<T>(
                      children: ChildrenArray<T>,
                      fn: (child: T, index: number) => mixed,
                      thisArg?: mixed,
                    ): void,
                    count(children: ChildrenArray<any>): number,
                    only<T>(children: ChildrenArray<T>): $NonMaybeType<T>,
                    toArray<T>(children: ChildrenArray<T>): Array<$NonMaybeType<T>>,
                    ...
                  };
                */
        Children(context) {
          context.warnOnce(
            'Rule for export "Children" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:300:2

                declare export function forwardRef<Config, Instance>(
                    render: (
                      props: Config,
                      ref: { current: null | Instance, ... } | ((null | Instance) => mixed),
                    ) => React$Node,
                  ): React$AbstractComponent<Config, Instance>;
                */
        forwardRef(context) {
          context.warnOnce(
            'Rule for export "forwardRef" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:307:2

                declare export function memo<Config, Instance = mixed>(
                    component: React$AbstractComponent<Config, Instance>,
                    equal?: (Config, Config) => boolean,
                  ): React$AbstractComponent<Config, Instance>;
                */
        memo(context) {
          context.warnOnce(
            'Rule for export "memo" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:312:2

                declare export function lazy<Config, Instance = mixed>(
                    component: () => Promise<{ default: React$AbstractComponent<Config, Instance>, ... }>,
                  ): React$AbstractComponent<Config, Instance>;
                */
        lazy(context) {
          context.warnOnce(
            'Rule for export "lazy" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:316:2

                declare type MaybeCleanUpFn = void | (() => void);
                */
        MaybeCleanUpFn(context) {
          context.warnOnce(
            'Rule for export "MaybeCleanUpFn" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:318:2

                declare export function useContext<T>(
                    context: React$Context<T>,
                    observedBits: void | number | boolean,
                  ): T;
                */
        useContext(context) {
          context.warnOnce(
            'Rule for export "useContext" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:323:2

                declare export function useState<S>(
                    initialState: (() => S) | S,
                  ): [S, ((S => S) | S) => void];
                */
        useState(context) {
          context.warnOnce(
            'Rule for export "useState" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:327:2

                declare type Dispatch<A> = (A) => void;
                */
        Dispatch(context) {
          context.warnOnce(
            'Rule for export "Dispatch" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:329:2

                declare export function useReducer<S, A>(
                    reducer: (S, A) => S,
                    initialState: S,
                  ): [S, Dispatch<A>];
                */
        /*
                lib/react.js:334:2

                declare export function useReducer<S, A>(
                    reducer: (S, A) => S,
                    initialState: S,
                    init: void,
                  ): [S, Dispatch<A>];
                */
        /*
                lib/react.js:340:2

                declare export function useReducer<S, A, I>(
                    reducer: (S, A) => S,
                    initialArg: I,
                    init: (I) => S,
                  ): [S, Dispatch<A>];
                */
        useReducer(context) {
          context.warnOnce(
            'Rule for export "useReducer" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:346:2

                declare export function useRef<T>(initialValue: T): {|current: T|};
                */
        useRef(context) {
          context.warnOnce(
            'Rule for export "useRef" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:348:2

                declare export function useDebugValue(value: any): void;
                */
        useDebugValue(context) {
          context.warnOnce(
            'Rule for export "useDebugValue" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:350:2

                declare export function useEffect(
                    create: () => MaybeCleanUpFn,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useEffect(context) {
          context.warnOnce(
            'Rule for export "useEffect" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:355:2

                declare export function useLayoutEffect(
                    create: () => MaybeCleanUpFn,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useLayoutEffect(context) {
          context.warnOnce(
            'Rule for export "useLayoutEffect" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:360:2

                declare export function useCallback<T: (...args: $ReadOnlyArray<empty>) => mixed>(
                    callback: T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): T;
                */
        useCallback(context) {
          context.warnOnce(
            'Rule for export "useCallback" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:365:2

                declare export function useMemo<T>(
                    create: () => T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): T;
                */
        useMemo(context) {
          context.warnOnce(
            'Rule for export "useMemo" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:370:2

                declare export function useImperativeHandle<T>(
                    ref: { current: T | null, ... } | ((inst: T | null) => mixed) | null | void,
                    create: () => T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useImperativeHandle(context) {
          context.warnOnce(
            'Rule for export "useImperativeHandle" in module "react" is not verified'
          );
        },

        /*
                lib/react.js:376:2

                declare export default {|
                    +DOM: typeof DOM,
                    +PropTypes: typeof PropTypes,
                    +version: typeof version,
                    +checkPropTypes: typeof checkPropTypes,
                    +memo: typeof memo,
                    +lazy: typeof lazy,
                    +createClass: typeof createClass,
                    +createContext: typeof createContext,
                    +createElement: typeof createElement,
                    +cloneElement: typeof cloneElement,
                    +createFactory: typeof createFactory,
                    +createRef: typeof createRef,
                    +forwardRef: typeof forwardRef,
                    +isValidElement: typeof isValidElement,
                    +Component: typeof Component,
                    +PureComponent: typeof PureComponent,
                    +Fragment: typeof Fragment,
                    +Children: typeof Children,
                    +ConcurrentMode: typeof ConcurrentMode,
                    +StrictMode: typeof StrictMode,
                    +Suspense: typeof Suspense,
                    +useContext: typeof useContext,
                    +useState: typeof useState,
                    +useReducer: typeof useReducer,
                    +useRef: typeof useRef,
                    +useEffect: typeof useEffect,
                    +useLayoutEffect: typeof useLayoutEffect,
                    +useCallback: typeof useCallback,
                    +useMemo: typeof useMemo,
                    +useImperativeHandle: typeof useImperativeHandle,
                  |};
                */
        default(context) {
          context.warnOnce(
            'Rule for export "default" in module "react" is not verified'
          );
        },
      },
    },

    React: {
      libs: [],

      exports: {
        /*
                lib/react.js:413:2

                declare module.exports: $Exports<'react'>;
                */
        default(context) {
          context.warnOnce(
            'Rule for export "default" in module "React" is not verified'
          );
        },
      },
    },
  },
} as RuleSet;
