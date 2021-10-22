import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
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
    Screen: false,

    /*
        declare var screen: Screen;
        */
    screen: false,

    /*
        declare var window: any;
        */
    window: false,

    /*
        declare class PermissionStatus extends EventTarget {
          onchange: ?((event: any) => mixed);
          +state: PermissionState;
        }
        */
    PermissionStatus: false,

    /*
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
    Permissions: false,

    /*
        declare class MIDIMessageEvent extends Event {
          constructor(type: string, eventInitDict: MIDIMessageEvent$Init): void;
          +data: Uint8Array;
        }
        */
    MIDIMessageEvent: false,

    /*
        declare class MIDIConnectionEvent extends Event {
          constructor(type: string, eventInitDict: MIDIConnectionEvent$Init): void;
          +port: MIDIPort;
        }
        */
    MIDIConnectionEvent: false,

    /*
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
    MIDIPort: false,

    /*
        declare class MIDIInput extends MIDIPort {
          onmidimessage: ?((ev: MIDIMessageEvent) => mixed);
        }
        */
    MIDIInput: false,

    /*
        declare class MIDIOutput extends MIDIPort {
          send(data: Iterable<number>, timestamp?: number): void;
          clear(): void;
        }
        */
    MIDIOutput: false,

    /*
        declare class MIDIInputMap extends $ReadOnlyMap<string, MIDIInput> {}
        */
    MIDIInputMap: false,

    /*
        declare class MIDIOutputMap extends $ReadOnlyMap<string, MIDIOutput> {}
        */
    MIDIOutputMap: false,

    /*
        declare class MIDIAccess extends EventTarget {
          +inputs: MIDIInputMap;
          +outputs: MIDIOutputMap;
          +sysexEnabled: boolean;
          onstatechange: ?((ev: MIDIConnectionEvent) => mixed);
        }
        */
    MIDIAccess: false,

    /*
        declare class NavigatorID {
            appName: 'Netscape';
            appCodeName: 'Mozilla';
            product: 'Gecko';
            appVersion: string;
            platform: string;
            userAgent: string;
        }
        */
    NavigatorID: false,

    /*
        declare class NavigatorLanguage {
            +language: string;
            +languages: $ReadOnlyArray<string>;
        }
        */
    NavigatorLanguage: false,

    /*
        declare class NavigatorContentUtils {
            registerContentHandler(mimeType: string, uri: string, title: string): void;
            registerProtocolHandler(protocol: string, uri: string, title: string): void;
        }
        */
    NavigatorContentUtils: false,

    /*
        declare class NavigatorCookies {
            +cookieEnabled: boolean;
        }
        */
    NavigatorCookies: false,

    /*
        declare class NavigatorPlugins {
            +plugins: PluginArray;
            +mimeTypes: MimeTypeArray;
            javaEnabled(): boolean;
        }
        */
    NavigatorPlugins: false,

    /*
        declare class NavigatorOnLine {
            +onLine: boolean;
        }
        */
    NavigatorOnLine: false,

    /*
        declare class NavigatorConcurrentHardware {
            +hardwareConcurrency: number;
        }
        */
    NavigatorConcurrentHardware: false,

    /*
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
    Navigator: false,

    /*
        declare class Clipboard extends EventTarget {
            read(): Promise<DataTransfer>;
            readText(): Promise<string>;
            write(data: DataTransfer): Promise<void>;
            writeText(data: string): Promise<void>;
        }
        */
    Clipboard: false,

    /*
        declare var navigator: Navigator;
        */
    navigator: false,

    /*
        declare class MimeType {
            type: string;
            description: string;
            suffixes: string;
            enabledPlugin: Plugin;
        }
        */
    MimeType: false,

    /*
        declare class MimeTypeArray {
            length: number;
            item(index: number): MimeType;
            namedItem(name: string): MimeType;
            [key: number | string]: MimeType;
        }
        */
    MimeTypeArray: false,

    /*
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
    Plugin: false,

    /*
        declare class PluginArray {
            length: number;
            item(index: number): Plugin;
            namedItem(name: string): Plugin;
            refresh(): void;
            [key: number | string]: Plugin;
        }
        */
    PluginArray: false,

    /*
        declare type DOMHighResTimeStamp = number;
        */
    DOMHighResTimeStamp: false,

    /*
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
    PerformanceTiming: false,

    /*
        declare class PerformanceNavigation {
            TYPE_NAVIGATE: 0;
            TYPE_RELOAD: 1;
            TYPE_BACK_FORWARD: 2;
            TYPE_RESERVED: 255;

            type: 0 | 1 | 2 | 255;
            redirectCount: number;
        }
        */
    PerformanceNavigation: false,

    /*
        declare class PerformanceEntry {
            name: string;
            entryType: string;
            startTime: DOMHighResTimeStamp;
            duration: DOMHighResTimeStamp;
            toJSON(): string;
        }
        */
    PerformanceEntry: false,

    /*
        declare class PerformanceResourceTiming extends PerformanceEntry {
            initiatorType: string;
            nextHopProtocol: string;
            workerStart: number;
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
            transferSize: string;
            encodedBodySize: number;
            decodedBodySize: number;
        }
        */
    PerformanceResourceTiming: false,

    /*
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
    PerformanceNavigationTiming: false,

    /*
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
    Performance: false,

    /*
        declare var performance: Performance;
        */
    performance: false,

    /*
        declare interface PerformanceObserverEntryList {
          getEntries(): PerformanceEntryList;
          getEntriesByType(type: string): PerformanceEntryList;
          getEntriesByName(name: string, type: ?string): PerformanceEntryList;
        }
        */
    PerformanceObserverEntryList: false,

    /*
        declare class PerformanceObserver {
          constructor(callback: (entries: PerformanceObserverEntryList, observer: PerformanceObserver) => mixed): void;

          observe(options: ?PerformanceObserverInit): void;
          disconnect(): void;
          takeRecords(): PerformanceEntryList;

          static supportedEntryTypes: string[];
        }
        */
    PerformanceObserver: false,

    /*
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
    History: false,

    /*
        declare var history: History;
        */
    history: false,

    /*
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
    Location: false,

    /*
        declare var location: Location;
        */
    location: false,

    /*
        declare class DOMParser {
            parseFromString(source: string, mimeType: string): Document;
        }
        */
    DOMParser: false,

    /*
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
    FormData: false,

    /*
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
    MutationRecord: false,

    /*
        declare type MutationObserverInit = MutationObserverInitRequired & {
          subtree?: boolean,
          attributeOldValue?: boolean,
          characterDataOldValue?: boolean,
          attributeFilter?: Array<string>,
          ...
        }
        */
    MutationObserverInit: false,

    /*
        declare class MutationObserver {
            constructor(callback: (arr: Array<MutationRecord>, observer: MutationObserver) => mixed): void;
            observe(target: Node, options: MutationObserverInit): void;
            takeRecords(): Array<MutationRecord>;
            disconnect(): void;
        }
        */
    MutationObserver: false,

    /*
        declare class DOMRectReadOnly {
          static fromRect(rectangle?: {
            x: number,
            y: number,
            width: number,
            height: number,
            ...
          }): DOMRectReadOnly;
          constructor(x: number, y: number, width: number, height: number): void;
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
    DOMRectReadOnly: false,

    /*
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
    DOMRect: false,

    /*
        declare class DOMRectList {
          @@iterator(): Iterator<DOMRect>;
          length: number;
          item(index: number): DOMRect;
          [index: number]: DOMRect;
        }
        */
    DOMRectList: false,

    /*
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
    IntersectionObserverEntry: false,

    /*
        declare type IntersectionObserverCallback = (
            entries: Array<IntersectionObserverEntry>,
            observer: IntersectionObserver,
        ) => mixed;
        */
    IntersectionObserverCallback: false,

    /*
        declare type IntersectionObserverOptions = {
          root?: Node | null,
          rootMargin?: string,
          threshold?: number | Array<number>,
          ...
        };
        */
    IntersectionObserverOptions: false,

    /*
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
    IntersectionObserver: false,

    /*
        declare interface ResizeObserverSize {
          +inlineSize: number;
          +blockSize: number;
        }
        */
    ResizeObserverSize: false,

    /*
        declare interface ResizeObserverEntry {
          *
           * The Element whose size has changed.
           
          +target: Element;
          *
           * Element's content rect when ResizeObserverCallback is invoked.
           *
           * Legacy, may be deprecated in the future.
           
          +contentRect: DOMRectReadOnly;
          *
           * An array containing the Element's border box size when
           * ResizeObserverCallback is invoked.
           
          +borderBoxSize: $ReadOnlyArray<ResizeObserverSize>;
          *
           * An array containing the Element's content rect size when
           * ResizeObserverCallback is invoked.
           
          +contentBoxSize: $ReadOnlyArray<ResizeObserverSize>;
          *
           * An array containing the Element's content rect size in integral device
           * pixels when ResizeObserverCallback is invoked.
           *
           * Not implemented in Firefox or Safari as of July 2021
           
          +devicePixelContentBoxSize?: $ReadOnlyArray<ResizeObserverSize> | void;
        }
        */
    ResizeObserverEntry: false,

    /*
        declare type ResizeObserverOptions = {
          box?: ResizeObserverBoxOptions;
          ...
        };
        */
    ResizeObserverOptions: false,

    /*
        declare class ResizeObserver {
          constructor(callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => mixed): void;
          *
           * Adds target to the list of observed elements.
           
          observe(target: Element, options?: ResizeObserverOptions): void;
          *
           * Removes target from the list of observed elements.
           
          unobserve(target: Element): void;
          disconnect(): void;
        }
        */
    ResizeObserver: false,

    /*
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
    NodeFilter: false,

    /*
        declare class CloseEvent extends Event {
            code: number;
            reason: string;
            wasClean: boolean;
        }
        */
    CloseEvent: false,

    /*
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
    WebSocket: false,

    /*
        declare class Worker extends EventTarget {
            constructor(stringUrl: string, workerOptions?: WorkerOptions): void;
            onerror: null | (ev: any) => mixed;
            onmessage: null | (ev: MessageEvent) => mixed;
            onmessageerror: null | (ev: MessageEvent) => mixed;
            postMessage(message: any, ports?: any): void;
            terminate(): void;
        }
        */
    Worker: false,

    /*
        declare class SharedWorker extends EventTarget {
            constructor(stringUrl: string, name?: string): void;
            constructor(stringUrl: string, workerOptions?: WorkerOptions): void;
            port: MessagePort;
            onerror: (ev: any) => mixed;
        }
        */
    SharedWorker: false,

    /*
        declare function importScripts(...urls: Array<string>): void;
        */
    importScripts: false,

    /*
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
    WorkerGlobalScope: false,

    /*
        declare class DedicatedWorkerGlobalScope extends WorkerGlobalScope {
            onmessage: (ev: MessageEvent) => mixed;
            onmessageerror: (ev: MessageEvent) => mixed;
            postMessage(message: any, transfer?: Iterable<any>): void;
        }
        */
    DedicatedWorkerGlobalScope: false,

    /*
        declare class SharedWorkerGlobalScope extends WorkerGlobalScope {
            name: string;
            onconnect: (ev: MessageEvent) => mixed;
        }
        */
    SharedWorkerGlobalScope: false,

    /*
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
    WorkerLocation: false,

    /*
        declare class WorkerNavigator mixins
          NavigatorID,
          NavigatorLanguage,
          NavigatorOnLine,
          NavigatorConcurrentHardware {
            permissions: Permissions;
          }
        */
    WorkerNavigator: false,

    /*
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
    XDomainRequest: false,

    /*
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
    XMLHttpRequest: false,

    /*
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
    XMLHttpRequestEventTarget: false,

    /*
        declare class XMLSerializer {
            serializeToString(target: Node): string;
        }
        */
    XMLSerializer: false,

    /*
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
    Geolocation: false,

    /*
        declare class Position {
            coords: Coordinates;
            timestamp: number;
        }
        */
    Position: false,

    /*
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
    Coordinates: false,

    /*
        declare class PositionError {
            code: number;
            message: string;
            PERMISSION_DENIED: 1;
            POSITION_UNAVAILABLE: 2;
            TIMEOUT: 3;
        }
        */
    PositionError: false,

    /*
        declare class AudioProcessingEvent extends Event {
          constructor(type: string, eventInitDict: AudioProcessingEvent$Init): void;

          +playbackTime: number;
          +inputBuffer: AudioBuffer;
          +outputBuffer: AudioBuffer;
        }
        */
    AudioProcessingEvent: false,

    /*
        declare class OfflineAudioCompletionEvent extends Event {
          constructor(type: string, eventInitDict: OfflineAudioCompletionEvent$Init): void;

          +renderedBuffer: AudioBuffer;
        }
        */
    OfflineAudioCompletionEvent: false,

    /*
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
    BaseAudioContext: false,

    /*
        declare class AudioTimestamp {
          contextTime: number;
          performanceTime: number;
        }
        */
    AudioTimestamp: false,

    /*
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
    AudioContext: false,

    /*
        declare class OfflineAudioContext extends BaseAudioContext {
          startRendering(): Promise<AudioBuffer>;
          suspend(suspendTime: number): Promise<void>;
          length: number;
          oncomplete: (ev: OfflineAudioCompletionEvent) => mixed;
        }
        */
    OfflineAudioContext: false,

    /*
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
    AudioNode: false,

    /*
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
    AudioParam: false,

    /*
        declare class AudioDestinationNode extends AudioNode {
          maxChannelCount: number;
        }
        */
    AudioDestinationNode: false,

    /*
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
    AudioListener: false,

    /*
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
    AudioBuffer: false,

    /*
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
    AudioBufferSourceNode: false,

    /*
        declare class CanvasCaptureMediaStream extends MediaStream {
          canvas: HTMLCanvasElement;
          requestFrame(): void;
        }
        */
    CanvasCaptureMediaStream: false,

    /*
        declare class MediaDevices extends EventTarget {
          ondevicechange: (ev: any) => mixed;
          enumerateDevices: () => Promise<Array<MediaDeviceInfo>>;
          getSupportedConstraints: () => MediaTrackSupportedConstraints;
          getDisplayMedia: (constraints?: DisplayMediaStreamConstraints) => Promise<MediaStream>;
          getUserMedia: (constraints: MediaStreamConstraints) => Promise<MediaStream>;
        }
        */
    MediaDevices: false,

    /*
        declare class MediaDeviceInfo {
          +deviceId: string;
          +groupId: string;
          +kind: 'videoinput' | 'audioinput' | 'audiooutput';
          +label: string;
        }
        */
    MediaDeviceInfo: false,

    /*
        declare class MediaRecorder extends EventTarget {
          constructor(stream: MediaStream, options?: MediaRecorderOptions): void;
          +stream: MediaStream;
          +mimeType: string;
          +state: 'inactive' | 'recording' | 'paused';

          onstart: (ev: any) => mixed;
          onstop: (ev: any) => mixed;
          ondataavailable: (ev: any) => mixed;
          onpause: (ev: any) => mixed;
          onresume: (ev: any) => mixed;
          onerror: (ev: any) => mixed;

          +videoBitsPerSecond: number;
          +audioBitsPerSecond: number;
          +audioBitrateMode: 'cbr' | 'vbr';

          start(timeslice?: number): void;
          stop(): void;
          pause(): void;
          resume(): void;
          requestData(): void;

          static isTypeSupported(type: string): boolean;
        }
        */
    MediaRecorder: false,

    /*
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
    MediaStream: false,

    /*
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
          applyConstraints(constraints?: MediaTrackConstraints): Promise<void>;
          getSettings(): MediaTrackSettings;
          getCapabilities(): MediaTrackCapabilities;
          clone(): MediaStreamTrack;
          stop(): void;
        }
        */
    MediaStreamTrack: false,

    /*
        declare class MediaStreamTrackEvent extends Event {
          track: MediaStreamTrack;
        }
        */
    MediaStreamTrackEvent: false,

    /*
        declare class MediaElementAudioSourceNode extends AudioNode {}
        */
    MediaElementAudioSourceNode: false,

    /*
        declare class MediaStreamAudioSourceNode extends AudioNode {}
        */
    MediaStreamAudioSourceNode: false,

    /*
        declare class MediaStreamTrackAudioSourceNode extends AudioNode {}
        */
    MediaStreamTrackAudioSourceNode: false,

    /*
        declare class MediaStreamAudioDestinationNode extends AudioNode {
          stream: MediaStream;
        }
        */
    MediaStreamAudioDestinationNode: false,

    /*
        declare class ScriptProcessorNode extends AudioNode {
          bufferSize: number;
          onaudioprocess: (ev: AudioProcessingEvent) => mixed;
        }
        */
    ScriptProcessorNode: false,

    /*
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
    AnalyserNode: false,

    /*
        declare class BiquadFilterNode extends AudioNode {
          frequency: AudioParam;
          detune: AudioParam;
          Q: AudioParam;
          gain: AudioParam;
          type: 'lowpass'|'highpass'|'bandpass'|'lowshelf'|'highshelf'|'peaking'|'notch'|'allpass';
          getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
        }
        */
    BiquadFilterNode: false,

    /*
        declare class ChannelMergerNode extends AudioNode {}
        */
    ChannelMergerNode: false,

    /*
        declare class ChannelSplitterNode extends AudioNode {}
        */
    ChannelSplitterNode: false,

    /*
        declare class ConstantSourceNode extends AudioNode {
          constructor(context: BaseAudioContext, options?: ConstantSourceOptions): void;
          offset: AudioParam;
          onended: (ev: any) => mixed;
          start(when?: number): void;
          stop(when?: number): void;
        }
        */
    ConstantSourceNode: false,

    /*
        declare class ConvolverNode extends AudioNode {
          buffer: AudioBuffer;
          normalize: bool;
        }
        */
    ConvolverNode: false,

    /*
        declare class DelayNode extends AudioNode {
          delayTime: number;
        }
        */
    DelayNode: false,

    /*
        declare class DynamicsCompressorNode extends AudioNode {
          threshold: AudioParam;
          knee: AudioParam;
          ratio: AudioParam;
          reduction: AudioParam;
          attack: AudioParam;
          release: AudioParam;
        }
        */
    DynamicsCompressorNode: false,

    /*
        declare class GainNode extends AudioNode {
          gain: AudioParam;
        }
        */
    GainNode: false,

    /*
        declare class IIRFilterNode extends AudioNode {
          getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void;
        }
        */
    IIRFilterNode: false,

    /*
        declare class OscillatorNode extends AudioNode {
          frequency: AudioParam;
          detune: AudioParam;
          type: 'sine' | 'square' | 'sawtooth' | 'triangle' | 'custom';
          start(when?: number): void;
          stop(when?: number): void;
          setPeriodicWave(periodicWave: PeriodicWave): void;
          onended: (ev: any) => mixed;
        }
        */
    OscillatorNode: false,

    /*
        declare class StereoPannerNode extends AudioNode {
          pan: AudioParam;
        }
        */
    StereoPannerNode: false,

    /*
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
    PannerNode: false,

    /*
        declare class PeriodicWave extends AudioNode {}
        */
    PeriodicWave: false,

    /*
        declare class WaveShaperNode extends AudioNode {
          curve: Float32Array;
          oversample: 'none'|'2x'|'4x';
        }
        */
    WaveShaperNode: false,

    /*
        declare class Headers {
            @@iterator(): Iterator<[string, string]>;
            constructor(init?: HeadersInit): void;
            append(name: string, value: string): void;
            delete(name: string): void;
            entries(): Iterator<[string, string]>;
            forEach<This>(callback: (this : This, value: string, name: string, headers: Headers) => mixed, thisArg: This): void;
            get(name: string): null | string;
            has(name: string): boolean;
            keys(): Iterator<string>;
            set(name: string, value: string): void;
            values(): Iterator<string>;
        }
        */
    Headers: false,

    /*
        declare class URLSearchParams {
            @@iterator(): Iterator<[string, string]>;
            constructor(query?: string | URLSearchParams | Array<[string, string]> | { [string]: string, ... } ): void;
            append(name: string, value: string): void;
            delete(name: string): void;
            entries(): Iterator<[string, string]>;
            forEach<This>(callback: (this : This, value: string, name: string, params: URLSearchParams) => mixed, thisArg: This): void;
            get(name: string): null | string;
            getAll(name: string): Array<string>;
            has(name: string): boolean;
            keys(): Iterator<string>;
            set(name: string, value: string): void;
            values(): Iterator<string>;
        }
        */
    URLSearchParams: false,

    /*
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
    Response: false,

    /*
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
            +signal: AbortSignal;

            // Body methods and attributes
            bodyUsed: boolean;

            arrayBuffer(): Promise<ArrayBuffer>;
            blob(): Promise<Blob>;
            formData(): Promise<FormData>;
            json(): Promise<any>;
            text(): Promise<string>;
        }
        */
    Request: false,

    /*
        declare class AbortController {
            constructor(): void;
            +signal: AbortSignal;
            abort(): void;
        }
        */
    AbortController: false,

    /*
        declare class AbortSignal extends EventTarget {
            +aborted: boolean;
            onabort: (event: any) => mixed;
        }
        */
    AbortSignal: false,

    /*
        declare function fetch(input: RequestInfo, init?: RequestOptions): Promise<Response>;
        */
    fetch: false,

    /*
        declare class TextEncoder {
          constructor(encoding?: TextEncoder$availableEncodings): void;
          encode(buffer: string, options?: { stream: bool, ... }): Uint8Array;
          encoding: TextEncoder$availableEncodings;
        }
        */
    TextEncoder: false,

    /*
        declare class TextDecoder {
          constructor(encoding?: TextDecoder$availableEncodings, options?: { fatal: bool, ... }): void;
          encoding: TextDecoder$availableEncodings;
          fatal: bool;
          ignoreBOM: bool;
          decode(buffer?: ArrayBuffer | $ArrayBufferView, options?: { stream: bool, ... }): string;
        }
        */
    TextDecoder: false,

    /*
        declare class MessagePort extends EventTarget {
          postMessage(message: any, transfer?: Iterable<any>): void;
          start(): void;
          close(): void;

          onmessage: null | (ev: MessageEvent) => mixed;
          onmessageerror: null | (ev: MessageEvent) => mixed;
        }
        */
    MessagePort: false,

    /*
        declare class MessageChannel {
          port1: MessagePort;
          port2: MessagePort;
        }
        */
    MessageChannel: false,

    /*
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
    VRDisplay: false,

    /*
        declare class VRFrameData {
          leftProjectionMatrix: Float32Array;
          leftViewMatrix: Float32Array;
          pose: VRPose;
          rightProjectionMatrix: Float32Array;
          rightViewMatrix: Float32Array;
          timestamp: number;
        }
        */
    VRFrameData: false,

    /*
        declare class VRDisplayEvent extends Event {
          constructor(type: string, eventInitDict: VRDisplayEventInit): void;
          display: VRDisplay;
          reason?: VRDisplayEventReason;
        }
        */
    VRDisplayEvent: false,

    /*
        declare class MediaQueryListEvent {
          matches: boolean;
          media: string;
        }
        */
    MediaQueryListEvent: false,

    /*
        declare type MediaQueryListListener = MediaQueryListEvent => void;
        */
    MediaQueryListListener: false,

    /*
        declare class MediaQueryList extends EventTarget {
          matches: boolean;
          media: string;
          addListener: MediaQueryListListener => void;
          removeListener: MediaQueryListListener => void;
          onchange: MediaQueryListListener;
        }
        */
    MediaQueryList: false,

    /*
        declare var matchMedia: string => MediaQueryList;
        */
    matchMedia: false,

    /*
        declare type CredMgmtCredentialRequestOptions = {
          mediation: 'silent' | 'optional' | 'required',
          signal: AbortSignal,
          ...
        }
        */
    CredMgmtCredentialRequestOptions: false,

    /*
        declare type CredMgmtCredentialCreationOptions = { signal: AbortSignal, ... }
        */
    CredMgmtCredentialCreationOptions: false,

    /*
        declare interface CredMgmtCredential {
          id: string;
          type: string;
        }
        */
    CredMgmtCredential: false,

    /*
        declare interface CredMgmtPasswordCredential extends CredMgmtCredential {
          password: string;
        }
        */
    CredMgmtPasswordCredential: false,

    /*
        declare interface CredMgmtCredentialsContainer {
          get(option?: CredMgmtCredentialRequestOptions): Promise<?CredMgmtCredential>;
          store(credential: CredMgmtCredential): Promise<CredMgmtCredential>;
          create(
            creationOption?: CredMgmtCredentialCreationOptions,
          ): Promise<?CredMgmtCredential>;
          preventSilentAccess(): Promise<void>;
        }
        */
    CredMgmtCredentialsContainer: false,

    /*
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
    SpeechSynthesis: false,

    /*
        declare var speechSynthesis: SpeechSynthesis;
        */
    speechSynthesis: false,

    /*
        declare class SpeechSynthesisUtterance extends EventTarget {
          constructor(text?: string): void;

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
    SpeechSynthesisUtterance: false,

    /*
        declare class SpeechSynthesisEvent extends Event {
          constructor(type: string, eventInitDict?: SpeechSynthesisEvent$Init): void;

          +utterance: SpeechSynthesisUtterance;
          charIndex: number;
          charLength: number;
          elapsedTime: number;
          name: string;
        }
        */
    SpeechSynthesisEvent: false,

    /*
        declare class SpeechSynthesisErrorEvent extends SpeechSynthesisEvent {
          constructor(type: string, eventInitDict?: SpeechSynthesisErrorEvent$Init): void;
          +error: SpeechSynthesisErrorCode;
        }
        */
    SpeechSynthesisErrorEvent: false,

    /*
        declare class SpeechSynthesisVoice {
          +voiceURI: string;
          +name: string;
          +lang: string;
          +localService: boolean;
          +default: boolean;
        }
        */
    SpeechSynthesisVoice: false,

    /*
        declare class SpeechGrammar {
          constructor(): void;

          src: string;
          weight?: number;
        }
        */
    SpeechGrammar: false,

    /*
        declare class SpeechGrammarList {
          +length: number;

          item(index: number): SpeechGrammar;
          addFromURI(src: string, weight?: number): void;
          addFromString(string: string, weight?: number): void;
        }
        */
    SpeechGrammarList: false,

    /*
        declare class SpeechRecognitionAlternative {
          +transcript: string;
          +confidence: number;
        }
        */
    SpeechRecognitionAlternative: false,

    /*
        declare class SpeechRecognitionResult {
          +isFinal: boolean;
          +length: number;

          item(index: number): SpeechRecognitionAlternative;
        }
        */
    SpeechRecognitionResult: false,

    /*
        declare class SpeechRecognitionResultList {
          +length: number;

          item(index: number): SpeechRecognitionResult;
        }
        */
    SpeechRecognitionResultList: false,

    /*
        declare class SpeechRecognitionEvent extends Event {
          constructor(type: string, eventInitDict?: SpeechRecognitionEvent$Init): void;

          +emma: any;
          +interpretation: any;
          +resultIndex: number;
          +results: SpeechRecognitionResultList;
        }
        */
    SpeechRecognitionEvent: false,

    /*
        declare class SpeechRecognitionErrorEvent extends SpeechRecognitionEvent {
          constructor(type: string, eventInitDict?: SpeechRecognitionErrorEvent$Init): void;
          +error: SpeechRecognitionErrorCode;
          +message: string;
        }
        */
    SpeechRecognitionErrorEvent: false,

    /*
        declare class SpeechRecognition extends EventTarget {
          constructor(): void;

          +grammars: SpeechGrammar[];
          +lang: string;
          +continuous: boolean;
          +interimResults: boolean;
          +maxAlternatives: number;
          +serviceURI: string;

          onaudiostart: ?((ev: Event) => mixed);
          onaudioend: ?((ev: Event) => mixed);
          onend: ?((ev: Event) => mixed);
          onerror: ?((ev: Event) => mixed);
          onnomatch: ?((ev: Event) => mixed);
          onsoundstart: ?((ev: Event) => mixed);
          onsoundend: ?((ev: Event) => mixed);
          onspeechstart: ?((ev: Event) => mixed);
          onspeechend: ?((ev: Event) => mixed);
          onstart: ?((ev: Event) => mixed);

          abort(): void;
          start(): void;
          stop(): void;
        }
        */
    SpeechRecognition: false,
  },

  modules: {},
} as RuleSet;
