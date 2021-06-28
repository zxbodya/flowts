import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare class TextEncoder {
          encode(buffer: string, options?: TextEncodeOptions): Uint8Array,
        }
        */
    TextEncoder: false,

    /*
        declare class ReadableStreamController {
          constructor(
            stream: ReadableStream,
            underlyingSource: UnderlyingSource,
            size: number,
            highWaterMark: number,
          ): void,

          desiredSize: number,

          close(): void,
          enqueue(chunk: any): void,
          error(error: Error): void,
        }
        */
    ReadableStreamController: false,

    /*
        declare class ReadableStreamBYOBRequest {
          constructor(controller: ReadableStreamController, view: $TypedArray): void,

          view: $TypedArray,

          respond(bytesWritten: number): ?any,
          respondWithNewView(view: $TypedArray): ?any,
        }
        */
    ReadableStreamBYOBRequest: false,

    /*
        declare class ReadableByteStreamController extends ReadableStreamController {
          constructor(
            stream: ReadableStream,
            underlyingSource: UnderlyingSource,
            highWaterMark: number,
          ): void,

          byobRequest: ReadableStreamBYOBRequest,
        }
        */
    ReadableByteStreamController: false,

    /*
        declare class ReadableStreamReader {
          constructor(stream: ReadableStream): void,

          closed: boolean,

          cancel(reason: string): void,
          read(): Promise<{
            value: ?any,
            done: boolean,
            ...
          }>,
          releaseLock(): void,
        }
        */
    ReadableStreamReader: false,

    /*
        declare interface UnderlyingSource {
          autoAllocateChunkSize?: number,
          type?: string,

          start?: (controller: ReadableStreamController) => ?Promise<void>,
          pull?: (controller: ReadableStreamController) => ?Promise<void>,
          cancel?: (reason: string) => ?Promise<void>,
        }
        */
    UnderlyingSource: false,

    /*
        declare class TransformStream {
          readable: ReadableStream,
          writable: WritableStream,
        }
        */
    TransformStream: false,

    /*
        declare class ReadableStream {
          constructor(
            underlyingSource: ?UnderlyingSource,
            queuingStrategy: ?QueuingStrategy,
          ): void,

          locked: boolean,

          cancel(reason: string): void,
          getReader(): ReadableStreamReader,
          pipeThrough(transform: TransformStream, options: ?any): void,
          pipeTo(dest: WritableStream, options: ?PipeToOptions): Promise<void>,
          tee(): [ReadableStream, ReadableStream],
        }
        */
    ReadableStream: false,

    /*
        declare interface WritableStreamController {
          error(error: Error): void,
        }
        */
    WritableStreamController: false,

    /*
        declare interface UnderlyingSink {
          autoAllocateChunkSize?: number,
          type?: string,

          abort?: (reason: string) => ?Promise<void>,
          close?: (controller: WritableStreamController) => ?Promise<void>,
          start?: (controller: WritableStreamController) => ?Promise<void>,
          write?: (chunk: any, controller: WritableStreamController) => ?Promise<void>,
        }
        */
    UnderlyingSink: false,

    /*
        declare interface WritableStreamWriter {
          closed: Promise<any>,
          desiredSize?: number,
          ready: Promise<any>,

          abort(reason: string): ?Promise<any>,
          close(): Promise<any>,
          releaseLock(): void,
          write(chunk: any): Promise<any>,
        }
        */
    WritableStreamWriter: false,

    /*
        declare class WritableStream {
          constructor(
            underlyingSink: ?UnderlyingSink,
            queuingStrategy: QueuingStrategy,
          ): void,

          locked: boolean,

          abort(reason: string): void,
          getWriter(): WritableStreamWriter,
        }
        */
    WritableStream: false,
  },

  modules: {},
} as RuleSet;
