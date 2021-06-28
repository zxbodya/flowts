import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare class ExportedFunctionExoticObject extends Function {
          (): mixed;
        }
        */
    ExportedFunctionExoticObject: false,

    /*
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
    WebAssembly$Module: false,

    /*
        declare class WebAssembly$Instance {
          constructor(moduleObject: WebAssembly$Module, importObject?: ImportObject): void;

          +exports: { [exportedFunction: string]: ExportedFunctionExoticObject, ... };
        }
        */
    WebAssembly$Instance: false,

    /*
        declare class WebAssembly$Memory {
          constructor(memoryDescriptor: MemoryDescriptor): void;

          +buffer: ArrayBuffer;

          grow(delta: number): number;
        }
        */
    WebAssembly$Memory: false,

    /*
        declare class WebAssembly$Table {
          constructor(tableDescriptor: TableDescriptor): void;

          +length: number;

          grow(delta: number): number;
          get(index: number): ExportedFunctionExoticObject;
          set(index: number, value: ExportedFunctionExoticObject): void;
        }
        */
    WebAssembly$Table: false,

    /*
        declare class WebAssembly$CompileError extends Error {}
        */
    WebAssembly$CompileError: false,

    /*
        declare class WebAssembly$LinkError extends Error {}
        */
    WebAssembly$LinkError: false,

    /*
        declare class WebAssembly$RuntimeError extends Error {}
        */
    WebAssembly$RuntimeError: false,

    /*
        declare function WebAssembly$instantiate(bufferSource: BufferSource, importObject?: ImportObject): Promise<ResultObject>;
        */
    /*
        declare function WebAssembly$instantiate(moduleObject: WebAssembly$Module, importObject?: ImportObject): Promise<WebAssembly$Instance>;
        */
    WebAssembly$instantiate: false,

    /*
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
    WebAssembly: false,
  },

  modules: {},
} as RuleSet;
