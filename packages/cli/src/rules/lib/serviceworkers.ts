import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare class WindowClient extends Client {
          visibilityState: VisibilityState,
          focused: boolean,
          focus(): Promise<WindowClient>,
          navigate(url: string): Promise<WindowClient>,
        }
        */
    WindowClient(context) {
      context.lib('webworker');
    },

    /*
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
    },

    /*
        declare class ExtendableEvent extends Event {
          waitUntil(f: Promise<mixed>): void,
        }
        */
    ExtendableEvent(context) {
      context.lib('webworker');
    },

    /*
        declare class InstallEvent extends ExtendableEvent {
          registerForeignFetch(options: ForeignFetchOptions): void,
        }
        */
    InstallEvent(context) {},

    /*
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
    },

    /*
        declare class Clients {
          get(id: string): Promise<?Client>,
          matchAll(options?: ClientQueryOptions): Promise<Array<Client>>,
          openWindow(url: string): Promise<?WindowClient>,
          claim(): Promise<void>,
        }
        */
    Clients(context) {
      context.lib('webworker');
    },

    /*
        declare class ServiceWorker extends EventTarget {
          scriptURL: string,
          state: ServiceWorkerState,

          postMessage(message: any, transfer?: Iterator<any>): void,

          onstatechange?: EventHandler,
        }
        */
    ServiceWorker(context) {
      context.lib('dom');
    },

    /*
        declare class NavigationPreloadState {
          enabled: boolean,
          headerValue: string,
        }
        */
    NavigationPreloadState(context) {
      context.lib('dom');
    },

    /*
        declare class NavigationPreloadManager {
          enable: Promise<void>,
          disable: Promise<void>,
          setHeaderValue(value: string): Promise<void>,
          getState: Promise<NavigationPreloadState>,
        }
        */
    NavigationPreloadManager(context) {
      context.lib('dom');
    },

    /*
        declare class PushSubscriptionJSON {
          endpoint: string,
          expirationTime: number | null,
          keys: { [string]: string, ... };
        }
        */
    PushSubscriptionJSON(context) {
      context.lib('dom');
    },

    /*
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
      context.lib('dom');
    },

    /*
        declare class PushManager {
          +supportedContentEncodings: Array<string>,
          subscribe(options?: PushSubscriptionOptions): Promise<PushSubscription>,
          getSubscription(): Promise<PushSubscription | null>,
          permissionState(options?: PushSubscriptionOptions): Promise<'granted' | 'denied' | 'prompt'>,
        }
        */
    PushManager(context) {
      context.lib('dom');
    },

    /*
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
      context.lib('dom');
    },

    /*
        declare class ServiceWorkerContainer extends EventTarget {
          +controller: ?ServiceWorker,
          +ready: Promise<ServiceWorkerRegistration>,

          getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | void>,
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
      context.lib('dom');
    },

    /*
        declare class ServiceWorkerMessageEvent extends Event {
          data: any,
          lastEventId: string,
          origin: string,
          ports: Array<MessagePort>,
          source: ?(ServiceWorker | MessagePort),
        }
        */
    ServiceWorkerMessageEvent(context) {},

    /*
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
    },

    /*
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
      context.lib('dom');
    },

    /*
        declare class CacheStorage {
          match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>,
          has(cacheName: string): Promise<true>,
          open(cacheName: string): Promise<Cache>,
          delete(cacheName: string): Promise<boolean>,
          keys(): Promise<Array<string>>,
        }
        */
    CacheStorage(context) {
      context.lib('dom');
    },

    /*
        declare var clients: Clients;
        */
    clients(context) {},

    /*
        declare var caches: CacheStorage;
        */
    caches(context) {
      context.lib('dom');
    },

    /*
        declare var registration: ServiceWorkerRegistration;
        */
    registration(context) {},

    /*
        declare function skipWaiting(): Promise<void>;
        */
    skipWaiting(context) {},

    /*
        declare var onactivate: ?EventHandler;
        */
    onactivate(context) {},

    /*
        declare var oninstall: ?EventHandler;
        */
    oninstall(context) {},

    /*
        declare var onfetch: ?EventHandler;
        */
    onfetch(context) {},

    /*
        declare var onforeignfetch: ?EventHandler;
        */
    onforeignfetch(context) {},

    /*
        declare var onmessage: ?EventHandler;
        */
    onmessage(context) {
      context.lib('dom');
    },
  },

  modules: {},
} as RuleSet;
