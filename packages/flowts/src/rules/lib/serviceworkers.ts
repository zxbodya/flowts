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
    WindowClient: false,

    /*
        declare class Client {
          id: string,
          reserved: boolean,
          url: string,
          frameType: FrameType,
          postMessage(message: any, transfer?: Iterator<any> | Array<any>): void,
        }
        */
    Client: false,

    /*
        declare class ExtendableEvent extends Event {
          waitUntil(f: Promise<mixed>): void,
        }
        */
    ExtendableEvent: false,

    /*
        declare class InstallEvent extends ExtendableEvent {
          registerForeignFetch(options: ForeignFetchOptions): void,
        }
        */
    InstallEvent: false,

    /*
        declare class FetchEvent extends ExtendableEvent {
          request: Request,
          clientId: string,
          isReload: boolean,
          respondWith(response: Response | Promise<Response>): void,
          preloadResponse: Promise<?Response>,
        }
        */
    FetchEvent: false,

    /*
        declare class Clients {
          get(id: string): Promise<?Client>,
          matchAll(options?: ClientQueryOptions): Promise<Array<Client>>,
          openWindow(url: string): Promise<?WindowClient>,
          claim(): Promise<void>,
        }
        */
    Clients: false,

    /*
        declare class ServiceWorker extends EventTarget {
          scriptURL: string,
          state: ServiceWorkerState,

          postMessage(message: any, transfer?: Iterator<any>): void,

          onstatechange?: EventHandler,
        }
        */
    ServiceWorker: false,

    /*
        declare class NavigationPreloadState {
          enabled: boolean,
          headerValue: string,
        }
        */
    NavigationPreloadState: false,

    /*
        declare class NavigationPreloadManager {
          enable: Promise<void>,
          disable: Promise<void>,
          setHeaderValue(value: string): Promise<void>,
          getState: Promise<NavigationPreloadState>,
        }
        */
    NavigationPreloadManager: false,

    /*
        declare class PushSubscriptionJSON {
          endpoint: string,
          expirationTime: number | null,
          keys: { [string]: string, ... };
        }
        */
    PushSubscriptionJSON: false,

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
    PushSubscription: false,

    /*
        declare class PushManager {
          +supportedContentEncodings: Array<string>,
          subscribe(options?: PushSubscriptionOptions): Promise<PushSubscription>,
          getSubscription(): Promise<PushSubscription | null>,
          permissionState(options?: PushSubscriptionOptions): Promise<'granted' | 'denied' | 'prompt'>,
        }
        */
    PushManager: false,

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
    ServiceWorkerRegistration: false,

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
    ServiceWorkerContainer: false,

    /*
        declare class ServiceWorkerMessageEvent extends Event {
          data: any,
          lastEventId: string,
          origin: string,
          ports: Array<MessagePort>,
          source: ?(ServiceWorker | MessagePort),
        }
        */
    ServiceWorkerMessageEvent: false,

    /*
        declare class ExtendableMessageEvent extends ExtendableEvent {
          data: any,
          lastEventId: string,
          origin: string,
          ports: Array<MessagePort>,
          source: ?(ServiceWorker | MessagePort),
        }
        */
    ExtendableMessageEvent: false,

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
    Cache: false,

    /*
        declare class CacheStorage {
          match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response>,
          has(cacheName: string): Promise<true>,
          open(cacheName: string): Promise<Cache>,
          delete(cacheName: string): Promise<boolean>,
          keys(): Promise<Array<string>>,
        }
        */
    CacheStorage: false,

    /*
        declare var clients: Clients;
        */
    clients: false,

    /*
        declare var caches: CacheStorage;
        */
    caches: false,

    /*
        declare var registration: ServiceWorkerRegistration;
        */
    registration: false,

    /*
        declare function skipWaiting(): Promise<void>;
        */
    skipWaiting: false,

    /*
        declare var onactivate: ?EventHandler;
        */
    onactivate: false,

    /*
        declare var oninstall: ?EventHandler;
        */
    oninstall: false,

    /*
        declare var onfetch: ?EventHandler;
        */
    onfetch: false,

    /*
        declare var onforeignfetch: ?EventHandler;
        */
    onforeignfetch: false,

    /*
        declare var onmessage: ?EventHandler;
        */
    onmessage: false,
  },

  modules: {},
} as RuleSet;
