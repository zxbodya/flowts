import { RuleSet } from '../../ruleTypes';

export default {
  globals: {
    /*
        lib/node.js:34:0

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
          readDoubleBE(offset: number, noAssert?: boolean): number;
          readDoubleLE(offset: number, noAssert?: boolean): number;
          readFloatBE(offset: number, noAssert?: boolean): number;
          readFloatLE(offset: number, noAssert?: boolean): number;
          readInt16BE(offset: number, noAssert?: boolean): number;
          readInt16LE(offset: number, noAssert?: boolean): number;
          readInt32BE(offset: number, noAssert?: boolean): number;
          readInt32LE(offset: number, noAssert?: boolean): number;
          readInt8(offset: number, noAssert?: boolean): number;
          readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
          readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
          readUInt16BE(offset: number, noAssert?: boolean): number;
          readUInt16LE(offset: number, noAssert?: boolean): number;
          readUInt32BE(offset: number, noAssert?: boolean): number;
          readUInt32LE(offset: number, noAssert?: boolean): number;
          readUInt8(offset: number, noAssert?: boolean): number;
          readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
          readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
          slice(start?: number, end?: number): this;
          swap16(): Buffer;
          swap32(): Buffer;
          swap64(): Buffer;
          toJSON(): buffer$ToJSONRet;
          toString(encoding?: buffer$Encoding, start?: number, end?: number): string;
          values(): Iterator<number>;
          write(string: string, offset?: number, length?: number, encoding?: buffer$Encoding): void;
          writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
          writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
          writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
          writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
          writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
          writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
          writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
          writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
          writeInt8(value: number, offset: number, noAssert?: boolean): number;
          writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
          writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
          writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
          writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
          writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
          writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
          writeUInt8(value: number, offset: number, noAssert?: boolean): number;
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
          static from(value: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
          static from(value: Iterable<number>): this;
          static isBuffer(obj: any): boolean;
          static isEncoding(encoding: string): boolean;
        }
        */
    Buffer(context) {},

    /*
        lib/node.js:146:0

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
    child_process$Error(context) {},

    /*
        lib/node.js:265:0

        declare class child_process$ChildProcess extends events$EventEmitter {
          channel: Object;
          connected: boolean;
          killed: boolean;
          pid: number;
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
      context.importFlow('child_process', 'ChildProcess');
    },

    /*
        lib/node.js:339:0

        declare class cluster$Worker extends events$EventEmitter {
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
    cluster$Worker(context) {},

    /*
        lib/node.js:390:0

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
    crypto$Cipher(context) {},

    /*
        lib/node.js:440:0

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
    crypto$ECDH(context) {},

    /*
        lib/node.js:467:0

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
    crypto$Decipher(context) {},

    /*
        lib/node.js:496:0

        declare class crypto$Hash extends stream$Duplex {
          digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
          digest(encoding: 'buffer'): Buffer;
          digest(encoding: void): Buffer;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary'): crypto$Hash;
        }
        */
    crypto$Hash(context) {},

    /*
        lib/node.js:504:0

        declare class crypto$Hmac extends stream$Duplex {
          digest(encoding: 'hex' | 'latin1' | 'binary' | 'base64'): string;
          digest(encoding: 'buffer'): Buffer;
          digest(encoding: void): Buffer;
          update(data: string | Buffer, input_encoding?: 'utf8' | 'ascii' | 'latin1' |
          'binary'): crypto$Hmac;
        }
        */
    crypto$Hmac(context) {},

    /*
        lib/node.js:517:0

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
      context.importFlow('crypto', 'Sign');
    },

    /*
        lib/node.js:532:0

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
      context.importFlow('crypto', 'Verify');
    },

    /*
        lib/node.js:673:0

        declare class dgram$Socket extends events$EventEmitter {
          addMembership(multicastAddress: string, multicastInterface?: string): void;
          address(): net$Socket$address;
          bind(port?: number, address?: string, callback?: () => void): void;
          close(): void;
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
    dgram$Socket(context) {},

    /*
        lib/node.js:805:0

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
      context.importFlow('events', 'EventEmitter');
    },

    /*
        lib/node.js:837:0

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
    domain$Domain(context) {},

    /*
        lib/node.js:1331:0

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
      context.importFlow('http', 'Agent');
    },

    /*
        lib/node.js:1347:0

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
        }
        */
    http$IncomingMessage(context) {
      context.importFlow('http', 'IncomingMessage');
    },

    /*
        lib/node.js:1360:0

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
      context.importFlow('http', 'ClientRequest');
    },

    /*
        lib/node.js:1374:0

        declare class http$ServerResponse extends stream$Writable {
          addTrailers(headers: { [key: string] : string, ... }): void;
          connection: net$Socket;
          finished: boolean;
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
      context.importFlow('http', 'ServerResponse');
    },

    /*
        lib/node.js:1396:0

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
          setTimeout(msecs: number, callback: Function): this;
          timeout: number;
        }
        */
    http$Server(context) {
      context.importFlow('http', 'Server');
    },

    /*
        lib/node.js:1422:0

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
          setTimeout(msecs: number, callback: Function): this;
          timeout: number;
        }
        */
    https$Server(context) {
      context.importFlow('https', 'Server');
    },

    /*
        lib/node.js:1551:0

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
      context.importFlow('net', 'Socket');
    },

    /*
        lib/node.js:1587:0

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
      context.importFlow('net', 'Server');
    },

    /*
        lib/node.js:1781:0

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
        }
        */
    readline$Interface(context) {
      context.importFlow('readline', 'Interface');
    },

    /*
        lib/node.js:1818:0

        declare class stream$Stream extends events$EventEmitter {}
        */
    stream$Stream(context) {
      context.importFlow('stream', 'Stream');
    },

    /*
        lib/node.js:1829:0

        declare class stream$Readable extends stream$Stream {
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
          _read(size?: number): void;
          _destroy(error: ?Error, callback: (error?: Error) => void): void;
          push(chunk: ?(Buffer | Uint8Array | string), encoding? : string): boolean;
        }
        */
    stream$Readable(context) {
      context.importFlow('stream', 'Readable');
    },

    /*
        lib/node.js:1866:0

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
      context.importFlow('stream', 'Writable');
    },

    /*
        lib/node.js:1902:0

        declare class stream$Duplex extends stream$Readable mixins stream$Writable {
          constructor(options?: duplexStreamOptions): void;
        }
        */
    stream$Duplex(context) {
      context.importFlow('stream', 'Duplex');
    },

    /*
        lib/node.js:1914:0

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
      context.importFlow('stream', 'Transform');
    },

    /*
        lib/node.js:1923:0

        declare class stream$PassThrough extends stream$Transform {}
        */
    stream$PassThrough(context) {
      context.importFlow('stream', 'PassThrough');
    },

    /*
        lib/node.js:1997:0

        declare class tty$ReadStream extends net$Socket {
          constructor(fd: number, options?: Object): void;
          isRaw : boolean;
          setRawMode(mode : boolean) : void;
          isTTY : true
        }
        */
    tty$ReadStream(context) {
      context.importFlow('tty', 'ReadStream');
    },

    /*
        lib/node.js:2003:0

        declare class tty$WriteStream extends net$Socket {
          constructor(fd: number) : void;
          columns : number;
          rows : number;
          isTTY : true
        }
        */
    tty$WriteStream(context) {
      context.importFlow('tty', 'WriteStream');
    },

    /*
        lib/node.js:2017:0

        declare class string_decoder$StringDecoder {
          constructor(encoding?: 'utf8' | 'ucs2' | 'utf16le' | 'base64'): void;
          end(): string;
          write(buffer: Buffer): string;
        }
        */
    string_decoder$StringDecoder(context) {
      context.importFlow('string_decoder', 'StringDecoder');
    },

    /*
        lib/node.js:2068:0

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
      context.importFlow('tls', 'TLSSocket');
    },

    /*
        lib/node.js:2095:0

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
      context.importFlow('tls', 'Server');
    },

    /*
        lib/node.js:2276:0

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
      context.importFlow('vm', 'Script');
    },

    /*
        lib/node.js:2287:0

        declare class vm$Context {}
        */
    vm$Context(context) {},

    /*
        lib/node.js:2524:0

        declare class $SymbolReplModeMagic mixins Symbol {}
        */
    $SymbolReplModeMagic(context) {},

    /*
        lib/node.js:2525:0

        declare class $SymbolReplModeSloppy mixins Symbol {}
        */
    $SymbolReplModeSloppy(context) {},

    /*
        lib/node.js:2526:0

        declare class $SymbolReplModeStrict mixins Symbol {}
        */
    $SymbolReplModeStrict(context) {},

    /*
        lib/node.js:2569:0

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
          env : { [key: string] : ?string, ... };
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
          exit(code? : number) : void;
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
    Process(context) {},

    /*
        lib/node.js:2644:0

        declare var process: Process;
        */
    process(context) {},

    /*
        lib/node.js:2646:0

        declare var __filename: string;
        */
    __filename(context) {},

    /*
        lib/node.js:2647:0

        declare var __dirname: string;
        */
    __dirname(context) {},

    /*
        lib/node.js:2649:0

        declare function setImmediate(callback: ((...args: Array<any>) => mixed), ...args: Array<any>): Object;
        */
    setImmediate(context) {},

    /*
        lib/node.js:2650:0

        declare function clearImmediate(immediateObject: any): Object;
        */
    clearImmediate(context) {},
  },

  modules: {
    buffer: {
      libs: [],

      exports: {
        /*
                lib/node.js:126:2

                declare var kMaxLength: number;
                */
        kMaxLength(context) {},

        /*
                lib/node.js:127:2

                declare var INSPECT_MAX_BYTES: number;
                */
        INSPECT_MAX_BYTES(context) {},

        /*
                lib/node.js:128:2

                declare function transcode(source: Buffer, fromEnc: buffer$Encoding, toEnc: buffer$Encoding): Buffer;
                */
        transcode(context) {},

        /*
                lib/node.js:129:2

                declare var Buffer: typeof global.Buffer;
                */
        Buffer(context) {},
      },
    },

    child_process: {
      libs: [],

      exports: {
        /*
                lib/node.js:288:2

                declare var ChildProcess: typeof child_process$ChildProcess;
                */
        ChildProcess(context) {},

        /*
                lib/node.js:290:2

                declare function exec(
                    command: string,
                    optionsOrCallback?: child_process$execOpts | child_process$execCallback,
                    callback?: child_process$execCallback
                  ): child_process$ChildProcess;
                */
        exec(context) {},

        /*
                lib/node.js:296:2

                declare function execSync(
                    command: string,
                    options: { encoding: buffer$NonBufferEncoding, ... } & child_process$execSyncOpts
                  ): string;
                */
        /*
                lib/node.js:301:2

                declare function execSync(
                    command: string,
                    options?: child_process$execSyncOpts
                  ): Buffer;
                */
        execSync(context) {},

        /*
                lib/node.js:306:2

                declare function execFile(
                    file: string,
                    argsOrOptionsOrCallback?:
                      Array<string> | child_process$execFileOpts | child_process$execFileCallback,
                    optionsOrCallback?: child_process$execFileOpts | child_process$execFileCallback,
                    callback?: child_process$execFileCallback
                  ): child_process$ChildProcess;
                */
        execFile(context) {},

        /*
                lib/node.js:314:2

                declare function execFileSync(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$execFileSyncOpts,
                    options?: child_process$execFileSyncOpts
                  ): Buffer | string;
                */
        execFileSync(context) {},

        /*
                lib/node.js:320:2

                declare function fork(
                    modulePath: string,
                    argsOrOptions?: Array<string> | child_process$forkOpts,
                    options?: child_process$forkOpts
                  ): child_process$ChildProcess;
                */
        fork(context) {},

        /*
                lib/node.js:326:2

                declare function spawn(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$spawnOpts,
                    options?: child_process$spawnOpts
                  ): child_process$ChildProcess;
                */
        spawn(context) {},

        /*
                lib/node.js:332:2

                declare function spawnSync(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$spawnSyncOpts,
                    options?: child_process$spawnSyncOpts
                  ): child_process$spawnSyncRet;
                */
        spawnSync(context) {},
      },
    },

    cluster: {
      libs: [],

      exports: {
        /*
                lib/node.js:364:2

                declare class Cluster extends events$EventEmitter {
                    isMaster: boolean;
                    isWorker: boolean;
                    settings: {
                      execArgv: Array<string>,
                      exec: string,
                      args: Array<string>,
                      silent: boolean,
                      stdio: Array<any>,
                      uid: number,
                      gid: number,
                      ...
                    };
                    worker: cluster$Worker;
                    workers: Object;

                    disconnect(callback?: () => void): void;
                    fork(env?: Object): cluster$Worker;
                    setupMaster(settings?: cluster$setupMasterOpts): void;
                  }
                */
        Cluster(context) {},

        /*
                lib/node.js:385:2

                declare module.exports: Cluster;
                */
        default(context) {},
      },
    },

    crypto: {
      libs: [],

      exports: {
        /*
                lib/node.js:555:2

                declare var DEFAULT_ENCODING: string;
                */
        DEFAULT_ENCODING(context) {},

        /*
                lib/node.js:557:2

                declare class Sign extends crypto$Sign {}
                */
        Sign(context) {},

        /*
                lib/node.js:558:2

                declare class Verify extends crypto$Verify {}
                */
        Verify(context) {},

        /*
                lib/node.js:560:2

                declare function createCipher(algorithm: string, password: string | Buffer): crypto$Cipher;
                */
        createCipher(context) {},

        /*
                lib/node.js:561:2

                declare function createCipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Cipher;
                */
        createCipheriv(context) {},

        /*
                lib/node.js:566:2

                declare function createCredentials(
                    details?: crypto$createCredentialsDetails
                  ): crypto$Credentials
                */
        createCredentials(context) {},

        /*
                lib/node.js:569:2

                declare function createDecipher(algorithm: string, password: string | Buffer): crypto$Decipher;
                */
        createDecipher(context) {},

        /*
                lib/node.js:570:2

                declare function createDecipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Decipher;
                */
        createDecipheriv(context) {},

        /*
                lib/node.js:575:2

                declare function createDiffieHellman(prime_length: number): crypto$DiffieHellman;
                */
        /*
                lib/node.js:576:2

                declare function createDiffieHellman(prime: number, encoding?: string): crypto$DiffieHellman;
                */
        createDiffieHellman(context) {},

        /*
                lib/node.js:577:2

                declare function createECDH(curveName: string): crypto$ECDH;
                */
        createECDH(context) {},

        /*
                lib/node.js:578:2

                declare function createHash(algorithm: string): crypto$Hash;
                */
        createHash(context) {},

        /*
                lib/node.js:579:2

                declare function createHmac(algorithm: string, key: string | Buffer): crypto$Hmac;
                */
        createHmac(context) {},

        /*
                lib/node.js:580:2

                declare function createSign(algorithm: string): crypto$Sign;
                */
        createSign(context) {},

        /*
                lib/node.js:581:2

                declare function createVerify(algorithm: string): crypto$Verify;
                */
        createVerify(context) {},

        /*
                lib/node.js:582:2

                declare function getCiphers(): Array<string>;
                */
        getCiphers(context) {},

        /*
                lib/node.js:583:2

                declare function getCurves(): Array<string>;
                */
        getCurves(context) {},

        /*
                lib/node.js:584:2

                declare function getDiffieHellman(group_name: string): crypto$DiffieHellman;
                */
        getDiffieHellman(context) {},

        /*
                lib/node.js:585:2

                declare function getHashes(): Array<string>;
                */
        getHashes(context) {},

        /*
                lib/node.js:586:2

                declare function pbkdf2(
                    password: string | Buffer,
                    salt: string | Buffer,
                    iterations: number,
                    keylen: number,
                    digestOrCallback: string | ((err: ?Error, derivedKey: Buffer) => void),
                    callback?: (err: ?Error, derivedKey: Buffer) => void
                  ): void;
                */
        pbkdf2(context) {},

        /*
                lib/node.js:594:2

                declare function pbkdf2Sync(
                    password: string | Buffer,
                    salt: string | Buffer,
                    iterations: number,
                    keylen: number,
                    digest?: string
                  ): Buffer;
                */
        pbkdf2Sync(context) {},

        /*
                lib/node.js:601:2

                declare function privateDecrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateDecrypt(context) {},

        /*
                lib/node.js:605:2

                declare function privateEncrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateEncrypt(context) {},

        /*
                lib/node.js:609:2

                declare function publicDecrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicDecrypt(context) {},

        /*
                lib/node.js:613:2

                declare function publicEncrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicEncrypt(context) {},

        /*
                lib/node.js:619:2

                declare function pseudoRandomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                lib/node.js:620:2

                declare function pseudoRandomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        pseudoRandomBytes(context) {},

        /*
                lib/node.js:626:2

                declare function randomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                lib/node.js:627:2

                declare function randomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        randomBytes(context) {},

        /*
                lib/node.js:631:2

                declare function randomFillSync(buffer: Buffer): void
                */
        /*
                lib/node.js:632:2

                declare function randomFillSync(buffer: Buffer, offset: number): void
                */
        /*
                lib/node.js:633:2

                declare function randomFillSync(
                    buffer: Buffer,
                    offset: number,
                    size: number
                  ): void
                */
        randomFillSync(context) {},

        /*
                lib/node.js:638:2

                declare function randomFill(
                    buffer: Buffer,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                lib/node.js:642:2

                declare function randomFill(
                    buffer: Buffer,
                    offset: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                lib/node.js:647:2

                declare function randomFill(
                    buffer: Buffer,
                    offset: number,
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        randomFill(context) {},

        /*
                lib/node.js:653:2

                declare function timingSafeEqual(
                    a: Buffer | $TypedArray | DataView,
                    b: Buffer | $TypedArray | DataView
                  ): boolean;
                */
        timingSafeEqual(context) {},
      },
    },

    dgram: {
      libs: [],

      exports: {
        /*
                lib/node.js:702:2

                declare function createSocket(
                    options: string | { type: string, ... },
                    callback?: () => void
                  ): dgram$Socket;
                */
        createSocket(context) {},
      },
    },

    dns: {
      libs: [],

      exports: {
        /*
                lib/node.js:709:2

                declare var ADDRGETNETWORKPARAMS: string;
                */
        ADDRGETNETWORKPARAMS(context) {},

        /*
                lib/node.js:710:2

                declare var BADFAMILY: string;
                */
        BADFAMILY(context) {},

        /*
                lib/node.js:711:2

                declare var BADFLAGS: string;
                */
        BADFLAGS(context) {},

        /*
                lib/node.js:712:2

                declare var BADHINTS: string;
                */
        BADHINTS(context) {},

        /*
                lib/node.js:713:2

                declare var BADQUERY: string;
                */
        BADQUERY(context) {},

        /*
                lib/node.js:714:2

                declare var BADNAME: string;
                */
        BADNAME(context) {},

        /*
                lib/node.js:715:2

                declare var BADRESP: string;
                */
        BADRESP(context) {},

        /*
                lib/node.js:716:2

                declare var BADSTR: string;
                */
        BADSTR(context) {},

        /*
                lib/node.js:717:2

                declare var CANCELLED: string;
                */
        CANCELLED(context) {},

        /*
                lib/node.js:718:2

                declare var CONNREFUSED: string;
                */
        CONNREFUSED(context) {},

        /*
                lib/node.js:719:2

                declare var DESTRUCTION: string;
                */
        DESTRUCTION(context) {},

        /*
                lib/node.js:720:2

                declare var EOF: string;
                */
        EOF(context) {},

        /*
                lib/node.js:721:2

                declare var FILE: string;
                */
        FILE(context) {},

        /*
                lib/node.js:722:2

                declare var FORMER: string;
                */
        FORMER(context) {},

        /*
                lib/node.js:723:2

                declare var LOADIPHLPAPI: string;
                */
        LOADIPHLPAPI(context) {},

        /*
                lib/node.js:724:2

                declare var NODATA: string;
                */
        NODATA(context) {},

        /*
                lib/node.js:725:2

                declare var NOMEM: string;
                */
        NOMEM(context) {},

        /*
                lib/node.js:726:2

                declare var NONAME: string;
                */
        NONAME(context) {},

        /*
                lib/node.js:727:2

                declare var NOTFOUND: string;
                */
        NOTFOUND(context) {},

        /*
                lib/node.js:728:2

                declare var NOTIMP: string;
                */
        NOTIMP(context) {},

        /*
                lib/node.js:729:2

                declare var NOTINITIALIZED: string;
                */
        NOTINITIALIZED(context) {},

        /*
                lib/node.js:730:2

                declare var REFUSED: string;
                */
        REFUSED(context) {},

        /*
                lib/node.js:731:2

                declare var SERVFAIL: string;
                */
        SERVFAIL(context) {},

        /*
                lib/node.js:732:2

                declare var TIMEOUT: string;
                */
        TIMEOUT(context) {},

        /*
                lib/node.js:733:2

                declare var ADDRCONFIG: number;
                */
        ADDRCONFIG(context) {},

        /*
                lib/node.js:734:2

                declare var V4MAPPED: number;
                */
        V4MAPPED(context) {},

        /*
                lib/node.js:736:2

                declare type LookupOptions = {
                    family?: number,
                    hints?: number,
                    verbatim?: boolean,
                    all?: boolean,
                    ...
                  };
                */
        LookupOptions(context) {},

        /*
                lib/node.js:744:2

                declare function lookup(
                    domain: string,
                    options: number | LookupOptions,
                    callback: (err: ?Error, address: string, family: number) => void
                  ): void;
                */
        /*
                lib/node.js:749:2

                declare function lookup(
                    domain: string,
                    callback: (err: ?Error, address: string, family: number) => void
                  ): void;
                */
        lookup(context) {},

        /*
                lib/node.js:754:2

                declare function resolve(
                    domain: string,
                    rrtype?: string,
                    callback?: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve(context) {},

        /*
                lib/node.js:760:2

                declare function resolve4(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve4(context) {},

        /*
                lib/node.js:765:2

                declare function resolve6(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve6(context) {},

        /*
                lib/node.js:770:2

                declare function resolveCname(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveCname(context) {},

        /*
                lib/node.js:775:2

                declare function resolveMx(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveMx(context) {},

        /*
                lib/node.js:780:2

                declare function resolveNs(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveNs(context) {},

        /*
                lib/node.js:785:2

                declare function resolveSrv(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveSrv(context) {},

        /*
                lib/node.js:790:2

                declare function resolveTxt(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveTxt(context) {},

        /*
                lib/node.js:795:2

                declare function reverse(
                    ip: string,
                    callback: (err: ?Error, domains: Array<any>) => void
                  ): void;
                */
        reverse(context) {},

        /*
                lib/node.js:799:2

                declare function timingSafeEqual(
                    a: Buffer | $TypedArray | DataView,
                    b: Buffer | $TypedArray | DataView
                  ): boolean;
                */
        timingSafeEqual(context) {},
      },
    },

    events: {
      libs: [],

      exports: {
        /*
                lib/node.js:830:2

                declare class EventEmitter extends events$EventEmitter {
                    static EventEmitter: typeof EventEmitter;
                  }
                */
        EventEmitter(context) {},

        /*
                lib/node.js:834:2

                declare module.exports: typeof EventEmitter;
                */
        default(context) {},
      },
    },

    domain: {
      libs: [],

      exports: {
        /*
                lib/node.js:851:2

                declare function create(): domain$Domain;
                */
        create(context) {},
      },
    },

    fs: {
      libs: [],

      exports: {
        /*
                lib/node.js:855:2

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
        Stats(context) {},

        /*
                lib/node.js:884:2

                declare class FSWatcher extends events$EventEmitter {
                    close(): void
                  }
                */
        FSWatcher(context) {},

        /*
                lib/node.js:888:2

                declare class ReadStream extends stream$Readable {
                    close(): void
                  }
                */
        ReadStream(context) {},

        /*
                lib/node.js:892:2

                declare class WriteStream extends stream$Writable {
                    close(): void
                  }
                */
        WriteStream(context) {},

        /*
                lib/node.js:896:2

                declare function rename(oldPath: string, newPath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rename(context) {},

        /*
                lib/node.js:897:2

                declare function renameSync(oldPath: string, newPath: string): void;
                */
        renameSync(context) {},

        /*
                lib/node.js:898:2

                declare function ftruncate(fd: number, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        ftruncate(context) {},

        /*
                lib/node.js:899:2

                declare function ftruncateSync(fd: number, len: number): void;
                */
        ftruncateSync(context) {},

        /*
                lib/node.js:900:2

                declare function truncate(path: string, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        truncate(context) {},

        /*
                lib/node.js:901:2

                declare function truncateSync(path: string, len: number): void;
                */
        truncateSync(context) {},

        /*
                lib/node.js:902:2

                declare function chown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        chown(context) {},

        /*
                lib/node.js:903:2

                declare function chownSync(path: string, uid: number, gid: number): void;
                */
        chownSync(context) {},

        /*
                lib/node.js:904:2

                declare function fchown(fd: number, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fchown(context) {},

        /*
                lib/node.js:905:2

                declare function fchownSync(fd: number, uid: number, gid: number): void;
                */
        fchownSync(context) {},

        /*
                lib/node.js:906:2

                declare function lchown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        lchown(context) {},

        /*
                lib/node.js:907:2

                declare function lchownSync(path: string, uid: number, gid: number): void;
                */
        lchownSync(context) {},

        /*
                lib/node.js:908:2

                declare function chmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        chmod(context) {},

        /*
                lib/node.js:909:2

                declare function chmodSync(path: string, mode: number | string): void;
                */
        chmodSync(context) {},

        /*
                lib/node.js:910:2

                declare function fchmod(fd: number, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        fchmod(context) {},

        /*
                lib/node.js:911:2

                declare function fchmodSync(fd: number, mode: number | string): void;
                */
        fchmodSync(context) {},

        /*
                lib/node.js:912:2

                declare function lchmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        lchmod(context) {},

        /*
                lib/node.js:913:2

                declare function lchmodSync(path: string, mode: number | string): void;
                */
        lchmodSync(context) {},

        /*
                lib/node.js:914:2

                declare function stat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        stat(context) {},

        /*
                lib/node.js:915:2

                declare function statSync(path: string): Stats;
                */
        statSync(context) {},

        /*
                lib/node.js:916:2

                declare function fstat(fd: number, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        fstat(context) {},

        /*
                lib/node.js:917:2

                declare function fstatSync(fd: number): Stats;
                */
        fstatSync(context) {},

        /*
                lib/node.js:918:2

                declare function lstat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        lstat(context) {},

        /*
                lib/node.js:919:2

                declare function lstatSync(path: string): Stats;
                */
        lstatSync(context) {},

        /*
                lib/node.js:920:2

                declare function link(srcpath: string, dstpath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        link(context) {},

        /*
                lib/node.js:921:2

                declare function linkSync(srcpath: string, dstpath: string): void;
                */
        linkSync(context) {},

        /*
                lib/node.js:922:2

                declare function symlink(srcpath: string, dtspath: string, type?: string, callback?: (err: ?ErrnoError) => void): void;
                */
        symlink(context) {},

        /*
                lib/node.js:923:2

                declare function symlinkSync(srcpath: string, dstpath: string, type: string): void;
                */
        symlinkSync(context) {},

        /*
                lib/node.js:924:2

                declare function readlink(path: string, callback: (err: ?ErrnoError, linkString: string) => void): void;
                */
        readlink(context) {},

        /*
                lib/node.js:925:2

                declare function readlinkSync(path: string): string;
                */
        readlinkSync(context) {},

        /*
                lib/node.js:926:2

                declare function realpath(path: string, cache?: Object, callback?: (err: ?ErrnoError, resolvedPath: string) => void): void;
                */
        realpath(context) {},

        /*
                lib/node.js:927:2

                declare function realpathSync(path: string, cache?: Object): string;
                */
        realpathSync(context) {},

        /*
                lib/node.js:928:2

                declare function unlink(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        unlink(context) {},

        /*
                lib/node.js:929:2

                declare function unlinkSync(path: string): void;
                */
        unlinkSync(context) {},

        /*
                lib/node.js:930:2

                declare function rmdir(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rmdir(context) {},

        /*
                lib/node.js:931:2

                declare function rmdirSync(path: string): void;
                */
        rmdirSync(context) {},

        /*
                lib/node.js:932:2

                declare function mkdir(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }, callback?: (err: ?ErrnoError) => void): void;
                */
        mkdir(context) {},

        /*
                lib/node.js:937:2

                declare function mkdirSync(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }): void;
                */
        mkdirSync(context) {},

        /*
                lib/node.js:942:2

                declare function mkdtemp(prefix: string, callback: (err: ?ErrnoError, folderPath: string) => void): void;
                */
        mkdtemp(context) {},

        /*
                lib/node.js:943:2

                declare function mkdtempSync(prefix: string): string;
                */
        mkdtempSync(context) {},

        /*
                lib/node.js:944:2

                declare function readdir(
                    path: string,
                    options: string | { encoding: string, ... },
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        /*
                lib/node.js:949:2

                declare function readdir(
                    path: string,
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        readdir(context) {},

        /*
                lib/node.js:953:2

                declare function readdirSync(
                    path: string,
                    options?: string | { encoding: string, ... }
                  ): Array<string>;
                */
        readdirSync(context) {},

        /*
                lib/node.js:957:2

                declare function close(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        close(context) {},

        /*
                lib/node.js:958:2

                declare function closeSync(fd: number): void;
                */
        closeSync(context) {},

        /*
                lib/node.js:959:2

                declare function open(
                    path: string | Buffer | URL,
                    flags: string | number,
                    mode: number,
                    callback: (err: ?ErrnoError, fd: number) => void
                  ): void;
                */
        /*
                lib/node.js:965:2

                declare function open(
                    path: string | Buffer | URL,
                    flags: string | number,
                    callback: (err: ?ErrnoError, fd: number) => void
                  ): void;
                */
        open(context) {},

        /*
                lib/node.js:970:2

                declare function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
                */
        openSync(context) {},

        /*
                lib/node.js:971:2

                declare function utimes(path: string, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        utimes(context) {},

        /*
                lib/node.js:972:2

                declare function utimesSync(path: string, atime: number, mtime: number): void;
                */
        utimesSync(context) {},

        /*
                lib/node.js:973:2

                declare function futimes(fd: number, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        futimes(context) {},

        /*
                lib/node.js:974:2

                declare function futimesSync(fd: number, atime: number, mtime: number): void;
                */
        futimesSync(context) {},

        /*
                lib/node.js:975:2

                declare function fsync(fd: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fsync(context) {},

        /*
                lib/node.js:976:2

                declare function fsyncSync(fd: number): void;
                */
        fsyncSync(context) {},

        /*
                lib/node.js:977:2

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
                lib/node.js:985:2

                declare function write(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                lib/node.js:992:2

                declare function write(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                lib/node.js:998:2

                declare function write(
                    fd: number,
                    buffer: Buffer,
                    callback: (err: ?ErrnoError, write: number, buf: Buffer) => void
                  ): void;
                */
        /*
                lib/node.js:1003:2

                declare function write(
                    fd: number,
                    data: string,
                    position: number,
                    encoding: string,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        /*
                lib/node.js:1010:2

                declare function write(
                    fd: number,
                    data: string,
                    position: number,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        /*
                lib/node.js:1016:2

                declare function write(
                    fd: number,
                    data: string,
                    callback: (err: ?ErrnoError, write: number, str: string) => void
                  ): void;
                */
        write(context) {},

        /*
                lib/node.js:1021:2

                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: number,
                  ): number;
                */
        /*
                lib/node.js:1028:2

                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                  ): number;
                */
        /*
                lib/node.js:1034:2

                declare function writeSync(
                    fd: number,
                    buffer: Buffer,
                    offset?: number,
                  ): number;
                */
        /*
                lib/node.js:1039:2

                declare function writeSync(
                    fd: number,
                    str: string,
                    position: number,
                    encoding: string,
                  ): number;
                */
        /*
                lib/node.js:1045:2

                declare function writeSync(
                    fd: number,
                    str: string,
                    position?: number,
                  ): number;
                */
        writeSync(context) {},

        /*
                lib/node.js:1050:2

                declare function read(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: ?number,
                    callback: (err: ?ErrnoError, bytesRead: number, buffer: Buffer) => void
                  ): void;
                */
        read(context) {},

        /*
                lib/node.js:1058:2

                declare function readSync(
                    fd: number,
                    buffer: Buffer,
                    offset: number,
                    length: number,
                    position: number
                  ): number;
                */
        readSync(context) {},

        /*
                lib/node.js:1065:2

                declare function readFile(
                    path: string | Buffer | URL | number,
                    callback: (err: ?ErrnoError, data: Buffer) => void
                  ): void;
                */
        /*
                lib/node.js:1069:2

                declare function readFile(
                    path: string | Buffer | URL | number,
                    encoding: string,
                    callback: (err: ?ErrnoError, data: string) => void
                  ): void;
                */
        /*
                lib/node.js:1074:2

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
                lib/node.js:1083:2

                declare function readFile(
                    path: string | Buffer | URL | number,
                    options: { flag?: string, ... },
                    callback: (err: ?ErrnoError, data: Buffer) => void
                  ): void;
                */
        readFile(context) {},

        /*
                lib/node.js:1088:2

                declare function readFileSync(
                    path: string | Buffer | URL | number
                  ): Buffer;
                */
        /*
                lib/node.js:1091:2

                declare function readFileSync(
                    path: string | Buffer | URL | number,
                    encoding: string
                  ): string;
                */
        /*
                lib/node.js:1095:2

                declare function readFileSync(path: string | Buffer | URL | number, options: {
                    encoding: string,
                    flag?: string,
                    ...
                  }): string;
                */
        /*
                lib/node.js:1100:2

                declare function readFileSync(path: string | Buffer | URL | number, options: {
                    encoding?: void,
                    flag?: string,
                    ...
                  }): Buffer;
                */
        readFileSync(context) {},

        /*
                lib/node.js:1105:2

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
                lib/node.js:1116:2

                declare function writeFile(
                    filename: string | Buffer | number,
                    data: Buffer | string,
                    callback?: (err: ?ErrnoError) => void
                  ): void;
                */
        writeFile(context) {},

        /*
                lib/node.js:1121:2

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
        writeFileSync(context) {},

        /*
                lib/node.js:1131:2

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
                lib/node.js:1142:2

                declare function appendFile(
                    filename: string | Buffer | number,
                    data: string | Buffer,
                    callback: (err: ?ErrnoError) => void
                  ): void;
                */
        appendFile(context) {},

        /*
                lib/node.js:1147:2

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
        appendFileSync(context) {},

        /*
                lib/node.js:1157:2

                declare function watchFile(filename: string, options?: Object, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        watchFile(context) {},

        /*
                lib/node.js:1158:2

                declare function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        unwatchFile(context) {},

        /*
                lib/node.js:1159:2

                declare function watch(filename: string, options?: Object, listener?: (event: string, filename: string) => void): FSWatcher;
                */
        watch(context) {},

        /*
                lib/node.js:1160:2

                declare function exists(path: string, callback?: (exists: boolean) => void): void;
                */
        exists(context) {},

        /*
                lib/node.js:1161:2

                declare function existsSync(path: string): boolean;
                */
        existsSync(context) {},

        /*
                lib/node.js:1162:2

                declare function access(path: string, mode?: number, callback?: (err: ?ErrnoError) => void): void;
                */
        access(context) {},

        /*
                lib/node.js:1163:2

                declare function accessSync(path: string, mode?: number): void;
                */
        accessSync(context) {},

        /*
                lib/node.js:1164:2

                declare function createReadStream(path: string, options?: Object): ReadStream;
                */
        createReadStream(context) {},

        /*
                lib/node.js:1165:2

                declare function createWriteStream(path: string, options?: Object): WriteStream;
                */
        createWriteStream(context) {},

        /*
                lib/node.js:1166:2

                declare function fdatasync(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        fdatasync(context) {},

        /*
                lib/node.js:1167:2

                declare function fdatasyncSync(fd: number): void;
                */
        fdatasyncSync(context) {},

        /*
                lib/node.js:1168:2

                declare function copyFile(src: string, dest: string, flags?: number, callback: (err: ErrnoError) => void): void;
                */
        copyFile(context) {},

        /*
                lib/node.js:1169:2

                declare function copyFileSync(src: string, dest: string, flags?: number): void;
                */
        copyFileSync(context) {},

        /*
                lib/node.js:1171:2

                declare var F_OK: number;
                */
        F_OK(context) {},

        /*
                lib/node.js:1172:2

                declare var R_OK: number;
                */
        R_OK(context) {},

        /*
                lib/node.js:1173:2

                declare var W_OK: number;
                */
        W_OK(context) {},

        /*
                lib/node.js:1174:2

                declare var X_OK: number;
                */
        X_OK(context) {},

        /*
                lib/node.js:1177:2

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
        constants(context) {},

        /*
                lib/node.js:1224:2

                declare type BufferEncoding =
                    | 'buffer'
                    | { encoding: 'buffer', ... };
                */
        BufferEncoding(context) {},

        /*
                lib/node.js:1227:2

                declare type EncodingOptions = { encoding?: string, ... };
                */
        EncodingOptions(context) {},

        /*
                lib/node.js:1228:2

                declare type EncodingFlag = EncodingOptions & { flag?: string, ... };
                */
        EncodingFlag(context) {},

        /*
                lib/node.js:1229:2

                declare type WriteOptions = EncodingFlag & { mode?: number, ... };
                */
        WriteOptions(context) {},

        /*
                lib/node.js:1230:2

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
        FileHandle(context) {},

        /*
                lib/node.js:1257:2

                declare type FSPromisePath = string | Buffer | URL;
                */
        FSPromisePath(context) {},

        /*
                lib/node.js:1258:2

                declare class FSPromise {
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
                    mkdir(path: FSPromisePath, mode?: number): Promise<void>,
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
                    readFile(path: FSPromisePath | FileHandle, options: string): Promise<string>,
                    readFile(path: FSPromisePath | FileHandle, options?: EncodingFlag): Promise<Buffer>,
                    readlink(path: FSPromisePath, options: BufferEncoding): Promise<Buffer>,
                    readlink(path: FSPromisePath, options?: string | EncodingOptions): Promise<string>,
                    realpath(path: FSPromisePath, options: BufferEncoding): Promise<Buffer>,
                    realpath(path: FSPromisePath, options?: string | EncodingOptions): Promise<string>,
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
                  }
                */
        FSPromise(context) {},

        /*
                lib/node.js:1320:2

                declare var promises: FSPromise;
                */
        promises(context) {},
      },
    },

    http: {
      libs: [],

      exports: {
        /*
                lib/node.js:1471:2

                declare class Server extends http$Server {}
                */
        Server(context) {},

        /*
                lib/node.js:1472:2

                declare class Agent extends http$Agent<net$Socket> {
                    createConnection(options: net$connectOptions, callback?: Function): net$Socket;
                  }
                */
        Agent(context) {},

        /*
                lib/node.js:1475:2

                declare class ClientRequest extends http$ClientRequest<net$Socket> {}
                */
        ClientRequest(context) {},

        /*
                lib/node.js:1476:2

                declare class IncomingMessage extends http$IncomingMessage<net$Socket> {}
                */
        IncomingMessage(context) {},

        /*
                lib/node.js:1477:2

                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse(context) {},

        /*
                lib/node.js:1479:2

                declare function createServer(
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer(context) {},

        /*
                lib/node.js:1482:2

                declare function request(
                    options: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                lib/node.js:1486:2

                declare function request(
                    url: string,
                    options?: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        request(context) {},

        /*
                lib/node.js:1491:2

                declare function get(
                    options: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                lib/node.js:1495:2

                declare function get(
                    url: string,
                    options?: http$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        get(context) {},

        /*
                lib/node.js:1501:2

                declare var METHODS: Array<string>;
                */
        METHODS(context) {},

        /*
                lib/node.js:1502:2

                declare var STATUS_CODES: { [key: number]: string, ... };
                */
        STATUS_CODES(context) {},

        /*
                lib/node.js:1503:2

                declare var globalAgent: Agent;
                */
        globalAgent(context) {},
      },
    },

    https: {
      libs: [],

      exports: {
        /*
                lib/node.js:1514:2

                declare class Server extends https$Server {}
                */
        Server(context) {},

        /*
                lib/node.js:1515:2

                declare class Agent extends http$Agent<tls$TLSSocket> {
                    createConnection(port: ?number, host: ?string, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(port: ?number, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(options: tls$connectOptions): tls$TLSSocket;
                  }
                */
        Agent(context) {},

        /*
                lib/node.js:1521:2

                declare class ClientRequest extends http$ClientRequest<tls$TLSSocket> {}
                */
        ClientRequest(context) {},

        /*
                lib/node.js:1522:2

                declare class IncomingMessage extends http$IncomingMessage<tls$TLSSocket> {}
                */
        IncomingMessage(context) {},

        /*
                lib/node.js:1523:2

                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse(context) {},

        /*
                lib/node.js:1525:2

                declare function createServer(
                    options: Object,
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer(context) {},

        /*
                lib/node.js:1529:2

                declare function request(
                    options: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                lib/node.js:1533:2

                declare function request(
                    url: string,
                    options?: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        request(context) {},

        /*
                lib/node.js:1538:2

                declare function get(
                    options: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        /*
                lib/node.js:1542:2

                declare function get(
                    url: string,
                    options?: https$requestOptions,
                    callback?: (response: IncomingMessage) => void
                  ): ClientRequest;
                */
        get(context) {},

        /*
                lib/node.js:1548:2

                declare var globalAgent: Agent;
                */
        globalAgent(context) {},
      },
    },

    net: {
      libs: [],

      exports: {
        /*
                lib/node.js:1619:2

                declare class Server extends net$Server {}
                */
        Server(context) {},

        /*
                lib/node.js:1620:2

                declare class Socket extends net$Socket {}
                */
        Socket(context) {},

        /*
                lib/node.js:1622:2

                declare function isIP(input: string): number;
                */
        isIP(context) {},

        /*
                lib/node.js:1623:2

                declare function isIPv4(input: string): boolean;
                */
        isIPv4(context) {},

        /*
                lib/node.js:1624:2

                declare function isIPv6(input: string): boolean;
                */
        isIPv6(context) {},

        /*
                lib/node.js:1627:2

                declare type connectionListener = (socket: Socket) => any;
                */
        connectionListener(context) {},

        /*
                lib/node.js:1628:2

                declare function createServer(
                    options?: {
                      allowHalfOpen?: boolean,
                      pauseOnConnect?: boolean,
                      ...
                    } | connectionListener,
                    connectionListener?: connectionListener,
                  ): Server;
                */
        createServer(context) {},

        /*
                lib/node.js:1637:2

                declare type connectListener = () => any;
                */
        connectListener(context) {},

        /*
                lib/node.js:1638:2

                declare function connect(
                    pathOrPortOrOptions:  string | number | net$connectOptions,
                    hostOrConnectListener?: string | connectListener,
                    connectListener?: connectListener,
                  ): Socket;
                */
        connect(context) {},

        /*
                lib/node.js:1644:2

                declare function createConnection(
                    pathOrPortOrOptions:  string | number | net$connectOptions,
                    hostOrConnectListener?: string | connectListener,
                    connectListener?: connectListener,
                  ): Socket;
                */
        createConnection(context) {},
      },
    },

    os: {
      libs: [],

      exports: {
        /*
                lib/node.js:1693:2

                declare function arch(): "x64"|"arm"|"ia32";
                */
        arch(context) {},

        /*
                lib/node.js:1694:2

                declare function cpus(): Array<os$CPU>;
                */
        cpus(context) {},

        /*
                lib/node.js:1695:2

                declare function endianness(): "BE"|"LE";
                */
        endianness(context) {},

        /*
                lib/node.js:1696:2

                declare function freemem(): number;
                */
        freemem(context) {},

        /*
                lib/node.js:1697:2

                declare function homedir(): string;
                */
        homedir(context) {},

        /*
                lib/node.js:1698:2

                declare function hostname(): string;
                */
        hostname(context) {},

        /*
                lib/node.js:1699:2

                declare function loadavg(): [number, number, number];
                */
        loadavg(context) {},

        /*
                lib/node.js:1700:2

                declare function networkInterfaces(): { [ifName: string]: Array<os$NetIFAddr>, ... };
                */
        networkInterfaces(context) {},

        /*
                lib/node.js:1701:2

                declare function platform(): string;
                */
        platform(context) {},

        /*
                lib/node.js:1702:2

                declare function release(): string;
                */
        release(context) {},

        /*
                lib/node.js:1703:2

                declare function tmpdir(): string;
                */
        tmpdir(context) {},

        /*
                lib/node.js:1704:2

                declare function totalmem(): number;
                */
        totalmem(context) {},

        /*
                lib/node.js:1705:2

                declare function type(): string;
                */
        type(context) {},

        /*
                lib/node.js:1706:2

                declare function uptime(): number;
                */
        uptime(context) {},

        /*
                lib/node.js:1707:2

                declare function userInfo(options: { encoding: 'buffer', ... }): os$UserInfo$buffer;
                */
        /*
                lib/node.js:1708:2

                declare function userInfo(options?: { encoding: 'utf8', ... }): os$UserInfo$string;
                */
        userInfo(context) {},

        /*
                lib/node.js:1709:2

                declare var EOL: string;
                */
        EOL(context) {},
      },
    },

    path: {
      libs: [],

      exports: {
        /*
                lib/node.js:1713:2

                declare function normalize(path: string): string;
                */
        normalize(context) {},

        /*
                lib/node.js:1714:2

                declare function join(...parts: Array<string>): string;
                */
        join(context) {},

        /*
                lib/node.js:1715:2

                declare function resolve(...parts: Array<string>): string;
                */
        resolve(context) {},

        /*
                lib/node.js:1716:2

                declare function isAbsolute(path: string): boolean;
                */
        isAbsolute(context) {},

        /*
                lib/node.js:1717:2

                declare function relative(from: string, to: string): string;
                */
        relative(context) {},

        /*
                lib/node.js:1718:2

                declare function dirname(path: string): string;
                */
        dirname(context) {},

        /*
                lib/node.js:1719:2

                declare function basename(path: string, ext?: string): string;
                */
        basename(context) {},

        /*
                lib/node.js:1720:2

                declare function extname(path: string): string;
                */
        extname(context) {},

        /*
                lib/node.js:1721:2

                declare var sep: string;
                */
        sep(context) {},

        /*
                lib/node.js:1722:2

                declare var delimiter: string;
                */
        delimiter(context) {},

        /*
                lib/node.js:1723:2

                declare function parse(pathString: string): {
                    root: string,
                    dir: string,
                    base: string,
                    ext: string,
                    name: string,
                    ...
                  };
                */
        parse(context) {},

        /*
                lib/node.js:1731:2

                declare function format(pathObject: {
                    root?: string,
                    dir?: string,
                    base?: string,
                    ext?: string,
                    name?: string,
                    ...
                  }): string;
                */
        format(context) {},

        /*
                lib/node.js:1739:2

                declare var posix: any;
                */
        posix(context) {},

        /*
                lib/node.js:1740:2

                declare var win32: any;
                */
        win32(context) {},
      },
    },

    punycode: {
      libs: [],

      exports: {
        /*
                lib/node.js:1744:2

                declare function decode(string: string): string;
                */
        decode(context) {},

        /*
                lib/node.js:1745:2

                declare function encode(string: string): string;
                */
        encode(context) {},

        /*
                lib/node.js:1746:2

                declare function toASCII(domain: string): string;
                */
        toASCII(context) {},

        /*
                lib/node.js:1747:2

                declare function toUnicode(domain: string): string;
                */
        toUnicode(context) {},

        /*
                lib/node.js:1748:2

                declare var ucs2: {
                    decode: (str: string) => Array<number>,
                    encode: (codePoints: Array<number>) => string,
                    ...
                  };
                */
        ucs2(context) {},

        /*
                lib/node.js:1753:2

                declare var version : string;
                */
        version(context) {},
      },
    },

    querystring: {
      libs: [],

      exports: {
        /*
                lib/node.js:1757:2

                declare function stringify(
                    obj: Object,
                    separator?: string,
                    equal?: string,
                    options?: { encodeURIComponent?: (str: string) => string, ... }
                  ): string;
                */
        stringify(context) {},

        /*
                lib/node.js:1763:2

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
        parse(context) {},

        /*
                lib/node.js:1773:2

                declare function escape(str: string): string;
                */
        escape(context) {},

        /*
                lib/node.js:1774:2

                declare function unescape(str: string, decodeSpaces?: boolean): string;
                */
        unescape(context) {},
      },
    },

    readline: {
      libs: [],

      exports: {
        /*
                lib/node.js:1798:2

                declare var Interface : typeof readline$Interface;
                */
        Interface(context) {},

        /*
                lib/node.js:1799:2

                declare function clearLine(stream: stream$Stream, dir: -1 | 1 | 0): void;
                */
        clearLine(context) {},

        /*
                lib/node.js:1800:2

                declare function clearScreenDown(stream: stream$Stream): void;
                */
        clearScreenDown(context) {},

        /*
                lib/node.js:1801:2

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
        createInterface(context) {},

        /*
                lib/node.js:1813:2

                declare function cursorTo(stream: stream$Stream, x?: number, y?: number): void;
                */
        cursorTo(context) {},

        /*
                lib/node.js:1814:2

                declare function moveCursor(stream: stream$Stream, dx: number, dy: number): void;
                */
        moveCursor(context) {},

        /*
                lib/node.js:1815:2

                declare function emitKeypressEvents(stream: stream$Stream, readlineInterface?: readline$Interface): void;
                */
        emitKeypressEvents(context) {},
      },
    },

    stream: {
      libs: [],

      exports: {
        /*
                lib/node.js:1926:2

                declare var Stream : typeof stream$Stream
                */
        Stream(context) {},

        /*
                lib/node.js:1927:2

                declare var Readable : typeof stream$Readable
                */
        Readable(context) {},

        /*
                lib/node.js:1928:2

                declare var Writable : typeof stream$Writable
                */
        Writable(context) {},

        /*
                lib/node.js:1929:2

                declare var Duplex : typeof stream$Duplex
                */
        Duplex(context) {},

        /*
                lib/node.js:1930:2

                declare var Transform : typeof stream$Transform
                */
        Transform(context) {},

        /*
                lib/node.js:1931:2

                declare var PassThrough : typeof stream$PassThrough
                */
        PassThrough(context) {},

        /*
                lib/node.js:1932:2

                declare function finished(
                    stream: stream$Stream,
                    callback: (error?: Error) => void,
                  ): () => void;
                */
        /*
                lib/node.js:1936:2

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
        finished(context) {},

        /*
                lib/node.js:1946:2

                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                lib/node.js:1951:2

                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                lib/node.js:1957:2

                declare function pipeline<T: stream$Writable>(
                    s1: stream$Readable,
                    s2: stream$Duplex,
                    s3: stream$Duplex,
                    last: T,
                    cb: (error?: Error) => void,
                  ): T;
                */
        /*
                lib/node.js:1964:2

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
                lib/node.js:1972:2

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
                lib/node.js:1981:2

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
                lib/node.js:1991:2

                declare function pipeline(
                    streams: Array<stream$Stream>,
                    cb: (error?: Error) => void,
                  ): stream$Stream;
                */
        pipeline(context) {},
      },
    },

    tty: {
      libs: [],

      exports: {
        /*
                lib/node.js:2011:2

                declare function isatty(fd : number) : boolean;
                */
        isatty(context) {},

        /*
                lib/node.js:2012:2

                declare function setRawMode(mode : boolean) : void;
                */
        setRawMode(context) {},

        /*
                lib/node.js:2013:2

                declare var ReadStream : typeof tty$ReadStream
                */
        ReadStream(context) {},

        /*
                lib/node.js:2014:2

                declare var WriteStream : typeof tty$WriteStream
                */
        WriteStream(context) {},
      },
    },

    string_decoder: {
      libs: [],

      exports: {
        /*
                lib/node.js:2024:2

                declare var StringDecoder : typeof string_decoder$StringDecoder;
                */
        StringDecoder(context) {},
      },
    },

    tls: {
      libs: [],

      exports: {
        /*
                lib/node.js:2106:2

                declare var CLIENT_RENEG_LIMIT: number;
                */
        CLIENT_RENEG_LIMIT(context) {},

        /*
                lib/node.js:2107:2

                declare var CLIENT_RENEG_WINDOW: number;
                */
        CLIENT_RENEG_WINDOW(context) {},

        /*
                lib/node.js:2108:2

                declare var SLAB_BUFFER_SIZE: number;
                */
        SLAB_BUFFER_SIZE(context) {},

        /*
                lib/node.js:2109:2

                declare var DEFAULT_CIPHERS: string;
                */
        DEFAULT_CIPHERS(context) {},

        /*
                lib/node.js:2110:2

                declare var DEFAULT_ECDH_CURVE: string;
                */
        DEFAULT_ECDH_CURVE(context) {},

        /*
                lib/node.js:2111:2

                declare function getCiphers(): Array<string>;
                */
        getCiphers(context) {},

        /*
                lib/node.js:2112:2

                declare function convertNPNProtocols(NPNProtocols: Array<string>, out: Object): void;
                */
        convertNPNProtocols(context) {},

        /*
                lib/node.js:2113:2

                declare function checkServerIdentity(servername: string, cert: string): Error | void;
                */
        checkServerIdentity(context) {},

        /*
                lib/node.js:2114:2

                declare function parseCertString(s: string): Object;
                */
        parseCertString(context) {},

        /*
                lib/node.js:2115:2

                declare function createSecureContext(details: Object): Object;
                */
        createSecureContext(context) {},

        /*
                lib/node.js:2116:2

                declare var SecureContext: Object;
                */
        SecureContext(context) {},

        /*
                lib/node.js:2117:2

                declare var TLSSocket: typeof tls$TLSSocket;
                */
        TLSSocket(context) {},

        /*
                lib/node.js:2118:2

                declare var Server: typeof tls$Server;
                */
        Server(context) {},

        /*
                lib/node.js:2119:2

                declare function createServer(options: Object, secureConnectionListener?: Function): tls$Server;
                */
        createServer(context) {},

        /*
                lib/node.js:2120:2

                declare function connect(options: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        /*
                lib/node.js:2121:2

                declare function connect(port: number, host?: string, options?: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        connect(context) {},

        /*
                lib/node.js:2122:2

                declare function createSecurePair(context?: Object, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean, options?: Object): Object;
                */
        createSecurePair(context) {},
      },
    },

    url: {
      libs: [],

      exports: {
        /*
                lib/node.js:2141:2

                declare function parse(
                    urlStr: string,
                    parseQueryString?: boolean,
                    slashesDenoteHost?: boolean
                  ): {
                    protocol?: string,
                    slashes?: boolean,
                    auth?: string,
                    host?: string,
                    port?: string,
                    hostname?: string,
                    hash?: string,
                    search?: string,
                    // null | string | Object
                    query?: any,
                    pathname?: string,
                    path?: string,
                    href: string,
                    ...
                  };
                */
        parse(context) {},

        /*
                lib/node.js:2161:2

                declare function format(urlObj: url$urlObject): string;
                */
        format(context) {},

        /*
                lib/node.js:2162:2

                declare function resolve(from: string, to: string): string;
                */
        resolve(context) {},

        /*
                lib/node.js:2163:2

                declare function domainToASCII(domain: string): string;
                */
        domainToASCII(context) {},

        /*
                lib/node.js:2164:2

                declare function domainToUnicode(domain: string): string;
                */
        domainToUnicode(context) {},

        /*
                lib/node.js:2165:2

                declare function pathToFileURL(path: string): url$urlObject;
                */
        pathToFileURL(context) {},

        /*
                lib/node.js:2166:2

                declare function fileURLToPath(path: url$urlObject | string): url$urlObject;
                */
        fileURLToPath(context) {},

        /*
                lib/node.js:2167:2

                declare class URLSearchParams {
                    constructor(init?: string | Array<[string, string]> | { [string]: string, ... } ): void;
                    append(name: string, value: string): void;
                    delete(name: string): void;
                    entries(): Iterator<[string, string]>;
                    forEach(fn: (value: string, name: string, searchParams: URLSearchParams) => void, thisArg?: any): void;
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
        URLSearchParams(context) {},

        /*
                lib/node.js:2183:2

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
        URL(context) {},
      },
    },

    util: {
      libs: [],

      exports: {
        /*
                lib/node.js:2211:2

                declare function debuglog(section: string): (data: any, ...args: any) => void;
                */
        debuglog(context) {},

        /*
                lib/node.js:2212:2

                declare function format(format: string, ...placeholders: any): string;
                */
        format(context) {},

        /*
                lib/node.js:2213:2

                declare function log(string: string): void;
                */
        log(context) {},

        /*
                lib/node.js:2214:2

                declare function inspect(object: any, options?: util$InspectOptions): string;
                */
        inspect(context) {},

        /*
                lib/node.js:2215:2

                declare function isArray(object: any): boolean;
                */
        isArray(context) {},

        /*
                lib/node.js:2216:2

                declare function isRegExp(object: any): boolean;
                */
        isRegExp(context) {},

        /*
                lib/node.js:2217:2

                declare function isDate(object: any): boolean;
                */
        isDate(context) {},

        /*
                lib/node.js:2218:2

                declare function isError(object: any): boolean;
                */
        isError(context) {},

        /*
                lib/node.js:2219:2

                declare function inherits(constructor: Function, superConstructor: Function): void;
                */
        inherits(context) {},

        /*
                lib/node.js:2220:2

                declare function deprecate(f: Function, string: string): Function;
                */
        deprecate(context) {},

        /*
                lib/node.js:2221:2

                declare function promisify(f: Function): Function;
                */
        promisify(context) {},

        /*
                lib/node.js:2222:2

                declare function callbackify(f: Function): Function;
                */
        callbackify(context) {},

        /*
                lib/node.js:2224:2

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
        TextDecoder(context) {},

        /*
                lib/node.js:2236:2

                declare class TextEncoder {
                    constructor(): void;
                    encode(input?: string): Uint8Array;
                    encoding: string;
                  }
                */
        TextEncoder(context) {},
      },
    },

    vm: {
      libs: [],

      exports: {
        /*
                lib/node.js:2290:2

                declare var Script: typeof vm$Script;
                */
        Script(context) {},

        /*
                lib/node.js:2291:2

                declare function createContext(sandbox?: { [key: string]: any, ... }, options?: vm$CreateContextOptions): vm$Context;
                */
        createContext(context) {},

        /*
                lib/node.js:2292:2

                declare function isContext(sandbox: { [key: string]: any, ... }): boolean;
                */
        isContext(context) {},

        /*
                lib/node.js:2293:2

                declare function runInContext(code: string, contextifiedSandbox: vm$Context, options?: vm$ScriptOptions | string): any;
                */
        runInContext(context) {},

        /*
                lib/node.js:2294:2

                declare function runInDebugContext(code: string): any;
                */
        runInDebugContext(context) {},

        /*
                lib/node.js:2295:2

                declare function runInNewContext(code: string, sandbox?: { [key: string]: any, ... }, options?: vm$ScriptOptions | string): any;
                */
        runInNewContext(context) {},

        /*
                lib/node.js:2296:2

                declare function runInThisContext(code: string, options?: vm$ScriptOptions | string): any;
                */
        runInThisContext(context) {},

        /*
                lib/node.js:2297:2

                declare function compileFunction(code: string, params: string[], options: vm$CompileFunctionOptions): Function;
                */
        compileFunction(context) {},
      },
    },

    zlib: {
      libs: [],

      exports: {
        /*
                lib/node.js:2326:2

                declare var Z_NO_FLUSH: number;
                */
        Z_NO_FLUSH(context) {},

        /*
                lib/node.js:2327:2

                declare var Z_PARTIAL_FLUSH: number;
                */
        Z_PARTIAL_FLUSH(context) {},

        /*
                lib/node.js:2328:2

                declare var Z_SYNC_FLUSH: number;
                */
        Z_SYNC_FLUSH(context) {},

        /*
                lib/node.js:2329:2

                declare var Z_FULL_FLUSH: number;
                */
        Z_FULL_FLUSH(context) {},

        /*
                lib/node.js:2330:2

                declare var Z_FINISH: number;
                */
        Z_FINISH(context) {},

        /*
                lib/node.js:2331:2

                declare var Z_BLOCK: number;
                */
        Z_BLOCK(context) {},

        /*
                lib/node.js:2332:2

                declare var Z_TREES: number;
                */
        Z_TREES(context) {},

        /*
                lib/node.js:2333:2

                declare var Z_OK: number;
                */
        Z_OK(context) {},

        /*
                lib/node.js:2334:2

                declare var Z_STREAM_END: number;
                */
        Z_STREAM_END(context) {},

        /*
                lib/node.js:2335:2

                declare var Z_NEED_DICT: number;
                */
        Z_NEED_DICT(context) {},

        /*
                lib/node.js:2336:2

                declare var Z_ERRNO: number;
                */
        Z_ERRNO(context) {},

        /*
                lib/node.js:2337:2

                declare var Z_STREAM_ERROR: number;
                */
        Z_STREAM_ERROR(context) {},

        /*
                lib/node.js:2338:2

                declare var Z_DATA_ERROR: number;
                */
        Z_DATA_ERROR(context) {},

        /*
                lib/node.js:2339:2

                declare var Z_MEM_ERROR: number;
                */
        Z_MEM_ERROR(context) {},

        /*
                lib/node.js:2340:2

                declare var Z_BUF_ERROR: number;
                */
        Z_BUF_ERROR(context) {},

        /*
                lib/node.js:2341:2

                declare var Z_VERSION_ERROR: number;
                */
        Z_VERSION_ERROR(context) {},

        /*
                lib/node.js:2342:2

                declare var Z_NO_COMPRESSION: number;
                */
        Z_NO_COMPRESSION(context) {},

        /*
                lib/node.js:2343:2

                declare var Z_BEST_SPEED: number;
                */
        Z_BEST_SPEED(context) {},

        /*
                lib/node.js:2344:2

                declare var Z_BEST_COMPRESSION: number;
                */
        Z_BEST_COMPRESSION(context) {},

        /*
                lib/node.js:2345:2

                declare var Z_DEFAULT_COMPRESSION: number;
                */
        Z_DEFAULT_COMPRESSION(context) {},

        /*
                lib/node.js:2346:2

                declare var Z_FILTERED: number;
                */
        Z_FILTERED(context) {},

        /*
                lib/node.js:2347:2

                declare var Z_HUFFMAN_ONLY: number;
                */
        Z_HUFFMAN_ONLY(context) {},

        /*
                lib/node.js:2348:2

                declare var Z_RLE: number;
                */
        Z_RLE(context) {},

        /*
                lib/node.js:2349:2

                declare var Z_FIXED: number;
                */
        Z_FIXED(context) {},

        /*
                lib/node.js:2350:2

                declare var Z_DEFAULT_STRATEGY: number;
                */
        Z_DEFAULT_STRATEGY(context) {},

        /*
                lib/node.js:2351:2

                declare var Z_BINARY: number;
                */
        Z_BINARY(context) {},

        /*
                lib/node.js:2352:2

                declare var Z_TEXT: number;
                */
        Z_TEXT(context) {},

        /*
                lib/node.js:2353:2

                declare var Z_ASCII: number;
                */
        Z_ASCII(context) {},

        /*
                lib/node.js:2354:2

                declare var Z_UNKNOWN: number;
                */
        Z_UNKNOWN(context) {},

        /*
                lib/node.js:2355:2

                declare var Z_DEFLATED: number;
                */
        Z_DEFLATED(context) {},

        /*
                lib/node.js:2356:2

                declare var Z_NULL: number;
                */
        Z_NULL(context) {},

        /*
                lib/node.js:2357:2

                declare var Z_DEFAULT_CHUNK: number;
                */
        Z_DEFAULT_CHUNK(context) {},

        /*
                lib/node.js:2358:2

                declare var Z_DEFAULT_LEVEL: number;
                */
        Z_DEFAULT_LEVEL(context) {},

        /*
                lib/node.js:2359:2

                declare var Z_DEFAULT_MEMLEVEL: number;
                */
        Z_DEFAULT_MEMLEVEL(context) {},

        /*
                lib/node.js:2360:2

                declare var Z_DEFAULT_WINDOWBITS: number;
                */
        Z_DEFAULT_WINDOWBITS(context) {},

        /*
                lib/node.js:2361:2

                declare var Z_MAX_CHUNK: number;
                */
        Z_MAX_CHUNK(context) {},

        /*
                lib/node.js:2362:2

                declare var Z_MAX_LEVEL: number;
                */
        Z_MAX_LEVEL(context) {},

        /*
                lib/node.js:2363:2

                declare var Z_MAX_MEMLEVEL: number;
                */
        Z_MAX_MEMLEVEL(context) {},

        /*
                lib/node.js:2364:2

                declare var Z_MAX_WINDOWBITS: number;
                */
        Z_MAX_WINDOWBITS(context) {},

        /*
                lib/node.js:2365:2

                declare var Z_MIN_CHUNK: number;
                */
        Z_MIN_CHUNK(context) {},

        /*
                lib/node.js:2366:2

                declare var Z_MIN_LEVEL: number;
                */
        Z_MIN_LEVEL(context) {},

        /*
                lib/node.js:2367:2

                declare var Z_MIN_MEMLEVEL: number;
                */
        Z_MIN_MEMLEVEL(context) {},

        /*
                lib/node.js:2368:2

                declare var Z_MIN_WINDOWBITS: number;
                */
        Z_MIN_WINDOWBITS(context) {},

        /*
                lib/node.js:2369:2

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
                    ...
                  };
                */
        constants(context) {},

        /*
                lib/node.js:2415:2

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
        codes(context) {},

        /*
                lib/node.js:2427:2

                declare class Zlib extends stream$Duplex {
                    // TODO
                  }
                */
        Zlib(context) {},

        /*
                lib/node.js:2430:2

                declare class Deflate extends Zlib {}
                */
        Deflate(context) {},

        /*
                lib/node.js:2431:2

                declare class Inflate extends Zlib {}
                */
        Inflate(context) {},

        /*
                lib/node.js:2432:2

                declare class Gzip extends Zlib {}
                */
        Gzip(context) {},

        /*
                lib/node.js:2433:2

                declare class Gunzip extends Zlib {}
                */
        Gunzip(context) {},

        /*
                lib/node.js:2434:2

                declare class DeflateRaw extends Zlib {}
                */
        DeflateRaw(context) {},

        /*
                lib/node.js:2435:2

                declare class InflateRaw extends Zlib {}
                */
        InflateRaw(context) {},

        /*
                lib/node.js:2436:2

                declare class Unzip extends Zlib {}
                */
        Unzip(context) {},

        /*
                lib/node.js:2437:2

                declare function createDeflate(options?: zlib$options): Deflate;
                */
        createDeflate(context) {},

        /*
                lib/node.js:2438:2

                declare function createInflate(options?: zlib$options): Inflate;
                */
        createInflate(context) {},

        /*
                lib/node.js:2439:2

                declare function createDeflateRaw(options?: zlib$options): DeflateRaw;
                */
        createDeflateRaw(context) {},

        /*
                lib/node.js:2440:2

                declare function createInflateRaw(options?: zlib$options): InflateRaw;
                */
        createInflateRaw(context) {},

        /*
                lib/node.js:2441:2

                declare function createGzip(options?: zlib$options): Gzip;
                */
        createGzip(context) {},

        /*
                lib/node.js:2442:2

                declare function createGunzip(options?: zlib$options): Gunzip;
                */
        createGunzip(context) {},

        /*
                lib/node.js:2443:2

                declare function createUnzip(options?: zlib$options): Unzip;
                */
        createUnzip(context) {},

        /*
                lib/node.js:2444:2

                declare var deflate: zlib$asyncFn;
                */
        deflate(context) {},

        /*
                lib/node.js:2445:2

                declare var deflateSync: zlib$syncFn;
                */
        deflateSync(context) {},

        /*
                lib/node.js:2446:2

                declare var gzip: zlib$asyncFn;
                */
        gzip(context) {},

        /*
                lib/node.js:2447:2

                declare var gzipSync: zlib$syncFn;
                */
        gzipSync(context) {},

        /*
                lib/node.js:2448:2

                declare var deflateRaw: zlib$asyncFn;
                */
        deflateRaw(context) {},

        /*
                lib/node.js:2449:2

                declare var deflateRawSync: zlib$syncFn;
                */
        deflateRawSync(context) {},

        /*
                lib/node.js:2450:2

                declare var unzip: zlib$asyncFn;
                */
        unzip(context) {},

        /*
                lib/node.js:2451:2

                declare var unzipSync: zlib$syncFn;
                */
        unzipSync(context) {},

        /*
                lib/node.js:2452:2

                declare var inflate: zlib$asyncFn;
                */
        inflate(context) {},

        /*
                lib/node.js:2453:2

                declare var inflateSync: zlib$syncFn;
                */
        inflateSync(context) {},

        /*
                lib/node.js:2454:2

                declare var gunzip: zlib$asyncFn;
                */
        gunzip(context) {},

        /*
                lib/node.js:2455:2

                declare var gunzipSync: zlib$syncFn;
                */
        gunzipSync(context) {},

        /*
                lib/node.js:2456:2

                declare var inflateRaw: zlib$asyncFn;
                */
        inflateRaw(context) {},

        /*
                lib/node.js:2457:2

                declare var inflateRawSync: zlib$syncFn;
                */
        inflateRawSync(context) {},
      },
    },

    assert: {
      libs: [],

      exports: {
        /*
                lib/node.js:2461:2

                declare class AssertionError extends Error {}
                */
        AssertionError(context) {},

        /*
                lib/node.js:2462:2

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
                    ...
                  }
                */
        default(context) {},
      },
    },

    v8: {
      libs: [],

      exports: {
        /*
                lib/node.js:2511:2

                declare function getHeapStatistics() : HeapStatistics;
                */
        getHeapStatistics(context) {},

        /*
                lib/node.js:2512:2

                declare function getHeapSpaceStatistics() : Array<HeapSpaceStatistics>
                */
        getHeapSpaceStatistics(context) {},

        /*
                lib/node.js:2513:2

                declare function setFlagsFromString(flags: string) : void;
                */
        setFlagsFromString(context) {},
      },
    },

    repl: {
      libs: [],

      exports: {
        /*
                lib/node.js:2529:2

                declare var REPL_MODE_MAGIC: $SymbolReplModeMagic;
                */
        REPL_MODE_MAGIC(context) {},

        /*
                lib/node.js:2530:2

                declare var REPL_MODE_SLOPPY: $SymbolReplModeSloppy;
                */
        REPL_MODE_SLOPPY(context) {},

        /*
                lib/node.js:2531:2

                declare var REPL_MODE_STRICT: $SymbolReplModeStrict;
                */
        REPL_MODE_STRICT(context) {},

        /*
                lib/node.js:2533:2

                declare class REPLServer extends readline$Interface {
                    context: vm$Context;
                    defineCommand(command: string, options: repl$DefineCommandOptions): void;
                    displayPrompt(preserveCursor?: boolean): void;
                  }
                */
        REPLServer(context) {},

        /*
                lib/node.js:2539:2

                declare function start(prompt: string): REPLServer;
                */
        /*
                lib/node.js:2540:2

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
        start(context) {},

        /*
                lib/node.js:2556:2

                declare class Recoverable extends SyntaxError {
                    constructor(err: Error): Recoverable;
                  }
                */
        Recoverable(context) {},
      },
    },
  },
} as RuleSet;
