import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/serviceworkers.js', () => {
  describe('globals', () => {
    describe('WindowClient', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = WindowClient;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new WindowClient();
            
            class A1 extends WindowClient {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Client', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Client;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Client();
            
            class A1 extends Client {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ExtendableEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ExtendableEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ExtendableEvent();
            
            class A1 extends ExtendableEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('InstallEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = InstallEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new InstallEvent();
            
            class A1 extends InstallEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('FetchEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = FetchEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new FetchEvent();
            
            class A1 extends FetchEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Clients', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Clients;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Clients();
            
            class A1 extends Clients {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ServiceWorker', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ServiceWorker;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ServiceWorker();
            
            class A1 extends ServiceWorker {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigationPreloadState', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigationPreloadState;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigationPreloadState();
            
            class A1 extends NavigationPreloadState {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('NavigationPreloadManager', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = NavigationPreloadManager;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new NavigationPreloadManager();
            
            class A1 extends NavigationPreloadManager {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PushSubscriptionJSON', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PushSubscriptionJSON;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PushSubscriptionJSON();
            
            class A1 extends PushSubscriptionJSON {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PushSubscription', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PushSubscription;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PushSubscription();
            
            class A1 extends PushSubscription {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('PushManager', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = PushManager;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new PushManager();
            
            class A1 extends PushManager {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ServiceWorkerRegistration', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ServiceWorkerRegistration;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ServiceWorkerRegistration();
            
            class A1 extends ServiceWorkerRegistration {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ServiceWorkerContainer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ServiceWorkerContainer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ServiceWorkerContainer();
            
            class A1 extends ServiceWorkerContainer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ServiceWorkerMessageEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ServiceWorkerMessageEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ServiceWorkerMessageEvent();
            
            class A1 extends ServiceWorkerMessageEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('ExtendableMessageEvent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = ExtendableMessageEvent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new ExtendableMessageEvent();
            
            class A1 extends ExtendableMessageEvent {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Cache', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Cache;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Cache();
            
            class A1 extends Cache {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('CacheStorage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = CacheStorage;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new CacheStorage();
            
            class A1 extends CacheStorage {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('clients', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = clients;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('caches', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = caches;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('registration', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = registration;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('skipWaiting', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = skipWaiting;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new skipWaiting();
            
            class A1 extends skipWaiting {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            skipWaiting();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('onactivate', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = onactivate;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('oninstall', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = oninstall;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('onfetch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = onfetch;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('onforeignfetch', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = onforeignfetch;
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
    });
  });

  describe('modules', () => {
    test('has no modules', () => {});
  });
});
