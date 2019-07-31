import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/webassembly.js:15:0

        declare class ExportedFunctionExoticObject extends Function {
          (): mixed;
        }
        */
    ExportedFunctionExoticObject(context) {},

    /*
        lib/webassembly.js:19:0

        declare class WebAssembly$Module {
          constructor(bufferSource: BufferSource): void;

          static exports(moduleObject: WebAssembly$Module): Array<{
            name: string,
            kind: ImportExportKind,
            ...
          }>;
          static imports(moduleObject: WebAssembly$Module): Array<{
            name: string,
            name: string,
            kind: ImportExportKind,
            ...
          }>;
          static customSections(moduleObject: WebAssembly$Module, sectionName: string): Array<ArrayBuffer>;
        }
        */
    WebAssembly$Module(context) {},

    /*
        lib/webassembly.js:36:0

        declare class WebAssembly$Instance {
          constructor(moduleObject: WebAssembly$Module, importObject?: ImportObject): void;

          +exports: { [exportedFunction: string]: ExportedFunctionExoticObject, ... };
        }
        */
    WebAssembly$Instance(context) {},

    /*
        lib/webassembly.js:48:0

        declare class WebAssembly$Memory {
          constructor(memoryDescriptor: MemoryDescriptor): void;

          +buffer: ArrayBuffer;

          grow(delta: number): number;
        }
        */
    WebAssembly$Memory(context) {},

    /*
        lib/webassembly.js:63:0

        declare class WebAssembly$Table {
          constructor(tableDescriptor: TableDescriptor): void;

          +length: number;

          grow(delta: number): number;
          get(index: number): ExportedFunctionExoticObject;
          set(index: number, value: ExportedFunctionExoticObject): void;
        }
        */
    WebAssembly$Table(context) {},

    /*
        lib/webassembly.js:73:0

        declare class WebAssembly$CompileError extends Error {}
        */
    WebAssembly$CompileError(context) {},

    /*
        lib/webassembly.js:74:0

        declare class WebAssembly$LinkError extends Error {}
        */
    WebAssembly$LinkError(context) {},

    /*
        lib/webassembly.js:75:0

        declare class WebAssembly$RuntimeError extends Error {}
        */
    WebAssembly$RuntimeError(context) {},

    /*
        lib/webassembly.js:77:0

        declare function WebAssembly$instantiate(bufferSource: BufferSource, importObject?: ImportObject): Promise<ResultObject>;
        */
    /*
        lib/webassembly.js:78:0

        declare function WebAssembly$instantiate(moduleObject: WebAssembly$Module, importObject?: ImportObject): Promise<WebAssembly$Instance>;
        */
    WebAssembly$instantiate(context) {},

    /*
        lib/webassembly.js:80:0

        declare var WebAssembly: {
          Module: typeof WebAssembly$Module,
          Instance: typeof WebAssembly$Instance,
          Memory: typeof WebAssembly$Memory,
          Table: typeof WebAssembly$Table,
          CompileError: typeof WebAssembly$CompileError,
          LinkError: typeof WebAssembly$LinkError,
          RuntimeError: typeof WebAssembly$RuntimeError,
          validate(bufferSource: BufferSource): boolean,
          compile(bufferSource: BufferSource): Promise<WebAssembly$Module>,
          instantiate: typeof WebAssembly$instantiate,
          // web embedding API
          compileStreaming(source: Response | Promise<Response>): Promise<WebAssembly$Module>,
          instantiateStreaming(source: Response | Promise<Response>, importObject?: ImportObject): Promise<ResultObject>,
          ...
        }
        */
    WebAssembly(context) {},
  },

  modules: {},
} as RuleSet;
