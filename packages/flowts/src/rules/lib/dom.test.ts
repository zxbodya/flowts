import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/dom.js', () => {
  describe('globals', () => {
    describe('Blob', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Blob;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Blob();
            
            class A1 extends Blob {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FileReader', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = FileReader;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new FileReader();
            
            class A1 extends FileReader {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FilePropertyBag', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements FilePropertyBag {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('File', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = File;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new File();
            
            class A1 extends File {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FileList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = FileList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new FileList();
            
            class A1 extends FileList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DataTransfer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DataTransfer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DataTransfer();
            
            class A1 extends DataTransfer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DataTransferItemList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DataTransferItemList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DataTransferItemList();
            
            class A1 extends DataTransferItemList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DataTransferItem', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DataTransferItem;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DataTransferItem();
            
            class A1 extends DataTransferItem {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMStringMap', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements DOMStringMap {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMStringList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMStringList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMStringList();
            
            class A1 extends DOMStringList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMError();
            
            class A1 extends DOMError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ElementDefinitionOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ElementDefinitionOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CustomElementRegistry', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CustomElementRegistry {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ShadowRoot', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ShadowRoot {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ShadowRootMode', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ShadowRootMode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ShadowRootInit', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ShadowRootInit {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ScrollToOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ScrollToOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('EventTarget', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = EventTarget;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new EventTarget();
            
            class A1 extends EventTarget {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Event', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Event;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Event();
            
            class A1 extends Event {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CustomEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CustomEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CustomEvent();
            
            class A1 extends CustomEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('UIEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = UIEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new UIEvent();
            
            class A1 extends UIEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CompositionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CompositionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CompositionEvent();
            
            class A1 extends CompositionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MouseEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MouseEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MouseEvent();
            
            class A1 extends MouseEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FocusEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = FocusEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new FocusEvent();
            
            class A1 extends FocusEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WheelEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WheelEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WheelEvent();
            
            class A1 extends WheelEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DragEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DragEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DragEvent();
            
            class A1 extends DragEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PointerEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PointerEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PointerEvent();
            
            class A1 extends PointerEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ProgressEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ProgressEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ProgressEvent();
            
            class A1 extends ProgressEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PromiseRejectionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PromiseRejectionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PromiseRejectionEvent();
            
            class A1 extends PromiseRejectionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PageTransitionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PageTransitionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PageTransitionEvent();
            
            class A1 extends PageTransitionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MessageEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MessageEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MessageEvent();
            
            class A1 extends MessageEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('EventSource', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = EventSource;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new EventSource();
            
            class A1 extends EventSource {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('KeyboardEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = KeyboardEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new KeyboardEvent();
            
            class A1 extends KeyboardEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('InputEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = InputEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new InputEvent();
            
            class A1 extends InputEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnimationEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AnimationEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AnimationEvent();
            
            class A1 extends AnimationEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ErrorEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ErrorEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ErrorEvent();
            
            class A1 extends ErrorEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('BroadcastChannel', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = BroadcastChannel;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new BroadcastChannel();
            
            class A1 extends BroadcastChannel {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Touch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Touch;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Touch();
            
            class A1 extends Touch {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TouchList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TouchList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TouchList();
            
            class A1 extends TouchList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TouchEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TouchEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TouchEvent();
            
            class A1 extends TouchEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('StorageEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = StorageEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new StorageEvent();
            
            class A1 extends StorageEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ClipboardEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ClipboardEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ClipboardEvent();
            
            class A1 extends ClipboardEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TransitionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TransitionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TransitionEvent();
            
            class A1 extends TransitionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('BeforeUnloadEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = BeforeUnloadEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new BeforeUnloadEvent();
            
            class A1 extends BeforeUnloadEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Node', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Node;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Node();
            
            class A1 extends Node {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NodeList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NodeList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new NodeList();
            
            class A1 extends NodeList<P0> {}
            let a1 = new NodeList<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NamedNodeMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NamedNodeMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NamedNodeMap();
            
            class A1 extends NamedNodeMap {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Attr', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Attr;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Attr();
            
            class A1 extends Attr {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLCollection', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLCollection;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(1)', () => {
        expect(
          transform(`
            new HTMLCollection();
            
            class A1 extends HTMLCollection<P0> {}
            let a1 = new HTMLCollection<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Document', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Document;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Document();
            
            class A1 extends Document {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DocumentFragment', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DocumentFragment;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DocumentFragment();
            
            class A1 extends DocumentFragment {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Selection', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Selection;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Selection();
            
            class A1 extends Selection {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Range', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Range;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Range();
            
            class A1 extends Range {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('document', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = document;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMTokenList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMTokenList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMTokenList();
            
            class A1 extends DOMTokenList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Element', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Element;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Element();
            
            class A1 extends Element {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLElement();
            
            class A1 extends HTMLElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLSlotElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLSlotElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLSlotElement();
            
            class A1 extends HTMLSlotElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableElement();
            
            class A1 extends HTMLTableElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableCaptionElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableCaptionElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableCaptionElement();
            
            class A1 extends HTMLTableCaptionElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableColElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableColElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableColElement();
            
            class A1 extends HTMLTableColElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableSectionElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableSectionElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableSectionElement();
            
            class A1 extends HTMLTableSectionElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableCellElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableCellElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableCellElement();
            
            class A1 extends HTMLTableCellElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTableRowElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTableRowElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTableRowElement();
            
            class A1 extends HTMLTableRowElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLMenuElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLMenuElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLMenuElement();
            
            class A1 extends HTMLMenuElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLBaseElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLBaseElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLBaseElement();
            
            class A1 extends HTMLBaseElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTemplateElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTemplateElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTemplateElement();
            
            class A1 extends HTMLTemplateElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CanvasGradient', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CanvasGradient;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CanvasGradient();
            
            class A1 extends CanvasGradient {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CanvasPattern', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CanvasPattern;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CanvasPattern();
            
            class A1 extends CanvasPattern {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ImageBitmap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ImageBitmap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ImageBitmap();
            
            class A1 extends ImageBitmap {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HitRegionOptions', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HitRegionOptions;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HitRegionOptions();
            
            class A1 extends HitRegionOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CanvasDrawingStyles', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CanvasDrawingStyles;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CanvasDrawingStyles();
            
            class A1 extends CanvasDrawingStyles {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SVGMatrix', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SVGMatrix;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SVGMatrix();
            
            class A1 extends SVGMatrix {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextMetrics', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextMetrics;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextMetrics();
            
            class A1 extends TextMetrics {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Path2D', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Path2D;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Path2D();
            
            class A1 extends Path2D {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ImageData', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ImageData;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ImageData();
            
            class A1 extends ImageData {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CanvasRenderingContext2D', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CanvasRenderingContext2D;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CanvasRenderingContext2D();
            
            class A1 extends CanvasRenderingContext2D {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebGLRenderingContext', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebGLRenderingContext;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebGLRenderingContext();
            
            class A1 extends WebGLRenderingContext {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebGLContextEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebGLContextEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebGLContextEvent();
            
            class A1 extends WebGLContextEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLCanvasElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLCanvasElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLCanvasElement();
            
            class A1 extends HTMLCanvasElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDetailsElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDetailsElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDetailsElement();
            
            class A1 extends HTMLDetailsElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLFormElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLFormElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLFormElement();
            
            class A1 extends HTMLFormElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLFieldSetElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLFieldSetElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLFieldSetElement();
            
            class A1 extends HTMLFieldSetElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLLegendElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLLegendElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLLegendElement();
            
            class A1 extends HTMLLegendElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLIFrameElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLIFrameElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLIFrameElement();
            
            class A1 extends HTMLIFrameElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLImageElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLImageElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLImageElement();
            
            class A1 extends HTMLImageElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Image', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Image;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Image();
            
            class A1 extends Image {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaError();
            
            class A1 extends MediaError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TimeRanges', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TimeRanges;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TimeRanges();
            
            class A1 extends TimeRanges {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Audio', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Audio;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Audio();
            
            class A1 extends Audio {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioTrack', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioTrack;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioTrack();
            
            class A1 extends AudioTrack {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioTrackList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioTrackList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioTrackList();
            
            class A1 extends AudioTrackList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('VideoTrack', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = VideoTrack;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new VideoTrack();
            
            class A1 extends VideoTrack {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('VideoTrackList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = VideoTrackList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new VideoTrackList();
            
            class A1 extends VideoTrackList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextTrackCue', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextTrackCue;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextTrackCue();
            
            class A1 extends TextTrackCue {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextTrackCueList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextTrackCueList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextTrackCueList();
            
            class A1 extends TextTrackCueList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextTrack', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextTrack;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextTrack();
            
            class A1 extends TextTrack {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextTrackList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextTrackList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextTrackList();
            
            class A1 extends TextTrackList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaKeyStatusMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaKeyStatusMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new MediaKeyStatusMap();
            
            class A1 extends MediaKeyStatusMap<P0, P1> {}
            let a1 = new MediaKeyStatusMap<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaKeySession', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaKeySession;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaKeySession();
            
            class A1 extends MediaKeySession {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaKeys', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaKeys;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaKeys();
            
            class A1 extends MediaKeys {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLMediaElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLMediaElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLMediaElement();
            
            class A1 extends HTMLMediaElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLAudioElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLAudioElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLAudioElement();
            
            class A1 extends HTMLAudioElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLVideoElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLVideoElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLVideoElement();
            
            class A1 extends HTMLVideoElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLSourceElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLSourceElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLSourceElement();
            
            class A1 extends HTMLSourceElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ValidityState', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ValidityState;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ValidityState();
            
            class A1 extends ValidityState {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLInputElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLInputElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLInputElement();
            
            class A1 extends HTMLInputElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLButtonElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLButtonElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLButtonElement();
            
            class A1 extends HTMLButtonElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTextAreaElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTextAreaElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTextAreaElement();
            
            class A1 extends HTMLTextAreaElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLSelectElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLSelectElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLSelectElement();
            
            class A1 extends HTMLSelectElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLOptionsCollection', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLOptionsCollection;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLOptionsCollection();
            
            class A1 extends HTMLOptionsCollection {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLOptionElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLOptionElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLOptionElement();
            
            class A1 extends HTMLOptionElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLOptGroupElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLOptGroupElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLOptGroupElement();
            
            class A1 extends HTMLOptGroupElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLAnchorElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLAnchorElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLAnchorElement();
            
            class A1 extends HTMLAnchorElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLLabelElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLLabelElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLLabelElement();
            
            class A1 extends HTMLLabelElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLLinkElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLLinkElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLLinkElement();
            
            class A1 extends HTMLLinkElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLScriptElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLScriptElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLScriptElement();
            
            class A1 extends HTMLScriptElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLStyleElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLStyleElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLStyleElement();
            
            class A1 extends HTMLStyleElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLParagraphElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLParagraphElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLParagraphElement();
            
            class A1 extends HTMLParagraphElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLHtmlElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLHtmlElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLHtmlElement();
            
            class A1 extends HTMLHtmlElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLBodyElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLBodyElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLBodyElement();
            
            class A1 extends HTMLBodyElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLHeadElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLHeadElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLHeadElement();
            
            class A1 extends HTMLHeadElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDivElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDivElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDivElement();
            
            class A1 extends HTMLDivElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLSpanElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLSpanElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLSpanElement();
            
            class A1 extends HTMLSpanElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLAppletElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLAppletElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLAppletElement();
            
            class A1 extends HTMLAppletElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLHeadingElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLHeadingElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLHeadingElement();
            
            class A1 extends HTMLHeadingElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLHRElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLHRElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLHRElement();
            
            class A1 extends HTMLHRElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLBRElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLBRElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLBRElement();
            
            class A1 extends HTMLBRElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDListElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDListElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDListElement();
            
            class A1 extends HTMLDListElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLAreaElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLAreaElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLAreaElement();
            
            class A1 extends HTMLAreaElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDataElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDataElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDataElement();
            
            class A1 extends HTMLDataElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDataListElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDataListElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDataListElement();
            
            class A1 extends HTMLDataListElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLDialogElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLDialogElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLDialogElement();
            
            class A1 extends HTMLDialogElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLEmbedElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLEmbedElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLEmbedElement();
            
            class A1 extends HTMLEmbedElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLMapElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLMapElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLMapElement();
            
            class A1 extends HTMLMapElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLMeterElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLMeterElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLMeterElement();
            
            class A1 extends HTMLMeterElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLModElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLModElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLModElement();
            
            class A1 extends HTMLModElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLObjectElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLObjectElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLObjectElement();
            
            class A1 extends HTMLObjectElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLOutputElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLOutputElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLOutputElement();
            
            class A1 extends HTMLOutputElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLParamElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLParamElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLParamElement();
            
            class A1 extends HTMLParamElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLProgressElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLProgressElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLProgressElement();
            
            class A1 extends HTMLProgressElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLPictureElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLPictureElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLPictureElement();
            
            class A1 extends HTMLPictureElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTimeElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTimeElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTimeElement();
            
            class A1 extends HTMLTimeElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTitleElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTitleElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTitleElement();
            
            class A1 extends HTMLTitleElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLTrackElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLTrackElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLTrackElement();
            
            class A1 extends HTMLTrackElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLQuoteElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLQuoteElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLQuoteElement();
            
            class A1 extends HTMLQuoteElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLOListElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLOListElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLOListElement();
            
            class A1 extends HTMLOListElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLUListElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLUListElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLUListElement();
            
            class A1 extends HTMLUListElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLLIElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLLIElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLLIElement();
            
            class A1 extends HTMLLIElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLPreElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLPreElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLPreElement();
            
            class A1 extends HTMLPreElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLMetaElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLMetaElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLMetaElement();
            
            class A1 extends HTMLMetaElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('HTMLUnknownElement', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = HTMLUnknownElement;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new HTMLUnknownElement();
            
            class A1 extends HTMLUnknownElement {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextRange', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextRange;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextRange();
            
            class A1 extends TextRange {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ClientRect', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ClientRect;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ClientRect();
            
            class A1 extends ClientRect {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ClientRectList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ClientRectList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ClientRectList();
            
            class A1 extends ClientRectList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMImplementation', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMImplementation;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMImplementation();
            
            class A1 extends DOMImplementation {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DocumentType', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DocumentType;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DocumentType();
            
            class A1 extends DocumentType {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CharacterData', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CharacterData;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CharacterData();
            
            class A1 extends CharacterData {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Text', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Text;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Text();
            
            class A1 extends Text {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Comment', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Comment;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Comment();
            
            class A1 extends Comment {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('URL', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = URL;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new URL();
            
            class A1 extends URL {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaSource', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaSource;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaSource();
            
            class A1 extends MediaSource {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SourceBuffer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SourceBuffer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SourceBuffer();
            
            class A1 extends SourceBuffer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SourceBufferList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SourceBufferList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SourceBufferList();
            
            class A1 extends SourceBufferList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Storage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Storage;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Storage();
            
            class A1 extends Storage {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TrackDefaultList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TrackDefaultList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TrackDefaultList();
            
            class A1 extends TrackDefaultList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TrackDefault', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TrackDefault;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TrackDefault();
            
            class A1 extends TrackDefault {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NodeFilter', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NodeFilter;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NodeFilter();
            
            class A1 extends NodeFilter {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NodeIterator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NodeIterator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new NodeIterator();
            
            class A1 extends NodeIterator<P0, P1> {}
            let a1 = new NodeIterator<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TreeWalker', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TreeWalker;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(2)', () => {
        expect(
          transform(`
            new TreeWalker();
            
            class A1 extends TreeWalker<P0, P1> {}
            let a1 = new TreeWalker<P0, P1>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WindowProxy', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements WindowProxy {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('alert', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = alert;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new alert();
            
            class A1 extends alert {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            alert();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('prompt', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = prompt;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new prompt();
            
            class A1 extends prompt {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            prompt();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('close', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = close;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new close();
            
            class A1 extends close {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            close();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('confirm', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = confirm;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new confirm();
            
            class A1 extends confirm {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            confirm();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('getComputedStyle', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = getComputedStyle;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new getComputedStyle();
            
            class A1 extends getComputedStyle {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            getComputedStyle();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnimationFrameID', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements AnimationFrameID {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('requestAnimationFrame', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = requestAnimationFrame;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new requestAnimationFrame();
            
            class A1 extends requestAnimationFrame {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            requestAnimationFrame();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('cancelAnimationFrame', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = cancelAnimationFrame;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new cancelAnimationFrame();
            
            class A1 extends cancelAnimationFrame {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            cancelAnimationFrame();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IdleCallbackID', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements IdleCallbackID {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('requestIdleCallback', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = requestIdleCallback;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new requestIdleCallback();
            
            class A1 extends requestIdleCallback {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            requestIdleCallback();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('cancelIdleCallback', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = cancelIdleCallback;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new cancelIdleCallback();
            
            class A1 extends cancelIdleCallback {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            cancelIdleCallback();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('localStorage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = localStorage;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('devicePixelRatio', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = devicePixelRatio;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('focus', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = focus;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new focus();
            
            class A1 extends focus {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            focus();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('onfocus', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = onfocus;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new onfocus();
            
            class A1 extends onfocus {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            onfocus();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('onmessage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = onmessage;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new onmessage();
            
            class A1 extends onmessage {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            onmessage();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('open', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = open;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new open();
            
            class A1 extends open {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            open();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('parent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = parent;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('print', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = print;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new print();
            
            class A1 extends print {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            print();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('self', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = self;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('sessionStorage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = sessionStorage;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('status', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = status;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('top', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = top;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('getSelection', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = getSelection;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new getSelection();
            
            class A1 extends getSelection {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            getSelection();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('customElements', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = customElements;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('scroll', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = scroll;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new scroll();
            
            class A1 extends scroll {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            scroll();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('scrollTo', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = scrollTo;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new scrollTo();
            
            class A1 extends scrollTo {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            scrollTo();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('scrollBy', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = scrollBy;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new scrollBy();
            
            class A1 extends scrollBy {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            scrollBy();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Notification', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Notification;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Notification();
            
            class A1 extends Notification {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
