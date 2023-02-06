import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        declare class Buffer extends Uint8Array {
          constructor(
            value: Array<number> | number | string | Buffer | ArrayBuffer,
            encoding?: buffer$Encoding
          ): void;
          [i: number]: number;
          length: number;

          compare(otherBuffer: Buffer): number;
          copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
          entries(): Iterator<[number, number]>;
          equals(otherBuffer: Buffer): boolean;
          fill(value: string | Buffer | number, offset?: number, end?: number, encoding?: string): this;
          fill(value: string, encoding?: string): this;
          includes(
            value: string | Buffer | number,
            offsetOrEncoding?: number | buffer$Encoding,
            encoding?: buffer$Encoding
          ): boolean;
          indexOf(
            value: string | Buffer | number,
            offsetOrEncoding?: number | buffer$Encoding,
            encoding?: buffer$Encoding
          ): number;
          inspect(): string;
          keys(): Iterator<number>,
          lastIndexOf(
            value: string | Buffer | number,
            offsetOrEncoding?: number | buffer$Encoding,
            encoding?: buffer$Encoding
          ): number;
          readDoubleBE(offset?: number, noAssert?: boolean): number;
          readDoubleLE(offset?: number, noAssert?: boolean): number;
          readFloatBE(offset?: number, noAssert?: boolean): number;
          readFloatLE(offset?: number, noAssert?: boolean): number;
          readInt16BE(offset?: number, noAssert?: boolean): number;
          readInt16LE(offset?: number, noAssert?: boolean): number;
          readInt32BE(offset?: number, noAssert?: boolean): number;
          readInt32LE(offset?: number, noAssert?: boolean): number;
          readInt8(offset?: number, noAssert?: boolean): number;
          readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
          readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
          readUInt16BE(offset?: number, noAssert?: boolean): number;
          readUInt16LE(offset?: number, noAssert?: boolean): number;
          readUInt32BE(offset?: number, noAssert?: boolean): number;
          readUInt32LE(offset?: number, noAssert?: boolean): number;
          readUInt8(offset?: number, noAssert?: boolean): number;
          readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
          readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
          slice(start?: number, end?: number): this;
          swap16(): Buffer;
          swap32(): Buffer;
          swap64(): Buffer;
          toJSON(): buffer$ToJSONRet;
          toString(encoding?: buffer$Encoding, start?: number, end?: number): string;
          values(): Iterator<number>;
          write(string: string, offset?: number, length?: number, encoding?: buffer$Encoding): number;
          writeDoubleBE(value: number, offset?: number, noAssert?: boolean): number;
          writeDoubleLE(value: number, offset?: number, noAssert?: boolean): number;
          writeFloatBE(value: number, offset?: number, noAssert?: boolean): number;
          writeFloatLE(value: number, offset?: number, noAssert?: boolean): number;
          writeInt16BE(value: number, offset?: number, noAssert?: boolean): number;
          writeInt16LE(value: number, offset?: number, noAssert?: boolean): number;
          writeInt32BE(value: number, offset?: number, noAssert?: boolean): number;
          writeInt32LE(value: number, offset?: number, noAssert?: boolean): number;
          writeInt8(value: number, offset?: number, noAssert?: boolean): number;
          writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
          writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
          writeUInt16BE(value: number, offset?: number, noAssert?: boolean): number;
          writeUInt16LE(value: number, offset?: number, noAssert?: boolean): number;
          writeUInt32BE(value: number, offset?: number, noAssert?: boolean): number;
          writeUInt32LE(value: number, offset?: number, noAssert?: boolean): number;
          writeUInt8(value: number, offset?: number, noAssert?: boolean): number;
          writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
          writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;

          static alloc(size: number, fill?: string | number, encoding?: buffer$Encoding): Buffer;
          static allocUnsafe(size: number): Buffer;
          static allocUnsafeSlow(size: number): Buffer;
          static byteLength(string: string | Buffer | $TypedArray | DataView | ArrayBuffer, encoding?: buffer$Encoding): number;
          static compare(buf1: Buffer, buf2: Buffer): number;
          static concat(list: Array<Buffer>, totalLength?: number): Buffer;

          static from(value: Buffer): Buffer;
          static from(value: string, encoding?: buffer$Encoding): Buffer;
          static from(value: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;
          static from(value: Iterable<number>): this;
          static isBuffer(obj: any): boolean;
          static isEncoding(encoding: string): boolean;
        }
        */
    Buffer: false,

    /*
        declare type Node$Buffer = typeof Buffer;
        */
    Node$Buffer: false,

    /*
        declare class child_process$Error extends Error {
          code: number | string | null,
          errno?: string,
          syscall?: string,
          path?: string,
          spawnargs?: Array<string>,
          killed?: boolean,
          signal?: string | null,
          cmd: string,
        }
        */
    child_process$Error: false,

    /*
        declare class child_process$ChildProcess extends events$EventEmitter {
          channel: Object;
          connected: boolean;
          killed: boolean;
          pid: number;
          exitCode: number | null;
          stderr: stream$Readable;
          stdin: stream$Writable;
          stdio: Array<any>;
          stdout: stream$Readable;

          disconnect(): void;
          kill(signal?: string): void;
          send(
            message: Object,
            sendHandleOrCallback?: child_process$Handle,
            optionsOrCallback?: Object | Function,
            callback?: Function
          ): boolean;
          unref(): void;
          ref(): void;
        }
        */
    child_process$ChildProcess(context) {
      context.import('child_process', 'ChildProcess');
    },

    /*
        declare class crypto$Cipher extends stream$Duplex {
          final(output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'): string;
          final(output_encoding: void): Buffer;
          getAuthTag(): Buffer;
          setAAD(buffer: Buffer): crypto$Cipher;
          setAuthTag(buffer: Buffer): void;
          setAutoPadding(auto_padding?: boolean): crypto$Cipher;
          update(
            data: string,
            input_encoding: 'utf8' | 'ascii' | 'latin1' | 'binary',
            output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'
          ): string;
          update(
            data: string,
            input_encoding: 'utf8' | 'ascii' | 'latin1' | 'binary',
            output_encoding: void
          ): Buffer;
          update(
            data: Buffer,
            input_encoding: void | 'utf8' | 'ascii' | 'latin1' | 'binary',
            output_encoding: 'latin1' | 'binary' | 'base64' | 'hex'
          ): string;
          update(
            data: Buffer,
            input_encoding: void,
            output_encoding: void
          ): Buffer;
        }
        */
    crypto$Cipher: false,

    /*
        declare class crypto$ECDH {
          computeSecret(
            other_public_key: Buffer | $TypedArray | DataView
          ): Buffer,
          computeSecret(
            other_public_key: string,
            input_encoding: crypto$ECDH$Encoding
          ): Buffer,
          computeSecret(
            other_public_key: Buffer | $TypedArray | DataView,
            output_encoding: crypto$ECDH$Encoding
          ): string,
          computeSecret(
            other_public_key: string,
            input_encoding: crypto$ECDH$Encoding,
            output_encoding: crypto$ECDH$Encoding
          ): string,
          generateKeys(format?: crypto$ECDH$Format): Buffer,
          generateKeys(encoding: crypto$ECDH$Encoding, format?: crypto$ECDH$Format): string,
          getPrivateKey(): Buffer,
          getPrivateKey(encoding: crypto$ECDH$Encoding): string,
          getPublicKey(format?: crypto$ECDH$Format): Buffer,
          getPublicKey(encoding: crypto$ECDH$Encoding, format?: crypto$ECDH$Format): string,
          setPrivateKey(private_key: Buffer | $TypedArray | DataView): void,
          setPrivateKey(private_key: string, encoding: crypto$ECDH$Encoding): void
        }
        */
    crypto$ECDH: false,

    /*
        declare class crypto$Decipher extends stream$Duplex {
          final(output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8'): string;
          final(output_encoding: void): Buffer;
          getAuthTag(): Buffer;
          setAAD(buffer: Buffer): void;
          setAuthTag(buffer: Buffer): void;
          setAutoPadding(auto_padding?: boolean): crypto$Cipher;
          update(
            data: string,
            input_encoding: 'latin1' | 'binary' | 'base64' | 'hex',
            output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8',
          ): string;
          update(
            data: string,
            input_encoding: 'latin1' | 'binary' | 'base64' | 'hex',
            output_encoding: void
          ): Buffer;
          update(
            data: Buffer,
            input_encoding: void,
            output_encoding: 'latin1' | 'binary' | 'ascii' | 'utf8',
          ): string;
          update(
            data: Buffer,
            input_encoding: void,
            output_encoding: void
          ): Buffer;
        }
        */
    crypto$Decipher: false,

    /*
        declare class crypto$Hash extends stream$Duplex {
          digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
          digest(encoding: 'buffer'): Buffer;
          digest(encoding: void): Buffer;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary'): crypto$Hash;
        }
        */
    crypto$Hash: false,

    /*
        declare class crypto$Hmac extends stream$Duplex {
          digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
          digest(encoding: 'buffer'): Buffer;
          digest(encoding: void): Buffer;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary'): crypto$Hmac;
        }
        */
    crypto$Hmac: false,

    /*
        declare class crypto$Sign extends stream$Writable {
          static(algorithm: string, options?: writableStreamOptions): crypto$Sign,
          constructor(algorithm: string, options?: writableStreamOptions): void;
          sign(
            private_key: crypto$Sign$private_key,
            output_format: 'latin1' | 'binary' | 'hex' | 'base64'
          ): string;
          sign(
            private_key: crypto$Sign$private_key,
            output_format: void
          ): Buffer;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary'): crypto$Sign;
        }
        */
    crypto$Sign(context) {
      context.import('crypto', 'Sign');
    },

    /*
        declare class crypto$Verify extends stream$Writable {
          static(algorithm: string, options?: writableStreamOptions): crypto$Verify,
          constructor(algorithm: string, options?: writableStreamOptions): void;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary' ): crypto$Verify;
          verify(
            object: string,
            signature: string | Buffer | $TypedArray | DataView,
            signature_format: 'latin1' | 'binary' | 'hex' | 'base64'
          ): boolean;
          verify(object: string, signature: Buffer, signature_format: void): boolean;
        }
        */
    crypto$Verify(context) {
      context.import('crypto', 'Verify');
    },

    /*
        declare class dgram$Socket extends events$EventEmitter {
          addMembership(multicastAddress: string, multicastInterface?: string): void;
          address(): net$Socket$address;
          bind(port?: number, address?: string, callback?: () => void): void;
          close(callback?: () => void): void;
          dropMembership(multicastAddress: string, multicastInterface?: string): void;
          ref(): void;
          send(
            msg: Buffer,
            port: number,
            address: string,
            callback?: (err: ?Error, bytes: any) => mixed,
          ): void;
          send(
            msg: Buffer,
            offset: number,
            length: number,
            port: number,
            address: string,
            callback?: (err: ?Error, bytes: any) => mixed,
          ): void;
          setBroadcast(flag: boolean): void;
          setMulticastLoopback(flag: boolean): void;
          setMulticastTTL(ttl: number): void;
          setTTL(ttl: number): void;
          unref(): void;
        }
        */
    dgram$Socket: false,

    /*
        declare class events$EventEmitter {
          // deprecated
          static listenerCount(emitter: events$EventEmitter, event: string): number;
          static defaultMaxListeners: number;

          addListener(event: string, listener: Function): this;
          emit(event: string, ...args:Array<any>): boolean;
          eventNames(): Array<string>;
          listeners(event: string): Array<Function>;
          listenerCount(event: string): number;
          on(event: string, listener: Function): this;
          once(event: string, listener: Function): this;
          prependListener(event: string, listener: Function): this;
          prependOnceListener(event: string, listener: Function): this;
          removeAllListeners(event?: string): this;
          removeListener(event: string, listener: Function): this;
          off(event: string, listener: Function): this;
          setMaxListeners(n: number): this;
          getMaxListeners(): number;
          rawListeners(event: string): Array<Function>;
        }
        */
    events$EventEmitter(context) {
      context.import('events', 'EventEmitter');
    },

    /*
        declare class domain$Domain extends events$EventEmitter {
          members: Array<any>;

          add(emitter: events$EventEmitter): void;
          bind(callback: Function): Function;
          dispose(): void;
          enter(): void;
          exit(): void;
          intercept(callback: Function): Function;
          remove(emitter: events$EventEmitter): void;
          run(fn: Function): void;
        }
        */
    domain$Domain: false,

    /*
        declare class http$Agent<+SocketT = net$Socket> {
          constructor(options: http$agentOptions): void;
          destroy(): void;
          freeSockets: { [name: string]: $ReadOnlyArray<SocketT>, ... };
          getName(options: {
            host: string,
            port: number,
            localAddress: string,
            ...
          }): string;
          maxFreeSockets: number;
          maxSockets: number;
          requests: { [name: string]: $ReadOnlyArray<http$ClientRequest<SocketT>>, ... };
          sockets: { [name: string]: $ReadOnlyArray<SocketT>, ... };
        }
        */
    http$Agent(context) {
      context.import('http', 'Agent');
    },

    /*
        declare class http$IncomingMessage<SocketT = net$Socket> extends stream$Readable {
          headers: Object;
          rawHeaders: Array<string>;
          httpVersion: string;
          method: string;
          trailers: Object;
          setTimeout(msecs: number, callback: Function): void;
          socket: SocketT;
          statusCode: number;
          statusMessage: string;
          url: string;
          aborted: boolean;
          complete: boolean;
          rawTrailers: Array<string>;
        }
        */
    http$IncomingMessage(context) {
      context.import('http', 'IncomingMessage');
    },

    /*
        declare class http$ClientRequest<+SocketT = net$Socket> extends stream$Writable {
          abort(): void;
          aborted: boolean;
          +connection: SocketT | null;
          flushHeaders(): void;
          getHeader(name: string): string;
          removeHeader(name: string): void;
          setHeader(name: string, value: string | Array<string>): void;
          setNoDelay(noDelay?: boolean): void;
          setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;
          setTimeout(msecs: number, callback?: Function): void;
          +socket: SocketT | null;
        }
        */
    http$ClientRequest(context) {
      context.import('http', 'ClientRequest');
    },

    /*
        declare class http$ServerResponse extends stream$Writable {
          addTrailers(headers: { [key: string] : string, ... }): void;
          connection: net$Socket;
          finished: boolean;
          flushHeaders(): void;
          getHeader(name: string): string;
          getHeaderNames(): Array<string>;
          getHeaders(): { [key: string] : string | Array<string>, ...};
          hasHeader(name: string): boolean;
          headersSent: boolean;
          removeHeader(name: string): void;
          sendDate: boolean;
          setHeader(name: string, value: string | Array<string>): void;
          setTimeout(msecs: number, callback?: Function): http$ServerResponse;
          socket: net$Socket;
          statusCode: number;
          statusMessage: string;
          writeContinue(): void;
          writeHead(status: number, statusMessage?: string, headers?: { [key: string] : string, ... }): void;
          writeHead(status: number, headers?: { [key: string] : string, ... }): void;
          writeProcessing(): void;
        }
        */
    http$ServerResponse(context) {
      context.import('http', 'ServerResponse');
    },

    /*
        declare class http$Server extends net$Server {
          listen(port?: number, hostname?: string, backlog?: number, callback?: Function): this;
          // The following signatures are added to allow omitting intermediate arguments
          listen(port?: number, backlog?: number, callback?: Function): this;
          listen(port?: number, hostname?: string, callback?: Function): this;
          listen(port?: number, callback?: Function): this;
          listen(path: string, callback?: Function): this;
          listen(handle: {
            port?: number,
            host?: string,
            path?: string,
            backlog?: number,
            exclusive?: boolean,
            readableAll?: boolean,
            writableAll?: boolean,
            ipv6Only?: boolean,
            ...
          }, callback?: Function): this;
          listening: boolean;
          close(callback?: (error: ?Error) => mixed): this;
          maxHeadersCount: number;
          keepAliveTimeout: number;
          headersTimeout: number;
          setTimeout(msecs: number, callback: Function): this;
          timeout: number;
        }
        */
    http$Server(context) {
      context.import('http', 'Server');
    },

    /*
        declare class https$Server extends tls$Server {
          listen(port?: number, hostname?: string, backlog?: number, callback?: Function): this;
          // The following signatures are added to allow omitting intermediate arguments
          listen(port?: number, backlog?: number, callback?: Function): this;
          listen(port?: number, hostname?: string, callback?: Function): this;
          listen(port?: number, callback?: Function): this;
          listen(path: string, callback?: Function): this;
          listen(handle: {
            port?: number,
            host?: string,
            path?: string,
            backlog?: number,
            exclusive?: boolean,
            readableAll?: boolean,
            writableAll?: boolean,
            ipv6Only?: boolean,
            ...
          }, callback?: Function): this;
          close(callback?: (error: ?Error) => mixed): this;
          keepAliveTimeout: number;
          headersTimeout: number;
          setTimeout(msecs: number, callback: Function): this;
          timeout: number;
        }
        */
    https$Server(context) {
      context.import('https', 'Server');
    },

    /*
        declare class net$Socket extends stream$Duplex {
          constructor(options?: Object): void;
          address(): net$Socket$address;
          bufferSize: number;
          bytesRead: number;
          bytesWritten: number;
          connect(path: string, connectListener?: () => mixed): net$Socket;
          connect(port: number, host?: string, connectListener?: () => mixed): net$Socket;
          connect(port: number, connectListener?: () => mixed): net$Socket;
          connect(options: Object, connectListener?: () => mixed): net$Socket;
          destroyed: boolean;
          end(
            chunkOrEncodingOrCallback?: Buffer | Uint8Array | string | (data: any) => void,
            encodingOrCallback?: string | (data: any) => void,
            callback?: (data: any) => void
          ): this;
          localAddress: string;
          localPort: number;
          pause(): this;
          ref(): this;
          remoteAddress: string | void;
          remoteFamily: string;
          remotePort: number;
          resume(): this;
          setEncoding(encoding?: string): this;
          setKeepAlive(enable?: boolean, initialDelay?: number): this;
          setNoDelay(noDelay?: boolean): this;
          setTimeout(timeout: number, callback?: Function): this;
          unref(): this;
          write(
            chunk: Buffer | Uint8Array | string,
            encodingOrCallback?: string | (data: any) => void,
            callback?: (data: any) => void
          ): boolean;
        }
        */
    net$Socket(context) {
      context.import('net', 'Socket');
    },

    /*
        declare class net$Server extends events$EventEmitter {
          listen(port?: number, hostname?: string, backlog?: number, callback?: Function): net$Server;
          listen(path: string, callback?: Function): net$Server;
          listen(handle: Object, callback?: Function): net$Server;
          listening: boolean;
          close(callback?: Function): net$Server;
          address(): net$Socket$address;
          connections: number;
          maxConnections: number;
          getConnections(callback: Function): void;
          ref():  net$Server;
          unref():  net$Server;
        }
        */
    net$Server(context) {
      context.import('net', 'Server');
    },

    /*
        declare class readline$Interface extends events$EventEmitter {
          close(): void;
          pause(): void;
          prompt(preserveCursor?: boolean): void;
          question(query: string, callback: (answer: string) => void): void;
          resume(): void;
          setPrompt(prompt: string): void;
          write(val: string | void | null, key?: {
            name: string,
            ctrl?: boolean,
            shift?: boolean,
            meta?: boolean,
            ...
          }): void;
          @@asyncIterator(): AsyncIterator<string>;
        }
        */
    readline$Interface(context) {
      context.import('readline', 'Interface');
    },

    /*
        declare class stream$Stream extends events$EventEmitter {}
        */
    stream$Stream(context) {
      context.import('stream', 'Stream');
    },

    /*
        declare class stream$Readable extends stream$Stream {
          static from(iterable: Iterable<any> | AsyncIterable<any>, options?: readableStreamOptions): stream$Readable;

          constructor(options?: readableStreamOptions): void;
          destroy(error?: Error): this;
          isPaused(): boolean;
          pause(): this;
          pipe<T: stream$Writable>(dest: T, options?: { end? : boolean, ... }): T;
          read(size?: number): ?(string | Buffer);
          readable: boolean;
          readableHighWaterMark: number;
          readableLength: number;
          resume(): this;
          setEncoding(encoding: string): this;
          unpipe(dest?: stream$Writable): this;
          unshift(chunk: Buffer | Uint8Array | string): void;
          wrap(oldReadable: stream$Stream): this;
          _read(size: number): void;
          _destroy(error: ?Error, callback: (error?: Error) => void): void;
          push(chunk: ?(Buffer | Uint8Array | string), encoding? : string): boolean;
          @@asyncIterator(): AsyncIterator<string | Buffer>;
        }
        */
    stream$Readable(context) {
      context.import('stream', 'Readable');
    },

    /*
        declare class stream$Writable extends stream$Stream {
          constructor(options?: writableStreamOptions): void;
          cork(): void;
          destroy(error?: Error): this;
          end(callback?: () => void): this;
          end(chunk?: string | Buffer | Uint8Array, callback?: () => void): this;
          end(chunk?: string | Buffer | Uint8Array, encoding?: string, callback?: () => void): this;
          setDefaultEncoding(encoding: string): this;
          uncork(): void;
          writable: boolean;
          writableHighWaterMark: number;
          writableLength: number;
          write(chunk: string | Buffer | Uint8Array, callback?: (error?: Error) => void): boolean;
          write(chunk: string | Buffer | Uint8Array, encoding?: string,  callback?: (error?: Error) => void): boolean;
          _write(chunk: Buffer | string, encoding: string, callback: (error?: Error) => void): void;
          _writev(chunks: Array<{
            chunk: Buffer | string,
            encoding: string,
            ...
          }>, callback: (error?: Error) => void): void;
          _destroy(error: ?Error, callback: (error?: Error) => void): void;
          _final(callback: (error?: Error) => void): void;
        }
        */
    stream$Writable(context) {
      context.import('stream', 'Writable');
    },

    /*
        declare class stream$Duplex extends stream$Readable mixins stream$Writable {
          constructor(options?: duplexStreamOptions): void;
        }
        */
    stream$Duplex(context) {
      context.import('stream', 'Duplex');
    },

    /*
        declare class stream$Transform extends stream$Duplex {
          constructor(options?: transformStreamOptions): void;
          _flush(callback: (error: ?Error, data: ?(Buffer | string)) => void): void;
          _transform(
            chunk: Buffer | string,
            encoding: string,
            callback: (error: ?Error, data: ?(Buffer | string)) => void
          ): void;
        }
        */
    stream$Transform(context) {
      context.import('stream', 'Transform');
    },

    /*
        declare class stream$PassThrough extends stream$Transform {}
        */
    stream$PassThrough(context) {
      context.import('stream', 'PassThrough');
    },

    /*
        declare class tty$ReadStream extends net$Socket {
          constructor(fd: number, options?: Object): void;
          isRaw : boolean;
          setRawMode(mode : boolean) : void;
          isTTY : true
        }
        */
    tty$ReadStream(context) {
      context.import('tty', 'ReadStream');
    },

    /*
        declare class tty$WriteStream extends net$Socket {
          constructor(fd: number) : void;
          *
           * Clears the current line of this `WriteStream` in a direction identified by `dir`.
           *
           * TODO: takes a callback and returns `boolean` in v12+

          clearLine(dir: -1 | 0 | 1): void;
          columns : number;
          *
           * Moves this WriteStream's cursor to the specified position
           *
           * TODO: takes a callback and returns `boolean` in v12+

          cursorTo(
            x: number,
            y?: number
          ): void;
          isTTY : true;
          *
           * Moves this WriteStream's cursor relative to its current position
           *
           * TODO: takes a callback and returns `boolean` in v12+

          moveCursor(dx: number, dy: number): void;
          rows : number;
        }
        */
    tty$WriteStream(context) {
      context.import('tty', 'WriteStream');
    },

    /*
        declare class string_decoder$StringDecoder {
          constructor(encoding?: 'utf8' | 'ucs2' | 'utf16le' | 'base64'): void;
          end(): string;
          write(buffer: Buffer): string;
        }
        */
    string_decoder$StringDecoder(context) {
      context.import('string_decoder', 'StringDecoder');
    },

    /*
        declare class tls$TLSSocket extends net$Socket {
          constructor(socket: net$Socket, options?: Object): void;
          authorized: boolean;
          authorizationError: string | null;
          encrypted: true;
          getCipher(): {
            name: string,
            version: string,
            ...
          } | null;
          getEphemeralKeyInfo(): {
            type: 'DH',
            size: number,
            ...
          } | {
            type: 'EDHC',
            name: string,
            size: number,
            ...
          } | null;
          getPeerCertificate(detailed?: boolean): tls$Certificate | null;
          getSession(): ?Buffer;
          getTLSTicket(): Buffer | void;
          renegotiate(options: Object, callback: Function): boolean | void;
          setMaxSendFragment(size: number): boolean;
        }
        */
    tls$TLSSocket(context) {
      context.import('tls', 'TLSSocket');
    },

    /*
        declare class tls$Server extends net$Server {
          listen(port?: number, hostname?: string, backlog?: number, callback?: Function): tls$Server;
          listen(path: string, callback?: Function): tls$Server;
          listen(handle: Object, callback?: Function): tls$Server;
          close(callback?: Function): tls$Server;
          addContext(hostname: string, context: Object): void;
          getTicketKeys(): Buffer;
          setTicketKeys(keys: Buffer): void;
        }
        */
    tls$Server(context) {
      context.import('tls', 'Server');
    },

    /*
        declare class vm$Script {
          constructor(code: string, options?: vm$ScriptOptions | string): void;
          cachedData: ?Buffer;
          cachedDataRejected: ?boolean;
          cachedDataProduced: ?boolean;
          runInContext(contextifiedSandbox: vm$Context, options?: vm$ScriptOptions): any;
          runInNewContext(sandbox?: { [key: string]: any, ... }, options?: vm$ScriptOptions): any;
          runInThisContext(options?: vm$ScriptOptions): any;
          createCachedData(): Buffer;
        }
        */
    vm$Script(context) {
      context.import('vm', 'Script');
    },

    /*
        declare class vm$Context {}
        */
    vm$Context: false,

    /*
        declare class $SymbolReplModeMagic mixins Symbol {}
        */
    $SymbolReplModeMagic: false,

    /*
        declare class $SymbolReplModeSloppy mixins Symbol {}
        */
    $SymbolReplModeSloppy: false,

    /*
        declare class $SymbolReplModeStrict mixins Symbol {}
        */
    $SymbolReplModeStrict: false,

    /*
        declare class Process extends events$EventEmitter {
          abort() : void;
          allowedNodeEnvironmentFlags: Set<string>;
          arch : string;
          argv : Array<string>;
          chdir(directory : string) : void;
          config : Object;
          connected : boolean;
          cpuUsage(previousValue?: process$CPUUsage) : process$CPUUsage;
          cwd() : string;
          disconnect? : () => void;
          domain? : domain$Domain;
          env : { [key: string] : string | void, ... };
          emitWarning(warning: string | Error): void;
          emitWarning(warning: string, typeOrCtor: string | (...empty) => mixed): void;
          emitWarning(warning: string, type: string, codeOrCtor: string | (...empty) => mixed): void;
          emitWarning(
            warning: string,
            type: string,
            code: string,
            ctor?: (...empty) => mixed
          ): void;
          execArgv : Array<string>;
          execPath : string;
          exit(code? : number) : empty;
          exitCode? : number;
          getegid? : () => number;
          geteuid? : () => number;
          getgid? : () => number;
          getgroups? : () => Array<number>;
          getuid? : () => number;
          hrtime(time?: [ number, number ]) : [ number, number ];
          initgroups? : (user : number | string, extra_group : number | string) => void;
          kill(pid : number, signal? : string | number) : void;
          mainModule : Object;
          memoryUsage() : {
            rss : number,
            heapTotal : number,
            heapUsed : number,
            external : number,
            ...
          };
          nextTick: <T>(cb: (...T) => mixed, ...T) => void;
          pid : number;
          platform : string;
          release : {
            name : string,
            lts? : string,
            sourceUrl : string,
            headersUrl : string,
            libUrl : string,
            ...
          };
          send? : (message : any,
                   sendHandleOrCallback? : net$Socket | net$Server | Function,
                   callback? : Function) => void;
          setegid? : (id : number | string) => void;
          seteuid? : (id : number | string) => void;
          setgid? : (id : number | string) => void;
          setgroups? : <Group: string | number>(groups : Array<Group>) => void;
          setuid? : (id : number | string) => void;
          stderr : stream$Writable | tty$WriteStream;
          stdin : stream$Readable | tty$ReadStream;
          stdout : stream$Writable | tty$WriteStream;
          title : string;
          umask(mask? : number) : number;
          uptime() : number;
          version : string;
          versions : {
            [key: string] : ?string,
            node : string,
            v8 : string,
            ...
          };
        }
        */
    Process: false,

    /*
        declare var process: Process;
        */
    process: false,

    /*
        declare var __filename: string;
        */
    __filename: false,

    /*
        declare var __dirname: string;
        */
    __dirname: false,

    /*
        declare function setImmediate(callback: ((...args: Array<any>) => mixed), ...args: Array<any>): Object;
        */
    setImmediate: false,

    /*
        declare function clearImmediate(immediateObject: any): Object;
        */
    clearImmediate: false,
  },

  modules: {
    buffer: {
      commonjs: true,
      exports: {
        /*
                declare var kMaxLength: number;
                */
        kMaxLength: false,

        /*
                declare var INSPECT_MAX_BYTES: number;
                */
        INSPECT_MAX_BYTES: false,

        /*
                declare function transcode(source: Node$Buffer, fromEnc: buffer$Encoding, toEnc: buffer$Encoding): Node$Buffer;
                */
        transcode: false,

        /*
                declare var Buffer: Node$Buffer;
                */
        Buffer: false,
      },
    },

    child_process: {
      commonjs: true,
      exports: {
        /*
                declare var ChildProcess: typeof child_process$ChildProcess;
                */
        ChildProcess: false,

        /*
                declare function exec(
                    command: string,
                    optionsOrCallback?: child_process$execOpts | child_process$execCallback,
                    callback?: child_process$execCallback
                  ): child_process$ChildProcess;
                */
        exec: false,

        /*
                declare function execSync(
                    command: string,
                    options: { encoding: buffer$NonBufferEncoding, ... } & child_process$execSyncOpts
                  ): string;
                */
        /*
                declare function execSync(
                    command: string,
                    options?: child_process$execSyncOpts
                  ): Buffer;
                */
        execSync: false,

        /*
                declare function execFile(
                    file: string,
                    argsOrOptionsOrCallback?:
                      Array<string> | child_process$execFileOpts | child_process$execFileCallback,
                    optionsOrCallback?: child_process$execFileOpts | child_process$execFileCallback,
                    callback?: child_process$execFileCallback
                  ): child_process$ChildProcess;
                */
        execFile: false,

        /*
                declare function execFileSync(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$execFileSyncOpts,
                    options?: child_process$execFileSyncOpts
                  ): Buffer | string;
                */
        execFileSync: false,

        /*
                declare function fork(
                    modulePath: string,
                    argsOrOptions?: Array<string> | child_process$forkOpts,
                    options?: child_process$forkOpts
                  ): child_process$ChildProcess;
                */
        fork: false,

        /*
                declare function spawn(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$spawnOpts,
                    options?: child_process$spawnOpts
                  ): child_process$ChildProcess;
                */
        spawn: false,

        /*
                declare function spawnSync(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$spawnSyncOpts,
                    options?: child_process$spawnSyncOpts
                  ): child_process$spawnSyncRet;
                */
        spawnSync: false,
      },
    },

    cluster: {
      commonjs: true,
      exports: {
        /*
                declare type ClusterSettings = {
                    execArgv: Array<string>,
                    exec: string,
                    args: Array<string>,
                    cwd: string,
                    serialization: 'json' | 'advanced',
                    silent: boolean,
                    stdio: Array<any>,
                    uid: number,
                    gid: number,
                    inspectPort: number | () => number,
                    windowsHide: boolean,
                    ...
                  }
                */
        ClusterSettings: false,

        /*
                declare type ClusterSettingsOpt = {
                    execArgv?: Array<string>,
                    exec?: string,
                    args?: Array<string>,
                    cwd?: string,
                    serialization?: 'json' | 'advanced',
                    silent?: boolean,
                    stdio?: Array<any>,
                    uid?: number,
                    gid?: number,
                    inspectPort?: number | () => number,
                    windowsHide?: boolean,
                    ...
                  }
                */
        ClusterSettingsOpt: false,

        /*
                declare class Worker extends events$EventEmitter {
                    id: number;
                    process: child_process$ChildProcess;
                    suicide: boolean;

                    disconnect(): void;
                    isConnected(): boolean;
                    isDead(): boolean;
                    kill(signal?: string): void;
                    send(
                      message: Object,
                      sendHandleOrCallback?: child_process$Handle | Function,
                      callback?: Function,
                    ): boolean;
                  }
                */
        Worker: false,

        /*
                declare class Cluster extends events$EventEmitter {
                    isMaster: boolean;
                    isWorker: boolean;
                    settings: ClusterSettings;
                    worker: Worker;
                    workers: { [id: number]: Worker };

                    disconnect(callback?: () => void): void;
                    fork(env?: Object): Worker;
                    setupMaster(settings?: ClusterSettingsOpt): void;
                  }
                */
        Cluster: false,

        /*
                declare module.exports: Cluster;
                */
        default: false,
      },
    },

    crypto: {
      commonjs: true,
      exports: {
        /*
                declare var DEFAULT_ENCODING: string;
                */
        DEFAULT_ENCODING: false,

        /*
                declare class Sign extends crypto$Sign {}
                */
        Sign: false,

        /*
                declare class Verify extends crypto$Verify {}
                */
        Verify: false,

        /*
                declare function createCipher(algorithm: string, password: string | Buffer): crypto$Cipher;
                */
        createCipher: false,

        /*
                declare function createCipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Cipher;
                */
        createCipheriv: false,

        /*
                declare function createCredentials(
                    details?: crypto$createCredentialsDetails
                  ): crypto$Credentials
                */
        createCredentials: false,

        /*
                declare function createDecipher(algorithm: string, password: string | Buffer): crypto$Decipher;
                */
        createDecipher: false,

        /*
                declare function createDecipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Decipher;
                */
        createDecipheriv: false,

        /*
                declare function createDiffieHellman(prime_length: number): crypto$DiffieHellman;
                */
        /*
                declare function createDiffieHellman(prime: number, encoding?: string): crypto$DiffieHellman;
                */
        createDiffieHellman: false,

        /*
                declare function createECDH(curveName: string): crypto$ECDH;
                */
        createECDH: false,

        /*
                declare function createHash(algorithm: string): crypto$Hash;
                */
        createHash: false,

        /*
                declare function createHmac(algorithm: string, key: string | Buffer): crypto$Hmac;
                */
        createHmac: false,

        /*
                declare function createSign(algorithm: string): crypto$Sign;
                */
        createSign: false,

        /*
                declare function createVerify(algorithm: string): crypto$Verify;
                */
        createVerify: false,

        /*
                declare function getCiphers(): Array<string>;
                */
        getCiphers: false,

        /*
                declare function getCurves(): Array<string>;
                */
        getCurves: false,

        /*
                declare function getDiffieHellman(group_name: string): crypto$DiffieHellman;
                */
        getDiffieHellman: false,

        /*
                declare function getHashes(): Array<string>;
                */
        getHashes: false,

        /*
                declare function pbkdf2(
                    password: string | Buffer,
                    salt: string | Buffer,
                    iterations: number,
                    keylen: number,
                    digest: string,
                    callback: (err: ?Error, derivedKey: Buffer) => void
                  ): void;
                */
        /*
                declare function pbkdf2(
                    password: string | Buffer,
                    salt: string | Buffer,
                    iterations: number,
                    keylen: number,
                    callback: (err: ?Error, derivedKey: Buffer) => void
                  ): void;
                */
        pbkdf2: false,

        /*
                declare function pbkdf2Sync(
                    password: string | Buffer,
                    salt: string | Buffer,
                    iterations: number,
                    keylen: number,
                    digest?: string
                  ): Buffer;
                */
        pbkdf2Sync: false,

        /*
                declare function scrypt(
                    password: string | Buffer,
                    salt: string | Buffer,
                    keylen: number,
                    options: {|N?: number, r?: number, p?: number, maxmem?: number|}
                        | {|cost?: number, blockSize?: number, parallelization?: number, maxmem?: number|},
                    callback: (err: ?Error, derivedKey: Buffer) => void
                  ): void;
                */
        /*
                declare function scrypt(
                    password: string | Buffer,
                    salt: string | Buffer,
                    keylen: number,
                    callback: (err: ?Error, derivedKey: Buffer) => void
                  ): void;
                */
        scrypt: false,

        /*
                declare function scryptSync(
                    password: string | Buffer,
                    salt: string | Buffer,
                    keylen: number,
                    options?: {|N?: number, r?: number, p?: number, maxmem?: number|}
                        | {|cost?: number, blockSize?: number, parallelization?: number, maxmem?: number|},
                  ): Buffer;
                */
        scryptSync: false,

        /*
                declare function privateDecrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateDecrypt: false,

        /*
                declare function privateEncrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateEncrypt: false,

        /*
                declare function publicDecrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicDecrypt: false,

        /*
                declare function publicEncrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicEncrypt: false,

        /*
                declare function pseudoRandomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                declare function pseudoRandomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        pseudoRandomBytes: false,

        /*
                declare function randomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                declare function randomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        randomBytes: false,

        /*
                declare function randomFillSync(buffer: Buffer | $TypedArray | DataView): void
                */
        /*
                declare function randomFillSync(buffer: Buffer | $TypedArray | DataView, offset: number): void
                */
        /*
                declare function randomFillSync(
                    buffer: Buffer | $TypedArray | DataView,
                    offset: number,
                    size: number
                  ): void
                */
        randomFillSync: false,

        /*
                declare function randomFill(
                    buffer: Buffer | $TypedArray | DataView,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                declare function randomFill(
                    buffer: Buffer | $TypedArray | DataView,
                    offset: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                declare function randomFill(
                    buffer: Buffer | $TypedArray | DataView,
                    offset: number,
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        randomFill: false,

        /*
                declare function timingSafeEqual(
                    a: Buffer | $TypedArray | DataView,
                    b: Buffer | $TypedArray | DataView
                  ): boolean;
                */
        timingSafeEqual: false,
      },
    },

    dgram: {
      commonjs: true,
      exports: {
        /*
                declare function createSocket(
                    options: string | { type: string, ... },
                    callback?: () => void
                  ): dgram$Socket;
                */
        createSocket: false,
      },
    },

    dns: {
      commonjs: true,
      exports: {
        /*
                declare var ADDRGETNETWORKPARAMS: string;
                */
        ADDRGETNETWORKPARAMS: false,

        /*
                declare var BADFAMILY: string;
                */
        BADFAMILY: false,

        /*
                declare var BADFLAGS: string;
                */
        BADFLAGS: false,

        /*
                declare var BADHINTS: string;
                */
        BADHINTS: false,

        /*
                declare var BADQUERY: string;
                */
        BADQUERY: false,

        /*
                declare var BADNAME: string;
                */
        BADNAME: false,

        /*
                declare var BADRESP: string;
                */
        BADRESP: false,

        /*
                declare var BADSTR: string;
                */
        BADSTR: false,

        /*
                declare var CANCELLED: string;
                */
        CANCELLED: false,

        /*
                declare var CONNREFUSED: string;
                */
        CONNREFUSED: false,

        /*
                declare var DESTRUCTION: string;
                */
        DESTRUCTION: false,

        /*
                declare var EOF: string;
                */
        EOF: false,

        /*
                declare var FILE: string;
                */
        FILE: false,

        /*
                declare var FORMER: string;
                */
        FORMER: false,

        /*
                declare var LOADIPHLPAPI: string;
                */
        LOADIPHLPAPI: false,

        /*
                declare var NODATA: string;
                */
        NODATA: false,

        /*
                declare var NOMEM: string;
                */
        NOMEM: false,

        /*
                declare var NONAME: string;
                */
        NONAME: false,

        /*
                declare var NOTFOUND: string;
                */
        NOTFOUND: false,

        /*
                declare var NOTIMP: string;
                */
        NOTIMP: false,

        /*
                declare var NOTINITIALIZED: string;
                */
        NOTINITIALIZED: false,

        /*
                declare var REFUSED: string;
                */
        REFUSED: false,

        /*
                declare var SERVFAIL: string;
                */
        SERVFAIL: false,

        /*
                declare var TIMEOUT: string;
                */
        TIMEOUT: false,

        /*
                declare var ADDRCONFIG: number;
                */
        ADDRCONFIG: false,

        /*
                declare var V4MAPPED: number;
                */
        V4MAPPED: false,

        /*
                declare type LookupOptions = {
                    family?: number,
                    hints?: number,
                    verbatim?: boolean,
                    all?: boolean,
                    ...
                  };
                */
        LookupOptions: false,

        /*
                declare function lookup(
                    domain: string,
                    options: number | LookupOptions,
                    callback: (err: ?Error, address: string, family: number) => void
                  ): void;
                */
        /*
                declare function lookup(
                    domain: string,
                    callback: (err: ?Error, address: string, family: number) => void
                  ): void;
                */
        lookup: false,

        /*
                declare function resolve(
                    domain: string,
                    rrtype?: string,
                    callback?: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve: false,

        /*
                declare function resolve4(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve4: false,

        /*
                declare function resolve6(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve6: false,

        /*
                declare function resolveCname(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveCname: false,

        /*
                declare function resolveMx(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveMx: false,

        /*
                declare function resolveNs(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveNs: false,

        /*
                declare function resolveSrv(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveSrv: false,

        /*
                declare function resolveTxt(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveTxt: false,

        /*
                declare function reverse(
                    ip: string,
                    callback: (err: ?Error, domains: Array<any>) => void
                  ): void;
                */
        reverse: false,

        /*
                declare function timingSafeEqual(
                    a: Buffer | $TypedArray | DataView,
                    b: Buffer | $TypedArray | DataView
                  ): boolean;
                */
        timingSafeEqual: false,
      },
    },

    events: {
      commonjs: true,
      exports: {
        /*
                declare class EventEmitter extends events$EventEmitter {
                    static EventEmitter: typeof EventEmitter;
                  }
                */
        EventEmitter: false,

        /*
                declare module.exports: typeof EventEmitter;
                */
        default: false,
      },
    },

    domain: {
      commonjs: true,
      exports: {
        /*
                declare function create(): domain$Domain;
                */
        create: false,
      },
    },

    fs: {
      commonjs: true,
      exports: {
        /*
                declare class Stats {
                    dev: number;
                    ino: number;
                    mode: number;
                    nlink: number;
                    uid: number;
                    gid: number;
                    rdev: number;
                    size: number;
                    blksize: number;
                    blocks: number;
                    atimeMs: number;
                    mtimeMs: number;
                    ctimeMs: number;
                    birthtimeMs: number;
                    atime: Date;
                    mtime: Date;
                    ctime: Date;
                    birthtime: Date;

                    isFile(): boolean;
                    isDirectory(): boolean;
                    isBlockDevice(): boolean;
                    isCharacterDevice(): boolean;
                    isSymbolicLink(): boolean;
                    isFIFO(): boolean;
                    isSocket(): boolean;
                  }
                */
        Stats: false,

        /*
                declare class FSWatcher extends events$EventEmitter {
                    close(): void;
                  }
                */
        FSWatcher: false,

        /*
                declare class ReadStream extends stream$Readable {
                    close(): void;
                  }
                */
        ReadStream: false,

        /*
                declare class WriteStream extends stream$Writable {
                    close(): void;
                    bytesWritten: number;
                  }
                */
        WriteStream: false,

        /*
                declare class Dirent {
                    name: string | Buffer;

                    isBlockDevice(): boolean;
                    isCharacterDevice(): boolean;
                    isDirectory(): boolean;
                    isFIFO(): boolean;
                    isFile(): boolean;
                    isSocket(): boolean;
                    isSymbolicLink(): boolean;
                  }
                */
        Dirent: false,

        /*
                declare function rename(oldPath: string, newPath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rename: false,

        /*
                declare function renameSync(oldPath: string, newPath: string): void;
                */
        renameSync: false,

        /*
                declare function ftruncate(fd: number, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        ftruncate: false,

        /*
                declare function ftruncateSync(fd: number, len: number): void;
                */
        ftruncateSync: false,

        /*
                declare function truncate(path: string, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        truncate: false,

        /*
                declare function truncateSync(path: string, len: number): void;
                */
        truncateSync: false,

        /*
                declare function chown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        chown: false,

        /*
                declare function chownSync(path: string, uid: number, gid: number): void;
                */
        chownSync: false,

        /*
                declare function fchown(fd: number, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fchown: false,

        /*
                declare function fchownSync(fd: number, uid: number, gid: number): void;
                */
        fchownSync: false,

        /*
                declare function lchown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        lchown: false,

        /*
                declare function lchownSync(path: string, uid: number, gid: number): void;
                */
        lchownSync: false,

        /*
                declare function chmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        chmod: false,

        /*
                declare function chmodSync(path: string, mode: number | string): void;
                */
        chmodSync: false,

        /*
                declare function fchmod(fd: number, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        fchmod: false,

        /*
                declare function fchmodSync(fd: number, mode: number | string): void;
                */
        fchmodSync: false,

        /*
                declare function lchmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        lchmod: false,

        /*
                declare function lchmodSync(path: string, mode: number | string): void;
                */
        lchmodSync: false,

        /*
                declare function stat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        stat: false,

        /*
                declare function statSync(path: string): Stats;
                */
        statSync: false,

        /*
                declare function fstat(fd: number, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        fstat: false,

        /*
                declare function fstatSync(fd: number): Stats;
                */
        fstatSync: false,

        /*
                declare function lstat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        lstat: false,

        /*
                declare function lstatSync(path: string): Stats;
                */
        lstatSync: false,

        /*
                declare function link(srcpath: string, dstpath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        link: false,

        /*
                declare function linkSync(srcpath: string, dstpath: string): void;
                */
        linkSync: false,

        /*
                declare function symlink(srcpath: string, dtspath: string, type?: string, callback?: (err: ?ErrnoError) => void): void;
                */
        symlink: false,

        /*
                declare function symlinkSync(srcpath: string, dstpath: string, type?: string): void;
                */
        symlinkSync: false,

        /*
                declare function readlink(path: string, callback: (err: ?ErrnoError, linkString: string) => void): void;
                */
        readlink: false,

        /*
                declare function readlinkSync(path: string): string;
                */
        readlinkSync: false,

        /*
                declare function realpath(path: string, cache?: Object, callback?: (err: ?ErrnoError, resolvedPath: string) => void): void;
                */
        realpath: false,

        /*
                declare function realpathSync(path: string, cache?: Object): string;
                */
        realpathSync: false,

        /*
                declare function unlink(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        unlink: false,

        /*
                declare function unlinkSync(path: string): void;
                */
        unlinkSync: false,

        /*
                declare function rmdir(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rmdir: false,

        /*
                declare function rmdirSync(path: string): void;
                */
        rmdirSync: false,

        /*
                declare function mkdir(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }, callback?: (err: ?ErrnoError) => void): void;
                */
        mkdir: false,

        /*
                declare function mkdirSync(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }): void;
                */
        mkdirSync: false,

        /*
                declare function mkdtemp(prefix: string, callback: (err: ?ErrnoError, folderPath: string) => void): void;
                */
        mkdtemp: false,

        /*
                declare function mkdtempSync(prefix: string): string;
                */
        mkdtempSync: false,

        /*
                declare function readdir(
                    path: string,
                    options: string | { encoding?: string, withFileTypes?: false, ... },
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        /*
                declare function readdir(
                    path: string,
                    options: { encoding?: string, withFileTypes?: true, ... },
                    callback: (err: ?ErrnoError, files: Array<Dirent>) => void
                  ): void;
                */
        /*
                declare function readdir(
                    path: string,
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        readdir: false,

        /*
                declare function readdirSync(
                    path: string,
                    options?: string | { encoding?: string, withFileTypes?: false, ... }
                  ): Array<string>;
                */
        /*
                declare function readdirSync(
                    path: string,
                    options?: string | { encoding?: string, withFileTypes?: true, ... }
                  ): Array<Dirent>;
                */
        readdirSync: false,

        /*
                declare function close(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        close: false,

        /*
                declare function closeSync(fd: number): void;
                */
        closeSync: false,

        /*
                declare function open(
                    path: string | Buffer | URL,
                    flags: string | number,
                    mode: number,
                    callback: (err: ?ErrnoError, fd: number) => void
                  ): void;
                */
        /*
                declare function open(
                    path: string | Buffer | URL,
                    flags: string | number,
                    callback: (err: ?ErrnoError, fd: number) => void
                  ): void;
                */
        open: false,

        /*
                declare function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
                */
        openSync: false,

        /*
                declare function utimes(path: string, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        utimes: false,

        /*
                declare function utimesSync(path: string, atime: number, mtime: number): void;
                */
        utimesSync: false,

        /*
                declare function futimes(fd: number, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        futimes: false,

        /*
                declare function futimesSync(fd: number, atime: number, mtime: number): void;
                */
        futimesSync: false,

        /*
                declare function fsync(fd: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fsync: false,

        /*
                declare function fsyncSync(fd: number): void;
                */
        fsyncSync: false,

        /*
                declare function write(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: number,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    buffer: Buffer,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    data: string,
                    position: number,
                    encoding: string,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    data: string,
                    position: number,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        /*
                declare function write(
                    fd: number,
                    data: string,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        write: false,

        /*
                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: number,
                  ): number;
                */
        /*
                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                  ): number;
                */
        /*
                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset?: number,
                  ): number;
                */
        /*
                declare function writeSync(
                    fd: number,
                    str: string,
                    position: number,
                    encoding: string,
                  ): number;
                */
        /*
                declare function writeSync(
                    fd: number,
                    str: string,
                    position?: number,
                  ): number;
                */
        writeSync: false,

        /*
                declare function read(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: ?number,
                    callback: (err: ?ErrnoError, bytesRead: number, buffer: Buffer) => void
                  ): void;
                */
        read: false,

        /*
                declare function readSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: number
                  ): number;
                */
        readSync: false,

        /*
                declare function readFile(
                    path: string | Buffer | URL | number,
                    callback: (err: ?ErrnoError, data: Buffer) => void
                  ): void;
                */
        /*
                declare function readFile(
                    path: string | Buffer | URL | number,
                    encoding: string,
                    callback: (err: ?ErrnoError, data: string) => void
                  ): void;
                */
        /*
                declare function readFile(
                    path: string | Buffer | URL | number,
                    options: {
                      encoding: string,
                      flag?: string,
                      ...
                    },
                    callback: (err: ?ErrnoError, data: string) => void
                  ): void;
                */
        /*
                declare function readFile(
                    path: string | Buffer | URL | number,
                    options: { flag?: string, ... },
                    callback: (err: ?ErrnoError, data: Buffer) => void
                  ): void;
                */
        readFile: false,

        /*
                declare function readFileSync(
                    path: string | Buffer | URL | number
                  ): Buffer;
                */
        /*
                declare function readFileSync(
                    path: string | Buffer | URL | number,
                    encoding: string
                  ): string;
                */
        /*
                declare function readFileSync(path: string | Buffer | URL | number, options: {
                    encoding: string,
                    flag?: string,
                    ...
                  }): string;
                */
        /*
                declare function readFileSync(path: string | Buffer | URL | number, options: {
                    encoding?: void,
                    flag?: string,
                    ...
                  }): Buffer;
                */
        readFileSync: false,

        /*
                declare function writeFile(
                    filename: string | Buffer | number,
                    data: Buffer | string,
                    options: string | {
                      encoding?: ?string,
                      mode?: number,
                      flag?: string,
                      ...
                    },
                    callback: (err: ?ErrnoError) => void
                  ): void;
                */
        /*
                declare function writeFile(
                    filename: string | Buffer | number,
                    data: Buffer | string,
                    callback?: (err: ?ErrnoError) => void
                  ): void;
                */
        writeFile: false,

        /*
                declare function writeFileSync(
                    filename: string,
                    data: Buffer | string,
                    options?: string | {
                      encoding?: ?string,
                      mode?: number,
                      flag?: string,
                      ...
                    }
                  ): void;
                */
        writeFileSync: false,

        /*
                declare function appendFile(
                    filename: string | Buffer | number,
                    data: string | Buffer,
                    options: string | {
                      encoding?: ?string,
                      mode?: number,
                      flag?: string,
                      ...
                    },
                    callback: (err: ?ErrnoError) => void
                  ): void;
                */
        /*
                declare function appendFile(
                    filename: string | Buffer | number,
                    data: string | Buffer,
                    callback: (err: ?ErrnoError) => void
                  ): void;
                */
        appendFile: false,

        /*
                declare function appendFileSync(
                    filename: string | Buffer | number,
                    data: string | Buffer,
                    options?: string | {
                      encoding?: ?string,
                      mode?: number,
                      flag?: string,
                      ...
                    }
                  ): void;
                */
        appendFileSync: false,

        /*
                declare function watchFile(filename: string, options?: Object, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        watchFile: false,

        /*
                declare function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        unwatchFile: false,

        /*
                declare function watch(filename: string, options?: Object, listener?: (event: string, filename: string) => void): FSWatcher;
                */
        watch: false,

        /*
                declare function exists(path: string, callback?: (exists: boolean) => void): void;
                */
        exists: false,

        /*
                declare function existsSync(path: string): boolean;
                */
        existsSync: false,

        /*
                declare function access(path: string, mode?: number, callback?: (err: ?ErrnoError) => void): void;
                */
        access: false,

        /*
                declare function accessSync(path: string, mode?: number): void;
                */
        accessSync: false,

        /*
                declare function createReadStream(path: string, options?: Object): ReadStream;
                */
        createReadStream: false,

        /*
                declare function createWriteStream(path: string, options?: Object): WriteStream;
                */
        createWriteStream: false,

        /*
                declare function fdatasync(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        fdatasync: false,

        /*
                declare function fdatasyncSync(fd: number): void;
                */
        fdatasyncSync: false,

        /*
                declare function copyFile(src: string, dest: string, flags?: number, callback: (err: ErrnoError) => void): void;
                */
        copyFile: false,

        /*
                declare function copyFileSync(src: string, dest: string, flags?: number): void;
                */
        copyFileSync: false,

        /*
                declare var F_OK: number;
                */
        F_OK: false,

        /*
                declare var R_OK: number;
                */
        R_OK: false,

        /*
                declare var W_OK: number;
                */
        W_OK: false,

        /*
                declare var X_OK: number;
                */
        X_OK: false,

        /*
                declare var constants: {
                    F_OK: number, // 0
                    R_OK: number, // 4
                    W_OK: number, // 2
                    X_OK: number, // 1
                    COPYFILE_EXCL: number, // 1
                    COPYFILE_FICLONE: number, // 2
                    COPYFILE_FICLONE_FORCE: number, // 4
                    O_RDONLY: number, // 0
                    O_WRONLY: number, // 1
                    O_RDWR: number, // 2
                    S_IFMT: number, // 61440
                    S_IFREG: number, // 32768
                    S_IFDIR: number, // 16384
                    S_IFCHR: number, // 8192
                    S_IFBLK: number, // 24576
                    S_IFIFO: number, // 4096
                    S_IFLNK: number, // 40960
                    S_IFSOCK: number, // 49152
                    O_CREAT: number, // 64
                    O_EXCL: number, // 128
                    O_NOCTTY: number, // 256
                    O_TRUNC: number, // 512
                    O_APPEND: number, // 1024
                    O_DIRECTORY: number, // 65536
                    O_NOATIME: number, // 262144
                    O_NOFOLLOW: number, // 131072
                    O_SYNC: number, // 1052672
                    O_DSYNC: number, // 4096
                    O_SYMLINK: number, // 2097152
                    O_DIRECT: number, // 16384
                    O_NONBLOCK: number, // 2048
                    S_IRWXU: number, // 448
                    S_IRUSR: number, // 256
                    S_IWUSR: number, // 128
                    S_IXUSR: number, // 64
                    S_IRWXG: number, // 56
                    S_IRGRP: number, // 32
                    S_IWGRP: number, // 16
                    S_IXGRP: number, // 8
                    S_IRWXO: number, // 7
                    S_IROTH: number, // 4
                    S_IWOTH: number, // 2
                    S_IXOTH: number, // 1
                    ...
                  };
                */
        constants: false,

        /*
                declare type BufferEncoding =
                    | 'buffer'
                    | { encoding: 'buffer', ... };
                */
        BufferEncoding: false,

        /*
                declare type EncodingOptions = { encoding?: string, ... };
                */
        EncodingOptions: false,

        /*
                declare type EncodingFlag = EncodingOptions & { flag?: string, ... };
                */
        EncodingFlag: false,

        /*
                declare type WriteOptions = EncodingFlag & { mode?: number, ... };
                */
        WriteOptions: false,

        /*
                declare class FileHandle {
                    appendFile(data: string | Buffer, options: WriteOptions | string): Promise<void>;
                    chmod(mode: number): Promise<void>;
                    chown(uid: number, guid: number): Promise<void>;
                    close(): Promise<void>;
                    datasync(): Promise<void>;
                    fd: number;
                    read<T: Buffer | Uint8Array>(
                      buffer: T,
                      offset: number,
                      length: number,
                      position: number
                    ): Promise<{
                      bytesRead: number,
                      buffer: T,
                      ...
                    }>;
                    readFile(options: EncodingFlag): Promise<Buffer>;
                    readFile(options: string): Promise<string>;
                    stat(): Promise<Stats>;
                    sync(): Promise<void>;
                    truncate(len?: number): Promise<void>;
                    utimes(atime: number | string | Date, mtime: number | string | Date): Promise<void>;
                    write(buffer: Buffer | Uint8Array, offset: number, length: number, position: number): Promise<void>;
                    writeFile(data: string | Buffer | Uint8Array, options: WriteOptions | string): Promise<void>;
                  }
                */
        FileHandle: false,

        /*
                declare type FSPromisePath = string | Buffer | URL;
                */
        FSPromisePath: false,

        /*
                declare type FSPromise = {
                    access(path: FSPromisePath, mode?: number): Promise<void>,
                    appendFile(path: FSPromisePath | FileHandle, data: string | Buffer, options: WriteOptions | string): Promise<void>,
                    chmod(path: FSPromisePath, mode: number): Promise<void>,
                    chown(path: FSPromisePath, uid: number, gid: number): Promise<void>,
                    copyFile(src: FSPromisePath, dest: FSPromisePath, flags?: number): Promise<void>,
                    fchmod(filehandle: FileHandle, mode: number): Promise<void>,
                    fchown(filehandle: FileHandle, uid: number, guid: number): Promise<void>,
                    fdatasync(filehandle: FileHandle): Promise<void>,
                    fstat(filehandle: FileHandle): Promise<Stats>,
                    fsync(filehandle: FileHandle): Promise<void>,
                    ftruncate(filehandle: FileHandle, len?: number): Promise<void>,
                    futimes(filehandle: FileHandle, atime: number | string | Date, mtime: number | string | Date): Promise<void>,
                    lchmod(path: FSPromisePath, mode: number): Promise<void>,
                    lchown(path: FSPromisePath, uid: number, guid: number): Promise<void>,
                    link(existingPath: FSPromisePath, newPath: FSPromisePath): Promise<void>,
                    mkdir(path: FSPromisePath, mode?: number | {
                      recursive?: boolean,
                      mode?: number,
                      ...
                    }): Promise<void>,
                    mkdtemp(prefix: string, options: EncodingOptions): Promise<string>,
                    open(path: FSPromisePath, flags?: string | number, mode?: number): Promise<FileHandle>,
                    read<T: Buffer | Uint8Array>(
                      filehandle: FileHandle,
                      buffer: T,
                      offset: number,
                      length: number,
                      position?: number
                    ): Promise<{
                      bytesRead: number,
                      buffer: T,
                      ...
                    }>,
                    readdir(path: FSPromisePath, options?: string | EncodingOptions): Promise<string[]>,
                    readFile:
                      & ((path: FSPromisePath | FileHandle, options: string) => Promise<string>)
                      & ((path: FSPromisePath | FileHandle, options?: EncodingFlag) => Promise<Buffer>),
                    readlink:
                      & ((path: FSPromisePath, options: BufferEncoding) => Promise<Buffer>)
                      & ((path: FSPromisePath, options?: string | EncodingOptions) => Promise<string>),
                    realpath:
                      & ((path: FSPromisePath, options: BufferEncoding) => Promise<Buffer>)
                      & ((path: FSPromisePath, options?: string | EncodingOptions) => Promise<string>),
                    rename(oldPath: FSPromisePath, newPath: FSPromisePath): Promise<void>,
                    rmdir(path: FSPromisePath): Promise<void>,
                    stat(path: FSPromisePath): Promise<Stats>,
                    symlink(target: FSPromisePath, path: FSPromisePath, type?: 'dir' | 'file' | 'junction'): Promise<void>,
                    truncate(path: FSPromisePath, len?: number): Promise<void>,
                    unlink(path: FSPromisePath): Promise<void>,
                    utimes(path: FSPromisePath, atime: number | string | Date, mtime: number | string | Date): Promise<void>,
                    write<T: Buffer | Uint8Array>(
                      filehandle: FileHandle,
                      buffer: T,
                      offset: number,
                      length: number,
                      position?: number
                    ): Promise<{
                      bytesRead: number,
                      buffer: T,
                      ...
                    }>,
                    writeFile(
                      FSPromisePath | FileHandle,
                      data: string | Buffer | Uint8Array,
                      options?: string | WriteOptions
                    ): Promise<void>,
                    ...
                  }
                */
        FSPromise: false,

        /*
                declare var promises: FSPromise;
                */
        promises: false,
      },
    },

    http: {
      commonjs: true,
      exports: {
        /*
                declare class Server extends http$Server {}
                */
        Server: false,

        /*
                declare class Agent extends http$Agent<net$Socket> {
                    createConnection(options: net$connectOptions, callback?: Function): net$Socket;
                  }
                */
        Agent: false,

        /*
                declare class ClientRequest extends http$ClientRequest<net$Socket> {}
                */
        ClientRequest: false,

        /*
                declare class IncomingMessage extends http$IncomingMessage<net$Socket> {}
                */
        IncomingMessage: false,

        /*
                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse: false,

        /*
                declare function createServer(
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer: false,

        /*
                declare function request(
                    options: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                declare function request(
                    url: string,
                    options?: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        request: false,

        /*
                declare function get(
                    options: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                declare function get(
                    url: string,
                    options?: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        get: false,

        /*
                declare var METHODS: Array<string>;
                */
        METHODS: false,

        /*
                declare var STATUS_CODES: { [key: number]: string, ... };
                */
        STATUS_CODES: false,

        /*
                declare var globalAgent: Agent;
                */
        globalAgent: false,
      },
    },

    https: {
      commonjs: true,
      exports: {
        /*
                declare class Server extends https$Server {}
                */
        Server: false,

        /*
                declare class Agent extends http$Agent<tls$TLSSocket> {
                    createConnection(port: ?number, host: ?string, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(port: ?number, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(options: tls$connectOptions): tls$TLSSocket;
                  }
                */
        Agent: false,

        /*
                declare class ClientRequest extends http$ClientRequest<tls$TLSSocket> {}
                */
        ClientRequest: false,

        /*
                declare class IncomingMessage extends http$IncomingMessage<tls$TLSSocket> {}
                */
        IncomingMessage: false,

        /*
                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse: false,

        /*
                declare function createServer(
                    options: Object,
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer: false,

        /*
                declare function request(
                    options: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                declare function request(
                    url: string,
                    options?: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        request: false,

        /*
                declare function get(
                    options: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                declare function get(
                    url: string,
                    options?: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        get: false,

        /*
                declare var globalAgent: Agent;
                */
        globalAgent: false,
      },
    },

    module: {
      commonjs: true,
      exports: {
        /*
                declare module.exports: module$Module;
                */
        default: false,
      },
    },

    net: {
      commonjs: true,
      exports: {
        /*
                declare class Server extends net$Server {}
                */
        Server: false,

        /*
                declare class Socket extends net$Socket {}
                */
        Socket: false,

        /*
                declare function isIP(input: string): number;
                */
        isIP: false,

        /*
                declare function isIPv4(input: string): boolean;
                */
        isIPv4: false,

        /*
                declare function isIPv6(input: string): boolean;
                */
        isIPv6: false,

        /*
                declare type connectionListener = (socket: Socket) => any;
                */
        connectionListener: false,

        /*
                declare function createServer(
                    options?: {
                      allowHalfOpen?: boolean,
                      pauseOnConnect?: boolean,
                      ...
                    } | connectionListener,
                    connectionListener?: connectionListener,
                  ): Server;
                */
        createServer: false,

        /*
                declare type connectListener = () => any;
                */
        connectListener: false,

        /*
                declare function connect(
                    pathOrPortOrOptions:  string | number | net$connectOptions,
                    hostOrConnectListener?: string | connectListener,
                    connectListener?: connectListener,
                  ): Socket;
                */
        connect: false,

        /*
                declare function createConnection(
                    pathOrPortOrOptions:  string | number | net$connectOptions,
                    hostOrConnectListener?: string | connectListener,
                    connectListener?: connectListener,
                  ): Socket;
                */
        createConnection: false,
      },
    },

    os: {
      commonjs: true,
      exports: {
        /*
                declare function arch(): "x64"|"arm"|"ia32";
                */
        arch: false,

        /*
                declare function cpus(): Array<os$CPU>;
                */
        cpus: false,

        /*
                declare function endianness(): "BE"|"LE";
                */
        endianness: false,

        /*
                declare function freemem(): number;
                */
        freemem: false,

        /*
                declare function homedir(): string;
                */
        homedir: false,

        /*
                declare function hostname(): string;
                */
        hostname: false,

        /*
                declare function loadavg(): [number, number, number];
                */
        loadavg: false,

        /*
                declare function networkInterfaces(): { [ifName: string]: Array<os$NetIFAddr>, ... };
                */
        networkInterfaces: false,

        /*
                declare function platform(): string;
                */
        platform: false,

        /*
                declare function release(): string;
                */
        release: false,

        /*
                declare function tmpdir(): string;
                */
        tmpdir: false,

        /*
                declare function totalmem(): number;
                */
        totalmem: false,

        /*
                declare function type(): string;
                */
        type: false,

        /*
                declare function uptime(): number;
                */
        uptime: false,

        /*
                declare function userInfo(options: { encoding: 'buffer', ... }): os$UserInfo$buffer;
                */
        /*
                declare function userInfo(options?: { encoding: 'utf8', ... }): os$UserInfo$string;
                */
        userInfo: false,

        /*
                declare var EOL: string;
                */
        EOL: false,
      },
    },

    path: {
      commonjs: true,
      exports: {
        /*
                declare function normalize(path: string): string;
                */
        normalize: false,

        /*
                declare function join(...parts: Array<string>): string;
                */
        join: false,

        /*
                declare function resolve(...parts: Array<string>): string;
                */
        resolve: false,

        /*
                declare function isAbsolute(path: string): boolean;
                */
        isAbsolute: false,

        /*
                declare function relative(from: string, to: string): string;
                */
        relative: false,

        /*
                declare function dirname(path: string): string;
                */
        dirname: false,

        /*
                declare function basename(path: string, ext?: string): string;
                */
        basename: false,

        /*
                declare function extname(path: string): string;
                */
        extname: false,

        /*
                declare var sep: string;
                */
        sep: false,

        /*
                declare var delimiter: string;
                */
        delimiter: false,

        /*
                declare function parse(pathString: string): {
                    root: string,
                    dir: string,
                    base: string,
                    ext: string,
                    name: string,
                    ...
                  };
                */
        parse: false,

        /*
                declare function format(pathObject: {
                    root?: string,
                    dir?: string,
                    base?: string,
                    ext?: string,
                    name?: string,
                    ...
                  }): string;
                */
        format: false,

        /*
                declare var posix: any;
                */
        posix: false,

        /*
                declare var win32: any;
                */
        win32: false,
      },
    },

    punycode: {
      commonjs: true,
      exports: {
        /*
                declare function decode(string: string): string;
                */
        decode: false,

        /*
                declare function encode(string: string): string;
                */
        encode: false,

        /*
                declare function toASCII(domain: string): string;
                */
        toASCII: false,

        /*
                declare function toUnicode(domain: string): string;
                */
        toUnicode: false,

        /*
                declare var ucs2: {
                    decode: (str: string) => Array<number>,
                    encode: (codePoints: Array<number>) => string,
                    ...
                  };
                */
        ucs2: false,

        /*
                declare var version : string;
                */
        version: false,
      },
    },

    querystring: {
      commonjs: true,
      exports: {
        /*
                declare function stringify(
                    obj: Object,
                    separator?: string,
                    equal?: string,
                    options?: { encodeURIComponent?: (str: string) => string, ... }
                  ): string;
                */
        stringify: false,

        /*
                declare function parse(
                    str: string,
                    separator: ?string,
                    equal: ?string,
                    options?: {
                      decodeURIComponent?: (str: string) => string,
                      maxKeys?: number,
                      ...
                    }
                  ): any;
                */
        parse: false,

        /*
                declare function escape(str: string): string;
                */
        escape: false,

        /*
                declare function unescape(str: string, decodeSpaces?: boolean): string;
                */
        unescape: false,
      },
    },

    readline: {
      commonjs: true,
      exports: {
        /*
                declare var Interface : typeof readline$Interface;
                */
        Interface: false,

        /*
                declare function clearLine(stream: stream$Stream, dir: -1 | 1 | 0): void;
                */
        clearLine: false,

        /*
                declare function clearScreenDown(stream: stream$Stream): void;
                */
        clearScreenDown: false,

        /*
                declare function createInterface(opts: {
                    input: stream$Readable,
                    output?: ?stream$Stream,
                    completer?: readline$InterfaceCompleter,
                    terminal?: boolean,
                    historySize?: number,
                    prompt?: string,
                    crlfDelay?: number,
                    removeHistoryDuplicates?: boolean,
                    escapeCodeTimeout?: number,
                    ...
                  }): readline$Interface;
                */
        createInterface: false,

        /*
                declare function cursorTo(stream: stream$Stream, x?: number, y?: number): void;
                */
        cursorTo: false,

        /*
                declare function moveCursor(stream: stream$Stream, dx: number, dy: number): void;
                */
        moveCursor: false,

        /*
                declare function emitKeypressEvents(stream: stream$Stream, readlineInterface?: readline$Interface): void;
                */
        emitKeypressEvents: false,
      },
    },

    stream: {
      commonjs: true,
      exports: {
        /*
                declare var Stream : typeof stream$Stream
                */
        Stream: false,

        /*
                declare var Readable : typeof stream$Readable
                */
        Readable: false,

        /*
                declare var Writable : typeof stream$Writable
                */
        Writable: false,

        /*
                declare var Duplex : typeof stream$Duplex
                */
        Duplex: false,

        /*
                declare var Transform : typeof stream$Transform
                */
        Transform: false,

        /*
                declare var PassThrough : typeof stream$PassThrough
                */
        PassThrough: false,

        /*
                declare function finished(
                    stream: stream$Stream,
                    callback: (error?: Error) => void,
                  ): () => void;
                */
        /*
                declare function finished(
                    stream: stream$Stream,
                    options: ?{
                      error?: boolean,
                      readable?: boolean,
                      writable?: boolean,
                      ...
                    },
                    callback: (error?: Error) => void,
                  ): () => void;
                */
        finished: false,

        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    s3: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    s3: stream$Duplex,
                    s4: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    s3: stream$Duplex,
                    s4: stream$Duplex,
                    s5: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    s3: stream$Duplex,
                    s4: stream$Duplex,
                    s5: stream$Duplex,
                    s6: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                declare function pipeline(
                    streams: Array<stream$Stream>,
                    cb: (error?: Error) => void,
                  ): stream$Stream;
                */
        pipeline: false,
      },
    },

    tty: {
      commonjs: true,
      exports: {
        /*
                declare function isatty(fd : number) : boolean;
                */
        isatty: false,

        /*
                declare function setRawMode(mode : boolean) : void;
                */
        setRawMode: false,

        /*
                declare var ReadStream : typeof tty$ReadStream
                */
        ReadStream: false,

        /*
                declare var WriteStream : typeof tty$WriteStream
                */
        WriteStream: false,
      },
    },

    string_decoder: {
      commonjs: true,
      exports: {
        /*
                declare var StringDecoder : typeof string_decoder$StringDecoder;
                */
        StringDecoder: false,
      },
    },

    tls: {
      commonjs: true,
      exports: {
        /*
                declare var CLIENT_RENEG_LIMIT: number;
                */
        CLIENT_RENEG_LIMIT: false,

        /*
                declare var CLIENT_RENEG_WINDOW: number;
                */
        CLIENT_RENEG_WINDOW: false,

        /*
                declare var SLAB_BUFFER_SIZE: number;
                */
        SLAB_BUFFER_SIZE: false,

        /*
                declare var DEFAULT_CIPHERS: string;
                */
        DEFAULT_CIPHERS: false,

        /*
                declare var DEFAULT_ECDH_CURVE: string;
                */
        DEFAULT_ECDH_CURVE: false,

        /*
                declare function getCiphers(): Array<string>;
                */
        getCiphers: false,

        /*
                declare function convertNPNProtocols(NPNProtocols: Array<string>, out: Object): void;
                */
        convertNPNProtocols: false,

        /*
                declare function checkServerIdentity(servername: string, cert: string): Error | void;
                */
        checkServerIdentity: false,

        /*
                declare function parseCertString(s: string): Object;
                */
        parseCertString: false,

        /*
                declare function createSecureContext(details: Object): Object;
                */
        createSecureContext: false,

        /*
                declare var SecureContext: Object;
                */
        SecureContext: false,

        /*
                declare var TLSSocket: typeof tls$TLSSocket;
                */
        TLSSocket: false,

        /*
                declare var Server: typeof tls$Server;
                */
        Server: false,

        /*
                declare function createServer(options: Object, secureConnectionListener?: Function): tls$Server;
                */
        createServer: false,

        /*
                declare function connect(options: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        /*
                declare function connect(port: number, host?: string, options?: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        connect: false,

        /*
                declare function createSecurePair(context?: Object, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean, options?: Object): Object;
                */
        createSecurePair: false,
      },
    },

    url: {
      commonjs: true,
      exports: {
        /*
                declare type Url = {|
                    protocol: string | null,
                    slashes: boolean | null,
                    auth: string | null,
                    host: string | null,
                    port: string | null,
                    hostname: string | null,
                    hash: string | null,
                    search: string | null,
                    query: string | null | { [string]: string, ... },
                    pathname: string | null,
                    path: string | null,
                    href: string,
                  |}
                */
        Url: false,

        /*
                declare type UrlWithStringQuery = {|
                    ...Url,
                    query: string | null
                  |}
                */
        UrlWithStringQuery: false,

        /*
                declare type UrlWithParsedQuery = {|
                    ...Url,
                    query: { [string]: string, ... }
                  |}
                */
        UrlWithParsedQuery: false,

        /*
                declare function parse(urlStr: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery;
                */
        /*
                declare function parse(urlStr: string, parseQueryString?: false | void, slashesDenoteHost?: boolean): UrlWithStringQuery;
                */
        /*
                declare function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
                */
        parse: false,

        /*
                declare function format(urlObj: url$urlObject): string;
                */
        format: false,

        /*
                declare function resolve(from: string, to: string): string;
                */
        resolve: false,

        /*
                declare function domainToASCII(domain: string): string;
                */
        domainToASCII: false,

        /*
                declare function domainToUnicode(domain: string): string;
                */
        domainToUnicode: false,

        /*
                declare function pathToFileURL(path: string): url$urlObject;
                */
        pathToFileURL: false,

        /*
                declare function fileURLToPath(path: url$urlObject | string): string;
                */
        fileURLToPath: false,

        /*
                declare class URLSearchParams {
                    constructor(init?: string | Array<[string, string]> | { [string]: string, ... } ): void;
                    append(name: string, value: string): void;
                    delete(name: string): void;
                    entries(): Iterator<[string, string]>;
                    forEach<This>(fn: (this : This, value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: This): void;
                    get(name: string): string | null;
                    getAll(name: string): string[];
                    has(name: string): boolean;
                    keys(): Iterator<string>;
                    set(name: string, value: string): void;
                    sort(): void;
                    toString(): string;
                    values(): Iterator<string>;
                    @@iterator(): Iterator<[string, string]>;
                  }
                */
        URLSearchParams: false,

        /*
                declare class URL {
                    constructor(input: string, base?: string | URL): void;
                    hash: string;
                    host: string;
                    hostname: string;
                    href: string;
                    origin: string;
                    password: string;
                    pathname: string;
                    port: string;
                    protocol: string;
                    search: string;
                    +searchParams: URLSearchParams;
                    username: string;
                    toString(): string;
                    toJSON(): string;
                  }
                */
        URL: false,
      },
    },

    util: {
      commonjs: true,
      exports: {
        /*
                declare function debuglog(section: string): (data: any, ...args: any) => void;
                */
        debuglog: false,

        /*
                declare function format(format: string, ...placeholders: any): string;
                */
        format: false,

        /*
                declare function log(string: string): void;
                */
        log: false,

        /*
                declare function inspect(object: any, options?: util$InspectOptions): string;
                */
        inspect: false,

        /*
                declare function isArray(object: any): boolean;
                */
        isArray: false,

        /*
                declare function isRegExp(object: any): boolean;
                */
        isRegExp: false,

        /*
                declare function isDate(object: any): boolean;
                */
        isDate: false,

        /*
                declare function isError(object: any): boolean;
                */
        isError: false,

        /*
                declare function inherits(constructor: Function, superConstructor: Function): void;
                */
        inherits: false,

        /*
                declare function deprecate(f: Function, string: string): Function;
                */
        deprecate: false,

        /*
                declare function promisify(f: Function): Function;
                */
        promisify: false,

        /*
                declare function callbackify(f: Function): Function;
                */
        callbackify: false,

        /*
                declare class TextDecoder {
                    constructor(encoding?: string, options: {
                      fatal?: boolean,
                      ignoreBOM?: boolean,
                      ...
                    }): void;
                    decode(input?: ArrayBuffer | DataView | $TypedArray, options?: { stream?: boolean, ... }): string;
                    encoding: string;
                    fatal: boolean;
                    ignoreBOM: boolean;
                  }
                */
        TextDecoder: false,

        /*
                declare class TextEncoder {
                    constructor(): void;
                    encode(input?: string): Uint8Array;
                    encoding: string;
                  }
                */
        TextEncoder: false,
      },
    },

    vm: {
      commonjs: true,
      exports: {
        /*
                declare var Script: typeof vm$Script;
                */
        Script: false,

        /*
                declare function createContext(sandbox?: interface { [key: string]: any }, options?: vm$CreateContextOptions): vm$Context;
                */
        createContext: false,

        /*
                declare function isContext(sandbox: { [key: string]: any, ... }): boolean;
                */
        isContext: false,

        /*
                declare function runInContext(code: string, contextifiedSandbox: vm$Context, options?: vm$ScriptOptions | string): any;
                */
        runInContext: false,

        /*
                declare function runInDebugContext(code: string): any;
                */
        runInDebugContext: false,

        /*
                declare function runInNewContext(code: string, sandbox?: { [key: string]: any, ... }, options?: vm$ScriptOptions | string): any;
                */
        runInNewContext: false,

        /*
                declare function runInThisContext(code: string, options?: vm$ScriptOptions | string): any;
                */
        runInThisContext: false,

        /*
                declare function compileFunction(code: string, params: string[], options: vm$CompileFunctionOptions): Function;
                */
        compileFunction: false,
      },
    },

    zlib: {
      commonjs: true,
      exports: {
        /*
                declare var Z_NO_FLUSH: number;
                */
        Z_NO_FLUSH: false,

        /*
                declare var Z_PARTIAL_FLUSH: number;
                */
        Z_PARTIAL_FLUSH: false,

        /*
                declare var Z_SYNC_FLUSH: number;
                */
        Z_SYNC_FLUSH: false,

        /*
                declare var Z_FULL_FLUSH: number;
                */
        Z_FULL_FLUSH: false,

        /*
                declare var Z_FINISH: number;
                */
        Z_FINISH: false,

        /*
                declare var Z_BLOCK: number;
                */
        Z_BLOCK: false,

        /*
                declare var Z_TREES: number;
                */
        Z_TREES: false,

        /*
                declare var Z_OK: number;
                */
        Z_OK: false,

        /*
                declare var Z_STREAM_END: number;
                */
        Z_STREAM_END: false,

        /*
                declare var Z_NEED_DICT: number;
                */
        Z_NEED_DICT: false,

        /*
                declare var Z_ERRNO: number;
                */
        Z_ERRNO: false,

        /*
                declare var Z_STREAM_ERROR: number;
                */
        Z_STREAM_ERROR: false,

        /*
                declare var Z_DATA_ERROR: number;
                */
        Z_DATA_ERROR: false,

        /*
                declare var Z_MEM_ERROR: number;
                */
        Z_MEM_ERROR: false,

        /*
                declare var Z_BUF_ERROR: number;
                */
        Z_BUF_ERROR: false,

        /*
                declare var Z_VERSION_ERROR: number;
                */
        Z_VERSION_ERROR: false,

        /*
                declare var Z_NO_COMPRESSION: number;
                */
        Z_NO_COMPRESSION: false,

        /*
                declare var Z_BEST_SPEED: number;
                */
        Z_BEST_SPEED: false,

        /*
                declare var Z_BEST_COMPRESSION: number;
                */
        Z_BEST_COMPRESSION: false,

        /*
                declare var Z_DEFAULT_COMPRESSION: number;
                */
        Z_DEFAULT_COMPRESSION: false,

        /*
                declare var Z_FILTERED: number;
                */
        Z_FILTERED: false,

        /*
                declare var Z_HUFFMAN_ONLY: number;
                */
        Z_HUFFMAN_ONLY: false,

        /*
                declare var Z_RLE: number;
                */
        Z_RLE: false,

        /*
                declare var Z_FIXED: number;
                */
        Z_FIXED: false,

        /*
                declare var Z_DEFAULT_STRATEGY: number;
                */
        Z_DEFAULT_STRATEGY: false,

        /*
                declare var Z_BINARY: number;
                */
        Z_BINARY: false,

        /*
                declare var Z_TEXT: number;
                */
        Z_TEXT: false,

        /*
                declare var Z_ASCII: number;
                */
        Z_ASCII: false,

        /*
                declare var Z_UNKNOWN: number;
                */
        Z_UNKNOWN: false,

        /*
                declare var Z_DEFLATED: number;
                */
        Z_DEFLATED: false,

        /*
                declare var Z_NULL: number;
                */
        Z_NULL: false,

        /*
                declare var Z_DEFAULT_CHUNK: number;
                */
        Z_DEFAULT_CHUNK: false,

        /*
                declare var Z_DEFAULT_LEVEL: number;
                */
        Z_DEFAULT_LEVEL: false,

        /*
                declare var Z_DEFAULT_MEMLEVEL: number;
                */
        Z_DEFAULT_MEMLEVEL: false,

        /*
                declare var Z_DEFAULT_WINDOWBITS: number;
                */
        Z_DEFAULT_WINDOWBITS: false,

        /*
                declare var Z_MAX_CHUNK: number;
                */
        Z_MAX_CHUNK: false,

        /*
                declare var Z_MAX_LEVEL: number;
                */
        Z_MAX_LEVEL: false,

        /*
                declare var Z_MAX_MEMLEVEL: number;
                */
        Z_MAX_MEMLEVEL: false,

        /*
                declare var Z_MAX_WINDOWBITS: number;
                */
        Z_MAX_WINDOWBITS: false,

        /*
                declare var Z_MIN_CHUNK: number;
                */
        Z_MIN_CHUNK: false,

        /*
                declare var Z_MIN_LEVEL: number;
                */
        Z_MIN_LEVEL: false,

        /*
                declare var Z_MIN_MEMLEVEL: number;
                */
        Z_MIN_MEMLEVEL: false,

        /*
                declare var Z_MIN_WINDOWBITS: number;
                */
        Z_MIN_WINDOWBITS: false,

        /*
                declare var constants: {
                    Z_NO_FLUSH: number,
                    Z_PARTIAL_FLUSH: number,
                    Z_SYNC_FLUSH: number,
                    Z_FULL_FLUSH: number,
                    Z_FINISH: number,
                    Z_BLOCK: number,
                    Z_TREES: number,
                    Z_OK: number,
                    Z_STREAM_END: number,
                    Z_NEED_DICT: number,
                    Z_ERRNO: number,
                    Z_STREAM_ERROR: number,
                    Z_DATA_ERROR: number,
                    Z_MEM_ERROR: number,
                    Z_BUF_ERROR: number,
                    Z_VERSION_ERROR: number,
                    Z_NO_COMPRESSION: number,
                    Z_BEST_SPEED: number,
                    Z_BEST_COMPRESSION: number,
                    Z_DEFAULT_COMPRESSION: number,
                    Z_FILTERED: number,
                    Z_HUFFMAN_ONLY: number,
                    Z_RLE: number,
                    Z_FIXED: number,
                    Z_DEFAULT_STRATEGY: number,
                    Z_BINARY: number,
                    Z_TEXT: number,
                    Z_ASCII: number,
                    Z_UNKNOWN: number,
                    Z_DEFLATED: number,
                    Z_NULL: number,
                    Z_DEFAULT_CHUNK: number,
                    Z_DEFAULT_LEVEL: number,
                    Z_DEFAULT_MEMLEVEL: number,
                    Z_DEFAULT_WINDOWBITS: number,
                    Z_MAX_CHUNK: number,
                    Z_MAX_LEVEL: number,
                    Z_MAX_MEMLEVEL: number,
                    Z_MAX_WINDOWBITS: number,
                    Z_MIN_CHUNK: number,
                    Z_MIN_LEVEL: number,
                    Z_MIN_MEMLEVEL: number,
                    Z_MIN_WINDOWBITS: number,

                    BROTLI_DECODE: number,
                    BROTLI_ENCODE: number,
                    BROTLI_OPERATION_PROCESS: number,
                    BROTLI_OPERATION_FLUSH: number,
                    BROTLI_OPERATION_FINISH: number,
                    BROTLI_OPERATION_EMIT_METADATA: number,
                    BROTLI_PARAM_MODE: number,
                    BROTLI_MODE_GENERIC: number,
                    BROTLI_MODE_TEXT: number,
                    BROTLI_MODE_FONT: number,
                    BROTLI_DEFAULT_MODE: number,
                    BROTLI_PARAM_QUALITY: number,
                    BROTLI_MIN_QUALITY: number,
                    BROTLI_MAX_QUALITY: number,
                    BROTLI_DEFAULT_QUALITY: number,
                    BROTLI_PARAM_LGWIN: number,
                    BROTLI_MIN_WINDOW_BITS: number,
                    BROTLI_MAX_WINDOW_BITS: number,
                    BROTLI_LARGE_MAX_WINDOW_BITS: number,
                    BROTLI_DEFAULT_WINDOW: number,
                    BROTLI_PARAM_LGBLOCK: number,
                    BROTLI_MIN_INPUT_BLOCK_BITS: number,
                    BROTLI_MAX_INPUT_BLOCK_BITS: number,
                    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: number,
                    BROTLI_PARAM_SIZE_HINT: number,
                    BROTLI_PARAM_LARGE_WINDOW: number,
                    BROTLI_PARAM_NPOSTFIX: number,
                    BROTLI_PARAM_NDIRECT: number,
                    BROTLI_DECODER_RESULT_ERROR: number,
                    BROTLI_DECODER_RESULT_SUCCESS: number,
                    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: number,
                    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: number,
                    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: number,
                    BROTLI_DECODER_PARAM_LARGE_WINDOW: number,
                    BROTLI_DECODER_NO_ERROR: number,
                    BROTLI_DECODER_SUCCESS: number,
                    BROTLI_DECODER_NEEDS_MORE_INPUT: number,
                    BROTLI_DECODER_NEEDS_MORE_OUTPUT: number,
                    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: number,
                    BROTLI_DECODER_ERROR_FORMAT_RESERVED: number,
                    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: number,
                    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: number,
                    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: number,
                    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: number,
                    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: number,
                    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: number,
                    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: number,
                    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: number,
                    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: number,
                    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: number,
                    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: number,
                    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: number,
                    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: number,
                    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: number,
                    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: number,
                    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: number,
                    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: number,
                    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: number,
                    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: number,
                    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: number,
                    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: number,
                    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: number,
                    BROTLI_DECODER_ERROR_UNREACHABL: number,
                    ...
                  };
                */
        constants: false,

        /*
                declare var codes: {
                    Z_OK: number,
                    Z_STREAM_END: number,
                    Z_NEED_DICT: number,
                    Z_ERRNO: number,
                    Z_STREAM_ERROR: number,
                    Z_DATA_ERROR: number,
                    Z_MEM_ERROR: number,
                    Z_BUF_ERROR: number,
                    Z_VERSION_ERROR: number,
                    ...
                  };
                */
        codes: false,

        /*
                declare class Zlib extends stream$Duplex {
                    // TODO
                  }
                */
        Zlib: false,

        /*
                declare class BrotliCompress extends Zlib {}
                */
        BrotliCompress: false,

        /*
                declare class BrotliDecompress extends Zlib {}
                */
        BrotliDecompress: false,

        /*
                declare class Deflate extends Zlib {}
                */
        Deflate: false,

        /*
                declare class Inflate extends Zlib {}
                */
        Inflate: false,

        /*
                declare class Gzip extends Zlib {}
                */
        Gzip: false,

        /*
                declare class Gunzip extends Zlib {}
                */
        Gunzip: false,

        /*
                declare class DeflateRaw extends Zlib {}
                */
        DeflateRaw: false,

        /*
                declare class InflateRaw extends Zlib {}
                */
        InflateRaw: false,

        /*
                declare class Unzip extends Zlib {}
                */
        Unzip: false,

        /*
                declare function createBrotliCompress(options?: zlib$brotliOptions): BrotliCompress;
                */
        createBrotliCompress: false,

        /*
                declare function createBrotliDecompress(options?: zlib$brotliOptions): BrotliDecompress;
                */
        createBrotliDecompress: false,

        /*
                declare function createDeflate(options?: zlib$options): Deflate;
                */
        createDeflate: false,

        /*
                declare function createInflate(options?: zlib$options): Inflate;
                */
        createInflate: false,

        /*
                declare function createDeflateRaw(options?: zlib$options): DeflateRaw;
                */
        createDeflateRaw: false,

        /*
                declare function createInflateRaw(options?: zlib$options): InflateRaw;
                */
        createInflateRaw: false,

        /*
                declare function createGzip(options?: zlib$options): Gzip;
                */
        createGzip: false,

        /*
                declare function createGunzip(options?: zlib$options): Gunzip;
                */
        createGunzip: false,

        /*
                declare function createUnzip(options?: zlib$options): Unzip;
                */
        createUnzip: false,

        /*
                declare var brotliCompress: zlib$brotliAsyncFn;
                */
        brotliCompress: false,

        /*
                declare var brotliCompressSync: zlib$brotliSyncFn;
                */
        brotliCompressSync: false,

        /*
                declare var brotliDeompress: zlib$brotliAsyncFn;
                */
        brotliDeompress: false,

        /*
                declare var brotliDecompressSync: zlib$brotliSyncFn;
                */
        brotliDecompressSync: false,

        /*
                declare var deflate: zlib$asyncFn;
                */
        deflate: false,

        /*
                declare var deflateSync: zlib$syncFn;
                */
        deflateSync: false,

        /*
                declare var gzip: zlib$asyncFn;
                */
        gzip: false,

        /*
                declare var gzipSync: zlib$syncFn;
                */
        gzipSync: false,

        /*
                declare var deflateRaw: zlib$asyncFn;
                */
        deflateRaw: false,

        /*
                declare var deflateRawSync: zlib$syncFn;
                */
        deflateRawSync: false,

        /*
                declare var unzip: zlib$asyncFn;
                */
        unzip: false,

        /*
                declare var unzipSync: zlib$syncFn;
                */
        unzipSync: false,

        /*
                declare var inflate: zlib$asyncFn;
                */
        inflate: false,

        /*
                declare var inflateSync: zlib$syncFn;
                */
        inflateSync: false,

        /*
                declare var gunzip: zlib$asyncFn;
                */
        gunzip: false,

        /*
                declare var gunzipSync: zlib$syncFn;
                */
        gunzipSync: false,

        /*
                declare var inflateRaw: zlib$asyncFn;
                */
        inflateRaw: false,

        /*
                declare var inflateRawSync: zlib$syncFn;
                */
        inflateRawSync: false,
      },
    },

    assert: {
      commonjs: true,
      exports: {
        /*
                declare class AssertionError extends Error {}
                */
        AssertionError: false,

        /*
                declare type AssertStrict = {
                    (value: any, message?: string): void;
                    ok(value: any, message?: string): void;
                    fail(message?: string | Error): void;
                    // deprecated since v10.15
                    fail(actual: any, expected: any, message: string, operator: string): void;
                    equal(actual: any, expected: any, message?: string): void;
                    notEqual(actual: any, expected: any, message?: string): void;
                    deepEqual(actual: any, expected: any, message?: string): void;
                    notDeepEqual(actual: any, expected: any, message?: string): void;
                    throws(
                      block: Function,
                      error?: Function | RegExp | (err: any) => boolean,
                      message?: string
                    ): void;
                    doesNotThrow(block: Function, message?: string): void;
                    ifError(value: any): void;
                    AssertionError: typeof AssertionError;
                    strict: AssertStrict;
                    ...
                  }
                */
        AssertStrict: false,

        /*
                declare module.exports: {
                    (value: any, message?: string): void,
                    ok(value: any, message?: string): void,
                    fail(message?: string | Error): void,
                    // deprecated since v10.15
                    fail(actual: any, expected: any, message: string, operator: string): void,
                    equal(actual: any, expected: any, message?: string): void,
                    notEqual(actual: any, expected: any, message?: string): void,
                    deepEqual(actual: any, expected: any, message?: string): void,
                    notDeepEqual(actual: any, expected: any, message?: string): void,
                    strictEqual(actual: any, expected: any, message?: string): void,
                    notStrictEqual(actual: any, expected: any, message?: string): void,
                    deepStrictEqual(actual: any, expected: any, message?: string): void,
                    notDeepStrictEqual(actual: any, expected: any, message?: string): void,
                    throws(
                      block: Function,
                      error?: Function | RegExp | (err: any) => boolean,
                      message?: string
                    ): void,
                    doesNotThrow(block: Function, message?: string): void,
                    ifError(value: any): void,
                    AssertionError: typeof AssertionError,
                    strict: AssertStrict;
                    ...
                  }
                */
        default: false,
      },
    },

    v8: {
      commonjs: true,
      exports: {
        /*
                declare function getHeapStatistics() : HeapStatistics;
                */
        getHeapStatistics: false,

        /*
                declare function getHeapSpaceStatistics() : Array<HeapSpaceStatistics>
                */
        getHeapSpaceStatistics: false,

        /*
                declare function setFlagsFromString(flags: string) : void;
                */
        setFlagsFromString: false,
      },
    },

    repl: {
      commonjs: true,
      exports: {
        /*
                declare var REPL_MODE_MAGIC: $SymbolReplModeMagic;
                */
        REPL_MODE_MAGIC: false,

        /*
                declare var REPL_MODE_SLOPPY: $SymbolReplModeSloppy;
                */
        REPL_MODE_SLOPPY: false,

        /*
                declare var REPL_MODE_STRICT: $SymbolReplModeStrict;
                */
        REPL_MODE_STRICT: false,

        /*
                declare class REPLServer extends readline$Interface {
                    context: vm$Context;
                    defineCommand(command: string, options: repl$DefineCommandOptions): void;
                    displayPrompt(preserveCursor?: boolean): void;
                  }
                */
        REPLServer: false,

        /*
                declare function start(prompt: string): REPLServer;
                */
        /*
                declare function start(options: {
                    prompt?: string,
                    input?: stream$Readable,
                    output?: stream$Writable,
                    terminal?: boolean,
                    eval?: Function,
                    useColors?: boolean,
                    useGlobal?: boolean,
                    ignoreUndefined?: boolean,
                    writer?: (object: any, options?: util$InspectOptions) => string,
                    completer?: readline$InterfaceCompleter,
                    replMode?: $SymbolReplModeMagic | $SymbolReplModeSloppy | $SymbolReplModeStrict,
                    breakEvalOnSigint?: boolean,
                    ...
                  }): REPLServer;
                */
        start: false,

        /*
                declare class Recoverable extends SyntaxError {
                    constructor(err: Error): void;
                  }
                */
        Recoverable: false,
      },
    },
  },
} as RuleSet;
