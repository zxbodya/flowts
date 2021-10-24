import * as t from '@babel/types';
import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
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
      context.import('react', 'ReactNode');
    },

    /*
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
      context.import('react', 'Component');
    },

    /*
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
      context.import('react', 'PureComponent');
    },

    /*
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
    LegacyReactComponent: false,

    /*
        declare type React$AbstractComponentStatics = {
          displayName?: ?string,
          // This is only on function components, but trying to access name when
          // displayName is undefined is a common pattern.
          name?: ?string,
          propTypes?: {[string] : any, ...},
          ...
        };
        */
    React$AbstractComponentStatics: false,

    /*
        declare type React$StatelessFunctionalComponent<Props> = {
          (props: Props, context: any): React$Node,
          displayName?: ?string,
          propTypes?: any,
          contextTypes?: any,
          ...
        };
        */
    React$StatelessFunctionalComponent(context) {
      context.import('react', 'FunctionComponent');
    },

    /*
        declare type React$ComponentType<-Config> = React$AbstractComponent<Config, mixed>;
        */
    React$ComponentType(context) {
      context.import('react', 'ComponentType');
    },

    /*
        declare type React$ElementType =
          | string
          | React$AbstractComponent<empty, mixed>;
        */
    React$ElementType(context) {
      context.import('react', 'ElementType');
    },

    /*
        declare type React$Element<+ElementType: React$ElementType> = {|
          +type: ElementType,
          +props: React$ElementProps<ElementType>,
          +key: React$Key | null,
          +ref: any,
        |};
        */
    React$Element(context) {
      context.import('react', 'ReactElement');
    },

    /*
        declare type React$MixedElement = React$Element<React$ElementType>;
        */
    React$MixedElement(context) {
      context.import('react', 'MixedElement');
    },

    /*
        declare type React$Key = string | number;
        */
    React$Key(context) {
      context.import('react', 'Key');
    },

    /*
        declare type React$Ref<ElementType: React$ElementType> =
          | { -current: React$ElementRef<ElementType> | null, ... }
          | ((React$ElementRef<ElementType> | null) => mixed)
          | number | string;
        */
    React$Ref(context) {
      context.import('react', 'Ref');
    },

    /*
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
      context.import('react', 'Context');
    },

    /*
        declare opaque type React$Portal;
        */
    React$Portal(context) {
      context.import('react', 'Portal');
    },

    /*
        declare type React$FragmentType = ({ children?: React$Node, ... }) => React$Node;
        */
    React$FragmentType: false,

    React$ElementRef(context) {
      context.import('react', 'ElementRef');
    },
  },

  modules: {
    react: {
      exports: {
        /*
                declare export var DOM: any;
                */
        DOM: false,

        /*
                declare export var PropTypes: ReactPropTypes;
                */
        PropTypes: false,

        /*
                declare export var version: string;
                */
        version: false,

        /*
                declare export function checkPropTypes<V>(
                    propTypes : any,
                    values: V,
                    location: string,
                    componentName: string,
                    getStack: ?(() => ?string)
                  ) : void;
                */
        checkPropTypes: false,

        /*
                declare export var createClass: React$CreateClass;
                */
        createClass: false,

        /*
                declare export function createContext<T>(
                    defaultValue: T,
                    calculateChangedBits: ?(a: T, b: T) => number,
                  ): React$Context<T>;
                */
        createContext: false,

        /*
                declare export var createElement: React$CreateElement;
                */
        createElement: false,

        /*
                declare export var cloneElement: React$CloneElement;
                */
        cloneElement: false,

        /*
                declare export function createFactory<ElementType: React$ElementType>(
                    type: ElementType,
                  ): React$ElementFactory<ElementType>;
                */
        createFactory: false,

        /*
                declare export function createRef<T>(
                  ): {|current: null | T|};
                */
        createRef: false,

        /*
                declare export function isValidElement(element: any): boolean;
                */
        isValidElement: false,

        /*
                declare export var Component: typeof React$Component;
                */
        Component: false,

        /*
                declare export var PureComponent: typeof React$PureComponent;
                */
        PureComponent: false,

        /*
                declare export type StatelessFunctionalComponent<P> =
                    React$StatelessFunctionalComponent<P>;
                */
        StatelessFunctionalComponent(context) {
          context.renameExport('FunctionComponent');
        },

        /*
                declare export type ComponentType<-P> = React$ComponentType<P>;
                */
        ComponentType: false,

        /*
                declare export type AbstractComponent<
                    -Config,
                    +Instance = mixed,
                  > = React$AbstractComponent<Config, Instance>;
                */
        AbstractComponent(context) {
          context.renameExport('ComponentType');
        },

        /*
                declare export type MixedElement = React$MixedElement;
                */
        MixedElement: false,

        /*
                declare export type ElementType = React$ElementType;
                */
        ElementType: false,

        /*
                declare export type Element<+C> = React$Element<C>;
                */
        Element(context) {
          context.renameExport('ReactElement');
        },

        /*
                declare export var Fragment: React$FragmentType;
                */
        Fragment: false,

        /*
                declare export type Key = React$Key;
                */
        Key: false,

        /*
                declare export type Ref<C> = React$Ref<C>;
                */
        Ref: false,

        /*
                declare export type Node = React$Node;
                */
        Node(context) {
          context.renameExport('ReactNode');
        },

        /*
                declare export type TransportObject = React$TransportObject;
                */
        TransportObject: false,

        /*
                declare export type TransportValue = React$TransportValue;
                */
        TransportValue: false,

        /*
                declare export type Context<T> = React$Context<T>;
                */
        Context: false,

        /*
                declare export type Portal = React$Portal;
                */
        Portal: false,

        /*
                declare export var ConcurrentMode: ({ children?: React$Node, ... }) => React$Node;
                */
        ConcurrentMode: false,

        /*
                declare export var StrictMode: ({ children?: React$Node, ... }) => React$Node;
                */
        StrictMode: false,

        /*
                declare export var Suspense: React$ComponentType<{
                    children?: React$Node,
                    fallback?: React$Node,
                    ...
                  }>;
                */
        Suspense: false,

        /*
                declare export type ElementProps<C> = React$ElementProps<C>;
                */
        ElementProps(context) {
          context.renameExport('ComponentProps');
        },

        /*
                declare export type ElementConfig<C> = React$ElementConfig<C>;
                */
        ElementConfig(context) {
          context.renameExport('ComponentProps');
        },

        /*
                declare export type ElementRef<C> = React$ElementRef<C>;
                */
        ElementRef(context) {
          context.renameExport('RefObject');
        },

        /*
                declare export type Config<Props, DefaultProps> = React$Config<Props, DefaultProps>;
                */
        Config: false,

        /*
                declare export type ChildrenArray<+T> = $ReadOnlyArray<ChildrenArray<T>> | T;
                */
        ChildrenArray(context) {
          // todo: introduce helper type ChildrenArray<T> = T[] | T
          // if T is reference transform directly to reduce bloat
        },

        /*
                declare export var Children: {
                    map<T, U, This>(
                      children: ChildrenArray<T>,
                      fn: (this : This, child: $NonMaybeType<T>, index: number) => U,
                      thisArg: This,
                    ): Array<$NonMaybeType<U>>,
                    forEach<T, This>(
                      children: ChildrenArray<T>,
                      fn: (this : This, child: T, index: number) => mixed,
                      thisArg: This,
                    ): void,
                    count(children: ChildrenArray<any>): number,
                    only<T>(children: ChildrenArray<T>): $NonMaybeType<T>,
                    toArray<T>(children: ChildrenArray<T>): Array<$NonMaybeType<T>>,
                    ...
                  };
                */
        Children: false,

        /*
                declare export function forwardRef<Config, Instance>(
                    render: (
                      props: Config,
                      ref: { current: null | Instance, ... } | ((null | Instance) => mixed),
                    ) => React$Node,
                  ): React$AbstractComponent<Config, Instance>;
                */
        forwardRef(context) {
          for (const path of context.referencePaths) {
            if (
              path.parentPath &&
              path.parentPath.isCallExpression() &&
              path.parentPath.node.typeParameters
            ) {
              if (path.parentPath.node.typeParameters.params.length === 2) {
                const [T, P] = path.parentPath.node.typeParameters.params;
                path.parentPath.node.typeParameters.params = [P, T];
              }

              if (path.parentPath.node.typeParameters.params.length === 1) {
                const [T] = path.parentPath.node.typeParameters.params;
                path.parentPath.node.typeParameters.params = [
                  t.tsTypeLiteral([]),
                  T,
                ];
              }
            }
          }
        },

        /*
                declare export function memo<Config, Instance = mixed>(
                    component: React$AbstractComponent<Config, Instance>,
                    equal?: (Config, Config) => boolean,
                  ): React$AbstractComponent<Config, Instance>;
                */
        memo: false,

        /*
                declare export function lazy<Config, Instance = mixed>(
                    component: () => Promise<{ default: React$AbstractComponent<Config, Instance>, ... }>,
                  ): React$AbstractComponent<Config, Instance>;
                */
        lazy: false,

        /*
                declare type MaybeCleanUpFn = void | (() => void);
                */
        MaybeCleanUpFn: false,

        /*
                declare export function useContext<T>(context: React$Context<T>): T;
                */
        useContext: false,

        /*
                declare export function useState<S>(
                    initialState: (() => S) | S,
                  ): [S, ((S => S) | S) => void];
                */
        useState: false,

        /*
                declare type Dispatch<A> = (A) => void;
                */
        Dispatch: false,

        /*
                declare export function useReducer<S, A>(
                    reducer: (S, A) => S,
                    initialState: S,
                  ): [S, Dispatch<A>];
                */
        /*
                declare export function useReducer<S, A>(
                    reducer: (S, A) => S,
                    initialState: S,
                    init: void,
                  ): [S, Dispatch<A>];
                */
        /*
                declare export function useReducer<S, A, I>(
                    reducer: (S, A) => S,
                    initialArg: I,
                    init: (I) => S,
                  ): [S, Dispatch<A>];
                */
        useReducer: false,

        /*
                declare export function useRef<T>(initialValue: T): {|current: T|};
                */
        useRef: false,

        /*
                declare export function useDebugValue(value: any): void;
                */
        useDebugValue: false,

        /*
                declare export function useEffect(
                    create: () => MaybeCleanUpFn,
                    inputs?: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useEffect: false,

        /*
                declare export function useLayoutEffect(
                    create: () => MaybeCleanUpFn,
                    inputs?: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useLayoutEffect: false,

        /*
                declare export function useCallback<T: (...args: $ReadOnlyArray<empty>) => mixed>(
                    callback: T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): T;
                */
        useCallback: false,

        /*
                declare export function useMemo<T>(
                    create: () => T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): T;
                */
        useMemo: false,

        /*
                declare export function useImperativeHandle<T>(
                    ref: { current: T | null, ... } | ((inst: T | null) => mixed) | null | void,
                    create: () => T,
                    inputs: ?$ReadOnlyArray<mixed>,
                  ): void;
                */
        useImperativeHandle: false,

        /*
                declare export function useDeferredValue<T>(value: T): T;
                */
        useDeferredValue: false,

        /*
                declare export function useTransition(): [boolean, (() => void) => void];
                */
        useTransition: false,

        /*
                declare export function startTransition(() => void): void;
                */
        startTransition: false,

        /*
                declare export type Interaction = {
                    name: string,
                    timestamp: number,
                    ...
                  };
                */
        Interaction: false,

        /*
                declare type ProfilerOnRenderFnType = (
                    id: string,
                    phase: "mount" | "update",
                    actualDuration: number,
                    baseDuration: number,
                    startTime: number,
                    commitTime: number,
                    interactions: Set<Interaction>,
                  ) => void;
                */
        ProfilerOnRenderFnType: false,

        /*
                declare export var Profiler: React$AbstractComponent<{|
                    children?: React$Node,
                    id: string,
                    onRender: ProfilerOnRenderFnType,
                  |}, void>;
                */
        Profiler: false,

        /*
                declare type TimeoutConfig = {|
                    timeoutMs: number,
                  |};
                */
        TimeoutConfig: false,

        /*
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
                    +Fragment: React$FragmentType,
                    +Children: typeof Children,
                    +ConcurrentMode: typeof ConcurrentMode,
                    +StrictMode: typeof StrictMode,
                    +Profiler: typeof Profiler,
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
                    +useTransition: typeof useTransition,
                    +useDeferredValue: typeof useDeferredValue,
                    +startTransition: typeof startTransition,
                  |};
                */
        default: false,
      },
    },

    React: {
      exports: {
        /*
                declare module.exports: $Exports<'react'>;
                */
        default: false,
      },
    },

    '#flow-internal-react-server-module': {
      exports: {
        /*
                declare export var createElement: React$CreateElement;
                */
        createElement: false,

        /*
                declare export type Node = React$Node;
                */
        Node: false,

        /*
                declare export default {|
                    +createElement: typeof createElement,
                  |};
                */
        default: false,
      },
    },
  },
} as RuleSet;
