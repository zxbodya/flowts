import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/bom.js:9:0

        declare class Screen {
          +availHeight: number;
          +availWidth: number;
          +availLeft: number;
          +availTop: number;
          +top: number;
          +left: number;
          +colorDepth: number;
          +pixelDepth: number;
          +width: number;
          +height: number;
          +orientation?: {
            lock(): Promise<void>;
            unlock(): void;
            angle: number;
            onchange: () => mixed;
            type: 'portrait-primary' | 'portrait-secondary' | 'landscape-primary' | 'landscape-secondary';
            ...
          };
          // deprecated
          mozLockOrientation?: (orientation: string | Array<string>) => boolean;
          mozUnlockOrientation?: () => void;
          mozOrientation?: string;
          onmozorientationchange?: (...args: any[]) => mixed;
        }
        */
    Screen(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:35:0

        declare var screen: Screen;
        */
    screen(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:36:0

        declare var window: any;
        */
    window(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:143:0

        declare class PermissionStatus extends EventTarget {
          onchange: ?((event: any) => mixed);
          +state: PermissionState;
        }
        */
    PermissionStatus(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:148:0

        declare class Permissions {
          query(
            permissionDesc:
              | DevicePermissionDescriptor
              | MidiPermissionDescriptor
              | PushPermissionDescriptor
              | ClipboardPermissionDescriptor
              | PermissionDescriptor
          ): Promise<PermissionStatus>;
        }
        */
    Permissions(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:173:0

        declare class MIDIMessageEvent extends Event {
          constructor(type: string, eventInitDict: MIDIMessageEvent$Init): void;
          +data: Uint8Array;
        }
        */
    MIDIMessageEvent(context) {},

    /*
        lib/bom.js:183:0

        declare class MIDIConnectionEvent extends Event {
          constructor(type: string, eventInitDict: MIDIConnectionEvent$Init): void;
          +port: MIDIPort;
        }
        */
    MIDIConnectionEvent(context) {},

    /*
        lib/bom.js:188:0

        declare class MIDIPort extends EventTarget {
          +id: string;
          +manufacturer?: string;
          +name?: string;
          +type: MIDIPortType;
          +version?: string;
          +state: MIDIPortDeviceState;
          +connection: MIDIPortConnectionState;
          onstatechange: ?((ev: MIDIConnectionEvent) => mixed);
          open(): Promise<MIDIPort>;
          close(): Promise<MIDIPort>;
        }
        */
    MIDIPort(context) {},

    /*
        lib/bom.js:201:0

        declare class MIDIInput extends MIDIPort {
          onmidimessage: ?((ev: MIDIMessageEvent) => mixed);
        }
        */
    MIDIInput(context) {},

    /*
        lib/bom.js:205:0

        declare class MIDIOutput extends MIDIPort {
          send(data: Iterable<number>, timestamp?: number): void;
          clear(): void;
        }
        */
    MIDIOutput(context) {},

    /*
        lib/bom.js:210:0

        declare class MIDIInputMap extends $ReadOnlyMap<string, MIDIInput> {}
        */
    MIDIInputMap(context) {},

    /*
        lib/bom.js:212:0

        declare class MIDIOutputMap extends $ReadOnlyMap<string, MIDIOutput> {}
        */
    MIDIOutputMap(context) {},

    /*
        lib/bom.js:214:0

        declare class MIDIAccess extends EventTarget {
          +inputs: MIDIInputMap;
          +outputs: MIDIOutputMap;
          +sysexEnabled: boolean;
          onstatechange: ?((ev: MIDIConnectionEvent) => mixed);
        }
        */
    MIDIAccess(context) {},

    /*
        lib/bom.js:221:0

        declare class NavigatorID {
            appName: 'Netscape';
            appCodeName: 'Mozilla';
            product: 'Gecko';
            appVersion: string;
            platform: string;
            userAgent: string;
        }
        */
    NavigatorID(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:230:0

        declare class NavigatorLanguage {
            +language: string;
            +languages: $ReadOnlyArray<string>;
        }
        */
    NavigatorLanguage(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:235:0

        declare class NavigatorContentUtils {
            registerContentHandler(mimeType: string, uri: string, title: string): void;
            registerProtocolHandler(protocol: string, uri: string, title: string): void;
        }
        */
    NavigatorContentUtils(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:240:0

        declare class NavigatorCookies {
            +cookieEnabled: boolean;
        }
        */
    NavigatorCookies(context) {},

    /*
        lib/bom.js:244:0

        declare class NavigatorPlugins {
            +plugins: PluginArray;
            +mimeTypes: MimeTypeArray;
            javaEnabled(): boolean;
        }
        */
    NavigatorPlugins(context) {},

    /*
        lib/bom.js:250:0

        declare class NavigatorOnLine {
            +onLine: boolean;
        }
        */
    NavigatorOnLine(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:254:0

        declare class NavigatorConcurrentHardware {
            +hardwareConcurrency: number;
        }
        */
    NavigatorConcurrentHardware(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:258:0

        declare class Navigator mixins
          NavigatorID,
          NavigatorLanguage,
          NavigatorOnLine,
          NavigatorContentUtils,
          NavigatorCookies,
          NavigatorPlugins,
          NavigatorConcurrentHardware {
            productSub: '20030107' | '20100101';
            vendor: '' | 'Google Inc.' | 'Apple Computer, Inc';
            vendorSub: '';

            activeVRDisplays?: VRDisplay[];
            appCodeName: 'Mozilla';
            buildID: string;
            doNotTrack: string | null;
            geolocation: Geolocation;
            mediaDevices?: MediaDevices;
            maxTouchPoints: number;
            permissions: Permissions;
            serviceWorker?: ServiceWorkerContainer;
            getGamepads?: () => Array<Gamepad | null>;
            webkitGetGamepads?: Function;
            mozGetGamepads?: Function;
            mozGamepads?: any;
            gamepads?: any;
            webkitGamepads?: any;
            getVRDisplays?: () => Promise<VRDisplay[]>;
            registerContentHandler(mimeType: string, uri: string, title: string): void;
            registerProtocolHandler(protocol: string, uri: string, title: string): void;
            requestMIDIAccess?: (options?: MIDIOptions) => Promise<MIDIAccess>;
            requestMediaKeySystemAccess?: (keySystem: string, supportedConfigurations: any[]) => Promise<any>;
            sendBeacon?: (url: string, data?: BodyInit) => boolean;
            vibrate?: (pattern: number | number[]) => boolean;
            mozVibrate?: (pattern: number | number[]) => boolean;
            webkitVibrate?: (pattern: number | number[]) => boolean;
            share?: (shareData: ShareData) => Promise<void>;
            clipboard: Clipboard;
            credentials?: CredMgmtCredentialsContainer;

            // deprecated
            getBattery?: () => Promise<BatteryManager>;
            mozGetBattery?: () => Promise<BatteryManager>;

            // deprecated
            getUserMedia?: Function;
            webkitGetUserMedia?: Function;
            mozGetUserMedia?: Function;
            msGetUserMedia?: Function;

            // Gecko
            taintEnabled?: () => false;
            oscpu: string;
        }
        */
    Navigator(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:313:0

        declare class Clipboard extends EventTarget {
            read(): Promise<DataTransfer>;
            readText(): Promise<string>;
            write(data: DataTransfer): Promise<void>;
            writeText(data: string): Promise<void>;
        }
        */
    Clipboard(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:320:0

        declare var navigator: Navigator;
        */
    navigator(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:322:0

        declare class MimeType {
            type: string;
            description: string;
            suffixes: string;
            enabledPlugin: Plugin;
        }
        */
    MimeType(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:329:0

        declare class MimeTypeArray {
            length: number;
            item(index: number): MimeType;
            namedItem(name: string): MimeType;
            [key: number | string]: MimeType;
        }
        */
    MimeTypeArray(context) {
      context.lib('dom.iterable');
    },

    /*
        lib/bom.js:336:0

        declare class Plugin {
            description: string;
            filename: string;
            name: string;
            version?: string; // Gecko only
            length: number;
            item(index: number): MimeType;
            namedItem(name: string): MimeType;
            [key: number | string]: MimeType;
        }
        */
    Plugin(context) {
      context.lib('dom.iterable');
    },

    /*
        lib/bom.js:347:0

        declare class PluginArray {
            length: number;
            item(index: number): Plugin;
            namedItem(name: string): Plugin;
            refresh(): void;
            [key: number | string]: Plugin;
        }
        */
    PluginArray(context) {
      context.lib('dom.iterable');
    },

    /*
        lib/bom.js:357:0

        declare type DOMHighResTimeStamp = number;
        */
    DOMHighResTimeStamp(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:360:0

        declare class PerformanceTiming {
            connectEnd: number;
            connectStart: number;
            domainLookupEnd: number;
            domainLookupStart: number;
            domComplete: number;
            domContentLoadedEventEnd: number;
            domContentLoadedEventStart: number;
            domInteractive: number;
            domLoading: number;
            fetchStart: number;
            loadEventEnd: number;
            loadEventStart: number;
            navigationStart: number;
            redirectEnd: number;
            redirectStart: number;
            requestStart: number;
            responseEnd: number;
            responseStart: number;
            secureConnectionStart: number;
            unloadEventEnd: number;
            unloadEventStart: number;
        }
        */
    PerformanceTiming(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:384:0

        declare class PerformanceNavigation {
            TYPE_NAVIGATE: 0;
            TYPE_RELOAD: 1;
            TYPE_BACK_FORWARD: 2;
            TYPE_RESERVED: 255;

            type: 0 | 1 | 2 | 255;
            redirectCount: number;
        }
        */
    PerformanceNavigation(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:402:0

        declare class PerformanceEntry {
            name: string;
            entryType: string;
            startTime: DOMHighResTimeStamp;
            duration: DOMHighResTimeStamp;
            toJSON(): string;
        }
        */
    PerformanceEntry(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:411:0

        declare class PerformanceResourceTiming extends PerformanceEntry {
            initiatorType: string;
            redirectStart: number;
            redirectEnd: number;
            fetchStart: number;
            domainLookupStart: number;
            domainLookupEnd: number;
            connectStart: number;
            connectEnd: number;
            secureConnectionStart: number;
            requestStart: number;
            responseStart: number;
            responseEnd: number;
        }
        */
    PerformanceResourceTiming(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:427:0

        declare class PerformanceNavigationTiming extends PerformanceResourceTiming {
            unloadEventStart: number;
            unloadEventEnd: number;
            domInteractive: number;
            domContentLoadedEventStart: number;
            domContentLoadedEventEnd: number;
            domComplete: number;
            loadEventStart: number;
            loadEventEnd: number;
            type: 'navigate' | 'reload' | 'back_forward' | 'prerender';
            redirectCount: number;
        }
        */
    PerformanceNavigationTiming(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:440:0

        declare class Performance {
            // deprecated
            navigation: PerformanceNavigation;
            timing: PerformanceTiming;

            onresourcetimingbufferfull: (ev: any) => mixed;
            clearMarks(name?: string): void;
            clearMeasures(name?: string): void;
            clearResourceTimings(): void;
            getEntries(options?: PerformanceEntryFilterOptions): Array<PerformanceEntry>;
            getEntriesByName(name: string, type?: string): Array<PerformanceEntry>;
            getEntriesByType(type: string): Array<PerformanceEntry>;
            mark(name: string): void;
            measure(name: string, startMark?: string, endMark?: string): void;
            now(): DOMHighResTimeStamp;
            setResourceTimingBufferSize(maxSize: number): void;
            toJSON(): string;
        }
        */
    Performance(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:459:0

        declare var performance: Performance;
        */
    performance(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:461:0

        declare class History {
            length: number;
            scrollRestoration: 'auto' | 'manual';
            state: any;
            back(): void;
            forward(): void;
            go(delta?: number): void;
            pushState(statedata: any, title: string, url?: string): void;
            replaceState(statedata: any, title: string, url?: string): void;
        }
        */
    History(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:472:0

        declare var history: History;
        */
    history(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:474:0

        declare class Location {
            ancestorOrigins: string[];
            hash: string;
            host: string;
            hostname: string;
            href: string;
            origin: string;
            pathname: string;
            port: string;
            protocol: string;
            search: string;
            assign(url: string): void;
            reload(flag?: boolean): void;
            replace(url: string): void;
            toString(): string;
        }
        */
    Location(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:491:0

        declare var location: Location;
        */
    location(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:495:0

        declare class DOMParser {
            parseFromString(source: string, mimeType: string): Document;
        }
        */
    DOMParser(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:501:0

        declare class FormData {
            constructor(form?: HTMLFormElement): void;

            has(name: string): boolean;
            get(name: string): ?FormDataEntryValue;
            getAll(name: string): Array<FormDataEntryValue>;

            set(name: string, value: string): void;
            set(name: string, value: Blob, filename?: string): void;
            set(name: string, value: File, filename?: string): void;

            append(name: string, value: string): void;
            append(name: string, value: Blob, filename?: string): void;
            append(name: string, value: File, filename?: string): void;

            delete(name: string): void;

            keys(): Iterator<string>;
            values(): Iterator<FormDataEntryValue>;
            entries(): Iterator<[string, FormDataEntryValue]>;
        }
        */
    FormData(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:523:0

        declare class MutationRecord {
            type: 'attributes' | 'characterData' | 'childList';
            target: Node;
            addedNodes: NodeList<Node>;
            removedNodes: NodeList<Node>;
            previousSibling: ?Node;
            nextSibling: ?Node;
            attributeName: ?string;
            attributeNamespace: ?string;
            oldValue: ?string;
        }
        */
    MutationRecord(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:540:0

        declare type MutationObserverInit = MutationObserverInitRequired & {
          subtree?: boolean,
          attributeOldValue?: boolean,
          characterDataOldValue?: boolean,
          attributeFilter?: Array<string>,
          ...
        }
        */
    MutationObserverInit(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:548:0

        declare class MutationObserver {
            constructor(callback: (arr: Array<MutationRecord>, observer: MutationObserver) => mixed): void;
            observe(target: Node, options: MutationObserverInit): void;
            takeRecords(): Array<MutationRecord>;
            disconnect(): void;
        }
        */
    MutationObserver(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:555:0

        declare class DOMRectReadOnly {
          static fromRect(rectangle?: {
            x: number,
            y: number,
            width: number,
            height: number,
            ...
          }): DOMRectReadOnly;
          constructor(x: number, y: number, width: number, height: number): DOMRectReadOnly;
          +bottom: number;
          +height: number;
          +left: number;
          +right: number;
          +top: number;
          +width: number;
          +x: number;
          +y: number;
        }
        */
    DOMRectReadOnly(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:574:0

        declare class DOMRect extends DOMRectReadOnly {
          static fromRect(rectangle?: {
            x: number,
            y: number,
            width: number,
            height: number,
            ...
          }): DOMRect;
          bottom: number;
          height: number;
          left: number;
          right: number;
          top: number;
          width: number;
          x: number;
          y: number;
        }
        */
    DOMRect(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:592:0

        declare class DOMRectList {
          @@iterator(): Iterator<DOMRect>;
          length: number;
          item(index: number): DOMRect;
          [index: number]: DOMRect;
        }
        */
    DOMRectList(context) {
      context.lib('dom.iterable');
    },

    /*
        lib/bom.js:599:0

        declare type IntersectionObserverEntry = {
          boundingClientRect: DOMRectReadOnly,
          intersectionRatio: number,
          intersectionRect: DOMRectReadOnly,
          isIntersecting: boolean,
          rootBounds: DOMRectReadOnly,
          target: HTMLElement,
          time: DOMHighResTimeStamp,
          ...
        };
        */
    IntersectionObserverEntry(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:610:0

        declare type IntersectionObserverCallback = (
            entries: Array<IntersectionObserverEntry>,
            observer: IntersectionObserver,
        ) => mixed;
        */
    IntersectionObserverCallback(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:615:0

        declare type IntersectionObserverOptions = {
          root?: Node | null,
          rootMargin?: string,
          threshold?: number | Array<number>,
          ...
        };
        */
    IntersectionObserverOptions(context) {},

    /*
        lib/bom.js:622:0

        declare class IntersectionObserver {
            constructor(
              callback: IntersectionObserverCallback,
              options?: IntersectionObserverOptions
            ): void,
            observe(target: HTMLElement): void,
            unobserve(target: HTMLElement): void,
            takeRecords(): Array<IntersectionObserverEntry>,
            disconnect(): void,
        }
        */
    IntersectionObserver(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:633:0

        declare class ResizeObserverEntry {
            target: Element;
            contentRect: DOMRectReadOnly;
        }
        */
    ResizeObserverEntry(context) {},

    /*
        lib/bom.js:638:0

        declare class ResizeObserver {
            constructor(callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => mixed): void;
            observe(target: Element): void;
            unobserve(target: Element): void;
            disconnect(): void;
        }
        */
    ResizeObserver(context) {},

    /*
        lib/bom.js:645:0

        declare var NodeFilter: {
          acceptNode(n: Node): number,
          SHOW_ENTITY_REFERENCE: number,
          SHOW_NOTATION: number,
          SHOW_ENTITY: number,
          SHOW_DOCUMENT: number,
          SHOW_PROCESSING_INSTRUCTION: number,
          FILTER_REJECT: number,
          SHOW_CDATA_SECTION: number,
          FILTER_ACCEPT: number,
          SHOW_ALL: number,
          SHOW_DOCUMENT_TYPE: number,
          SHOW_TEXT: number,
          SHOW_ELEMENT: number,
          SHOW_COMMENT: number,
          FILTER_SKIP: number,
          SHOW_ATTRIBUTE: number,
          SHOW_DOCUMENT_FRAGMENT: number,
          ...
        };
        */
    NodeFilter(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:666:0

        declare class CloseEvent extends Event {
            code: number;
            reason: string;
            wasClean: boolean;
        }
        */
    CloseEvent(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:672:0

        declare class WebSocket extends EventTarget {
            static CONNECTING: 0;
            static OPEN: 1;
            static CLOSING: 2;
            static CLOSED: 3;
            constructor(url: string, protocols?: string | Array<string>): void;
            protocol: string;
            readyState: number;
            bufferedAmount: number;
            extensions: string;
            onopen: (ev: any) => mixed;
            onmessage: (ev: MessageEvent) => mixed;
            onclose: (ev: CloseEvent) => mixed;
            onerror: (ev: any) => mixed;
            binaryType: 'blob' | 'arraybuffer';
            url: string;
            close(code?: number, reason?: string): void;
            send(data: string): void;
            send(data: Blob): void;
            send(data: ArrayBuffer): void;
            send(data: $ArrayBufferView): void;
            CONNECTING: 0;
            OPEN: 1;
            CLOSING: 2;
            CLOSED: 3;
        }
        */
    WebSocket(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:706:0

        declare class Worker extends EventTarget {
            constructor(stringUrl: string, workerOptions?: WorkerOptions): void;
            onerror: null | (ev: any) => mixed;
            onmessage: null | (ev: MessageEvent) => mixed;
            onmessageerror: null | (ev: MessageEvent) => mixed;
            postMessage(message: any, ports?: any): void;
            terminate(): void;
        }
        */
    Worker(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:715:0

        declare class SharedWorker extends EventTarget {
            constructor(stringUrl: string, name?: string): void;
            constructor(stringUrl: string, workerOptions?: WorkerOptions): void;
            port: MessagePort;
            onerror: (ev: any) => mixed;
        }
        */
    SharedWorker(context) {},

    /*
        lib/bom.js:722:0

        declare function importScripts(...urls: Array<string>): void;
        */
    importScripts(context) {
      context.lib('webworker.importscripts');
    },

    /*
        lib/bom.js:724:0

        declare class WorkerGlobalScope extends EventTarget {
            self: this;
            location: WorkerLocation;
            navigator: WorkerNavigator;
            close(): void;
            importScripts(...urls: Array<string>): void;
            onerror: (ev: any) => mixed;
            onlanguagechange: (ev: any) => mixed;
            onoffline: (ev: any) => mixed;
            ononline: (ev: any) => mixed;
            onrejectionhandled: (ev: PromiseRejectionEvent) => mixed;
            onunhandledrejection: (ev: PromiseRejectionEvent) => mixed;
        }
        */
    WorkerGlobalScope(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:738:0

        declare class DedicatedWorkerGlobalScope extends WorkerGlobalScope {
            onmessage: (ev: MessageEvent) => mixed;
            onmessageerror: (ev: MessageEvent) => mixed;
            postMessage(message: any, transfer?: Iterable<any>): void;
        }
        */
    DedicatedWorkerGlobalScope(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:744:0

        declare class SharedWorkerGlobalScope extends WorkerGlobalScope {
            name: string;
            onconnect: (ev: MessageEvent) => mixed;
        }
        */
    SharedWorkerGlobalScope(context) {},

    /*
        lib/bom.js:749:0

        declare class WorkerLocation {
            origin: string;
            protocol: string;
            host: string;
            hostname: string;
            port: string;
            pathname: string;
            search: string;
            hash: string;
        }
        */
    WorkerLocation(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:760:0

        declare class WorkerNavigator mixins
          NavigatorID,
          NavigatorLanguage,
          NavigatorOnLine,
          NavigatorConcurrentHardware {
            permissions: Permissions;
          }
        */
    WorkerNavigator(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:770:0

        declare class XDomainRequest {
            timeout: number;
            onerror: () => mixed;
            onload: () => mixed;
            onprogress: () => mixed;
            ontimeout: () => mixed;
            +responseText: string;
            +contentType: string;
            open(method: "GET" | "POST", url: string): void;
            abort(): void;
            send(data?: string): void;

            statics: { create(): XDomainRequest, ... }
        }
        */
    XDomainRequest(context) {},

    /*
        lib/bom.js:785:0

        declare class XMLHttpRequest extends EventTarget {
            static LOADING: number;
            static DONE: number;
            static UNSENT: number;
            static OPENED: number;
            static HEADERS_RECEIVED: number;
            responseBody: any;
            status: number;
            readyState: number;
            responseText: string;
            responseXML: any;
            responseURL: string;
            ontimeout: ProgressEventHandler;
            statusText: string;
            onreadystatechange: (ev: any) => mixed;
            timeout: number;
            onload: ProgressEventHandler;
            response: any;
            withCredentials: boolean;
            onprogress: ProgressEventHandler;
            onabort: ProgressEventHandler;
            responseType: string;
            onloadend: ProgressEventHandler;
            upload: XMLHttpRequestEventTarget;
            onerror: ProgressEventHandler;
            onloadstart: ProgressEventHandler;
            msCaching: string;
            open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
            send(data?: any): void;
            abort(): void;
            getAllResponseHeaders(): string;
            setRequestHeader(header: string, value: string): void;
            getResponseHeader(header: string): string;
            msCachingEnabled(): boolean;
            overrideMimeType(mime: string): void;
            LOADING: number;
            DONE: number;
            UNSENT: number;
            OPENED: number;
            HEADERS_RECEIVED: number;

            statics: { create(): XMLHttpRequest, ... }
        }
        */
    XMLHttpRequest(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:829:0

        declare class XMLHttpRequestEventTarget extends EventTarget {
            onprogress: ProgressEventHandler;
            onerror: ProgressEventHandler;
            onload: ProgressEventHandler;
            ontimeout: ProgressEventHandler;
            onabort: ProgressEventHandler;
            onloadstart: ProgressEventHandler;
            onloadend: ProgressEventHandler;
        }
        */
    XMLHttpRequestEventTarget(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:839:0

        declare class XMLSerializer {
            serializeToString(target: Node): string;
        }
        */
    XMLSerializer(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:843:0

        declare class Geolocation {
            getCurrentPosition(
                success: (position: Position) => mixed,
                error?: (error: PositionError) => mixed,
                options?: PositionOptions
            ): void;
            watchPosition(
                success: (position: Position) => mixed,
                error?: (error: PositionError) => mixed,
                options?: PositionOptions
            ): number;
            clearWatch(id: number): void;
        }
        */
    Geolocation(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:857:0

        declare class Position {
            coords: Coordinates;
            timestamp: number;
        }
        */
    Position(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:862:0

        declare class Coordinates {
            latitude: number;
            longitude: number;
            altitude?: number;
            accuracy: number;
            altitudeAccuracy?: number;
            heading?: number;
            speed?: number;
        }
        */
    Coordinates(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:872:0

        declare class PositionError {
            code: number;
            message: string;
            PERMISSION_DENIED: 1;
            POSITION_UNAVAILABLE: 2;
            TIMEOUT: 3;
        }
        */
    PositionError(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:898:0

        declare class AudioProcessingEvent extends Event {
          constructor(type: string, eventInitDict: AudioProcessingEvent$Init): void;

          +playbackTime: number;
          +inputBuffer: AudioBuffer;
          +outputBuffer: AudioBuffer;
        }
        */
    AudioProcessingEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:911:0

        declare class OfflineAudioCompletionEvent extends Event {
          constructor(type: string, eventInitDict: OfflineAudioCompletionEvent$Init): void;

          +renderedBuffer: AudioBuffer;
        }
        */
    OfflineAudioCompletionEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:917:0

        declare class BaseAudioContext extends EventTarget {
          currentTime: number;
          destination: AudioDestinationNode;
          listener: AudioListener;
          sampleRate: number;
          state: AudioContextState;
          onstatechange: (ev: any) => mixed;
          createBuffer(numOfChannels: number, length: number, sampleRate: number): AudioBuffer;
          createBufferSource(myMediaElement?: HTMLMediaElement): AudioBufferSourceNode;
          createMediaElementSource(myMediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
          createMediaStreamSource(stream: MediaStream): MediaStreamAudioSourceNode;
          createMediaStreamDestination(): MediaStreamAudioDestinationNode;

          // deprecated
          createScriptProcessor(bufferSize: number, numberOfInputChannels: number, numberOfOutputChannels: number): ScriptProcessorNode;

          createAnalyser(): AnalyserNode;
          createBiquadFilter(): BiquadFilterNode;
          createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
          createChannelSplitter(numberOfInputs?: number): ChannelSplitterNode;
          createConstantSource(): ConstantSourceNode;
          createConvolver(): ConvolverNode;
          createDelay(maxDelayTime?: number): DelayNode;
          createDynamicsCompressor(): DynamicsCompressorNode;
          createGain(): GainNode;
          createIIRFilter (feedforward: Float32Array, feedback: Float32Array): IIRFilterNode;
          createOscillator(): OscillatorNode;
          createPanner(): PannerNode;
          createStereoPanner(): StereoPannerNode;
          createPeriodicWave(real: Float32Array, img: Float32Array, options?: { disableNormalization: bool, ... }): PeriodicWave;
          createStereoPanner(): StereoPannerNode;
          createWaveShaper(): WaveShaperNode;
          decodeAudioData(arrayBuffer: ArrayBuffer, decodeSuccessCallback: (decodedData: AudioBuffer) => mixed, decodeErrorCallback: (err: DOMError) => mixed): void;
          decodeAudioData(arrayBuffer: ArrayBuffer): Promise<AudioBuffer>;
        }
        */
    BaseAudioContext(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:953:0

        declare class AudioTimestamp {
          contextTime: number;
          performanceTime: number;
        }
        */
    AudioTimestamp(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:958:0

        declare class AudioContext extends BaseAudioContext {
          baseLatency: number;
          outputLatency: number;
          getOutputTimestamp(): AudioTimestamp;
          resume(): Promise<void>;
          suspend(): Promise<void>;
          close(): Promise<void>;
          createMediaElementSource(myMediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
          createMediaStreamSource(myMediaStream: MediaStream): MediaStreamAudioSourceNode;
          createMediaStreamTrackSource(myMediaStreamTrack: MediaStreamTrack): MediaStreamTrackAudioSourceNode;
          createMediaStreamDestination(): MediaStreamAudioDestinationNode;
        }
        */
    AudioContext(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:971:0

        declare class OfflineAudioContext extends BaseAudioContext {
          startRendering(): Promise<AudioBuffer>;
          suspend(suspendTime: number): Promise<void>;
          length: number;
          oncomplete: (ev: OfflineAudioCompletionEvent) => mixed;
        }
        */
    OfflineAudioContext(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:978:0

        declare class AudioNode extends EventTarget {
          context: AudioContext;
          numberOfInputs: number;
          numberOfOutputs: number;
          channelCount: number;
          channelCountMode: 'max' | 'clamped-max' | 'explicit';
          channelInterpretation: 'speakers' | 'discrete';
          connect(audioNode: AudioNode, output?: number, input?: number): AudioNode;
          connect(destination: AudioParam, output?: number): void;
          disconnect(destination?: AudioNode, output?: number, input?: number): void;
        }
        */
    AudioNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:990:0

        declare class AudioParam extends AudioNode {
          value: number;
          defaultValue: number;
          setValueAtTime(value: number, startTime: number): this;
          linearRampToValueAtTime(value: number, endTime: number): this;
          exponentialRampToValueAtTime(value: number, endTime: number): this;
          setTargetAtTime(target: number, startTime: number, timeConstant: number): this;
          setValueCurveAtTime(values: Float32Array, startTime: number, duration: number): this;
          cancelScheduledValues(startTime: number): this;
        }
        */
    AudioParam(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1001:0

        declare class AudioDestinationNode extends AudioNode {
          maxChannelCount: number;
        }
        */
    AudioDestinationNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1005:0

        declare class AudioListener extends AudioNode {
          positionX: AudioParam;
          positionY: AudioParam;
          positionZ: AudioParam;
          forwardX: AudioParam;
          forwardY: AudioParam;
          forwardZ: AudioParam;
          upX: AudioParam;
          upY: AudioParam;
          upZ: AudioParam;
          setPosition(x: number, y: number, c: number): void;
          setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
        }
        */
    AudioListener(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1019:0

        declare class AudioBuffer {
          sampleRate: number;
          length: number;
          duration: number;
          numberOfChannels: number;
          getChannelData(channel: number): Float32Array;
          copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
          copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
        }
        */
    AudioBuffer(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1029:0

        declare class AudioBufferSourceNode extends AudioNode {
          buffer: AudioBuffer;
          detune: AudioParam;
          loop: bool;
          loopStart: number;
          loopEnd: number;
          playbackRate: AudioParam;
          onended: (ev: any) => mixed;
          start(when?: number, offset?: number, duration?: number): void;
          stop(when?: number): void;
        }
        */
    AudioBufferSourceNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1041:0

        declare class CanvasCaptureMediaStream extends MediaStream {
          canvas: HTMLCanvasElement;
          requestFrame(): void;
        }
        */
    CanvasCaptureMediaStream(context) {},

    /*
        lib/bom.js:1161:0

        declare class MediaDevices extends EventTarget {
          ondevicechange: (ev: any) => mixed;
          enumerateDevices: () => Promise<Array<MediaDeviceInfo>>;
          getSupportedConstraints: () => MediaTrackSupportedConstraints;
          getDisplayMedia: (constraints?: DisplayMediaStreamConstraints) => Promise<MediaStream>;
          getUserMedia: (constraints: MediaStreamConstraints) => Promise<MediaStream>;
        }
        */
    MediaDevices(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1169:0

        declare class MediaDeviceInfo {
          +deviceId: string;
          +groupId: string;
          +kind: 'videoinput' | 'audioinput' | 'audiooutput';
          +label: string;
        }
        */
    MediaDeviceInfo(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1176:0

        declare class MediaStream extends EventTarget {
          active: bool;
          ended: bool;
          id: string;
          onactive: (ev: any) => mixed;
          oninactive: (ev: any) => mixed;
          onended: (ev: any) => mixed;
          onaddtrack: (ev: MediaStreamTrackEvent) => mixed;
          onremovetrack: (ev: MediaStreamTrackEvent) => mixed;
          addTrack(track: MediaStreamTrack): void;
          clone(): MediaStream;
          getAudioTracks(): MediaStreamTrack[];
          getTrackById(trackid?: string): ?MediaStreamTrack;
          getTracks(): MediaStreamTrack[];
          getVideoTracks(): MediaStreamTrack[];
          removeTrack(track: MediaStreamTrack): void;
        }
        */
    MediaStream(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1194:0

        declare class MediaStreamTrack extends EventTarget {
          enabled: bool;
          id: string;
          kind: string;
          label: string;
          muted: bool;
          readonly: bool;
          readyState: 'live' | 'ended';
          remote: bool;
          onstarted: (ev: any) => mixed;
          onmute: (ev: any) => mixed;
          onunmute: (ev: any) => mixed;
          onoverconstrained: (ev: any) => mixed;
          onended: (ev: any) => mixed;
          getConstraints(): MediaTrackConstraints;
          applyConstraints(): Promise<void>;
          getSettings(): MediaTrackSettings;
          getCapabilities(): MediaTrackCapabilities;
          clone(): MediaStreamTrack;
          stop(): void;
        }
        */
    MediaStreamTrack(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1216:0

        declare class MediaStreamTrackEvent extends Event {
          track: MediaStreamTrack;
        }
        */
    MediaStreamTrackEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1220:0

        declare class MediaElementAudioSourceNode extends AudioNode {}
        */
    MediaElementAudioSourceNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1221:0

        declare class MediaStreamAudioSourceNode extends AudioNode {}
        */
    MediaStreamAudioSourceNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1222:0

        declare class MediaStreamTrackAudioSourceNode extends AudioNode {}
        */
    MediaStreamTrackAudioSourceNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1224:0

        declare class MediaStreamAudioDestinationNode extends AudioNode {
          stream: MediaStream;
        }
        */
    MediaStreamAudioDestinationNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1229:0

        declare class ScriptProcessorNode extends AudioNode {
          bufferSize: number;
          onaudioprocess: (ev: AudioProcessingEvent) => mixed;
        }
        */
    ScriptProcessorNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1234:0

        declare class AnalyserNode extends AudioNode {
          fftSize: number;
          frequencyBinCount: number;
          minDecibels: number;
          maxDecibels: number;
          smoothingTimeConstant: number;
          getFloatFrequencyData(array: Float32Array): Float32Array;
          getByteFrequencyData(array: Uint8Array): Uint8Array;
          getFloatTimeDomainData(array: Float32Array): Float32Array;
          getByteTimeDomainData(array: Uint8Array): Uint8Array;
        }
        */
    AnalyserNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1246:0

        declare class BiquadFilterNode extends AudioNode {
          frequency: AudioParam;
          detune: AudioParam;
          Q: AudioParam;
          gain: AudioParam;
          type: 'lowpass'|'highpass'|'bandpass'|'lowshelf'|'highshelf'|'peaking'|'notch'|'allpass';
          getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
        }
        */
    BiquadFilterNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1255:0

        declare class ChannelMergerNode extends AudioNode {}
        */
    ChannelMergerNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1256:0

        declare class ChannelSplitterNode extends AudioNode {}
        */
    ChannelSplitterNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1259:0

        declare class ConstantSourceNode extends AudioNode {
          constructor(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode;
          offset: AudioParam;
          onended: (ev: any) => mixed;
          start(when?: number): void;
          stop(when?: number): void;
        }
        */
    ConstantSourceNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1267:0

        declare class ConvolverNode extends AudioNode {
          buffer: AudioBuffer;
          normalize: bool;
        }
        */
    ConvolverNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1272:0

        declare class DelayNode extends AudioNode {
          delayTime: number;
        }
        */
    DelayNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1276:0

        declare class DynamicsCompressorNode extends AudioNode {
          threshold: AudioParam;
          knee: AudioParam;
          ratio: AudioParam;
          reduction: AudioParam;
          attack: AudioParam;
          release: AudioParam;
        }
        */
    DynamicsCompressorNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1285:0

        declare class GainNode extends AudioNode {
          gain: AudioParam;
        }
        */
    GainNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1289:0

        declare class IIRFilterNode extends AudioNode {
          getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
        }
        */
    IIRFilterNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1293:0

        declare class OscillatorNode extends AudioNode {
          frequency: AudioParam;
          detune: AudioParam;
          type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom';
          start(when?: number): void;
          stop(when?: number): void;
          setPeriodicWave(periodicWave: PeriodicWave): void;
        }
        */
    OscillatorNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1302:0

        declare class StereoPannerNode extends AudioNode {
          pan: AudioParam;
        }
        */
    StereoPannerNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1306:0

        declare class PannerNode extends AudioNode {
          panningModel: 'equalpower'|'HRTF';
          distanceModel: 'linear'|'inverse'|'exponential';
          refDistance: number;
          maxDistance: number;
          rolloffFactor: number;
          coneInnerAngle: number;
          coneOuterAngle: number;
          coneOuterGain: number;
          setPosition(x: number, y: number, z: number): void;
          setOrientation(x: number, y: number, z: number): void;
        }
        */
    PannerNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1319:0

        declare class PeriodicWave extends AudioNode {}
        */
    PeriodicWave(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1320:0

        declare class WaveShaperNode extends AudioNode {
          curve: Float32Array;
          oversample: 'none'|'2x'|'4x';
        }
        */
    WaveShaperNode(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1333:0

        declare class Headers {
            @@iterator(): Iterator<[string, string]>;
            constructor(init?: HeadersInit): void;
            append(name: string, value: string): void;
            delete(name: string): void;
            entries(): Iterator<[string, string]>;
            forEach(callback: (value: string, name: string, headers: Headers) => mixed, thisArg?: any): void;
            get(name: string): null | string;
            has(name: string): boolean;
            keys(): Iterator<string>;
            set(name: string, value: string): void;
            values(): Iterator<string>;
        }
        */
    Headers(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1347:0

        declare class URLSearchParams {
            @@iterator(): Iterator<[string, string]>;
            constructor(query?: string | URLSearchParams | Array<[string, string]> | { [string]: string, ... } ): void;
            append(name: string, value: string): void;
            delete(name: string): void;
            entries(): Iterator<[string, string]>;
            forEach(callback: (value: string, name: string, params: URLSearchParams) => mixed, thisArg?: any): void;
            get(name: string): null | string;
            getAll(name: string): Array<string>;
            has(name: string): boolean;
            keys(): Iterator<string>;
            set(name: string, value: string): void;
            values(): Iterator<string>;
        }
        */
    URLSearchParams(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1401:0

        declare class Response {
            constructor(input?: ?BodyInit, init?: ResponseOptions): void;
            clone(): Response;
            static error(): Response;
            static redirect(url: string, status?: number): Response;

            redirected: boolean;
            type: ResponseType;
            url: string;
            ok: boolean;
            status: number;
            statusText: string;
            headers: Headers;
            trailer: Promise<Headers>;

            // Body methods and attributes
            bodyUsed: boolean;
            body: ?ReadableStream,

            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }
        */
    Response(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1427:0

        declare class Request {
            constructor(input: RequestInfo, init?: RequestOptions): void;
            clone(): Request;

            url: string;

            cache: CacheType;
            credentials: CredentialsType;
            headers: Headers;
            integrity: string;
            method: string;
            mode: ModeType;
            redirect: RedirectType;
            referrer: string;
            referrerPolicy: ReferrerPolicyType;

            // Body methods and attributes
            bodyUsed: boolean;

            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }
        */
    Request(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1453:0

        declare class AbortController {
            constructor(): void;
            +signal: AbortSignal;
            abort(): void;
        }
        */
    AbortController(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1459:0

        declare class AbortSignal extends EventTarget {
            +aborted: boolean;
            onabort: (event: any) => mixed;
        }
        */
    AbortSignal(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1464:0

        declare function fetch(input: RequestInfo, init?: RequestOptions): Promise<Response>;
        */
    fetch(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1469:0

        declare class TextEncoder {
          constructor(encoding?: TextEncoder$availableEncodings): TextEncoder;
          encode(buffer: string, options?: { stream: bool, ... }): Uint8Array;
          encoding: TextEncoder$availableEncodings;
        }
        */
    TextEncoder(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1693:0

        declare class TextDecoder {
          constructor(encoding?: TextDecoder$availableEncodings, options?: { fatal: bool, ... }): TextDecoder;
          encoding: TextDecoder$availableEncodings;
          fatal: bool;
          ignoreBOM: bool;
          decode(buffer?: ArrayBuffer | $ArrayBufferView, options?: { stream: bool, ... }): string;
        }
        */
    TextDecoder(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1701:0

        declare class MessagePort extends EventTarget {
          postMessage(message: any, transfer?: Iterable<any>): void;
          start(): void;
          close(): void;

          onmessage: null | (ev: MessageEvent) => mixed;
          onmessageerror: null | (ev: MessageEvent) => mixed;
        }
        */
    MessagePort(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1710:0

        declare class MessageChannel {
          port1: MessagePort;
          port2: MessagePort;
        }
        */
    MessageChannel(context) {
      context.lib('webworker');
    },

    /*
        lib/bom.js:1715:0

        declare class VRDisplay extends EventTarget {
          capabilities: VRDisplayCapabilities;
          depthFar: number;
          depthNear: number;
          displayId: number;
          displayName: string;
          isPresenting: boolean;
          stageParameters: null | VRStageParameters;

          cancelAnimationFrame(number): void;
          exitPresent(): Promise<void>;
          getEyeParameters(VREye): VREyeParameters;
          getFrameData(VRFrameData): boolean;
          getLayers(): VRLayerInit[];
          requestAnimationFrame(cb: (number) => mixed): number;
          requestPresent(VRLayerInit[]): Promise<void>;
          submitFrame(): void;
        }
        */
    VRDisplay(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1763:0

        declare class VRFrameData {
          leftProjectionMatrix: Float32Array;
          leftViewMatrix: Float32Array;
          pose: VRPose;
          rightProjectionMatrix: Float32Array;
          rightViewMatrix: Float32Array;
          timestamp: number;
        }
        */
    VRFrameData(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1794:0

        declare class VRDisplayEvent extends Event {
          display: VRDisplay;
          reason?: VRDisplayEventReason;

          constructor(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent;
        }
        */
    VRDisplayEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1801:0

        declare class MediaQueryListEvent {
          matches: boolean;
          media: string;
        }
        */
    MediaQueryListEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1806:0

        declare type MediaQueryListListener = MediaQueryListEvent => void;
        */
    MediaQueryListListener(context) {},

    /*
        lib/bom.js:1808:0

        declare class MediaQueryList extends EventTarget {
          matches: boolean;
          media: string;
          addListener: MediaQueryListListener => void;
          removeListener: MediaQueryListListener => void;
          onchange: MediaQueryListListener;
        }
        */
    MediaQueryList(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1816:0

        declare var matchMedia: string => MediaQueryList;
        */
    matchMedia(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1819:0

        declare type CredMgmtCredentialRequestOptions = {
          mediation: 'silent' | 'optional' | 'required',
          signal: AbortSignal,
          ...
        }
        */
    CredMgmtCredentialRequestOptions(context) {},

    /*
        lib/bom.js:1825:0

        declare type CredMgmtCredentialCreationOptions = { signal: AbortSignal, ... }
        */
    CredMgmtCredentialCreationOptions(context) {},

    /*
        lib/bom.js:1827:0

        declare interface CredMgmtCredential {
          id: string;
          type: string;
        }
        */
    CredMgmtCredential(context) {},

    /*
        lib/bom.js:1832:0

        declare interface CredMgmtPasswordCredential extends CredMgmtCredential {
          password: string;
        }
        */
    CredMgmtPasswordCredential(context) {},

    /*
        lib/bom.js:1836:0

        declare interface CredMgmtCredentialsContainer {
          get(option?: CredMgmtCredentialRequestOptions): Promise<?CredMgmtCredential>;
          store(credential: CredMgmtCredential): Promise<CredMgmtCredential>;
          create(
            creationOption?: CredMgmtCredentialCreationOptions,
          ): Promise<?CredMgmtCredential>;
          preventSilentAccess(): Promise<void>;
        }
        */
    CredMgmtCredentialsContainer(context) {},

    /*
        lib/bom.js:1859:0

        declare class SpeechSynthesis extends EventTarget {
          +pending: boolean;
          +speaking: boolean;
          +paused: boolean;

          onvoiceschanged: ?((ev: Event) => mixed);

          speak(utterance: SpeechSynthesisUtterance): void;
          cancel(): void;
          pause(): void;
          resume(): void;
          getVoices(): Array<SpeechSynthesisVoice>;
        }
        */
    SpeechSynthesis(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1873:0

        declare var speechSynthesis: SpeechSynthesis;
        */
    speechSynthesis(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1875:0

        declare class SpeechSynthesisUtterance extends EventTarget {
          constructor(text?: string): SpeechSynthesisUtterance;

          text: string;
          lang: string;
          voice: SpeechSynthesisVoice | null;
          volume: number;
          rate: number;
          pitch: number;

          onstart: ?((ev: SpeechSynthesisEvent) => mixed);
          onend: ?((ev: SpeechSynthesisEvent) => mixed);
          onerror: ?((ev: SpeechSynthesisErrorEvent) => mixed);
          onpause: ?((ev: SpeechSynthesisEvent) => mixed);
          onresume: ?((ev: SpeechSynthesisEvent) => mixed);
          onmark: ?((ev: SpeechSynthesisEvent) => mixed);
          onboundary: ?((ev: SpeechSynthesisEvent) => mixed);
        }
        */
    SpeechSynthesisUtterance(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1903:0

        declare class SpeechSynthesisEvent extends Event {
          constructor(type: string, eventInitDict?: SpeechSynthesisEvent$Init): SpeechSynthesisEvent;
          +utterance: SpeechSynthesisUtterance;
          charIndex: number;
          charLength: number;
          elapsedTime: number;
          name: string;
        }
        */
    SpeechSynthesisEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1917:0

        declare class SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
          constructor(type: string, eventInitDict?: SpeechSynthesisErrorEvent$Init): SpeechSynthesisErrorEvent;
          +error: SpeechSynthesisErrorCode;
        }
        */
    SpeechSynthesisErrorEvent(context) {
      context.lib('dom');
    },

    /*
        lib/bom.js:1922:0

        declare class SpeechSynthesisVoice {
          +voiceURI: string;
          +name: string;
          +lang: string;
          +localService: boolean;
          +default: boolean;
        }
        */
    SpeechSynthesisVoice(context) {
      context.lib('dom');
    },
  },

  modules: {},
} as RuleSet;
