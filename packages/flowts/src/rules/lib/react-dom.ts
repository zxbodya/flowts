import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare class SyntheticEvent<+T: EventTarget = EventTarget, +E: Event = Event> {
          bubbles: boolean;
          cancelable: boolean;
          +currentTarget: T;
          defaultPrevented: boolean;
          eventPhase: number;
          isDefaultPrevented(): boolean;
          isPropagationStopped(): boolean;
          isTrusted: boolean;
          nativeEvent: E;
          preventDefault(): void;
          stopPropagation(): void;
          // This should not be `T`. Use `currentTarget` instead. See:
          // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11508#issuecomment-256045682
          +target: EventTarget;
          timeStamp: number;
          type: string;
          persist(): void;
        }
        */
    SyntheticEvent(context) {
      context.import('react', 'SyntheticEvent');
    },

    /*
        declare class SyntheticAnimationEvent<+T: EventTarget = EventTarget>
          extends SyntheticEvent<T>
        {
          animationName: string;
          elapsedTime: number;
          pseudoElement: string;
        }
        */
    SyntheticAnimationEvent(context) {
      context.import('react', 'AnimationEvent');
    },

    /*
        declare class SyntheticClipboardEvent<+T: EventTarget = EventTarget>
          extends SyntheticEvent<T>
        {
          clipboardData: any;
        }
        */
    SyntheticClipboardEvent(context) {
      context.import('react', 'ClipboardEvent');
    },

    /*
        declare class SyntheticCompositionEvent<+T: EventTarget = EventTarget>
          extends SyntheticEvent<T>
        {
          data: any;
        }
        */
    SyntheticCompositionEvent(context) {
      context.import('react', 'CompositionEvent');
    },

    /*
        declare class SyntheticInputEvent<+T: EventTarget = EventTarget>
          extends SyntheticEvent<T>
        {
          +target: HTMLInputElement;
          data: any;
        }
        */
    SyntheticInputEvent(context) {
      context.import('react', 'ChangeEvent');
    },

    /*
        declare class SyntheticUIEvent<+T: EventTarget = EventTarget, +E: Event = Event>
          extends SyntheticEvent<T, E>
        {
          detail: number;
          view: any;
        }
        */
    SyntheticUIEvent(context) {
      context.import('react', 'UIEvent');
    },

    /*
        declare class SyntheticFocusEvent<+T: EventTarget = EventTarget>
          extends SyntheticUIEvent<T>
        {
          relatedTarget: EventTarget;
        }
        */
    SyntheticFocusEvent(context) {
      context.import('react', 'FocusEvent');
    },

    /*
        declare class SyntheticKeyboardEvent<+T: EventTarget = EventTarget>
          extends SyntheticUIEvent<T, KeyboardEvent>
        {
          altKey: boolean;
          charCode: number;
          ctrlKey: boolean;
          getModifierState(keyArg?: string): boolean;
          key: string;
          keyCode: number;
          locale: string;
          location: number;
          metaKey: boolean;
          repeat: boolean;
          shiftKey: boolean;
          which: number;
        }
        */
    SyntheticKeyboardEvent(context) {
      context.import('react', 'KeyboardEvent');
    },

    /*
        declare class SyntheticMouseEvent<
            +T: EventTarget = EventTarget,
            +E: Event = MouseEvent
          >
          extends SyntheticUIEvent<T, E>
        {
          altKey: boolean;
          button: number;
          buttons: number;
          clientX: number;
          clientY: number;
          ctrlKey: boolean;
          getModifierState(keyArg: string): boolean;
          metaKey: boolean;
          pageX: number;
          pageY: number;
          relatedTarget: EventTarget;
          screenX: number;
          screenY: number;
          shiftKey: boolean;
        }
        */
    SyntheticMouseEvent(context) {
      context.import('react', 'MouseEvent');
    },

    /*
        declare class SyntheticDragEvent<+T: EventTarget = EventTarget>
          extends SyntheticMouseEvent<T, DragEvent>
        {
          dataTransfer: any;
        }
        */
    SyntheticDragEvent(context) {
      context.import('react', 'DragEvent');
    },

    /*
        declare class SyntheticWheelEvent<+T: EventTarget = EventTarget>
          extends SyntheticMouseEvent<T, WheelEvent>
        {
          deltaMode: number;
          deltaX: number;
          deltaY: number;
          deltaZ: number;
        }
        */
    SyntheticWheelEvent(context) {
      context.import('react', 'WheelEvent');
    },

    /*
        declare class SyntheticPointerEvent<+T: EventTarget = EventTarget>
          extends SyntheticMouseEvent<T, PointerEvent>
        {
          pointerId: number;
          width: number;
          height: number;
          pressure: number;
          tangentialPressure: number;
          tiltX: number;
          tiltY: number;
          twist: number;
          pointerType: string;
          isPrimary: boolean;
        }
        */
    SyntheticPointerEvent(context) {
      context.import('react', 'PointerEvent');
    },

    /*
        declare class SyntheticTouchEvent<+T: EventTarget = EventTarget>
          extends SyntheticUIEvent<T, TouchEvent>
        {
          altKey: boolean;
          changedTouches: any;
          ctrlKey: boolean;
          getModifierState: any;
          metaKey: boolean;
          shiftKey: boolean;
          targetTouches: any;
          touches: any;
        }
        */
    SyntheticTouchEvent(context) {
      context.import('react', 'TouchEvent');
    },

    /*
        declare class SyntheticTransitionEvent<+T: EventTarget = EventTarget>
          extends SyntheticEvent<T>
        {
          propertyName: string;
          elapsedTime: number;
          pseudoElement: string;
        }
        */
    SyntheticTransitionEvent(context) {
      context.import('react', 'TransitionEvent');
    },

    /*
        declare type $JSXIntrinsics = {
          // Catch-all for custom elements.
          [string]: ReactDOM$HTMLElementJSXIntrinsic,
          // HTML
          a: {
            instance: HTMLAnchorElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          abbr: ReactDOM$HTMLElementJSXIntrinsic,
          address: ReactDOM$HTMLElementJSXIntrinsic,
          area: ReactDOM$HTMLElementJSXIntrinsic,
          article: ReactDOM$HTMLElementJSXIntrinsic,
          aside: ReactDOM$HTMLElementJSXIntrinsic,
          audio: {
            instance: HTMLAudioElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          b: ReactDOM$HTMLElementJSXIntrinsic,
          base: ReactDOM$HTMLElementJSXIntrinsic,
          bdi: ReactDOM$HTMLElementJSXIntrinsic,
          bdo: ReactDOM$HTMLElementJSXIntrinsic,
          big: ReactDOM$HTMLElementJSXIntrinsic,
          blockquote: ReactDOM$HTMLElementJSXIntrinsic,
          body: ReactDOM$HTMLElementJSXIntrinsic,
          br: {
            instance: HTMLBRElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          button: {
            instance: HTMLButtonElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          canvas: {
            instance: HTMLCanvasElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          caption: {
            instance: HTMLTableCaptionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          cite: ReactDOM$HTMLElementJSXIntrinsic,
          code: ReactDOM$HTMLElementJSXIntrinsic,
          col: ReactDOM$HTMLElementJSXIntrinsic,
          colgroup: ReactDOM$HTMLElementJSXIntrinsic,
          data: ReactDOM$HTMLElementJSXIntrinsic,
          datalist: ReactDOM$HTMLElementJSXIntrinsic,
          dd: ReactDOM$HTMLElementJSXIntrinsic,
          del: ReactDOM$HTMLElementJSXIntrinsic,
          details: {
            instance: HTMLDetailsElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dfn: ReactDOM$HTMLElementJSXIntrinsic,
          dialog: ReactDOM$HTMLElementJSXIntrinsic,
          div: {
            instance: HTMLDivElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dl: {
            instance: HTMLDListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          dt: ReactDOM$HTMLElementJSXIntrinsic,
          em: ReactDOM$HTMLElementJSXIntrinsic,
          embed: ReactDOM$HTMLElementJSXIntrinsic,
          fieldset: {
            instance: HTMLFieldSetElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          figcaption: ReactDOM$HTMLElementJSXIntrinsic,
          figure: ReactDOM$HTMLElementJSXIntrinsic,
          footer: ReactDOM$HTMLElementJSXIntrinsic,
          form: {
            instance: HTMLFormElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h1: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h2: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h3: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h4: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h5: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          h6: {
            instance: HTMLHeadingElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          head: ReactDOM$HTMLElementJSXIntrinsic,
          header: ReactDOM$HTMLElementJSXIntrinsic,
          hgroup: ReactDOM$HTMLElementJSXIntrinsic,
          hr: {
            instance: HTMLHRElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          html: ReactDOM$HTMLElementJSXIntrinsic,
          i: ReactDOM$HTMLElementJSXIntrinsic,
          iframe: {
            instance: HTMLIFrameElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          img: {
            instance: HTMLImageElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          ins: ReactDOM$HTMLElementJSXIntrinsic,
          kbd: ReactDOM$HTMLElementJSXIntrinsic,
          keygen: ReactDOM$HTMLElementJSXIntrinsic,
          label: {
            instance: HTMLLabelElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          legend: {
            instance: HTMLLegendElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          li: {
            instance: HTMLLIElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          link: {
            instance: HTMLLinkElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          main: ReactDOM$HTMLElementJSXIntrinsic,
          map: ReactDOM$HTMLElementJSXIntrinsic,
          mark: ReactDOM$HTMLElementJSXIntrinsic,
          menu: ReactDOM$HTMLElementJSXIntrinsic,
          menuitem: ReactDOM$HTMLElementJSXIntrinsic,
          meta: {
            instance: HTMLMetaElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          meter: ReactDOM$HTMLElementJSXIntrinsic,
          nav: ReactDOM$HTMLElementJSXIntrinsic,
          noscript: ReactDOM$HTMLElementJSXIntrinsic,
          object: ReactDOM$HTMLElementJSXIntrinsic,
          ol: {
            instance: HTMLOListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          optgroup: {
            instance: HTMLOptGroupElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          option: {
            instance: HTMLOptionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          output: ReactDOM$HTMLElementJSXIntrinsic,
          p: {
            instance: HTMLParagraphElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          param: ReactDOM$HTMLElementJSXIntrinsic,
          picture: ReactDOM$HTMLElementJSXIntrinsic,
          pre: {
            instance: HTMLPreElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          progress: ReactDOM$HTMLElementJSXIntrinsic,
          q: ReactDOM$HTMLElementJSXIntrinsic,
          rp: ReactDOM$HTMLElementJSXIntrinsic,
          rt: ReactDOM$HTMLElementJSXIntrinsic,
          ruby: ReactDOM$HTMLElementJSXIntrinsic,
          s: ReactDOM$HTMLElementJSXIntrinsic,
          samp: ReactDOM$HTMLElementJSXIntrinsic,
          script: {
            instance: HTMLScriptElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          section: ReactDOM$HTMLElementJSXIntrinsic,
          small: ReactDOM$HTMLElementJSXIntrinsic,
          source: {
            instance: HTMLSourceElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          span: {
            instance: HTMLSpanElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          strong: ReactDOM$HTMLElementJSXIntrinsic,
          style: {
            instance: HTMLStyleElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          sub: ReactDOM$HTMLElementJSXIntrinsic,
          summary: ReactDOM$HTMLElementJSXIntrinsic,
          sup: ReactDOM$HTMLElementJSXIntrinsic,
          table: {
            instance: HTMLTableElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          tbody: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          td: {
            instance: HTMLTableCellElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          tfoot: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          th: {
            instance: HTMLTableCellElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          thead: {
            instance: HTMLTableSectionElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          time: ReactDOM$HTMLElementJSXIntrinsic,
          title: ReactDOM$HTMLElementJSXIntrinsic,
          tr: {
            instance: HTMLTableRowElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          track: ReactDOM$HTMLElementJSXIntrinsic,
          u: ReactDOM$HTMLElementJSXIntrinsic,
          ul: {
            instance: HTMLUListElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          'var': ReactDOM$HTMLElementJSXIntrinsic,
          video: {
            instance: HTMLVideoElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          wbr: ReactDOM$HTMLElementJSXIntrinsic,
          // SVG
          svg: ReactDOM$SVGElementJSXIntrinsic,
          animate: ReactDOM$SVGElementJSXIntrinsic,
          circle: ReactDOM$SVGElementJSXIntrinsic,
          defs: ReactDOM$SVGElementJSXIntrinsic,
          ellipse: ReactDOM$SVGElementJSXIntrinsic,
          g: ReactDOM$SVGElementJSXIntrinsic,
          image: ReactDOM$SVGElementJSXIntrinsic,
          line: ReactDOM$SVGElementJSXIntrinsic,
          linearGradient: ReactDOM$SVGElementJSXIntrinsic,
          mask: ReactDOM$SVGElementJSXIntrinsic,
          path: ReactDOM$SVGElementJSXIntrinsic,
          pattern: ReactDOM$SVGElementJSXIntrinsic,
          polygon: ReactDOM$SVGElementJSXIntrinsic,
          polyline: ReactDOM$SVGElementJSXIntrinsic,
          radialGradient: ReactDOM$SVGElementJSXIntrinsic,
          rect: ReactDOM$SVGElementJSXIntrinsic,
          stop: ReactDOM$SVGElementJSXIntrinsic,
          symbol: ReactDOM$SVGElementJSXIntrinsic,
          text: ReactDOM$SVGElementJSXIntrinsic,
          tspan: ReactDOM$SVGElementJSXIntrinsic,
          use: ReactDOM$SVGElementJSXIntrinsic,
          // Elements React adds extra props for.
          input: {
            instance: HTMLInputElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          textarea: {
            instance: HTMLTextAreaElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          select: {
            instance: HTMLSelectElement,
            props: {
              [key: string]: any,
              children?: React$Node,
              ...
            },
            ...
          },
          ...
        };
        */
    $JSXIntrinsics: false,
  },

  modules: {},
} as RuleSet;
