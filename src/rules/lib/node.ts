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
        declare class stream$Stream extends events$EventEmitter {}
        */
    stream$Stream(context) {
      context.importFlow('stream', 'Stream');
    },

    /*
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
        declare class stream$Duplex extends stream$Readable mixins stream$Writable {
          constructor(options?: duplexStreamOptions): void;
        }
        */
    stream$Duplex(context) {
      context.importFlow('stream', 'Duplex');
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
      context.importFlow('stream', 'Transform');
    },

    /*
        declare class stream$PassThrough extends stream$Transform {}
        */
    stream$PassThrough(context) {
      context.importFlow('stream', 'PassThrough');
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
      context.importFlow('tty', 'ReadStream');
    },

    /*
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
        declare class vm$Context {}
        */
    vm$Context(context) {},

    /*
        declare class $SymbolReplModeMagic mixins Symbol {}
        */
    $SymbolReplModeMagic(context) {},

    /*
        declare class $SymbolReplModeSloppy mixins Symbol {}
        */
    $SymbolReplModeSloppy(context) {},

    /*
        declare class $SymbolReplModeStrict mixins Symbol {}
        */
    $SymbolReplModeStrict(context) {},

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
        declare var process: Process;
        */
    process(context) {},

    /*
        declare var __filename: string;
        */
    __filename(context) {},

    /*
        declare var __dirname: string;
        */
    __dirname(context) {},

    /*
        declare function setImmediate(callback: ((...args: Array<any>) => mixed), ...args: Array<any>): Object;
        */
    setImmediate(context) {},

    /*
        declare function clearImmediate(immediateObject: any): Object;
        */
    clearImmediate(context) {},
  },

  modules: {
    buffer: {
      libs: [],

      exports: {
        /*
                declare var kMaxLength: number;
                */
        kMaxLength(context) {},

        /*
                declare var INSPECT_MAX_BYTES: number;
                */
        INSPECT_MAX_BYTES(context) {},

        /*
                declare function transcode(source: Buffer, fromEnc: buffer$Encoding, toEnc: buffer$Encoding): Buffer;
                */
        transcode(context) {},

        /*
                declare var Buffer: typeof global.Buffer;
                */
        Buffer(context) {},
      },
    },

    child_process: {
      libs: [],

      exports: {
        /*
                declare var ChildProcess: typeof child_process$ChildProcess;
                */
        ChildProcess(context) {},

        /*
                declare function exec(
                    command: string,
                    optionsOrCallback?: child_process$execOpts | child_process$execCallback,
                    callback?: child_process$execCallback
                  ): child_process$ChildProcess;
                */
        exec(context) {},

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
        execSync(context) {},

        /*
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
                declare function execFileSync(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$execFileSyncOpts,
                    options?: child_process$execFileSyncOpts
                  ): Buffer | string;
                */
        execFileSync(context) {},

        /*
                declare function fork(
                    modulePath: string,
                    argsOrOptions?: Array<string> | child_process$forkOpts,
                    options?: child_process$forkOpts
                  ): child_process$ChildProcess;
                */
        fork(context) {},

        /*
                declare function spawn(
                    command: string,
                    argsOrOptions?: Array<string> | child_process$spawnOpts,
                    options?: child_process$spawnOpts
                  ): child_process$ChildProcess;
                */
        spawn(context) {},

        /*
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
                declare module.exports: Cluster;
                */
        default(context) {},
      },
    },

    crypto: {
      libs: [],

      exports: {
        /*
                declare var DEFAULT_ENCODING: string;
                */
        DEFAULT_ENCODING(context) {},

        /*
                declare class Sign extends crypto$Sign {}
                */
        Sign(context) {},

        /*
                declare class Verify extends crypto$Verify {}
                */
        Verify(context) {},

        /*
                declare function createCipher(algorithm: string, password: string | Buffer): crypto$Cipher;
                */
        createCipher(context) {},

        /*
                declare function createCipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Cipher;
                */
        createCipheriv(context) {},

        /*
                declare function createCredentials(
                    details?: crypto$createCredentialsDetails
                  ): crypto$Credentials
                */
        createCredentials(context) {},

        /*
                declare function createDecipher(algorithm: string, password: string | Buffer): crypto$Decipher;
                */
        createDecipher(context) {},

        /*
                declare function createDecipheriv(
                    algorithm: string,
                    key: string | Buffer,
                    iv: string | Buffer
                  ): crypto$Decipher;
                */
        createDecipheriv(context) {},

        /*
                declare function createDiffieHellman(prime_length: number): crypto$DiffieHellman;
                */
        /*
                declare function createDiffieHellman(prime: number, encoding?: string): crypto$DiffieHellman;
                */
        createDiffieHellman(context) {},

        /*
                declare function createECDH(curveName: string): crypto$ECDH;
                */
        createECDH(context) {},

        /*
                declare function createHash(algorithm: string): crypto$Hash;
                */
        createHash(context) {},

        /*
                declare function createHmac(algorithm: string, key: string | Buffer): crypto$Hmac;
                */
        createHmac(context) {},

        /*
                declare function createSign(algorithm: string): crypto$Sign;
                */
        createSign(context) {},

        /*
                declare function createVerify(algorithm: string): crypto$Verify;
                */
        createVerify(context) {},

        /*
                declare function getCiphers(): Array<string>;
                */
        getCiphers(context) {},

        /*
                declare function getCurves(): Array<string>;
                */
        getCurves(context) {},

        /*
                declare function getDiffieHellman(group_name: string): crypto$DiffieHellman;
                */
        getDiffieHellman(context) {},

        /*
                declare function getHashes(): Array<string>;
                */
        getHashes(context) {},

        /*
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
                declare function privateDecrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateDecrypt(context) {},

        /*
                declare function privateEncrypt(
                    private_key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        privateEncrypt(context) {},

        /*
                declare function publicDecrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicDecrypt(context) {},

        /*
                declare function publicEncrypt(
                    key: crypto$key,
                    buffer: Buffer
                  ): Buffer;
                */
        publicEncrypt(context) {},

        /*
                declare function pseudoRandomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                declare function pseudoRandomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        pseudoRandomBytes(context) {},

        /*
                declare function randomBytes(size: number, UNUSED: void): Buffer;
                */
        /*
                declare function randomBytes(
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void;
                */
        randomBytes(context) {},

        /*
                declare function randomFillSync(buffer: Buffer): void
                */
        /*
                declare function randomFillSync(buffer: Buffer, offset: number): void
                */
        /*
                declare function randomFillSync(
                    buffer: Buffer,
                    offset: number,
                    size: number
                  ): void
                */
        randomFillSync(context) {},

        /*
                declare function randomFill(
                    buffer: Buffer,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                declare function randomFill(
                    buffer: Buffer,
                    offset: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        /*
                declare function randomFill(
                    buffer: Buffer,
                    offset: number,
                    size: number,
                    callback: (err: ?Error, buffer: Buffer) => void
                  ): void
                */
        randomFill(context) {},

        /*
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
                declare var ADDRGETNETWORKPARAMS: string;
                */
        ADDRGETNETWORKPARAMS(context) {},

        /*
                declare var BADFAMILY: string;
                */
        BADFAMILY(context) {},

        /*
                declare var BADFLAGS: string;
                */
        BADFLAGS(context) {},

        /*
                declare var BADHINTS: string;
                */
        BADHINTS(context) {},

        /*
                declare var BADQUERY: string;
                */
        BADQUERY(context) {},

        /*
                declare var BADNAME: string;
                */
        BADNAME(context) {},

        /*
                declare var BADRESP: string;
                */
        BADRESP(context) {},

        /*
                declare var BADSTR: string;
                */
        BADSTR(context) {},

        /*
                declare var CANCELLED: string;
                */
        CANCELLED(context) {},

        /*
                declare var CONNREFUSED: string;
                */
        CONNREFUSED(context) {},

        /*
                declare var DESTRUCTION: string;
                */
        DESTRUCTION(context) {},

        /*
                declare var EOF: string;
                */
        EOF(context) {},

        /*
                declare var FILE: string;
                */
        FILE(context) {},

        /*
                declare var FORMER: string;
                */
        FORMER(context) {},

        /*
                declare var LOADIPHLPAPI: string;
                */
        LOADIPHLPAPI(context) {},

        /*
                declare var NODATA: string;
                */
        NODATA(context) {},

        /*
                declare var NOMEM: string;
                */
        NOMEM(context) {},

        /*
                declare var NONAME: string;
                */
        NONAME(context) {},

        /*
                declare var NOTFOUND: string;
                */
        NOTFOUND(context) {},

        /*
                declare var NOTIMP: string;
                */
        NOTIMP(context) {},

        /*
                declare var NOTINITIALIZED: string;
                */
        NOTINITIALIZED(context) {},

        /*
                declare var REFUSED: string;
                */
        REFUSED(context) {},

        /*
                declare var SERVFAIL: string;
                */
        SERVFAIL(context) {},

        /*
                declare var TIMEOUT: string;
                */
        TIMEOUT(context) {},

        /*
                declare var ADDRCONFIG: number;
                */
        ADDRCONFIG(context) {},

        /*
                declare var V4MAPPED: number;
                */
        V4MAPPED(context) {},

        /*
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
        lookup(context) {},

        /*
                declare function resolve(
                    domain: string,
                    rrtype?: string,
                    callback?: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve(context) {},

        /*
                declare function resolve4(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve4(context) {},

        /*
                declare function resolve6(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolve6(context) {},

        /*
                declare function resolveCname(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveCname(context) {},

        /*
                declare function resolveMx(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveMx(context) {},

        /*
                declare function resolveNs(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveNs(context) {},

        /*
                declare function resolveSrv(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveSrv(context) {},

        /*
                declare function resolveTxt(
                    domain: string,
                    callback: (err: ?Error, addresses: Array<any>) => void
                  ): void;
                */
        resolveTxt(context) {},

        /*
                declare function reverse(
                    ip: string,
                    callback: (err: ?Error, domains: Array<any>) => void
                  ): void;
                */
        reverse(context) {},

        /*
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
                declare class EventEmitter extends events$EventEmitter {
                    static EventEmitter: typeof EventEmitter;
                  }
                */
        EventEmitter(context) {},

        /*
                declare module.exports: typeof EventEmitter;
                */
        default(context) {},
      },
    },

    domain: {
      libs: [],

      exports: {
        /*
                declare function create(): domain$Domain;
                */
        create(context) {},
      },
    },

    fs: {
      libs: [],

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
        Stats(context) {},

        /*
                declare class FSWatcher extends events$EventEmitter {
                    close(): void
                  }
                */
        FSWatcher(context) {},

        /*
                declare class ReadStream extends stream$Readable {
                    close(): void
                  }
                */
        ReadStream(context) {},

        /*
                declare class WriteStream extends stream$Writable {
                    close(): void
                  }
                */
        WriteStream(context) {},

        /*
                declare function rename(oldPath: string, newPath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rename(context) {},

        /*
                declare function renameSync(oldPath: string, newPath: string): void;
                */
        renameSync(context) {},

        /*
                declare function ftruncate(fd: number, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        ftruncate(context) {},

        /*
                declare function ftruncateSync(fd: number, len: number): void;
                */
        ftruncateSync(context) {},

        /*
                declare function truncate(path: string, len: number, callback?: (err: ?ErrnoError) => void): void;
                */
        truncate(context) {},

        /*
                declare function truncateSync(path: string, len: number): void;
                */
        truncateSync(context) {},

        /*
                declare function chown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        chown(context) {},

        /*
                declare function chownSync(path: string, uid: number, gid: number): void;
                */
        chownSync(context) {},

        /*
                declare function fchown(fd: number, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fchown(context) {},

        /*
                declare function fchownSync(fd: number, uid: number, gid: number): void;
                */
        fchownSync(context) {},

        /*
                declare function lchown(path: string, uid: number, gid: number, callback?: (err: ?ErrnoError) => void): void;
                */
        lchown(context) {},

        /*
                declare function lchownSync(path: string, uid: number, gid: number): void;
                */
        lchownSync(context) {},

        /*
                declare function chmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        chmod(context) {},

        /*
                declare function chmodSync(path: string, mode: number | string): void;
                */
        chmodSync(context) {},

        /*
                declare function fchmod(fd: number, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        fchmod(context) {},

        /*
                declare function fchmodSync(fd: number, mode: number | string): void;
                */
        fchmodSync(context) {},

        /*
                declare function lchmod(path: string, mode: number | string, callback?: (err: ?ErrnoError) => void): void;
                */
        lchmod(context) {},

        /*
                declare function lchmodSync(path: string, mode: number | string): void;
                */
        lchmodSync(context) {},

        /*
                declare function stat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        stat(context) {},

        /*
                declare function statSync(path: string): Stats;
                */
        statSync(context) {},

        /*
                declare function fstat(fd: number, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        fstat(context) {},

        /*
                declare function fstatSync(fd: number): Stats;
                */
        fstatSync(context) {},

        /*
                declare function lstat(path: string, callback?: (err: ?ErrnoError, stats: Stats) => any): void;
                */
        lstat(context) {},

        /*
                declare function lstatSync(path: string): Stats;
                */
        lstatSync(context) {},

        /*
                declare function link(srcpath: string, dstpath: string, callback?: (err: ?ErrnoError) => void): void;
                */
        link(context) {},

        /*
                declare function linkSync(srcpath: string, dstpath: string): void;
                */
        linkSync(context) {},

        /*
                declare function symlink(srcpath: string, dtspath: string, type?: string, callback?: (err: ?ErrnoError) => void): void;
                */
        symlink(context) {},

        /*
                declare function symlinkSync(srcpath: string, dstpath: string, type: string): void;
                */
        symlinkSync(context) {},

        /*
                declare function readlink(path: string, callback: (err: ?ErrnoError, linkString: string) => void): void;
                */
        readlink(context) {},

        /*
                declare function readlinkSync(path: string): string;
                */
        readlinkSync(context) {},

        /*
                declare function realpath(path: string, cache?: Object, callback?: (err: ?ErrnoError, resolvedPath: string) => void): void;
                */
        realpath(context) {},

        /*
                declare function realpathSync(path: string, cache?: Object): string;
                */
        realpathSync(context) {},

        /*
                declare function unlink(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        unlink(context) {},

        /*
                declare function unlinkSync(path: string): void;
                */
        unlinkSync(context) {},

        /*
                declare function rmdir(path: string, callback?: (err: ?ErrnoError) => void): void;
                */
        rmdir(context) {},

        /*
                declare function rmdirSync(path: string): void;
                */
        rmdirSync(context) {},

        /*
                declare function mkdir(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }, callback?: (err: ?ErrnoError) => void): void;
                */
        mkdir(context) {},

        /*
                declare function mkdirSync(path: string, mode?: number | {
                    recursive?: boolean,
                    mode?: number,
                    ...
                  }): void;
                */
        mkdirSync(context) {},

        /*
                declare function mkdtemp(prefix: string, callback: (err: ?ErrnoError, folderPath: string) => void): void;
                */
        mkdtemp(context) {},

        /*
                declare function mkdtempSync(prefix: string): string;
                */
        mkdtempSync(context) {},

        /*
                declare function readdir(
                    path: string,
                    options: string | { encoding: string, ... },
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        /*
                declare function readdir(
                    path: string,
                    callback: (err: ?ErrnoError, files: Array<string>) => void
                  ): void;
                */
        readdir(context) {},

        /*
                declare function readdirSync(
                    path: string,
                    options?: string | { encoding: string, ... }
                  ): Array<string>;
                */
        readdirSync(context) {},

        /*
                declare function close(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        close(context) {},

        /*
                declare function closeSync(fd: number): void;
                */
        closeSync(context) {},

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
        open(context) {},

        /*
                declare function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
                */
        openSync(context) {},

        /*
                declare function utimes(path: string, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        utimes(context) {},

        /*
                declare function utimesSync(path: string, atime: number, mtime: number): void;
                */
        utimesSync(context) {},

        /*
                declare function futimes(fd: number, atime: number, mtime: number, callback?: (err: ?ErrnoError) => void): void;
                */
        futimes(context) {},

        /*
                declare function futimesSync(fd: number, atime: number, mtime: number): void;
                */
        futimesSync(context) {},

        /*
                declare function fsync(fd: number, callback?: (err: ?ErrnoError) => void): void;
                */
        fsync(context) {},

        /*
                declare function fsyncSync(fd: number): void;
                */
        fsyncSync(context) {},

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
        write(context) {},

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
        writeSync(context) {},

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
        read(context) {},

        /*
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
        readFile(context) {},

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
        readFileSync(context) {},

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
        writeFile(context) {},

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
        writeFileSync(context) {},

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
        appendFile(context) {},

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
        appendFileSync(context) {},

        /*
                declare function watchFile(filename: string, options?: Object, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        watchFile(context) {},

        /*
                declare function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
                */
        unwatchFile(context) {},

        /*
                declare function watch(filename: string, options?: Object, listener?: (event: string, filename: string) => void): FSWatcher;
                */
        watch(context) {},

        /*
                declare function exists(path: string, callback?: (exists: boolean) => void): void;
                */
        exists(context) {},

        /*
                declare function existsSync(path: string): boolean;
                */
        existsSync(context) {},

        /*
                declare function access(path: string, mode?: number, callback?: (err: ?ErrnoError) => void): void;
                */
        access(context) {},

        /*
                declare function accessSync(path: string, mode?: number): void;
                */
        accessSync(context) {},

        /*
                declare function createReadStream(path: string, options?: Object): ReadStream;
                */
        createReadStream(context) {},

        /*
                declare function createWriteStream(path: string, options?: Object): WriteStream;
                */
        createWriteStream(context) {},

        /*
                declare function fdatasync(fd: number, callback: (err: ?ErrnoError) => void): void;
                */
        fdatasync(context) {},

        /*
                declare function fdatasyncSync(fd: number): void;
                */
        fdatasyncSync(context) {},

        /*
                declare function copyFile(src: string, dest: string, flags?: number, callback: (err: ErrnoError) => void): void;
                */
        copyFile(context) {},

        /*
                declare function copyFileSync(src: string, dest: string, flags?: number): void;
                */
        copyFileSync(context) {},

        /*
                declare var F_OK: number;
                */
        F_OK(context) {},

        /*
                declare var R_OK: number;
                */
        R_OK(context) {},

        /*
                declare var W_OK: number;
                */
        W_OK(context) {},

        /*
                declare var X_OK: number;
                */
        X_OK(context) {},

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
        constants(context) {},

        /*
                declare type BufferEncoding =
                    | 'buffer'
                    | { encoding: 'buffer', ... };
                */
        BufferEncoding(context) {},

        /*
                declare type EncodingOptions = { encoding?: string, ... };
                */
        EncodingOptions(context) {},

        /*
                declare type EncodingFlag = EncodingOptions & { flag?: string, ... };
                */
        EncodingFlag(context) {},

        /*
                declare type WriteOptions = EncodingFlag & { mode?: number, ... };
                */
        WriteOptions(context) {},

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
        FileHandle(context) {},

        /*
                declare type FSPromisePath = string | Buffer | URL;
                */
        FSPromisePath(context) {},

        /*
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
                declare var promises: FSPromise;
                */
        promises(context) {},
      },
    },

    http: {
      libs: [],

      exports: {
        /*
                declare class Server extends http$Server {}
                */
        Server(context) {},

        /*
                declare class Agent extends http$Agent<net$Socket> {
                    createConnection(options: net$connectOptions, callback?: Function): net$Socket;
                  }
                */
        Agent(context) {},

        /*
                declare class ClientRequest extends http$ClientRequest<net$Socket> {}
                */
        ClientRequest(context) {},

        /*
                declare class IncomingMessage extends http$IncomingMessage<net$Socket> {}
                */
        IncomingMessage(context) {},

        /*
                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse(context) {},

        /*
                declare function createServer(
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer(context) {},

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
        request(context) {},

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
        get(context) {},

        /*
                declare var METHODS: Array<string>;
                */
        METHODS(context) {},

        /*
                declare var STATUS_CODES: { [key: number]: string, ... };
                */
        STATUS_CODES(context) {},

        /*
                declare var globalAgent: Agent;
                */
        globalAgent(context) {},
      },
    },

    https: {
      libs: [],

      exports: {
        /*
                declare class Server extends https$Server {}
                */
        Server(context) {},

        /*
                declare class Agent extends http$Agent<tls$TLSSocket> {
                    createConnection(port: ?number, host: ?string, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(port: ?number, options: tls$connectOptions): tls$TLSSocket;
                    createConnection(options: tls$connectOptions): tls$TLSSocket;
                  }
                */
        Agent(context) {},

        /*
                declare class ClientRequest extends http$ClientRequest<tls$TLSSocket> {}
                */
        ClientRequest(context) {},

        /*
                declare class IncomingMessage extends http$IncomingMessage<tls$TLSSocket> {}
                */
        IncomingMessage(context) {},

        /*
                declare class ServerResponse extends http$ServerResponse {}
                */
        ServerResponse(context) {},

        /*
                declare function createServer(
                    options: Object,
                    requestListener?: (request: IncomingMessage, response: ServerResponse) => void
                  ): Server;
                */
        createServer(context) {},

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
        request(context) {},

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
        get(context) {},

        /*
                declare var globalAgent: Agent;
                */
        globalAgent(context) {},
      },
    },

    net: {
      libs: [],

      exports: {
        /*
                declare class Server extends net$Server {}
                */
        Server(context) {},

        /*
                declare class Socket extends net$Socket {}
                */
        Socket(context) {},

        /*
                declare function isIP(input: string): number;
                */
        isIP(context) {},

        /*
                declare function isIPv4(input: string): boolean;
                */
        isIPv4(context) {},

        /*
                declare function isIPv6(input: string): boolean;
                */
        isIPv6(context) {},

        /*
                declare type connectionListener = (socket: Socket) => any;
                */
        connectionListener(context) {},

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
        createServer(context) {},

        /*
                declare type connectListener = () => any;
                */
        connectListener(context) {},

        /*
                declare function connect(
                    pathOrPortOrOptions:  string | number | net$connectOptions,
                    hostOrConnectListener?: string | connectListener,
                    connectListener?: connectListener,
                  ): Socket;
                */
        connect(context) {},

        /*
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
                declare function arch(): "x64"|"arm"|"ia32";
                */
        arch(context) {},

        /*
                declare function cpus(): Array<os$CPU>;
                */
        cpus(context) {},

        /*
                declare function endianness(): "BE"|"LE";
                */
        endianness(context) {},

        /*
                declare function freemem(): number;
                */
        freemem(context) {},

        /*
                declare function homedir(): string;
                */
        homedir(context) {},

        /*
                declare function hostname(): string;
                */
        hostname(context) {},

        /*
                declare function loadavg(): [number, number, number];
                */
        loadavg(context) {},

        /*
                declare function networkInterfaces(): { [ifName: string]: Array<os$NetIFAddr>, ... };
                */
        networkInterfaces(context) {},

        /*
                declare function platform(): string;
                */
        platform(context) {},

        /*
                declare function release(): string;
                */
        release(context) {},

        /*
                declare function tmpdir(): string;
                */
        tmpdir(context) {},

        /*
                declare function totalmem(): number;
                */
        totalmem(context) {},

        /*
                declare function type(): string;
                */
        type(context) {},

        /*
                declare function uptime(): number;
                */
        uptime(context) {},

        /*
                declare function userInfo(options: { encoding: 'buffer', ... }): os$UserInfo$buffer;
                */
        /*
                declare function userInfo(options?: { encoding: 'utf8', ... }): os$UserInfo$string;
                */
        userInfo(context) {},

        /*
                declare var EOL: string;
                */
        EOL(context) {},
      },
    },

    path: {
      libs: [],

      exports: {
        /*
                declare function normalize(path: string): string;
                */
        normalize(context) {},

        /*
                declare function join(...parts: Array<string>): string;
                */
        join(context) {},

        /*
                declare function resolve(...parts: Array<string>): string;
                */
        resolve(context) {},

        /*
                declare function isAbsolute(path: string): boolean;
                */
        isAbsolute(context) {},

        /*
                declare function relative(from: string, to: string): string;
                */
        relative(context) {},

        /*
                declare function dirname(path: string): string;
                */
        dirname(context) {},

        /*
                declare function basename(path: string, ext?: string): string;
                */
        basename(context) {},

        /*
                declare function extname(path: string): string;
                */
        extname(context) {},

        /*
                declare var sep: string;
                */
        sep(context) {},

        /*
                declare var delimiter: string;
                */
        delimiter(context) {},

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
        parse(context) {},

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
        format(context) {},

        /*
                declare var posix: any;
                */
        posix(context) {},

        /*
                declare var win32: any;
                */
        win32(context) {},
      },
    },

    punycode: {
      libs: [],

      exports: {
        /*
                declare function decode(string: string): string;
                */
        decode(context) {},

        /*
                declare function encode(string: string): string;
                */
        encode(context) {},

        /*
                declare function toASCII(domain: string): string;
                */
        toASCII(context) {},

        /*
                declare function toUnicode(domain: string): string;
                */
        toUnicode(context) {},

        /*
                declare var ucs2: {
                    decode: (str: string) => Array<number>,
                    encode: (codePoints: Array<number>) => string,
                    ...
                  };
                */
        ucs2(context) {},

        /*
                declare var version : string;
                */
        version(context) {},
      },
    },

    querystring: {
      libs: [],

      exports: {
        /*
                declare function stringify(
                    obj: Object,
                    separator?: string,
                    equal?: string,
                    options?: { encodeURIComponent?: (str: string) => string, ... }
                  ): string;
                */
        stringify(context) {},

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
        parse(context) {},

        /*
                declare function escape(str: string): string;
                */
        escape(context) {},

        /*
                declare function unescape(str: string, decodeSpaces?: boolean): string;
                */
        unescape(context) {},
      },
    },

    readline: {
      libs: [],

      exports: {
        /*
                declare var Interface : typeof readline$Interface;
                */
        Interface(context) {},

        /*
                declare function clearLine(stream: stream$Stream, dir: -1 | 1 | 0): void;
                */
        clearLine(context) {},

        /*
                declare function clearScreenDown(stream: stream$Stream): void;
                */
        clearScreenDown(context) {},

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
        createInterface(context) {},

        /*
                declare function cursorTo(stream: stream$Stream, x?: number, y?: number): void;
                */
        cursorTo(context) {},

        /*
                declare function moveCursor(stream: stream$Stream, dx: number, dy: number): void;
                */
        moveCursor(context) {},

        /*
                declare function emitKeypressEvents(stream: stream$Stream, readlineInterface?: readline$Interface): void;
                */
        emitKeypressEvents(context) {},
      },
    },

    stream: {
      libs: [],

      exports: {
        /*
                declare var Stream : typeof stream$Stream
                */
        Stream(context) {},

        /*
                declare var Readable : typeof stream$Readable
                */
        Readable(context) {},

        /*
                declare var Writable : typeof stream$Writable
                */
        Writable(context) {},

        /*
                declare var Duplex : typeof stream$Duplex
                */
        Duplex(context) {},

        /*
                declare var Transform : typeof stream$Transform
                */
        Transform(context) {},

        /*
                declare var PassThrough : typeof stream$PassThrough
                */
        PassThrough(context) {},

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
        finished(context) {},

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
        pipeline(context) {},
      },
    },

    tty: {
      libs: [],

      exports: {
        /*
                declare function isatty(fd : number) : boolean;
                */
        isatty(context) {},

        /*
                declare function setRawMode(mode : boolean) : void;
                */
        setRawMode(context) {},

        /*
                declare var ReadStream : typeof tty$ReadStream
                */
        ReadStream(context) {},

        /*
                declare var WriteStream : typeof tty$WriteStream
                */
        WriteStream(context) {},
      },
    },

    string_decoder: {
      libs: [],

      exports: {
        /*
                declare var StringDecoder : typeof string_decoder$StringDecoder;
                */
        StringDecoder(context) {},
      },
    },

    tls: {
      libs: [],

      exports: {
        /*
                declare var CLIENT_RENEG_LIMIT: number;
                */
        CLIENT_RENEG_LIMIT(context) {},

        /*
                declare var CLIENT_RENEG_WINDOW: number;
                */
        CLIENT_RENEG_WINDOW(context) {},

        /*
                declare var SLAB_BUFFER_SIZE: number;
                */
        SLAB_BUFFER_SIZE(context) {},

        /*
                declare var DEFAULT_CIPHERS: string;
                */
        DEFAULT_CIPHERS(context) {},

        /*
                declare var DEFAULT_ECDH_CURVE: string;
                */
        DEFAULT_ECDH_CURVE(context) {},

        /*
                declare function getCiphers(): Array<string>;
                */
        getCiphers(context) {},

        /*
                declare function convertNPNProtocols(NPNProtocols: Array<string>, out: Object): void;
                */
        convertNPNProtocols(context) {},

        /*
                declare function checkServerIdentity(servername: string, cert: string): Error | void;
                */
        checkServerIdentity(context) {},

        /*
                declare function parseCertString(s: string): Object;
                */
        parseCertString(context) {},

        /*
                declare function createSecureContext(details: Object): Object;
                */
        createSecureContext(context) {},

        /*
                declare var SecureContext: Object;
                */
        SecureContext(context) {},

        /*
                declare var TLSSocket: typeof tls$TLSSocket;
                */
        TLSSocket(context) {},

        /*
                declare var Server: typeof tls$Server;
                */
        Server(context) {},

        /*
                declare function createServer(options: Object, secureConnectionListener?: Function): tls$Server;
                */
        createServer(context) {},

        /*
                declare function connect(options: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        /*
                declare function connect(port: number, host?: string, options?: tls$connectOptions, callback?: Function): tls$TLSSocket;
                */
        connect(context) {},

        /*
                declare function createSecurePair(context?: Object, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean, options?: Object): Object;
                */
        createSecurePair(context) {},
      },
    },

    url: {
      libs: [],

      exports: {
        /*
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
                declare function format(urlObj: url$urlObject): string;
                */
        format(context) {},

        /*
                declare function resolve(from: string, to: string): string;
                */
        resolve(context) {},

        /*
                declare function domainToASCII(domain: string): string;
                */
        domainToASCII(context) {},

        /*
                declare function domainToUnicode(domain: string): string;
                */
        domainToUnicode(context) {},

        /*
                declare function pathToFileURL(path: string): url$urlObject;
                */
        pathToFileURL(context) {},

        /*
                declare function fileURLToPath(path: url$urlObject | string): url$urlObject;
                */
        fileURLToPath(context) {},

        /*
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
                declare function debuglog(section: string): (data: any, ...args: any) => void;
                */
        debuglog(context) {},

        /*
                declare function format(format: string, ...placeholders: any): string;
                */
        format(context) {},

        /*
                declare function log(string: string): void;
                */
        log(context) {},

        /*
                declare function inspect(object: any, options?: util$InspectOptions): string;
                */
        inspect(context) {},

        /*
                declare function isArray(object: any): boolean;
                */
        isArray(context) {},

        /*
                declare function isRegExp(object: any): boolean;
                */
        isRegExp(context) {},

        /*
                declare function isDate(object: any): boolean;
                */
        isDate(context) {},

        /*
                declare function isError(object: any): boolean;
                */
        isError(context) {},

        /*
                declare function inherits(constructor: Function, superConstructor: Function): void;
                */
        inherits(context) {},

        /*
                declare function deprecate(f: Function, string: string): Function;
                */
        deprecate(context) {},

        /*
                declare function promisify(f: Function): Function;
                */
        promisify(context) {},

        /*
                declare function callbackify(f: Function): Function;
                */
        callbackify(context) {},

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
        TextDecoder(context) {},

        /*
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
                declare var Script: typeof vm$Script;
                */
        Script(context) {},

        /*
                declare function createContext(sandbox?: { [key: string]: any, ... }, options?: vm$CreateContextOptions): vm$Context;
                */
        createContext(context) {},

        /*
                declare function isContext(sandbox: { [key: string]: any, ... }): boolean;
                */
        isContext(context) {},

        /*
                declare function runInContext(code: string, contextifiedSandbox: vm$Context, options?: vm$ScriptOptions | string): any;
                */
        runInContext(context) {},

        /*
                declare function runInDebugContext(code: string): any;
                */
        runInDebugContext(context) {},

        /*
                declare function runInNewContext(code: string, sandbox?: { [key: string]: any, ... }, options?: vm$ScriptOptions | string): any;
                */
        runInNewContext(context) {},

        /*
                declare function runInThisContext(code: string, options?: vm$ScriptOptions | string): any;
                */
        runInThisContext(context) {},

        /*
                declare function compileFunction(code: string, params: string[], options: vm$CompileFunctionOptions): Function;
                */
        compileFunction(context) {},
      },
    },

    zlib: {
      libs: [],

      exports: {
        /*
                declare var Z_NO_FLUSH: number;
                */
        Z_NO_FLUSH(context) {},

        /*
                declare var Z_PARTIAL_FLUSH: number;
                */
        Z_PARTIAL_FLUSH(context) {},

        /*
                declare var Z_SYNC_FLUSH: number;
                */
        Z_SYNC_FLUSH(context) {},

        /*
                declare var Z_FULL_FLUSH: number;
                */
        Z_FULL_FLUSH(context) {},

        /*
                declare var Z_FINISH: number;
                */
        Z_FINISH(context) {},

        /*
                declare var Z_BLOCK: number;
                */
        Z_BLOCK(context) {},

        /*
                declare var Z_TREES: number;
                */
        Z_TREES(context) {},

        /*
                declare var Z_OK: number;
                */
        Z_OK(context) {},

        /*
                declare var Z_STREAM_END: number;
                */
        Z_STREAM_END(context) {},

        /*
                declare var Z_NEED_DICT: number;
                */
        Z_NEED_DICT(context) {},

        /*
                declare var Z_ERRNO: number;
                */
        Z_ERRNO(context) {},

        /*
                declare var Z_STREAM_ERROR: number;
                */
        Z_STREAM_ERROR(context) {},

        /*
                declare var Z_DATA_ERROR: number;
                */
        Z_DATA_ERROR(context) {},

        /*
                declare var Z_MEM_ERROR: number;
                */
        Z_MEM_ERROR(context) {},

        /*
                declare var Z_BUF_ERROR: number;
                */
        Z_BUF_ERROR(context) {},

        /*
                declare var Z_VERSION_ERROR: number;
                */
        Z_VERSION_ERROR(context) {},

        /*
                declare var Z_NO_COMPRESSION: number;
                */
        Z_NO_COMPRESSION(context) {},

        /*
                declare var Z_BEST_SPEED: number;
                */
        Z_BEST_SPEED(context) {},

        /*
                declare var Z_BEST_COMPRESSION: number;
                */
        Z_BEST_COMPRESSION(context) {},

        /*
                declare var Z_DEFAULT_COMPRESSION: number;
                */
        Z_DEFAULT_COMPRESSION(context) {},

        /*
                declare var Z_FILTERED: number;
                */
        Z_FILTERED(context) {},

        /*
                declare var Z_HUFFMAN_ONLY: number;
                */
        Z_HUFFMAN_ONLY(context) {},

        /*
                declare var Z_RLE: number;
                */
        Z_RLE(context) {},

        /*
                declare var Z_FIXED: number;
                */
        Z_FIXED(context) {},

        /*
                declare var Z_DEFAULT_STRATEGY: number;
                */
        Z_DEFAULT_STRATEGY(context) {},

        /*
                declare var Z_BINARY: number;
                */
        Z_BINARY(context) {},

        /*
                declare var Z_TEXT: number;
                */
        Z_TEXT(context) {},

        /*
                declare var Z_ASCII: number;
                */
        Z_ASCII(context) {},

        /*
                declare var Z_UNKNOWN: number;
                */
        Z_UNKNOWN(context) {},

        /*
                declare var Z_DEFLATED: number;
                */
        Z_DEFLATED(context) {},

        /*
                declare var Z_NULL: number;
                */
        Z_NULL(context) {},

        /*
                declare var Z_DEFAULT_CHUNK: number;
                */
        Z_DEFAULT_CHUNK(context) {},

        /*
                declare var Z_DEFAULT_LEVEL: number;
                */
        Z_DEFAULT_LEVEL(context) {},

        /*
                declare var Z_DEFAULT_MEMLEVEL: number;
                */
        Z_DEFAULT_MEMLEVEL(context) {},

        /*
                declare var Z_DEFAULT_WINDOWBITS: number;
                */
        Z_DEFAULT_WINDOWBITS(context) {},

        /*
                declare var Z_MAX_CHUNK: number;
                */
        Z_MAX_CHUNK(context) {},

        /*
                declare var Z_MAX_LEVEL: number;
                */
        Z_MAX_LEVEL(context) {},

        /*
                declare var Z_MAX_MEMLEVEL: number;
                */
        Z_MAX_MEMLEVEL(context) {},

        /*
                declare var Z_MAX_WINDOWBITS: number;
                */
        Z_MAX_WINDOWBITS(context) {},

        /*
                declare var Z_MIN_CHUNK: number;
                */
        Z_MIN_CHUNK(context) {},

        /*
                declare var Z_MIN_LEVEL: number;
                */
        Z_MIN_LEVEL(context) {},

        /*
                declare var Z_MIN_MEMLEVEL: number;
                */
        Z_MIN_MEMLEVEL(context) {},

        /*
                declare var Z_MIN_WINDOWBITS: number;
                */
        Z_MIN_WINDOWBITS(context) {},

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
                    ...
                  };
                */
        constants(context) {},

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
        codes(context) {},

        /*
                declare class Zlib extends stream$Duplex {
                    // TODO
                  }
                */
        Zlib(context) {},

        /*
                declare class Deflate extends Zlib {}
                */
        Deflate(context) {},

        /*
                declare class Inflate extends Zlib {}
                */
        Inflate(context) {},

        /*
                declare class Gzip extends Zlib {}
                */
        Gzip(context) {},

        /*
                declare class Gunzip extends Zlib {}
                */
        Gunzip(context) {},

        /*
                declare class DeflateRaw extends Zlib {}
                */
        DeflateRaw(context) {},

        /*
                declare class InflateRaw extends Zlib {}
                */
        InflateRaw(context) {},

        /*
                declare class Unzip extends Zlib {}
                */
        Unzip(context) {},

        /*
                declare function createDeflate(options?: zlib$options): Deflate;
                */
        createDeflate(context) {},

        /*
                declare function createInflate(options?: zlib$options): Inflate;
                */
        createInflate(context) {},

        /*
                declare function createDeflateRaw(options?: zlib$options): DeflateRaw;
                */
        createDeflateRaw(context) {},

        /*
                declare function createInflateRaw(options?: zlib$options): InflateRaw;
                */
        createInflateRaw(context) {},

        /*
                declare function createGzip(options?: zlib$options): Gzip;
                */
        createGzip(context) {},

        /*
                declare function createGunzip(options?: zlib$options): Gunzip;
                */
        createGunzip(context) {},

        /*
                declare function createUnzip(options?: zlib$options): Unzip;
                */
        createUnzip(context) {},

        /*
                declare var deflate: zlib$asyncFn;
                */
        deflate(context) {},

        /*
                declare var deflateSync: zlib$syncFn;
                */
        deflateSync(context) {},

        /*
                declare var gzip: zlib$asyncFn;
                */
        gzip(context) {},

        /*
                declare var gzipSync: zlib$syncFn;
                */
        gzipSync(context) {},

        /*
                declare var deflateRaw: zlib$asyncFn;
                */
        deflateRaw(context) {},

        /*
                declare var deflateRawSync: zlib$syncFn;
                */
        deflateRawSync(context) {},

        /*
                declare var unzip: zlib$asyncFn;
                */
        unzip(context) {},

        /*
                declare var unzipSync: zlib$syncFn;
                */
        unzipSync(context) {},

        /*
                declare var inflate: zlib$asyncFn;
                */
        inflate(context) {},

        /*
                declare var inflateSync: zlib$syncFn;
                */
        inflateSync(context) {},

        /*
                declare var gunzip: zlib$asyncFn;
                */
        gunzip(context) {},

        /*
                declare var gunzipSync: zlib$syncFn;
                */
        gunzipSync(context) {},

        /*
                declare var inflateRaw: zlib$asyncFn;
                */
        inflateRaw(context) {},

        /*
                declare var inflateRawSync: zlib$syncFn;
                */
        inflateRawSync(context) {},
      },
    },

    assert: {
      libs: [],

      exports: {
        /*
                declare class AssertionError extends Error {}
                */
        AssertionError(context) {},

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
                declare function getHeapStatistics() : HeapStatistics;
                */
        getHeapStatistics(context) {},

        /*
                declare function getHeapSpaceStatistics() : Array<HeapSpaceStatistics>
                */
        getHeapSpaceStatistics(context) {},

        /*
                declare function setFlagsFromString(flags: string) : void;
                */
        setFlagsFromString(context) {},
      },
    },

    repl: {
      libs: [],

      exports: {
        /*
                declare var REPL_MODE_MAGIC: $SymbolReplModeMagic;
                */
        REPL_MODE_MAGIC(context) {},

        /*
                declare var REPL_MODE_SLOPPY: $SymbolReplModeSloppy;
                */
        REPL_MODE_SLOPPY(context) {},

        /*
                declare var REPL_MODE_STRICT: $SymbolReplModeStrict;
                */
        REPL_MODE_STRICT(context) {},

        /*
                declare class REPLServer extends readline$Interface {
                    context: vm$Context;
                    defineCommand(command: string, options: repl$DefineCommandOptions): void;
                    displayPrompt(preserveCursor?: boolean): void;
                  }
                */
        REPLServer(context) {},

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
        start(context) {},

        /*
                declare class Recoverable extends SyntaxError {
                    constructor(err: Error): Recoverable;
                  }
                */
        Recoverable(context) {},
      },
    },
  },
} as RuleSet;
