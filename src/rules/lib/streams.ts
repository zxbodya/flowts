import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/streams.js:10:0

        declare class TextEncoder {
          encode(buffer: string, options?: TextEncodeOptions): Uint8Array,
        }
        */
    TextEncoder(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:14:0

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
    ReadableStreamController(context) {},

    /*
        lib/streams.js:29:0

        declare class ReadableStreamBYOBRequest {
          constructor(controller: ReadableStreamController, view: $TypedArray): void,

          view: $TypedArray,

          respond(bytesWritten: number): ?any,
          respondWithNewView(view: $TypedArray): ?any,
        }
        */
    ReadableStreamBYOBRequest(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:38:0

        declare class ReadableByteStreamController extends ReadableStreamController {
          constructor(
            stream: ReadableStream,
            underlyingSource: UnderlyingSource,
            highWaterMark: number,
          ): void,

          byobRequest: ReadableStreamBYOBRequest,
        }
        */
    ReadableByteStreamController(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:48:0

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
    ReadableStreamReader(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:62:0

        declare interface UnderlyingSource {
          autoAllocateChunkSize?: number,
          type?: string,

          start?: (controller: ReadableStreamController) => ?Promise<void>,
          pull?: (controller: ReadableStreamController) => ?Promise<void>,
          cancel?: (reason: string) => ?Promise<void>,
        }
        */
    UnderlyingSource(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:71:0

        declare class TransformStream {
          readable: ReadableStream,
          writable: WritableStream,
        }
        */
    TransformStream(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:89:0

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
    ReadableStream(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:104:0

        declare interface WritableStreamController {
          error(error: Error): void,
        }
        */
    WritableStreamController(context) {},

    /*
        lib/streams.js:108:0

        declare interface UnderlyingSink {
          autoAllocateChunkSize?: number,
          type?: string,

          abort?: (reason: string) => ?Promise<void>,
          close?: (controller: WritableStreamController) => ?Promise<void>,
          start?: (controller: WritableStreamController) => ?Promise<void>,
          write?: (chunk: any, controller: WritableStreamController) => ?Promise<void>,
        }
        */
    UnderlyingSink(context) {
      context.lib('webworker');
    },

    /*
        lib/streams.js:118:0

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
    WritableStreamWriter(context) {},

    /*
        lib/streams.js:129:0

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
    WritableStream(context) {
      context.lib('webworker');
    },
  },

  modules: {},
} as RuleSet;
