import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/bom.js', () => {
  describe('globals', () => {
    describe('Screen', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Screen;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Screen();
            
            class A1 extends Screen {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('screen', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = screen;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('window', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = window;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PermissionStatus', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PermissionStatus;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PermissionStatus();
            
            class A1 extends PermissionStatus {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Permissions', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Permissions;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Permissions();
            
            class A1 extends Permissions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIMessageEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIMessageEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIMessageEvent();
            
            class A1 extends MIDIMessageEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIConnectionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIConnectionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIConnectionEvent();
            
            class A1 extends MIDIConnectionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIPort', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIPort;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIPort();
            
            class A1 extends MIDIPort {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIInput', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIInput;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIInput();
            
            class A1 extends MIDIInput {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIOutput', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIOutput;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIOutput();
            
            class A1 extends MIDIOutput {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIInputMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIInputMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIInputMap();
            
            class A1 extends MIDIInputMap {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIOutputMap', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIOutputMap;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIOutputMap();
            
            class A1 extends MIDIOutputMap {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MIDIAccess', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MIDIAccess;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MIDIAccess();
            
            class A1 extends MIDIAccess {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorID', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorID;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorID();
            
            class A1 extends NavigatorID {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorLanguage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorLanguage;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorLanguage();
            
            class A1 extends NavigatorLanguage {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorContentUtils', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorContentUtils;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorContentUtils();
            
            class A1 extends NavigatorContentUtils {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorCookies', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorCookies;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorCookies();
            
            class A1 extends NavigatorCookies {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorPlugins', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorPlugins;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorPlugins();
            
            class A1 extends NavigatorPlugins {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorOnLine', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorOnLine;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorOnLine();
            
            class A1 extends NavigatorOnLine {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigatorConcurrentHardware', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigatorConcurrentHardware;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigatorConcurrentHardware();
            
            class A1 extends NavigatorConcurrentHardware {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Navigator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Navigator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Navigator();
            
            class A1 extends Navigator {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Clipboard', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Clipboard;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Clipboard();
            
            class A1 extends Clipboard {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('navigator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = navigator;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MimeType', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MimeType;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MimeType();
            
            class A1 extends MimeType {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MimeTypeArray', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MimeTypeArray;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MimeTypeArray();
            
            class A1 extends MimeTypeArray {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Plugin', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Plugin;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Plugin();
            
            class A1 extends Plugin {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PluginArray', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PluginArray;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PluginArray();
            
            class A1 extends PluginArray {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMHighResTimeStamp', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements DOMHighResTimeStamp {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceTiming', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceTiming;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceTiming();
            
            class A1 extends PerformanceTiming {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceNavigation', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceNavigation;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceNavigation();
            
            class A1 extends PerformanceNavigation {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceEntry', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceEntry;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceEntry();
            
            class A1 extends PerformanceEntry {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceResourceTiming', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceResourceTiming;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceResourceTiming();
            
            class A1 extends PerformanceResourceTiming {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceNavigationTiming', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceNavigationTiming;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceNavigationTiming();
            
            class A1 extends PerformanceNavigationTiming {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Performance', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Performance;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Performance();
            
            class A1 extends Performance {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('performance', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = performance;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceObserverEntryList', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements PerformanceObserverEntryList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PerformanceObserver', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PerformanceObserver;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PerformanceObserver();
            
            class A1 extends PerformanceObserver {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('History', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = History;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new History();
            
            class A1 extends History {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('history', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = history;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Location', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Location;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Location();
            
            class A1 extends Location {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('location', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = location;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMParser', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMParser;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMParser();
            
            class A1 extends DOMParser {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FormData', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = FormData;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new FormData();
            
            class A1 extends FormData {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MutationRecord', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MutationRecord;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MutationRecord();
            
            class A1 extends MutationRecord {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MutationObserverInit', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements MutationObserverInit {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MutationObserver', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MutationObserver;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MutationObserver();
            
            class A1 extends MutationObserver {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMRectReadOnly', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMRectReadOnly;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMRectReadOnly();
            
            class A1 extends DOMRectReadOnly {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMRect', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMRect;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMRect();
            
            class A1 extends DOMRect {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DOMRectList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DOMRectList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DOMRectList();
            
            class A1 extends DOMRectList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IntersectionObserverEntry', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements IntersectionObserverEntry {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IntersectionObserverCallback', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements IntersectionObserverCallback {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IntersectionObserverOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements IntersectionObserverOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IntersectionObserver', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = IntersectionObserver;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new IntersectionObserver();
            
            class A1 extends IntersectionObserver {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ResizeObserverSize', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ResizeObserverSize {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ResizeObserverEntry', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ResizeObserverEntry {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ResizeObserverOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements ResizeObserverOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ResizeObserver', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ResizeObserver;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ResizeObserver();
            
            class A1 extends ResizeObserver {};
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
    });

    describe('CloseEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CloseEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CloseEvent();
            
            class A1 extends CloseEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WebSocket', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WebSocket;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WebSocket();
            
            class A1 extends WebSocket {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Worker', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Worker;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Worker();
            
            class A1 extends Worker {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SharedWorker', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SharedWorker;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SharedWorker();
            
            class A1 extends SharedWorker {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('importScripts', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = importScripts;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new importScripts();
            
            class A1 extends importScripts {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            importScripts();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WorkerGlobalScope', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WorkerGlobalScope;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WorkerGlobalScope();
            
            class A1 extends WorkerGlobalScope {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DedicatedWorkerGlobalScope', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DedicatedWorkerGlobalScope;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DedicatedWorkerGlobalScope();
            
            class A1 extends DedicatedWorkerGlobalScope {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SharedWorkerGlobalScope', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SharedWorkerGlobalScope;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SharedWorkerGlobalScope();
            
            class A1 extends SharedWorkerGlobalScope {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WorkerLocation', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WorkerLocation;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WorkerLocation();
            
            class A1 extends WorkerLocation {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WorkerNavigator', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WorkerNavigator;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WorkerNavigator();
            
            class A1 extends WorkerNavigator {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('XDomainRequest', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = XDomainRequest;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new XDomainRequest();
            
            class A1 extends XDomainRequest {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('XMLHttpRequest', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = XMLHttpRequest;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new XMLHttpRequest();
            
            class A1 extends XMLHttpRequest {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('XMLHttpRequestEventTarget', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = XMLHttpRequestEventTarget;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new XMLHttpRequestEventTarget();
            
            class A1 extends XMLHttpRequestEventTarget {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('XMLSerializer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = XMLSerializer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new XMLSerializer();
            
            class A1 extends XMLSerializer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Geolocation', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Geolocation;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Geolocation();
            
            class A1 extends Geolocation {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Position', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Position;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Position();
            
            class A1 extends Position {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Coordinates', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Coordinates;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Coordinates();
            
            class A1 extends Coordinates {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PositionError', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PositionError;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PositionError();
            
            class A1 extends PositionError {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioProcessingEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioProcessingEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioProcessingEvent();
            
            class A1 extends AudioProcessingEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('OfflineAudioCompletionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = OfflineAudioCompletionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new OfflineAudioCompletionEvent();
            
            class A1 extends OfflineAudioCompletionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('BaseAudioContext', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = BaseAudioContext;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new BaseAudioContext();
            
            class A1 extends BaseAudioContext {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioTimestamp', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioTimestamp;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioTimestamp();
            
            class A1 extends AudioTimestamp {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioContext', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioContext;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioContext();
            
            class A1 extends AudioContext {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('OfflineAudioContext', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = OfflineAudioContext;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new OfflineAudioContext();
            
            class A1 extends OfflineAudioContext {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioNode();
            
            class A1 extends AudioNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioParam', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioParam;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioParam();
            
            class A1 extends AudioParam {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioDestinationNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioDestinationNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioDestinationNode();
            
            class A1 extends AudioDestinationNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioListener', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioListener;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioListener();
            
            class A1 extends AudioListener {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioBuffer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioBuffer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioBuffer();
            
            class A1 extends AudioBuffer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AudioBufferSourceNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AudioBufferSourceNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AudioBufferSourceNode();
            
            class A1 extends AudioBufferSourceNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CanvasCaptureMediaStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CanvasCaptureMediaStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CanvasCaptureMediaStream();
            
            class A1 extends CanvasCaptureMediaStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaDevices', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaDevices;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaDevices();
            
            class A1 extends MediaDevices {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaDeviceInfo', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaDeviceInfo;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaDeviceInfo();
            
            class A1 extends MediaDeviceInfo {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaRecorder', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaRecorder;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaRecorder();
            
            class A1 extends MediaRecorder {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStream();
            
            class A1 extends MediaStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStreamTrack', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStreamTrack;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStreamTrack();
            
            class A1 extends MediaStreamTrack {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStreamTrackEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStreamTrackEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStreamTrackEvent();
            
            class A1 extends MediaStreamTrackEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaElementAudioSourceNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaElementAudioSourceNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaElementAudioSourceNode();
            
            class A1 extends MediaElementAudioSourceNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStreamAudioSourceNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStreamAudioSourceNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStreamAudioSourceNode();
            
            class A1 extends MediaStreamAudioSourceNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStreamTrackAudioSourceNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStreamTrackAudioSourceNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStreamTrackAudioSourceNode();
            
            class A1 extends MediaStreamTrackAudioSourceNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaStreamAudioDestinationNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaStreamAudioDestinationNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaStreamAudioDestinationNode();
            
            class A1 extends MediaStreamAudioDestinationNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ScriptProcessorNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ScriptProcessorNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ScriptProcessorNode();
            
            class A1 extends ScriptProcessorNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AnalyserNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AnalyserNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AnalyserNode();
            
            class A1 extends AnalyserNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('BiquadFilterNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = BiquadFilterNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new BiquadFilterNode();
            
            class A1 extends BiquadFilterNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ChannelMergerNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ChannelMergerNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ChannelMergerNode();
            
            class A1 extends ChannelMergerNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ChannelSplitterNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ChannelSplitterNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ChannelSplitterNode();
            
            class A1 extends ChannelSplitterNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ConstantSourceNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ConstantSourceNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ConstantSourceNode();
            
            class A1 extends ConstantSourceNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ConvolverNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ConvolverNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ConvolverNode();
            
            class A1 extends ConvolverNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DelayNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DelayNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DelayNode();
            
            class A1 extends DelayNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('DynamicsCompressorNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = DynamicsCompressorNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new DynamicsCompressorNode();
            
            class A1 extends DynamicsCompressorNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('GainNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = GainNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new GainNode();
            
            class A1 extends GainNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('IIRFilterNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = IIRFilterNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new IIRFilterNode();
            
            class A1 extends IIRFilterNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('OscillatorNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = OscillatorNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new OscillatorNode();
            
            class A1 extends OscillatorNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('StereoPannerNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = StereoPannerNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new StereoPannerNode();
            
            class A1 extends StereoPannerNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PannerNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PannerNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PannerNode();
            
            class A1 extends PannerNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PeriodicWave', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PeriodicWave;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PeriodicWave();
            
            class A1 extends PeriodicWave {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('WaveShaperNode', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WaveShaperNode;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WaveShaperNode();
            
            class A1 extends WaveShaperNode {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Headers', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Headers;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Headers();
            
            class A1 extends Headers {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('URLSearchParams', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = URLSearchParams;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new URLSearchParams();
            
            class A1 extends URLSearchParams {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Response', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Response;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Response();
            
            class A1 extends Response {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Request', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Request;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Request();
            
            class A1 extends Request {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AbortController', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AbortController;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AbortController();
            
            class A1 extends AbortController {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('AbortSignal', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = AbortSignal;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new AbortSignal();
            
            class A1 extends AbortSignal {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('fetch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = fetch;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new fetch();
            
            class A1 extends fetch {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            fetch();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextEncoder', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextEncoder;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextEncoder();
            
            class A1 extends TextEncoder {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('TextDecoder', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = TextDecoder;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new TextDecoder();
            
            class A1 extends TextDecoder {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MessagePort', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MessagePort;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MessagePort();
            
            class A1 extends MessagePort {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MessageChannel', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MessageChannel;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MessageChannel();
            
            class A1 extends MessageChannel {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('VRDisplay', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = VRDisplay;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new VRDisplay();
            
            class A1 extends VRDisplay {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('VRFrameData', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = VRFrameData;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new VRFrameData();
            
            class A1 extends VRFrameData {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('VRDisplayEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = VRDisplayEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new VRDisplayEvent();
            
            class A1 extends VRDisplayEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaQueryListEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaQueryListEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaQueryListEvent();
            
            class A1 extends MediaQueryListEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaQueryListListener', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements MediaQueryListListener {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('MediaQueryList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = MediaQueryList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new MediaQueryList();
            
            class A1 extends MediaQueryList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('matchMedia', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = matchMedia;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CredMgmtCredentialRequestOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CredMgmtCredentialRequestOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CredMgmtCredentialCreationOptions', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CredMgmtCredentialCreationOptions {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CredMgmtCredential', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CredMgmtCredential {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CredMgmtPasswordCredential', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CredMgmtPasswordCredential {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CredMgmtCredentialsContainer', () => {
      test('generated - type', () => {
        expect(
          transform(`
          `)
        ).toMatchSnapshot();
      });

      test('generated - interface', () => {
        expect(
          transform(`
            class A1 implements CredMgmtCredentialsContainer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechSynthesis', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechSynthesis;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechSynthesis();
            
            class A1 extends SpeechSynthesis {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('speechSynthesis', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = speechSynthesis;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechSynthesisUtterance', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechSynthesisUtterance;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechSynthesisUtterance();
            
            class A1 extends SpeechSynthesisUtterance {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechSynthesisEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechSynthesisEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechSynthesisEvent();
            
            class A1 extends SpeechSynthesisEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechSynthesisErrorEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechSynthesisErrorEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechSynthesisErrorEvent();
            
            class A1 extends SpeechSynthesisErrorEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechSynthesisVoice', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechSynthesisVoice;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechSynthesisVoice();
            
            class A1 extends SpeechSynthesisVoice {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechGrammar', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechGrammar;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechGrammar();
            
            class A1 extends SpeechGrammar {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechGrammarList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechGrammarList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechGrammarList();
            
            class A1 extends SpeechGrammarList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognitionAlternative', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognitionAlternative;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognitionAlternative();
            
            class A1 extends SpeechRecognitionAlternative {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognitionResult', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognitionResult;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognitionResult();
            
            class A1 extends SpeechRecognitionResult {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognitionResultList', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognitionResultList;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognitionResultList();
            
            class A1 extends SpeechRecognitionResultList {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognitionEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognitionEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognitionEvent();
            
            class A1 extends SpeechRecognitionEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognitionErrorEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognitionErrorEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognitionErrorEvent();
            
            class A1 extends SpeechRecognitionErrorEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('SpeechRecognition', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = SpeechRecognition;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new SpeechRecognition();
            
            class A1 extends SpeechRecognition {};
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
