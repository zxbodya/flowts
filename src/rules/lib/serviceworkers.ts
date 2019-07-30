import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/serviceworkers.js:11:0

        declare class WindowClient extends Client {
          visibilityState: VisibilityState,
          focused: boolean,
          focus(): Promise<WindowClient>,
          navigate(url: string): Promise<WindowClient>,
        }
        */
    WindowClient(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "WindowClient" is not verified');
    },

    /*
        lib/serviceworkers.js:18:0

        declare class Client {
          id: string,
          reserved: boolean,
          url: string,
          frameType: FrameType,
          postMessage(message: any, transfer?: Iterator<any> | Array<any>): void,
        }
        */
    Client(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "Client" is not verified');
    },

    /*
        lib/serviceworkers.js:26:0

        declare class ExtendableEvent extends Event {
          waitUntil(f: Promise<mixed>): void,
        }
        */
    ExtendableEvent(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "ExtendableEvent" is not verified');
    },

    /*
        lib/serviceworkers.js:36:0

        declare class InstallEvent extends ExtendableEvent {
          registerForeignFetch(options: ForeignFetchOptions): void,
        }
        */
    InstallEvent(context) {
      context.warnOnce('Rule for global "InstallEvent" is not verified');
    },

    /*
        lib/serviceworkers.js:40:0

        declare class FetchEvent extends ExtendableEvent {
          request: Request,
          clientId: string,
          isReload: boolean,
          respondWith(response: Response | Promise<Response>): void,
          preloadResponse: Promise<?Response>,
        }
        */
    FetchEvent(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "FetchEvent" is not verified');
    },

    /*
        lib/serviceworkers.js:56:0

        declare class Clients {
          get(id: string): Promise<?Client>,
          matchAll(options?: ClientQueryOptions): Promise<Array<Client>>,
          openWindow(url: string): Promise<?WindowClient>,
          claim(): Promise<void>,
        }
        */
    Clients(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "Clients" is not verified');
    },

    /*
        lib/serviceworkers.js:69:0

        declare class ServiceWorker extends EventTarget {
          scriptURL: string,
          state: ServiceWorkerState,

          postMessage(message: any, transfer?: Iterator<any>): void,

          onstatechange?: EventHandler,
        }
        */
    ServiceWorker(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "ServiceWorker" is not verified');
    },

    /*
        lib/serviceworkers.js:78:0

        declare class NavigationPreloadState {
          enabled: boolean,
          headerValue: string,
        }
        */
    NavigationPreloadState(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "NavigationPreloadState" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:83:0

        declare class NavigationPreloadManager {
          enable: Promise<void>,
          disable: Promise<void>,
          setHeaderValue(value: string): Promise<void>,
          getState: Promise<NavigationPreloadState>,
        }
        */
    NavigationPreloadManager(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "NavigationPreloadManager" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:96:0

        declare class PushSubscriptionJSON {
          endpoint: string,
          expirationTime: number | null,
          keys: { [string]: string, ... };
        }
        */
    PushSubscriptionJSON(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "PushSubscriptionJSON" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:102:0

        declare class PushSubscription {
          +endpoint: string,
          +expirationTime: number | null,
          +options: PushSubscriptionOptions,
          getKey(name: string): ArrayBuffer | null,
          toJSON(): PushSubscriptionJSON,
          unsubscribe(): Promise<boolean>,
        }
        */
    PushSubscription(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "PushSubscription" is not verified');
    },

    /*
        lib/serviceworkers.js:111:0

        declare class PushManager {
          +supportedContentEncodings: Array<string>,
          subscribe(options?: PushSubscriptionOptions): Promise<PushSubscription>,
          getSubscription(): Promise<PushSubscription | null>,
          permissionState(options?: PushSubscriptionOptions): Promise<'granted' | 'denied' | 'prompt'>,
        }
        */
    PushManager(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "PushManager" is not verified');
    },

    /*
        lib/serviceworkers.js:120:0

        declare class ServiceWorkerRegistration extends EventTarget {
          +installing: ?ServiceWorker,
          +waiting: ?ServiceWorker,
          +active: ?ServiceWorker,
          +navigationPreload: NavigationPreloadManager,
          +scope: string,
          +updateViaCache: ServiceWorkerUpdateViaCache,
          +pushManager: PushManager,

          update(): Promise<void>,
          unregister(): Promise<boolean>,

          onupdatefound?: EventHandler,
        }
        */
    ServiceWorkerRegistration(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "ServiceWorkerRegistration" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:144:0

        declare class ServiceWorkerContainer extends EventTarget {
          +controller: ?ServiceWorker,
          +ready: Promise<ServiceWorkerRegistration>,

          getRegistration(clientURL: string): Promise<?ServiceWorkerRegistration>,
          getRegistrations(): Promise<Iterator<ServiceWorkerRegistration>>,
          register(
            scriptURL: string,
            options?: RegistrationOptions
          ): Promise<ServiceWorkerRegistration>,
          startMessages(): void,

          oncontrollerchange?: EventHandler,
          onmessage?: EventHandler,
          onmessageerror?: EventHandler,
        }
        */
    ServiceWorkerContainer(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "ServiceWorkerContainer" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:164:0

        declare class ServiceWorkerMessageEvent extends Event {
          data: any,
          lastEventId: string,
          origin: string,
          ports: Array<MessagePort>,
          source: ?(ServiceWorker | MessagePort),
        }
        */
    ServiceWorkerMessageEvent(context) {
      context.lib('dom');
      context.warnOnce(
        'Rule for global "ServiceWorkerMessageEvent" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:172:0

        declare class ExtendableMessageEvent extends ExtendableEvent {
          data: any,
          lastEventId: string,
          origin: string,
          ports: Array<MessagePort>,
          source: ?(ServiceWorker | MessagePort),
        }
        */
    ExtendableMessageEvent(context) {
      context.lib('webworker');
      context.warnOnce(
        'Rule for global "ExtendableMessageEvent" is not verified'
      );
    },

    /*
        lib/serviceworkers.js:188:0

        declare class Cache {
          match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>,
          matchAll(
            request: RequestInfo,
            options?: CacheQueryOptions
          ): Promise<Array<Response>>,
          add(request: RequestInfo): Promise<void>,
          addAll(requests: Array<RequestInfo>): Promise<void>,
          put(request: RequestInfo, response: Response): Promise<void>,
          delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>,
          keys(
            request?: RequestInfo,
            options?: CacheQueryOptions
          ): Promise<Array<Request>>,
        }
        */
    Cache(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "Cache" is not verified');
    },

    /*
        lib/serviceworkers.js:204:0

        declare class CacheStorage {
          match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>,
          has(cacheName: string): Promise<true>,
          open(cacheName: string): Promise<Cache>,
          delete(cacheName: string): Promise<boolean>,
          keys(): Promise<Array<string>>,
        }
        */
    CacheStorage(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "CacheStorage" is not verified');
    },

    /*
        lib/serviceworkers.js:214:0

        declare var clients: Clients;
        */
    clients(context) {
      context.warnOnce('Rule for global "clients" is not verified');
    },

    /*
        lib/serviceworkers.js:215:0

        declare var caches: CacheStorage;
        */
    caches(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "caches" is not verified');
    },

    /*
        lib/serviceworkers.js:216:0

        declare var registration: ServiceWorkerRegistration;
        */
    registration(context) {
      context.warnOnce('Rule for global "registration" is not verified');
    },

    /*
        lib/serviceworkers.js:217:0

        declare function skipWaiting(): Promise<void>;
        */
    skipWaiting(context) {
      context.warnOnce('Rule for global "skipWaiting" is not verified');
    },

    /*
        lib/serviceworkers.js:218:0

        declare var onactivate: ?EventHandler;
        */
    onactivate(context) {
      context.warnOnce('Rule for global "onactivate" is not verified');
    },

    /*
        lib/serviceworkers.js:219:0

        declare var oninstall: ?EventHandler;
        */
    oninstall(context) {
      context.warnOnce('Rule for global "oninstall" is not verified');
    },

    /*
        lib/serviceworkers.js:220:0

        declare var onfetch: ?EventHandler;
        */
    onfetch(context) {
      context.warnOnce('Rule for global "onfetch" is not verified');
    },

    /*
        lib/serviceworkers.js:221:0

        declare var onforeignfetch: ?EventHandler;
        */
    onforeignfetch(context) {
      context.warnOnce('Rule for global "onforeignfetch" is not verified');
    },

    /*
        lib/serviceworkers.js:222:0

        declare var onmessage: ?EventHandler;
        */
    onmessage(context) {
      context.lib('webworker');
      context.warnOnce('Rule for global "onmessage" is not verified');
    },
  },

  modules: {},
} as RuleSet;
