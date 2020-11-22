import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare interface IDBEnvironment {
          indexedDB: IDBFactory;
        }
        */
    IDBEnvironment(context) {},

    /*
        declare interface IDBFactory {
          open(name: string, version?: number): IDBOpenDBRequest;
          deleteDatabase(name: string): IDBOpenDBRequest;
          cmp(a: any, b: any): -1|0|1;
        }
        */
    IDBFactory(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBRequest extends EventTarget {
          result: IDBObjectStore;
          error: Error;
          source: ?(IDBIndex | IDBObjectStore | IDBCursor);
          transaction: IDBTransaction;
          readyState: 'pending'|'done';
          onerror: (err: any) => mixed;
          onsuccess: (e: any) => mixed;
        }
        */
    IDBRequest(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBOpenDBRequest extends IDBRequest {
          onblocked: (e: any) => mixed;
          onupgradeneeded: (e: any) => mixed;
        }
        */
    IDBOpenDBRequest(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBDatabase extends EventTarget {
          close(): void;
          createObjectStore(name: string, options?: {
            keyPath?: ?(string|string[]),
            autoIncrement?: bool,
            ...
          }): IDBObjectStore;
          deleteObjectStore(name: string): void;
          transaction(storeNames: string|string[], mode?: 'readonly'|'readwrite'|'versionchange'): IDBTransaction;
          name: string;
          version: number;
          objectStoreNames: DOMStringList;
          onabort: (e: any) => mixed;
          onclose: (e: any) => mixed;
          onerror: (e: any) => mixed;
          onversionchange: (e: any) => mixed;
        }
        */
    IDBDatabase(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBTransaction extends EventTarget {
          abort(): void;
          db: IDBDatabase;
          error: Error;
          mode: 'readonly'|'readwrite'|'versionchange';
          name: string;
          objectStore(name: string): IDBObjectStore;
          onabort: (e: any) => mixed;
          oncomplete: (e: any) => mixed;
          onerror: (e: any) => mixed;
        }
        */
    IDBTransaction(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBObjectStore {
          add(value: any, key?: any): IDBRequest;
          autoIncrement: bool;
          clear(): IDBRequest;
          createIndex(indexName: string, keyPath: string|string[], optionalParameter?: {
            unique?: bool,
            multiEntry?: bool,
            ...
          }): IDBIndex;
          count(keyRange?: any|IDBKeyRange): IDBRequest;
          delete(key: any): IDBRequest;
          deleteIndex(indexName: string): void;
          get(key: any): IDBRequest;
          index(indexName: string): IDBIndex;
          indexNames: string[];
          name: string;
          keyPath: any;
          openCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
          openKeyCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
          put(value: any, key?: any): IDBRequest;
          transaction : IDBTransaction;
        }
        */
    IDBObjectStore(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBIndex extends EventTarget {
          count(key?: any|IDBKeyRange): IDBRequest;
          get(key: any|IDBKeyRange): IDBRequest;
          getKey(key: any|IDBKeyRange): IDBRequest;
          openCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
          openKeyCursor(range?: any|IDBKeyRange, direction?: IDBDirection): IDBRequest;
          name: string;
          objectStore: IDBObjectStore;
          keyPath: any;
          multiEntry: bool;
          unique: bool;
        }
        */
    IDBIndex(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBKeyRange {
          bound(lower: any, upper: any, lowerOpen?: bool, upperOpen?: bool): IDBKeyRange;
          only(value: any): IDBKeyRange;
          lowerBound(bound: any, open?: bool): IDBKeyRange;
          upperBound(bound: any, open?: bool): IDBKeyRange;
          lower: any;
          upper: any;
          lowerOpen: bool;
          upperOpen: bool;
        }
        */
    IDBKeyRange(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBCursor {
          advance(count: number): void;
          continue(key?: any): void;
          delete(): IDBRequest;
          update(newValue: any): IDBRequest;
          source: IDBObjectStore|IDBIndex;
          direction: IDBDirection;
          key: any;
          primaryKey: any;
        }
        */
    IDBCursor(context) {
      context.lib('dom');
    },

    /*
        declare interface IDBCursorWithValue extends IDBCursor {
          value: any;
        }
        */
    IDBCursorWithValue(context) {
      context.lib('dom');
    },
  },

  modules: {},
} as RuleSet;
