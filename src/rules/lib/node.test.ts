import plugin from '../../tsTypesPlugin';
import { createTransform } from '../../createTransform';
const transform = createTransform([plugin]);

describe('lib/node.js', () => {
  describe('globals', () => {
    describe('Buffer', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Buffer;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Buffer();
            
            class A1 extends Buffer {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('child_process$Error', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = child_process$Error;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new child_process$Error();
            
            class A1 extends child_process$Error {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('child_process$ChildProcess', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = child_process$ChildProcess;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new child_process$ChildProcess();
            
            class A1 extends child_process$ChildProcess {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('cluster$Worker', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = cluster$Worker;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new cluster$Worker();
            
            class A1 extends cluster$Worker {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Cipher', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Cipher;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Cipher();
            
            class A1 extends crypto$Cipher {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$ECDH', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$ECDH;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$ECDH();
            
            class A1 extends crypto$ECDH {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Decipher', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Decipher;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Decipher();
            
            class A1 extends crypto$Decipher {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Hash', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Hash;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Hash();
            
            class A1 extends crypto$Hash {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Hmac', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Hmac;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Hmac();
            
            class A1 extends crypto$Hmac {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Sign', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Sign;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Sign();
            
            class A1 extends crypto$Sign {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('crypto$Verify', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = crypto$Verify;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new crypto$Verify();
            
            class A1 extends crypto$Verify {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('dgram$Socket', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = dgram$Socket;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new dgram$Socket();
            
            class A1 extends dgram$Socket {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('events$EventEmitter', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = events$EventEmitter;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new events$EventEmitter();
            
            class A1 extends events$EventEmitter {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('domain$Domain', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = domain$Domain;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new domain$Domain();
            
            class A1 extends domain$Domain {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('http$Agent', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = http$Agent;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new http$Agent();
            
            class A1 extends http$Agent {};
            class A2 extends http$Agent<P0> {}
            let a2 = new http$Agent<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('http$IncomingMessage', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = http$IncomingMessage;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new http$IncomingMessage();
            
            class A1 extends http$IncomingMessage {};
            class A2 extends http$IncomingMessage<P0> {}
            let a2 = new http$IncomingMessage<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('http$ClientRequest', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = http$ClientRequest;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class - typeParams(0 - 1)', () => {
        expect(
          transform(`
            new http$ClientRequest();
            
            class A1 extends http$ClientRequest {};
            class A2 extends http$ClientRequest<P0> {}
            let a2 = new http$ClientRequest<P0>();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('http$ServerResponse', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = http$ServerResponse;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new http$ServerResponse();
            
            class A1 extends http$ServerResponse {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('http$Server', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = http$Server;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new http$Server();
            
            class A1 extends http$Server {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('https$Server', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = https$Server;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new https$Server();
            
            class A1 extends https$Server {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('net$Socket', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = net$Socket;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new net$Socket();
            
            class A1 extends net$Socket {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('net$Server', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = net$Server;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new net$Server();
            
            class A1 extends net$Server {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('readline$Interface', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = readline$Interface;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new readline$Interface();
            
            class A1 extends readline$Interface {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$Stream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$Stream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$Stream();
            
            class A1 extends stream$Stream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$Readable', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$Readable;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$Readable();
            
            class A1 extends stream$Readable {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$Writable', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$Writable;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$Writable();
            
            class A1 extends stream$Writable {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$Duplex', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$Duplex;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$Duplex();
            
            class A1 extends stream$Duplex {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$Transform', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$Transform;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$Transform();
            
            class A1 extends stream$Transform {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('stream$PassThrough', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = stream$PassThrough;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new stream$PassThrough();
            
            class A1 extends stream$PassThrough {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('tty$ReadStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = tty$ReadStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new tty$ReadStream();
            
            class A1 extends tty$ReadStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('tty$WriteStream', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = tty$WriteStream;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new tty$WriteStream();
            
            class A1 extends tty$WriteStream {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('string_decoder$StringDecoder', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = string_decoder$StringDecoder;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new string_decoder$StringDecoder();
            
            class A1 extends string_decoder$StringDecoder {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('tls$TLSSocket', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = tls$TLSSocket;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new tls$TLSSocket();
            
            class A1 extends tls$TLSSocket {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('tls$Server', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = tls$Server;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new tls$Server();
            
            class A1 extends tls$Server {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('vm$Script', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = vm$Script;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new vm$Script();
            
            class A1 extends vm$Script {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('vm$Context', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = vm$Context;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new vm$Context();
            
            class A1 extends vm$Context {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolReplModeMagic', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolReplModeMagic;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolReplModeMagic();
            
            class A1 extends $SymbolReplModeMagic {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolReplModeSloppy', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolReplModeSloppy;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolReplModeSloppy();
            
            class A1 extends $SymbolReplModeSloppy {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('$SymbolReplModeStrict', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = $SymbolReplModeStrict;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new $SymbolReplModeStrict();
            
            class A1 extends $SymbolReplModeStrict {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('Process', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = Process;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new Process();
            
            class A1 extends Process {};
          `)
        ).toMatchSnapshot();
      });
    });

    describe('process', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = process;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('__filename', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = __filename;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('__dirname', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = __dirname;
          `)
        ).toMatchSnapshot();
      });
    });

    describe('setImmediate', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = setImmediate;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new setImmediate();
            
            class A1 extends setImmediate {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            setImmediate();
            
          `)
        ).toMatchSnapshot();
      });
    });

    describe('clearImmediate', () => {
      test('variable', () => {
        expect(
          transform(`
            var a = clearImmediate;
          `)
        ).toMatchSnapshot();
      });

      test('generated - class', () => {
        expect(
          transform(`
            new clearImmediate();
            
            class A1 extends clearImmediate {};
          `)
        ).toMatchSnapshot();
      });

      test('generated - callable', () => {
        expect(
          transform(`
            clearImmediate();
            
          `)
        ).toMatchSnapshot();
      });
    });
  });

  describe('modules', () => {
    describe('buffer', () => {
      describe('kMaxLength', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = kMaxLength;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('INSPECT_MAX_BYTES', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = INSPECT_MAX_BYTES;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('transcode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = transcode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { transcode } from "buffer";
            
            new transcode();
            
            class A1 extends transcode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { transcode } from "buffer";
            
            transcode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "buffer";
            
            new M.transcode();
            
            class A1 extends M.transcode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "buffer";
            
            M.transcode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { transcode as t } from "buffer";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { transcode as t } from "buffer";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Buffer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Buffer;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('child_process', () => {
      describe('ChildProcess', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ChildProcess;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('exec', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = exec;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { exec } from "child_process";
            
            new exec();
            
            class A1 extends exec {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { exec } from "child_process";
            
            exec();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.exec();
            
            class A1 extends M.exec {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.exec();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { exec as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { exec as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('execSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = execSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { execSync } from "child_process";
            
            new execSync();
            
            class A1 extends execSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { execSync } from "child_process";
            
            execSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.execSync();
            
            class A1 extends M.execSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.execSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { execSync as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { execSync as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('execFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = execFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { execFile } from "child_process";
            
            new execFile();
            
            class A1 extends execFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { execFile } from "child_process";
            
            execFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.execFile();
            
            class A1 extends M.execFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.execFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { execFile as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { execFile as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('execFileSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = execFileSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { execFileSync } from "child_process";
            
            new execFileSync();
            
            class A1 extends execFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { execFileSync } from "child_process";
            
            execFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.execFileSync();
            
            class A1 extends M.execFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.execFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { execFileSync as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { execFileSync as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fork', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fork;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fork } from "child_process";
            
            new fork();
            
            class A1 extends fork {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fork } from "child_process";
            
            fork();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.fork();
            
            class A1 extends M.fork {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.fork();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fork as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fork as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('spawn', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = spawn;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { spawn } from "child_process";
            
            new spawn();
            
            class A1 extends spawn {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { spawn } from "child_process";
            
            spawn();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.spawn();
            
            class A1 extends M.spawn {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.spawn();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { spawn as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { spawn as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('spawnSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = spawnSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { spawnSync } from "child_process";
            
            new spawnSync();
            
            class A1 extends spawnSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { spawnSync } from "child_process";
            
            spawnSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            new M.spawnSync();
            
            class A1 extends M.spawnSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "child_process";
            
            M.spawnSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { spawnSync as t } from "child_process";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { spawnSync as t } from "child_process";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('cluster', () => {
      describe('Cluster', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Cluster;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Cluster } from "cluster";
            
            new Cluster();
            
            class A1 extends Cluster {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "cluster";
            
            new M.Cluster();
            
            class A1 extends M.Cluster {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Cluster as t } from "cluster";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('default', () => {
        test('has no test', () => {});
      });
    });

    describe('crypto', () => {
      describe('DEFAULT_ENCODING', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DEFAULT_ENCODING;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Sign', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Sign;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Sign } from "crypto";
            
            new Sign();
            
            class A1 extends Sign {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.Sign();
            
            class A1 extends M.Sign {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Sign as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Verify', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Verify;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Verify } from "crypto";
            
            new Verify();
            
            class A1 extends Verify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.Verify();
            
            class A1 extends M.Verify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Verify as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createCipher', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createCipher;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createCipher } from "crypto";
            
            new createCipher();
            
            class A1 extends createCipher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createCipher } from "crypto";
            
            createCipher();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createCipher();
            
            class A1 extends M.createCipher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createCipher();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createCipher as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createCipher as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createCipheriv', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createCipheriv;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createCipheriv } from "crypto";
            
            new createCipheriv();
            
            class A1 extends createCipheriv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createCipheriv } from "crypto";
            
            createCipheriv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createCipheriv();
            
            class A1 extends M.createCipheriv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createCipheriv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createCipheriv as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createCipheriv as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createCredentials', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createCredentials;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createCredentials } from "crypto";
            
            new createCredentials();
            
            class A1 extends createCredentials {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createCredentials } from "crypto";
            
            createCredentials();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createCredentials();
            
            class A1 extends M.createCredentials {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createCredentials();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createCredentials as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createCredentials as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createDecipher', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createDecipher;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createDecipher } from "crypto";
            
            new createDecipher();
            
            class A1 extends createDecipher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createDecipher } from "crypto";
            
            createDecipher();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createDecipher();
            
            class A1 extends M.createDecipher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createDecipher();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createDecipher as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createDecipher as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createDecipheriv', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createDecipheriv;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createDecipheriv } from "crypto";
            
            new createDecipheriv();
            
            class A1 extends createDecipheriv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createDecipheriv } from "crypto";
            
            createDecipheriv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createDecipheriv();
            
            class A1 extends M.createDecipheriv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createDecipheriv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createDecipheriv as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createDecipheriv as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createDiffieHellman', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createDiffieHellman;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createDiffieHellman } from "crypto";
            
            new createDiffieHellman();
            
            class A1 extends createDiffieHellman {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createDiffieHellman } from "crypto";
            
            createDiffieHellman();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createDiffieHellman();
            
            class A1 extends M.createDiffieHellman {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createDiffieHellman();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createDiffieHellman as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createDiffieHellman as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createECDH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createECDH;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createECDH } from "crypto";
            
            new createECDH();
            
            class A1 extends createECDH {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createECDH } from "crypto";
            
            createECDH();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createECDH();
            
            class A1 extends M.createECDH {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createECDH();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createECDH as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createECDH as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createHash', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createHash;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createHash } from "crypto";
            
            new createHash();
            
            class A1 extends createHash {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createHash } from "crypto";
            
            createHash();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createHash();
            
            class A1 extends M.createHash {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createHash();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createHash as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createHash as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createHmac', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createHmac;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createHmac } from "crypto";
            
            new createHmac();
            
            class A1 extends createHmac {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createHmac } from "crypto";
            
            createHmac();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createHmac();
            
            class A1 extends M.createHmac {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createHmac();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createHmac as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createHmac as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createSign', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createSign;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createSign } from "crypto";
            
            new createSign();
            
            class A1 extends createSign {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createSign } from "crypto";
            
            createSign();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createSign();
            
            class A1 extends M.createSign {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createSign();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createSign as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createSign as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createVerify', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createVerify;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createVerify } from "crypto";
            
            new createVerify();
            
            class A1 extends createVerify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createVerify } from "crypto";
            
            createVerify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.createVerify();
            
            class A1 extends M.createVerify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.createVerify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createVerify as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createVerify as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getCiphers', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getCiphers;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getCiphers } from "crypto";
            
            new getCiphers();
            
            class A1 extends getCiphers {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getCiphers } from "crypto";
            
            getCiphers();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.getCiphers();
            
            class A1 extends M.getCiphers {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.getCiphers();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getCiphers as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getCiphers as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getCurves', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getCurves;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getCurves } from "crypto";
            
            new getCurves();
            
            class A1 extends getCurves {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getCurves } from "crypto";
            
            getCurves();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.getCurves();
            
            class A1 extends M.getCurves {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.getCurves();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getCurves as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getCurves as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getDiffieHellman', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getDiffieHellman;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getDiffieHellman } from "crypto";
            
            new getDiffieHellman();
            
            class A1 extends getDiffieHellman {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getDiffieHellman } from "crypto";
            
            getDiffieHellman();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.getDiffieHellman();
            
            class A1 extends M.getDiffieHellman {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.getDiffieHellman();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getDiffieHellman as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getDiffieHellman as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getHashes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getHashes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getHashes } from "crypto";
            
            new getHashes();
            
            class A1 extends getHashes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getHashes } from "crypto";
            
            getHashes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.getHashes();
            
            class A1 extends M.getHashes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.getHashes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getHashes as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getHashes as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('pbkdf2', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = pbkdf2;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { pbkdf2 } from "crypto";
            
            new pbkdf2();
            
            class A1 extends pbkdf2 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { pbkdf2 } from "crypto";
            
            pbkdf2();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.pbkdf2();
            
            class A1 extends M.pbkdf2 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.pbkdf2();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { pbkdf2 as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { pbkdf2 as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('pbkdf2Sync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = pbkdf2Sync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { pbkdf2Sync } from "crypto";
            
            new pbkdf2Sync();
            
            class A1 extends pbkdf2Sync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { pbkdf2Sync } from "crypto";
            
            pbkdf2Sync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.pbkdf2Sync();
            
            class A1 extends M.pbkdf2Sync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.pbkdf2Sync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { pbkdf2Sync as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { pbkdf2Sync as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('privateDecrypt', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = privateDecrypt;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { privateDecrypt } from "crypto";
            
            new privateDecrypt();
            
            class A1 extends privateDecrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { privateDecrypt } from "crypto";
            
            privateDecrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.privateDecrypt();
            
            class A1 extends M.privateDecrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.privateDecrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { privateDecrypt as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { privateDecrypt as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('privateEncrypt', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = privateEncrypt;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { privateEncrypt } from "crypto";
            
            new privateEncrypt();
            
            class A1 extends privateEncrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { privateEncrypt } from "crypto";
            
            privateEncrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.privateEncrypt();
            
            class A1 extends M.privateEncrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.privateEncrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { privateEncrypt as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { privateEncrypt as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('publicDecrypt', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = publicDecrypt;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { publicDecrypt } from "crypto";
            
            new publicDecrypt();
            
            class A1 extends publicDecrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { publicDecrypt } from "crypto";
            
            publicDecrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.publicDecrypt();
            
            class A1 extends M.publicDecrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.publicDecrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { publicDecrypt as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { publicDecrypt as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('publicEncrypt', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = publicEncrypt;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { publicEncrypt } from "crypto";
            
            new publicEncrypt();
            
            class A1 extends publicEncrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { publicEncrypt } from "crypto";
            
            publicEncrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.publicEncrypt();
            
            class A1 extends M.publicEncrypt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.publicEncrypt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { publicEncrypt as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { publicEncrypt as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('pseudoRandomBytes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = pseudoRandomBytes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { pseudoRandomBytes } from "crypto";
            
            new pseudoRandomBytes();
            
            class A1 extends pseudoRandomBytes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { pseudoRandomBytes } from "crypto";
            
            pseudoRandomBytes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.pseudoRandomBytes();
            
            class A1 extends M.pseudoRandomBytes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.pseudoRandomBytes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { pseudoRandomBytes as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { pseudoRandomBytes as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('randomBytes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = randomBytes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { randomBytes } from "crypto";
            
            new randomBytes();
            
            class A1 extends randomBytes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { randomBytes } from "crypto";
            
            randomBytes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.randomBytes();
            
            class A1 extends M.randomBytes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.randomBytes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { randomBytes as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { randomBytes as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('randomFillSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = randomFillSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { randomFillSync } from "crypto";
            
            new randomFillSync();
            
            class A1 extends randomFillSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { randomFillSync } from "crypto";
            
            randomFillSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.randomFillSync();
            
            class A1 extends M.randomFillSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.randomFillSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { randomFillSync as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { randomFillSync as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('randomFill', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = randomFill;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { randomFill } from "crypto";
            
            new randomFill();
            
            class A1 extends randomFill {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { randomFill } from "crypto";
            
            randomFill();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.randomFill();
            
            class A1 extends M.randomFill {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.randomFill();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { randomFill as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { randomFill as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('timingSafeEqual', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = timingSafeEqual;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { timingSafeEqual } from "crypto";
            
            new timingSafeEqual();
            
            class A1 extends timingSafeEqual {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { timingSafeEqual } from "crypto";
            
            timingSafeEqual();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            new M.timingSafeEqual();
            
            class A1 extends M.timingSafeEqual {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "crypto";
            
            M.timingSafeEqual();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { timingSafeEqual as t } from "crypto";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { timingSafeEqual as t } from "crypto";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('dgram', () => {
      describe('createSocket', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createSocket;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createSocket } from "dgram";
            
            new createSocket();
            
            class A1 extends createSocket {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createSocket } from "dgram";
            
            createSocket();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dgram";
            
            new M.createSocket();
            
            class A1 extends M.createSocket {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dgram";
            
            M.createSocket();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createSocket as t } from "dgram";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createSocket as t } from "dgram";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('dns', () => {
      describe('ADDRGETNETWORKPARAMS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ADDRGETNETWORKPARAMS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADFAMILY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADFAMILY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADFLAGS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADFLAGS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADHINTS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADHINTS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADQUERY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADQUERY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADNAME', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADNAME;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADRESP', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADRESP;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BADSTR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = BADSTR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('CANCELLED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = CANCELLED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('CONNREFUSED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = CONNREFUSED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('DESTRUCTION', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DESTRUCTION;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('EOF', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = EOF;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FILE', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = FILE;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FORMER', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = FORMER;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('LOADIPHLPAPI', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = LOADIPHLPAPI;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NODATA', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NODATA;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NOMEM', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NOMEM;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NONAME', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NONAME;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NOTFOUND', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NOTFOUND;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NOTIMP', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NOTIMP;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('NOTINITIALIZED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = NOTINITIALIZED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('REFUSED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = REFUSED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('SERVFAIL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = SERVFAIL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TIMEOUT', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = TIMEOUT;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ADDRCONFIG', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ADDRCONFIG;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('V4MAPPED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = V4MAPPED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('LookupOptions', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { LookupOptions } from "dns";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { LookupOptions } from "dns";
            
            class A1 extends LookupOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            class A1 extends M.LookupOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { LookupOptions as t } from "dns";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { LookupOptions as t } from "dns";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lookup', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lookup;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lookup } from "dns";
            
            new lookup();
            
            class A1 extends lookup {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lookup } from "dns";
            
            lookup();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.lookup();
            
            class A1 extends M.lookup {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.lookup();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lookup as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lookup as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolve', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolve;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolve } from "dns";
            
            new resolve();
            
            class A1 extends resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolve } from "dns";
            
            resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolve();
            
            class A1 extends M.resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolve4', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolve4;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolve4 } from "dns";
            
            new resolve4();
            
            class A1 extends resolve4 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolve4 } from "dns";
            
            resolve4();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolve4();
            
            class A1 extends M.resolve4 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolve4();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolve4 as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolve4 as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolve6', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolve6;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolve6 } from "dns";
            
            new resolve6();
            
            class A1 extends resolve6 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolve6 } from "dns";
            
            resolve6();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolve6();
            
            class A1 extends M.resolve6 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolve6();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolve6 as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolve6 as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolveCname', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolveCname;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolveCname } from "dns";
            
            new resolveCname();
            
            class A1 extends resolveCname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolveCname } from "dns";
            
            resolveCname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolveCname();
            
            class A1 extends M.resolveCname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolveCname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolveCname as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolveCname as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolveMx', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolveMx;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolveMx } from "dns";
            
            new resolveMx();
            
            class A1 extends resolveMx {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolveMx } from "dns";
            
            resolveMx();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolveMx();
            
            class A1 extends M.resolveMx {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolveMx();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolveMx as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolveMx as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolveNs', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolveNs;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolveNs } from "dns";
            
            new resolveNs();
            
            class A1 extends resolveNs {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolveNs } from "dns";
            
            resolveNs();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolveNs();
            
            class A1 extends M.resolveNs {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolveNs();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolveNs as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolveNs as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolveSrv', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolveSrv;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolveSrv } from "dns";
            
            new resolveSrv();
            
            class A1 extends resolveSrv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolveSrv } from "dns";
            
            resolveSrv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolveSrv();
            
            class A1 extends M.resolveSrv {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolveSrv();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolveSrv as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolveSrv as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolveTxt', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolveTxt;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolveTxt } from "dns";
            
            new resolveTxt();
            
            class A1 extends resolveTxt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolveTxt } from "dns";
            
            resolveTxt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.resolveTxt();
            
            class A1 extends M.resolveTxt {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.resolveTxt();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolveTxt as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolveTxt as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('reverse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = reverse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { reverse } from "dns";
            
            new reverse();
            
            class A1 extends reverse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { reverse } from "dns";
            
            reverse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.reverse();
            
            class A1 extends M.reverse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.reverse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { reverse as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { reverse as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('timingSafeEqual', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = timingSafeEqual;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { timingSafeEqual } from "dns";
            
            new timingSafeEqual();
            
            class A1 extends timingSafeEqual {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { timingSafeEqual } from "dns";
            
            timingSafeEqual();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            new M.timingSafeEqual();
            
            class A1 extends M.timingSafeEqual {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "dns";
            
            M.timingSafeEqual();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { timingSafeEqual as t } from "dns";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { timingSafeEqual as t } from "dns";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('events', () => {
      describe('EventEmitter', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = EventEmitter;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { EventEmitter } from "events";
            
            new EventEmitter();
            
            class A1 extends EventEmitter {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "events";
            
            new M.EventEmitter();
            
            class A1 extends M.EventEmitter {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { EventEmitter as t } from "events";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('default', () => {
        test('has no test', () => {});
      });
    });

    describe('domain', () => {
      describe('create', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = create;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { create } from "domain";
            
            new create();
            
            class A1 extends create {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { create } from "domain";
            
            create();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "domain";
            
            new M.create();
            
            class A1 extends M.create {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "domain";
            
            M.create();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { create as t } from "domain";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { create as t } from "domain";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('fs', () => {
      describe('Stats', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Stats;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Stats } from "fs";
            
            new Stats();
            
            class A1 extends Stats {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.Stats();
            
            class A1 extends M.Stats {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Stats as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FSWatcher', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = FSWatcher;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { FSWatcher } from "fs";
            
            new FSWatcher();
            
            class A1 extends FSWatcher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.FSWatcher();
            
            class A1 extends M.FSWatcher {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { FSWatcher as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ReadStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ReadStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ReadStream } from "fs";
            
            new ReadStream();
            
            class A1 extends ReadStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.ReadStream();
            
            class A1 extends M.ReadStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ReadStream as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('WriteStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = WriteStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { WriteStream } from "fs";
            
            new WriteStream();
            
            class A1 extends WriteStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.WriteStream();
            
            class A1 extends M.WriteStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { WriteStream as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('rename', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = rename;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { rename } from "fs";
            
            new rename();
            
            class A1 extends rename {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { rename } from "fs";
            
            rename();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.rename();
            
            class A1 extends M.rename {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.rename();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { rename as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { rename as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('renameSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = renameSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { renameSync } from "fs";
            
            new renameSync();
            
            class A1 extends renameSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { renameSync } from "fs";
            
            renameSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.renameSync();
            
            class A1 extends M.renameSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.renameSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { renameSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { renameSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ftruncate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ftruncate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ftruncate } from "fs";
            
            new ftruncate();
            
            class A1 extends ftruncate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { ftruncate } from "fs";
            
            ftruncate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.ftruncate();
            
            class A1 extends M.ftruncate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.ftruncate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ftruncate as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { ftruncate as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ftruncateSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ftruncateSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ftruncateSync } from "fs";
            
            new ftruncateSync();
            
            class A1 extends ftruncateSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { ftruncateSync } from "fs";
            
            ftruncateSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.ftruncateSync();
            
            class A1 extends M.ftruncateSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.ftruncateSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ftruncateSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { ftruncateSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('truncate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = truncate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { truncate } from "fs";
            
            new truncate();
            
            class A1 extends truncate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { truncate } from "fs";
            
            truncate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.truncate();
            
            class A1 extends M.truncate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.truncate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { truncate as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { truncate as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('truncateSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = truncateSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { truncateSync } from "fs";
            
            new truncateSync();
            
            class A1 extends truncateSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { truncateSync } from "fs";
            
            truncateSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.truncateSync();
            
            class A1 extends M.truncateSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.truncateSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { truncateSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { truncateSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('chown', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = chown;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { chown } from "fs";
            
            new chown();
            
            class A1 extends chown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { chown } from "fs";
            
            chown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.chown();
            
            class A1 extends M.chown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.chown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { chown as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { chown as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('chownSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = chownSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { chownSync } from "fs";
            
            new chownSync();
            
            class A1 extends chownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { chownSync } from "fs";
            
            chownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.chownSync();
            
            class A1 extends M.chownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.chownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { chownSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { chownSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fchown', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fchown;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fchown } from "fs";
            
            new fchown();
            
            class A1 extends fchown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fchown } from "fs";
            
            fchown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fchown();
            
            class A1 extends M.fchown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fchown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fchown as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fchown as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fchownSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fchownSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fchownSync } from "fs";
            
            new fchownSync();
            
            class A1 extends fchownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fchownSync } from "fs";
            
            fchownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fchownSync();
            
            class A1 extends M.fchownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fchownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fchownSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fchownSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lchown', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lchown;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lchown } from "fs";
            
            new lchown();
            
            class A1 extends lchown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lchown } from "fs";
            
            lchown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lchown();
            
            class A1 extends M.lchown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lchown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lchown as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lchown as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lchownSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lchownSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lchownSync } from "fs";
            
            new lchownSync();
            
            class A1 extends lchownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lchownSync } from "fs";
            
            lchownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lchownSync();
            
            class A1 extends M.lchownSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lchownSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lchownSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lchownSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('chmod', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = chmod;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { chmod } from "fs";
            
            new chmod();
            
            class A1 extends chmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { chmod } from "fs";
            
            chmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.chmod();
            
            class A1 extends M.chmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.chmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { chmod as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { chmod as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('chmodSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = chmodSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { chmodSync } from "fs";
            
            new chmodSync();
            
            class A1 extends chmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { chmodSync } from "fs";
            
            chmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.chmodSync();
            
            class A1 extends M.chmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.chmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { chmodSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { chmodSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fchmod', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fchmod;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fchmod } from "fs";
            
            new fchmod();
            
            class A1 extends fchmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fchmod } from "fs";
            
            fchmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fchmod();
            
            class A1 extends M.fchmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fchmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fchmod as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fchmod as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fchmodSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fchmodSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fchmodSync } from "fs";
            
            new fchmodSync();
            
            class A1 extends fchmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fchmodSync } from "fs";
            
            fchmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fchmodSync();
            
            class A1 extends M.fchmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fchmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fchmodSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fchmodSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lchmod', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lchmod;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lchmod } from "fs";
            
            new lchmod();
            
            class A1 extends lchmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lchmod } from "fs";
            
            lchmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lchmod();
            
            class A1 extends M.lchmod {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lchmod();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lchmod as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lchmod as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lchmodSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lchmodSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lchmodSync } from "fs";
            
            new lchmodSync();
            
            class A1 extends lchmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lchmodSync } from "fs";
            
            lchmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lchmodSync();
            
            class A1 extends M.lchmodSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lchmodSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lchmodSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lchmodSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('stat', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = stat;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { stat } from "fs";
            
            new stat();
            
            class A1 extends stat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { stat } from "fs";
            
            stat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.stat();
            
            class A1 extends M.stat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.stat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { stat as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { stat as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('statSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = statSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { statSync } from "fs";
            
            new statSync();
            
            class A1 extends statSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { statSync } from "fs";
            
            statSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.statSync();
            
            class A1 extends M.statSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.statSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { statSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { statSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fstat', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fstat;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fstat } from "fs";
            
            new fstat();
            
            class A1 extends fstat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fstat } from "fs";
            
            fstat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fstat();
            
            class A1 extends M.fstat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fstat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fstat as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fstat as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fstatSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fstatSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fstatSync } from "fs";
            
            new fstatSync();
            
            class A1 extends fstatSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fstatSync } from "fs";
            
            fstatSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fstatSync();
            
            class A1 extends M.fstatSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fstatSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fstatSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fstatSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lstat', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lstat;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lstat } from "fs";
            
            new lstat();
            
            class A1 extends lstat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lstat } from "fs";
            
            lstat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lstat();
            
            class A1 extends M.lstat {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lstat();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lstat as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lstat as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('lstatSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = lstatSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { lstatSync } from "fs";
            
            new lstatSync();
            
            class A1 extends lstatSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { lstatSync } from "fs";
            
            lstatSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.lstatSync();
            
            class A1 extends M.lstatSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.lstatSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { lstatSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { lstatSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('link', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = link;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { link } from "fs";
            
            new link();
            
            class A1 extends link {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { link } from "fs";
            
            link();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.link();
            
            class A1 extends M.link {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.link();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { link as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { link as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('linkSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = linkSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { linkSync } from "fs";
            
            new linkSync();
            
            class A1 extends linkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { linkSync } from "fs";
            
            linkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.linkSync();
            
            class A1 extends M.linkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.linkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { linkSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { linkSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('symlink', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = symlink;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { symlink } from "fs";
            
            new symlink();
            
            class A1 extends symlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { symlink } from "fs";
            
            symlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.symlink();
            
            class A1 extends M.symlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.symlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { symlink as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { symlink as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('symlinkSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = symlinkSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { symlinkSync } from "fs";
            
            new symlinkSync();
            
            class A1 extends symlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { symlinkSync } from "fs";
            
            symlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.symlinkSync();
            
            class A1 extends M.symlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.symlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { symlinkSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { symlinkSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readlink', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readlink;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readlink } from "fs";
            
            new readlink();
            
            class A1 extends readlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readlink } from "fs";
            
            readlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readlink();
            
            class A1 extends M.readlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readlink as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readlink as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readlinkSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readlinkSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readlinkSync } from "fs";
            
            new readlinkSync();
            
            class A1 extends readlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readlinkSync } from "fs";
            
            readlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readlinkSync();
            
            class A1 extends M.readlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readlinkSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readlinkSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('realpath', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = realpath;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { realpath } from "fs";
            
            new realpath();
            
            class A1 extends realpath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { realpath } from "fs";
            
            realpath();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.realpath();
            
            class A1 extends M.realpath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.realpath();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { realpath as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { realpath as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('realpathSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = realpathSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { realpathSync } from "fs";
            
            new realpathSync();
            
            class A1 extends realpathSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { realpathSync } from "fs";
            
            realpathSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.realpathSync();
            
            class A1 extends M.realpathSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.realpathSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { realpathSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { realpathSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unlink', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unlink;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { unlink } from "fs";
            
            new unlink();
            
            class A1 extends unlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { unlink } from "fs";
            
            unlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.unlink();
            
            class A1 extends M.unlink {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.unlink();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { unlink as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { unlink as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unlinkSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unlinkSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { unlinkSync } from "fs";
            
            new unlinkSync();
            
            class A1 extends unlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { unlinkSync } from "fs";
            
            unlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.unlinkSync();
            
            class A1 extends M.unlinkSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.unlinkSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { unlinkSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { unlinkSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('rmdir', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = rmdir;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { rmdir } from "fs";
            
            new rmdir();
            
            class A1 extends rmdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { rmdir } from "fs";
            
            rmdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.rmdir();
            
            class A1 extends M.rmdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.rmdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { rmdir as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { rmdir as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('rmdirSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = rmdirSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { rmdirSync } from "fs";
            
            new rmdirSync();
            
            class A1 extends rmdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { rmdirSync } from "fs";
            
            rmdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.rmdirSync();
            
            class A1 extends M.rmdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.rmdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { rmdirSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { rmdirSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('mkdir', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = mkdir;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { mkdir } from "fs";
            
            new mkdir();
            
            class A1 extends mkdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { mkdir } from "fs";
            
            mkdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.mkdir();
            
            class A1 extends M.mkdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.mkdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { mkdir as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { mkdir as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('mkdirSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = mkdirSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { mkdirSync } from "fs";
            
            new mkdirSync();
            
            class A1 extends mkdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { mkdirSync } from "fs";
            
            mkdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.mkdirSync();
            
            class A1 extends M.mkdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.mkdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { mkdirSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { mkdirSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('mkdtemp', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = mkdtemp;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { mkdtemp } from "fs";
            
            new mkdtemp();
            
            class A1 extends mkdtemp {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { mkdtemp } from "fs";
            
            mkdtemp();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.mkdtemp();
            
            class A1 extends M.mkdtemp {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.mkdtemp();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { mkdtemp as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { mkdtemp as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('mkdtempSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = mkdtempSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { mkdtempSync } from "fs";
            
            new mkdtempSync();
            
            class A1 extends mkdtempSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { mkdtempSync } from "fs";
            
            mkdtempSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.mkdtempSync();
            
            class A1 extends M.mkdtempSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.mkdtempSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { mkdtempSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { mkdtempSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readdir', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readdir;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readdir } from "fs";
            
            new readdir();
            
            class A1 extends readdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readdir } from "fs";
            
            readdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readdir();
            
            class A1 extends M.readdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readdir as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readdir as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readdirSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readdirSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readdirSync } from "fs";
            
            new readdirSync();
            
            class A1 extends readdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readdirSync } from "fs";
            
            readdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readdirSync();
            
            class A1 extends M.readdirSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readdirSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readdirSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readdirSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('close', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = close;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { close } from "fs";
            
            new close();
            
            class A1 extends close {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { close } from "fs";
            
            close();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.close();
            
            class A1 extends M.close {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.close();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { close as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { close as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('closeSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = closeSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { closeSync } from "fs";
            
            new closeSync();
            
            class A1 extends closeSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { closeSync } from "fs";
            
            closeSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.closeSync();
            
            class A1 extends M.closeSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.closeSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { closeSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { closeSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('open', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = open;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { open } from "fs";
            
            new open();
            
            class A1 extends open {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { open } from "fs";
            
            open();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.open();
            
            class A1 extends M.open {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.open();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { open as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { open as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('openSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = openSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { openSync } from "fs";
            
            new openSync();
            
            class A1 extends openSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { openSync } from "fs";
            
            openSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.openSync();
            
            class A1 extends M.openSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.openSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { openSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { openSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('utimes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = utimes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { utimes } from "fs";
            
            new utimes();
            
            class A1 extends utimes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { utimes } from "fs";
            
            utimes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.utimes();
            
            class A1 extends M.utimes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.utimes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { utimes as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { utimes as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('utimesSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = utimesSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { utimesSync } from "fs";
            
            new utimesSync();
            
            class A1 extends utimesSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { utimesSync } from "fs";
            
            utimesSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.utimesSync();
            
            class A1 extends M.utimesSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.utimesSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { utimesSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { utimesSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('futimes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = futimes;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { futimes } from "fs";
            
            new futimes();
            
            class A1 extends futimes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { futimes } from "fs";
            
            futimes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.futimes();
            
            class A1 extends M.futimes {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.futimes();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { futimes as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { futimes as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('futimesSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = futimesSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { futimesSync } from "fs";
            
            new futimesSync();
            
            class A1 extends futimesSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { futimesSync } from "fs";
            
            futimesSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.futimesSync();
            
            class A1 extends M.futimesSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.futimesSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { futimesSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { futimesSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fsync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fsync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fsync } from "fs";
            
            new fsync();
            
            class A1 extends fsync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fsync } from "fs";
            
            fsync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fsync();
            
            class A1 extends M.fsync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fsync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fsync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fsync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fsyncSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fsyncSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fsyncSync } from "fs";
            
            new fsyncSync();
            
            class A1 extends fsyncSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fsyncSync } from "fs";
            
            fsyncSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fsyncSync();
            
            class A1 extends M.fsyncSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fsyncSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fsyncSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fsyncSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('write', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = write;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { write } from "fs";
            
            new write();
            
            class A1 extends write {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { write } from "fs";
            
            write();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.write();
            
            class A1 extends M.write {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.write();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { write as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { write as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('writeSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = writeSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { writeSync } from "fs";
            
            new writeSync();
            
            class A1 extends writeSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { writeSync } from "fs";
            
            writeSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.writeSync();
            
            class A1 extends M.writeSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.writeSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { writeSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { writeSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('read', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = read;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { read } from "fs";
            
            new read();
            
            class A1 extends read {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { read } from "fs";
            
            read();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.read();
            
            class A1 extends M.read {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.read();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { read as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { read as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readSync } from "fs";
            
            new readSync();
            
            class A1 extends readSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readSync } from "fs";
            
            readSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readSync();
            
            class A1 extends M.readSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readFile } from "fs";
            
            new readFile();
            
            class A1 extends readFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readFile } from "fs";
            
            readFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readFile();
            
            class A1 extends M.readFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('readFileSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = readFileSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { readFileSync } from "fs";
            
            new readFileSync();
            
            class A1 extends readFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { readFileSync } from "fs";
            
            readFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.readFileSync();
            
            class A1 extends M.readFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.readFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { readFileSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { readFileSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('writeFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = writeFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { writeFile } from "fs";
            
            new writeFile();
            
            class A1 extends writeFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { writeFile } from "fs";
            
            writeFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.writeFile();
            
            class A1 extends M.writeFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.writeFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { writeFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { writeFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('writeFileSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = writeFileSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { writeFileSync } from "fs";
            
            new writeFileSync();
            
            class A1 extends writeFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { writeFileSync } from "fs";
            
            writeFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.writeFileSync();
            
            class A1 extends M.writeFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.writeFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { writeFileSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { writeFileSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('appendFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = appendFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { appendFile } from "fs";
            
            new appendFile();
            
            class A1 extends appendFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { appendFile } from "fs";
            
            appendFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.appendFile();
            
            class A1 extends M.appendFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.appendFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { appendFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { appendFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('appendFileSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = appendFileSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { appendFileSync } from "fs";
            
            new appendFileSync();
            
            class A1 extends appendFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { appendFileSync } from "fs";
            
            appendFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.appendFileSync();
            
            class A1 extends M.appendFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.appendFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { appendFileSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { appendFileSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('watchFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = watchFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { watchFile } from "fs";
            
            new watchFile();
            
            class A1 extends watchFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { watchFile } from "fs";
            
            watchFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.watchFile();
            
            class A1 extends M.watchFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.watchFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { watchFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { watchFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unwatchFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unwatchFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { unwatchFile } from "fs";
            
            new unwatchFile();
            
            class A1 extends unwatchFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { unwatchFile } from "fs";
            
            unwatchFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.unwatchFile();
            
            class A1 extends M.unwatchFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.unwatchFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { unwatchFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { unwatchFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('watch', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = watch;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { watch } from "fs";
            
            new watch();
            
            class A1 extends watch {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { watch } from "fs";
            
            watch();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.watch();
            
            class A1 extends M.watch {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.watch();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { watch as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { watch as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('exists', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = exists;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { exists } from "fs";
            
            new exists();
            
            class A1 extends exists {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { exists } from "fs";
            
            exists();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.exists();
            
            class A1 extends M.exists {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.exists();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { exists as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { exists as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('existsSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = existsSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { existsSync } from "fs";
            
            new existsSync();
            
            class A1 extends existsSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { existsSync } from "fs";
            
            existsSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.existsSync();
            
            class A1 extends M.existsSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.existsSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { existsSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { existsSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('access', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = access;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { access } from "fs";
            
            new access();
            
            class A1 extends access {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { access } from "fs";
            
            access();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.access();
            
            class A1 extends M.access {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.access();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { access as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { access as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('accessSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = accessSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { accessSync } from "fs";
            
            new accessSync();
            
            class A1 extends accessSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { accessSync } from "fs";
            
            accessSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.accessSync();
            
            class A1 extends M.accessSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.accessSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { accessSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { accessSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createReadStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createReadStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createReadStream } from "fs";
            
            new createReadStream();
            
            class A1 extends createReadStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createReadStream } from "fs";
            
            createReadStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.createReadStream();
            
            class A1 extends M.createReadStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.createReadStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createReadStream as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createReadStream as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createWriteStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createWriteStream;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createWriteStream } from "fs";
            
            new createWriteStream();
            
            class A1 extends createWriteStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createWriteStream } from "fs";
            
            createWriteStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.createWriteStream();
            
            class A1 extends M.createWriteStream {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.createWriteStream();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createWriteStream as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createWriteStream as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fdatasync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fdatasync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fdatasync } from "fs";
            
            new fdatasync();
            
            class A1 extends fdatasync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fdatasync } from "fs";
            
            fdatasync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fdatasync();
            
            class A1 extends M.fdatasync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fdatasync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fdatasync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fdatasync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fdatasyncSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fdatasyncSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fdatasyncSync } from "fs";
            
            new fdatasyncSync();
            
            class A1 extends fdatasyncSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fdatasyncSync } from "fs";
            
            fdatasyncSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.fdatasyncSync();
            
            class A1 extends M.fdatasyncSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.fdatasyncSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fdatasyncSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fdatasyncSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('copyFile', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = copyFile;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { copyFile } from "fs";
            
            new copyFile();
            
            class A1 extends copyFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { copyFile } from "fs";
            
            copyFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.copyFile();
            
            class A1 extends M.copyFile {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.copyFile();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { copyFile as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { copyFile as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('copyFileSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = copyFileSync;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { copyFileSync } from "fs";
            
            new copyFileSync();
            
            class A1 extends copyFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { copyFileSync } from "fs";
            
            copyFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.copyFileSync();
            
            class A1 extends M.copyFileSync {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            M.copyFileSync();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { copyFileSync as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { copyFileSync as t } from "fs";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('F_OK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = F_OK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('R_OK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = R_OK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('W_OK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = W_OK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('X_OK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = X_OK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('constants', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = constants;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('BufferEncoding', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { BufferEncoding } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { BufferEncoding } from "fs";
            
            class A1 extends BufferEncoding {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            class A1 extends M.BufferEncoding {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { BufferEncoding as t } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { BufferEncoding as t } from "fs";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('EncodingOptions', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { EncodingOptions } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { EncodingOptions } from "fs";
            
            class A1 extends EncodingOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            class A1 extends M.EncodingOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { EncodingOptions as t } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { EncodingOptions as t } from "fs";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('EncodingFlag', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { EncodingFlag } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { EncodingFlag } from "fs";
            
            class A1 extends EncodingFlag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            class A1 extends M.EncodingFlag {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { EncodingFlag as t } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { EncodingFlag as t } from "fs";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('WriteOptions', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { WriteOptions } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { WriteOptions } from "fs";
            
            class A1 extends WriteOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            class A1 extends M.WriteOptions {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { WriteOptions as t } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { WriteOptions as t } from "fs";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FileHandle', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = FileHandle;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { FileHandle } from "fs";
            
            new FileHandle();
            
            class A1 extends FileHandle {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.FileHandle();
            
            class A1 extends M.FileHandle {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { FileHandle as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FSPromisePath', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { FSPromisePath } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { FSPromisePath } from "fs";
            
            class A1 extends FSPromisePath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            class A1 extends M.FSPromisePath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { FSPromisePath as t } from "fs";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { FSPromisePath as t } from "fs";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('FSPromise', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = FSPromise;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { FSPromise } from "fs";
            
            new FSPromise();
            
            class A1 extends FSPromise {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "fs";
            
            new M.FSPromise();
            
            class A1 extends M.FSPromise {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { FSPromise as t } from "fs";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('promises', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = promises;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('http', () => {
      describe('Server', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Server;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Server } from "http";
            
            new Server();
            
            class A1 extends Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.Server();
            
            class A1 extends M.Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Server as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Agent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Agent;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Agent } from "http";
            
            new Agent();
            
            class A1 extends Agent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.Agent();
            
            class A1 extends M.Agent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Agent as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ClientRequest', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ClientRequest;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ClientRequest } from "http";
            
            new ClientRequest();
            
            class A1 extends ClientRequest {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.ClientRequest();
            
            class A1 extends M.ClientRequest {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ClientRequest as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('IncomingMessage', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = IncomingMessage;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { IncomingMessage } from "http";
            
            new IncomingMessage();
            
            class A1 extends IncomingMessage {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.IncomingMessage();
            
            class A1 extends M.IncomingMessage {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { IncomingMessage as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ServerResponse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ServerResponse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ServerResponse } from "http";
            
            new ServerResponse();
            
            class A1 extends ServerResponse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.ServerResponse();
            
            class A1 extends M.ServerResponse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ServerResponse as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createServer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createServer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createServer } from "http";
            
            new createServer();
            
            class A1 extends createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createServer } from "http";
            
            createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.createServer();
            
            class A1 extends M.createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            M.createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "http";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('request', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = request;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { request } from "http";
            
            new request();
            
            class A1 extends request {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { request } from "http";
            
            request();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.request();
            
            class A1 extends M.request {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            M.request();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { request as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { request as t } from "http";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('get', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = get;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { get } from "http";
            
            new get();
            
            class A1 extends get {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { get } from "http";
            
            get();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            new M.get();
            
            class A1 extends M.get {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "http";
            
            M.get();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { get as t } from "http";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { get as t } from "http";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('METHODS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = METHODS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('STATUS_CODES', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = STATUS_CODES;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('globalAgent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = globalAgent;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('https', () => {
      describe('Server', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Server;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Server } from "https";
            
            new Server();
            
            class A1 extends Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.Server();
            
            class A1 extends M.Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Server as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Agent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Agent;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Agent } from "https";
            
            new Agent();
            
            class A1 extends Agent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.Agent();
            
            class A1 extends M.Agent {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Agent as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ClientRequest', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ClientRequest;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ClientRequest } from "https";
            
            new ClientRequest();
            
            class A1 extends ClientRequest {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.ClientRequest();
            
            class A1 extends M.ClientRequest {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ClientRequest as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('IncomingMessage', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = IncomingMessage;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { IncomingMessage } from "https";
            
            new IncomingMessage();
            
            class A1 extends IncomingMessage {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.IncomingMessage();
            
            class A1 extends M.IncomingMessage {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { IncomingMessage as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ServerResponse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ServerResponse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { ServerResponse } from "https";
            
            new ServerResponse();
            
            class A1 extends ServerResponse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.ServerResponse();
            
            class A1 extends M.ServerResponse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { ServerResponse as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createServer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createServer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createServer } from "https";
            
            new createServer();
            
            class A1 extends createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createServer } from "https";
            
            createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.createServer();
            
            class A1 extends M.createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            M.createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "https";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('request', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = request;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { request } from "https";
            
            new request();
            
            class A1 extends request {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { request } from "https";
            
            request();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.request();
            
            class A1 extends M.request {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            M.request();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { request as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { request as t } from "https";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('get', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = get;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { get } from "https";
            
            new get();
            
            class A1 extends get {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { get } from "https";
            
            get();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            new M.get();
            
            class A1 extends M.get {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "https";
            
            M.get();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { get as t } from "https";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { get as t } from "https";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('globalAgent', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = globalAgent;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('net', () => {
      describe('Server', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Server;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Server } from "net";
            
            new Server();
            
            class A1 extends Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.Server();
            
            class A1 extends M.Server {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Server as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Socket', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Socket;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Socket } from "net";
            
            new Socket();
            
            class A1 extends Socket {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.Socket();
            
            class A1 extends M.Socket {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Socket as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isIP', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isIP;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isIP } from "net";
            
            new isIP();
            
            class A1 extends isIP {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isIP } from "net";
            
            isIP();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.isIP();
            
            class A1 extends M.isIP {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.isIP();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isIP as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isIP as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isIPv4', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isIPv4;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isIPv4 } from "net";
            
            new isIPv4();
            
            class A1 extends isIPv4 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isIPv4 } from "net";
            
            isIPv4();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.isIPv4();
            
            class A1 extends M.isIPv4 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.isIPv4();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isIPv4 as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isIPv4 as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isIPv6', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isIPv6;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isIPv6 } from "net";
            
            new isIPv6();
            
            class A1 extends isIPv6 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isIPv6 } from "net";
            
            isIPv6();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.isIPv6();
            
            class A1 extends M.isIPv6 {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.isIPv6();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isIPv6 as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isIPv6 as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('connectionListener', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { connectionListener } from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { connectionListener } from "net";
            
            class A1 extends connectionListener {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            class A1 extends M.connectionListener {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { connectionListener as t } from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { connectionListener as t } from "net";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createServer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createServer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createServer } from "net";
            
            new createServer();
            
            class A1 extends createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createServer } from "net";
            
            createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.createServer();
            
            class A1 extends M.createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('connectListener', () => {
        test('generated - type', () => {
          expect(
            transform(`
            import { connectListener } from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface', () => {
          expect(
            transform(`
            import { connectListener } from "net";
            
            class A1 extends connectListener {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            class A1 extends M.connectListener {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - type - import renamed', () => {
          expect(
            transform(`
            import { connectListener as t } from "net";
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - interface - import renamed', () => {
          expect(
            transform(`
            import { connectListener as t } from "net";
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('connect', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = connect;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { connect } from "net";
            
            new connect();
            
            class A1 extends connect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { connect } from "net";
            
            connect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.connect();
            
            class A1 extends M.connect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.connect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { connect as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { connect as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createConnection', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createConnection;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createConnection } from "net";
            
            new createConnection();
            
            class A1 extends createConnection {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createConnection } from "net";
            
            createConnection();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            new M.createConnection();
            
            class A1 extends M.createConnection {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "net";
            
            M.createConnection();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createConnection as t } from "net";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createConnection as t } from "net";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('os', () => {
      describe('arch', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = arch;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { arch } from "os";
            
            new arch();
            
            class A1 extends arch {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { arch } from "os";
            
            arch();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.arch();
            
            class A1 extends M.arch {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.arch();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { arch as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { arch as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('cpus', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = cpus;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { cpus } from "os";
            
            new cpus();
            
            class A1 extends cpus {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { cpus } from "os";
            
            cpus();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.cpus();
            
            class A1 extends M.cpus {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.cpus();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { cpus as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { cpus as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('endianness', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = endianness;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { endianness } from "os";
            
            new endianness();
            
            class A1 extends endianness {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { endianness } from "os";
            
            endianness();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.endianness();
            
            class A1 extends M.endianness {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.endianness();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { endianness as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { endianness as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('freemem', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = freemem;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { freemem } from "os";
            
            new freemem();
            
            class A1 extends freemem {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { freemem } from "os";
            
            freemem();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.freemem();
            
            class A1 extends M.freemem {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.freemem();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { freemem as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { freemem as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('homedir', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = homedir;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { homedir } from "os";
            
            new homedir();
            
            class A1 extends homedir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { homedir } from "os";
            
            homedir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.homedir();
            
            class A1 extends M.homedir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.homedir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { homedir as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { homedir as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('hostname', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = hostname;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { hostname } from "os";
            
            new hostname();
            
            class A1 extends hostname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { hostname } from "os";
            
            hostname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.hostname();
            
            class A1 extends M.hostname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.hostname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { hostname as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { hostname as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('loadavg', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = loadavg;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { loadavg } from "os";
            
            new loadavg();
            
            class A1 extends loadavg {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { loadavg } from "os";
            
            loadavg();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.loadavg();
            
            class A1 extends M.loadavg {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.loadavg();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { loadavg as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { loadavg as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('networkInterfaces', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = networkInterfaces;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { networkInterfaces } from "os";
            
            new networkInterfaces();
            
            class A1 extends networkInterfaces {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { networkInterfaces } from "os";
            
            networkInterfaces();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.networkInterfaces();
            
            class A1 extends M.networkInterfaces {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.networkInterfaces();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { networkInterfaces as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { networkInterfaces as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('platform', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = platform;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { platform } from "os";
            
            new platform();
            
            class A1 extends platform {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { platform } from "os";
            
            platform();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.platform();
            
            class A1 extends M.platform {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.platform();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { platform as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { platform as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('release', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = release;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { release } from "os";
            
            new release();
            
            class A1 extends release {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { release } from "os";
            
            release();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.release();
            
            class A1 extends M.release {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.release();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { release as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { release as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('tmpdir', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = tmpdir;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { tmpdir } from "os";
            
            new tmpdir();
            
            class A1 extends tmpdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { tmpdir } from "os";
            
            tmpdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.tmpdir();
            
            class A1 extends M.tmpdir {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.tmpdir();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { tmpdir as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { tmpdir as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('totalmem', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = totalmem;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { totalmem } from "os";
            
            new totalmem();
            
            class A1 extends totalmem {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { totalmem } from "os";
            
            totalmem();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.totalmem();
            
            class A1 extends M.totalmem {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.totalmem();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { totalmem as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { totalmem as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('type', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = type;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { type } from "os";
            
            new type();
            
            class A1 extends type {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { type } from "os";
            
            type();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.type();
            
            class A1 extends M.type {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.type();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { type as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { type as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('uptime', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = uptime;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { uptime } from "os";
            
            new uptime();
            
            class A1 extends uptime {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { uptime } from "os";
            
            uptime();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.uptime();
            
            class A1 extends M.uptime {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.uptime();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { uptime as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { uptime as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('userInfo', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = userInfo;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { userInfo } from "os";
            
            new userInfo();
            
            class A1 extends userInfo {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { userInfo } from "os";
            
            userInfo();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            new M.userInfo();
            
            class A1 extends M.userInfo {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "os";
            
            M.userInfo();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { userInfo as t } from "os";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { userInfo as t } from "os";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('EOL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = EOL;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('path', () => {
      describe('normalize', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = normalize;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { normalize } from "path";
            
            new normalize();
            
            class A1 extends normalize {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { normalize } from "path";
            
            normalize();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.normalize();
            
            class A1 extends M.normalize {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.normalize();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { normalize as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { normalize as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('join', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = join;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { join } from "path";
            
            new join();
            
            class A1 extends join {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { join } from "path";
            
            join();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.join();
            
            class A1 extends M.join {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.join();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { join as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { join as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolve', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolve;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolve } from "path";
            
            new resolve();
            
            class A1 extends resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolve } from "path";
            
            resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.resolve();
            
            class A1 extends M.resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isAbsolute', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isAbsolute;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isAbsolute } from "path";
            
            new isAbsolute();
            
            class A1 extends isAbsolute {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isAbsolute } from "path";
            
            isAbsolute();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.isAbsolute();
            
            class A1 extends M.isAbsolute {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.isAbsolute();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isAbsolute as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isAbsolute as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('relative', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = relative;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { relative } from "path";
            
            new relative();
            
            class A1 extends relative {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { relative } from "path";
            
            relative();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.relative();
            
            class A1 extends M.relative {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.relative();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { relative as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { relative as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('dirname', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = dirname;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { dirname } from "path";
            
            new dirname();
            
            class A1 extends dirname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { dirname } from "path";
            
            dirname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.dirname();
            
            class A1 extends M.dirname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.dirname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { dirname as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { dirname as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('basename', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = basename;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { basename } from "path";
            
            new basename();
            
            class A1 extends basename {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { basename } from "path";
            
            basename();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.basename();
            
            class A1 extends M.basename {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.basename();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { basename as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { basename as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('extname', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = extname;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { extname } from "path";
            
            new extname();
            
            class A1 extends extname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { extname } from "path";
            
            extname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.extname();
            
            class A1 extends M.extname {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.extname();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { extname as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { extname as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('sep', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = sep;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('delimiter', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = delimiter;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('parse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = parse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { parse } from "path";
            
            new parse();
            
            class A1 extends parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { parse } from "path";
            
            parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.parse();
            
            class A1 extends M.parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('format', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = format;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { format } from "path";
            
            new format();
            
            class A1 extends format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { format } from "path";
            
            format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            new M.format();
            
            class A1 extends M.format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "path";
            
            M.format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "path";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "path";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('posix', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = posix;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('win32', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = win32;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('punycode', () => {
      describe('decode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = decode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { decode } from "punycode";
            
            new decode();
            
            class A1 extends decode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { decode } from "punycode";
            
            decode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            new M.decode();
            
            class A1 extends M.decode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            M.decode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { decode as t } from "punycode";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { decode as t } from "punycode";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('encode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = encode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { encode } from "punycode";
            
            new encode();
            
            class A1 extends encode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { encode } from "punycode";
            
            encode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            new M.encode();
            
            class A1 extends M.encode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            M.encode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { encode as t } from "punycode";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { encode as t } from "punycode";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('toASCII', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = toASCII;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { toASCII } from "punycode";
            
            new toASCII();
            
            class A1 extends toASCII {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { toASCII } from "punycode";
            
            toASCII();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            new M.toASCII();
            
            class A1 extends M.toASCII {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            M.toASCII();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { toASCII as t } from "punycode";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { toASCII as t } from "punycode";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('toUnicode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = toUnicode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { toUnicode } from "punycode";
            
            new toUnicode();
            
            class A1 extends toUnicode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { toUnicode } from "punycode";
            
            toUnicode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            new M.toUnicode();
            
            class A1 extends M.toUnicode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "punycode";
            
            M.toUnicode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { toUnicode as t } from "punycode";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { toUnicode as t } from "punycode";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ucs2', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ucs2;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('version', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = version;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('querystring', () => {
      describe('stringify', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = stringify;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { stringify } from "querystring";
            
            new stringify();
            
            class A1 extends stringify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { stringify } from "querystring";
            
            stringify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            new M.stringify();
            
            class A1 extends M.stringify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            M.stringify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { stringify as t } from "querystring";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { stringify as t } from "querystring";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('parse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = parse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { parse } from "querystring";
            
            new parse();
            
            class A1 extends parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { parse } from "querystring";
            
            parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            new M.parse();
            
            class A1 extends M.parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            M.parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "querystring";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "querystring";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('escape', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = escape;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { escape } from "querystring";
            
            new escape();
            
            class A1 extends escape {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { escape } from "querystring";
            
            escape();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            new M.escape();
            
            class A1 extends M.escape {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            M.escape();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { escape as t } from "querystring";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { escape as t } from "querystring";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unescape', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unescape;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { unescape } from "querystring";
            
            new unescape();
            
            class A1 extends unescape {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { unescape } from "querystring";
            
            unescape();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            new M.unescape();
            
            class A1 extends M.unescape {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "querystring";
            
            M.unescape();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { unescape as t } from "querystring";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { unescape as t } from "querystring";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('readline', () => {
      describe('Interface', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Interface;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('clearLine', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = clearLine;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { clearLine } from "readline";
            
            new clearLine();
            
            class A1 extends clearLine {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { clearLine } from "readline";
            
            clearLine();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.clearLine();
            
            class A1 extends M.clearLine {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.clearLine();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { clearLine as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { clearLine as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('clearScreenDown', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = clearScreenDown;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { clearScreenDown } from "readline";
            
            new clearScreenDown();
            
            class A1 extends clearScreenDown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { clearScreenDown } from "readline";
            
            clearScreenDown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.clearScreenDown();
            
            class A1 extends M.clearScreenDown {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.clearScreenDown();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { clearScreenDown as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { clearScreenDown as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createInterface', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createInterface;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createInterface } from "readline";
            
            new createInterface();
            
            class A1 extends createInterface {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createInterface } from "readline";
            
            createInterface();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.createInterface();
            
            class A1 extends M.createInterface {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.createInterface();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createInterface as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createInterface as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('cursorTo', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = cursorTo;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { cursorTo } from "readline";
            
            new cursorTo();
            
            class A1 extends cursorTo {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { cursorTo } from "readline";
            
            cursorTo();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.cursorTo();
            
            class A1 extends M.cursorTo {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.cursorTo();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { cursorTo as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { cursorTo as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('moveCursor', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = moveCursor;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { moveCursor } from "readline";
            
            new moveCursor();
            
            class A1 extends moveCursor {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { moveCursor } from "readline";
            
            moveCursor();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.moveCursor();
            
            class A1 extends M.moveCursor {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.moveCursor();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { moveCursor as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { moveCursor as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('emitKeypressEvents', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = emitKeypressEvents;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { emitKeypressEvents } from "readline";
            
            new emitKeypressEvents();
            
            class A1 extends emitKeypressEvents {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { emitKeypressEvents } from "readline";
            
            emitKeypressEvents();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            new M.emitKeypressEvents();
            
            class A1 extends M.emitKeypressEvents {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "readline";
            
            M.emitKeypressEvents();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { emitKeypressEvents as t } from "readline";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { emitKeypressEvents as t } from "readline";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('stream', () => {
      describe('Stream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Stream;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Readable', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Readable;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Writable', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Writable;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Duplex', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Duplex;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Transform', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Transform;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('PassThrough', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = PassThrough;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('finished', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = finished;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { finished } from "stream";
            
            new finished();
            
            class A1 extends finished {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { finished } from "stream";
            
            finished();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            new M.finished();
            
            class A1 extends M.finished {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            M.finished();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { finished as t } from "stream";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { finished as t } from "stream";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('pipeline', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = pipeline;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline } from "stream";
            
            new pipeline();
            
            class A1 extends pipeline<P0> {}
            let a1 = new pipeline<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline } from "stream";
            
            new pipeline();
            
            class A1 extends pipeline {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline } from "stream";
            
            pipeline();
            
            let a1 = pipeline<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline } from "stream";
            
            pipeline();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            new M.pipeline();
            
            class A1 extends M.pipeline<P0> {}
            let a1 = new M.pipeline<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            new M.pipeline();
            
            class A1 extends M.pipeline {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            M.pipeline();
            
            let a1 = M.pipeline<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace - typeParams(1)', () => {
          expect(
            transform(`
            import * as M from "stream";
            
            M.pipeline();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline as t } from "stream";
            
            new t();
            
            class A1 extends t<P0> {}
            let a1 = new t<P0>();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline as t } from "stream";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline as t } from "stream";
            
            t();
            
            let a1 = t<P0>();
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed - typeParams(1)', () => {
          expect(
            transform(`
            import { pipeline as t } from "stream";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('tty', () => {
      describe('isatty', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isatty;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isatty } from "tty";
            
            new isatty();
            
            class A1 extends isatty {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isatty } from "tty";
            
            isatty();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tty";
            
            new M.isatty();
            
            class A1 extends M.isatty {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tty";
            
            M.isatty();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isatty as t } from "tty";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isatty as t } from "tty";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('setRawMode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = setRawMode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { setRawMode } from "tty";
            
            new setRawMode();
            
            class A1 extends setRawMode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { setRawMode } from "tty";
            
            setRawMode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tty";
            
            new M.setRawMode();
            
            class A1 extends M.setRawMode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tty";
            
            M.setRawMode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { setRawMode as t } from "tty";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { setRawMode as t } from "tty";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('ReadStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = ReadStream;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('WriteStream', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = WriteStream;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('string_decoder', () => {
      describe('StringDecoder', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = StringDecoder;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('tls', () => {
      describe('CLIENT_RENEG_LIMIT', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = CLIENT_RENEG_LIMIT;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('CLIENT_RENEG_WINDOW', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = CLIENT_RENEG_WINDOW;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('SLAB_BUFFER_SIZE', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = SLAB_BUFFER_SIZE;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('DEFAULT_CIPHERS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DEFAULT_CIPHERS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('DEFAULT_ECDH_CURVE', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DEFAULT_ECDH_CURVE;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getCiphers', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getCiphers;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getCiphers } from "tls";
            
            new getCiphers();
            
            class A1 extends getCiphers {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getCiphers } from "tls";
            
            getCiphers();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.getCiphers();
            
            class A1 extends M.getCiphers {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.getCiphers();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getCiphers as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getCiphers as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('convertNPNProtocols', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = convertNPNProtocols;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { convertNPNProtocols } from "tls";
            
            new convertNPNProtocols();
            
            class A1 extends convertNPNProtocols {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { convertNPNProtocols } from "tls";
            
            convertNPNProtocols();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.convertNPNProtocols();
            
            class A1 extends M.convertNPNProtocols {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.convertNPNProtocols();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { convertNPNProtocols as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { convertNPNProtocols as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('checkServerIdentity', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = checkServerIdentity;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { checkServerIdentity } from "tls";
            
            new checkServerIdentity();
            
            class A1 extends checkServerIdentity {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { checkServerIdentity } from "tls";
            
            checkServerIdentity();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.checkServerIdentity();
            
            class A1 extends M.checkServerIdentity {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.checkServerIdentity();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { checkServerIdentity as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { checkServerIdentity as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('parseCertString', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = parseCertString;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { parseCertString } from "tls";
            
            new parseCertString();
            
            class A1 extends parseCertString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { parseCertString } from "tls";
            
            parseCertString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.parseCertString();
            
            class A1 extends M.parseCertString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.parseCertString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { parseCertString as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { parseCertString as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createSecureContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createSecureContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createSecureContext } from "tls";
            
            new createSecureContext();
            
            class A1 extends createSecureContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createSecureContext } from "tls";
            
            createSecureContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.createSecureContext();
            
            class A1 extends M.createSecureContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.createSecureContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createSecureContext as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createSecureContext as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('SecureContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = SecureContext;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TLSSocket', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = TLSSocket;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Server', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Server;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createServer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createServer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createServer } from "tls";
            
            new createServer();
            
            class A1 extends createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createServer } from "tls";
            
            createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.createServer();
            
            class A1 extends M.createServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.createServer();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createServer as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('connect', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = connect;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { connect } from "tls";
            
            new connect();
            
            class A1 extends connect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { connect } from "tls";
            
            connect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.connect();
            
            class A1 extends M.connect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.connect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { connect as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { connect as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createSecurePair', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createSecurePair;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createSecurePair } from "tls";
            
            new createSecurePair();
            
            class A1 extends createSecurePair {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createSecurePair } from "tls";
            
            createSecurePair();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            new M.createSecurePair();
            
            class A1 extends M.createSecurePair {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "tls";
            
            M.createSecurePair();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createSecurePair as t } from "tls";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createSecurePair as t } from "tls";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('url', () => {
      describe('parse', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = parse;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { parse } from "url";
            
            new parse();
            
            class A1 extends parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { parse } from "url";
            
            parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.parse();
            
            class A1 extends M.parse {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.parse();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { parse as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('format', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = format;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { format } from "url";
            
            new format();
            
            class A1 extends format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { format } from "url";
            
            format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.format();
            
            class A1 extends M.format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('resolve', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = resolve;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { resolve } from "url";
            
            new resolve();
            
            class A1 extends resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { resolve } from "url";
            
            resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.resolve();
            
            class A1 extends M.resolve {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.resolve();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { resolve as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('domainToASCII', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = domainToASCII;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { domainToASCII } from "url";
            
            new domainToASCII();
            
            class A1 extends domainToASCII {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { domainToASCII } from "url";
            
            domainToASCII();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.domainToASCII();
            
            class A1 extends M.domainToASCII {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.domainToASCII();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { domainToASCII as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { domainToASCII as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('domainToUnicode', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = domainToUnicode;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { domainToUnicode } from "url";
            
            new domainToUnicode();
            
            class A1 extends domainToUnicode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { domainToUnicode } from "url";
            
            domainToUnicode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.domainToUnicode();
            
            class A1 extends M.domainToUnicode {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.domainToUnicode();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { domainToUnicode as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { domainToUnicode as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('pathToFileURL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = pathToFileURL;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { pathToFileURL } from "url";
            
            new pathToFileURL();
            
            class A1 extends pathToFileURL {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { pathToFileURL } from "url";
            
            pathToFileURL();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.pathToFileURL();
            
            class A1 extends M.pathToFileURL {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.pathToFileURL();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { pathToFileURL as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { pathToFileURL as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('fileURLToPath', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = fileURLToPath;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { fileURLToPath } from "url";
            
            new fileURLToPath();
            
            class A1 extends fileURLToPath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { fileURLToPath } from "url";
            
            fileURLToPath();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.fileURLToPath();
            
            class A1 extends M.fileURLToPath {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            M.fileURLToPath();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { fileURLToPath as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { fileURLToPath as t } from "url";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('URLSearchParams', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = URLSearchParams;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { URLSearchParams } from "url";
            
            new URLSearchParams();
            
            class A1 extends URLSearchParams {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.URLSearchParams();
            
            class A1 extends M.URLSearchParams {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { URLSearchParams as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('URL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = URL;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { URL } from "url";
            
            new URL();
            
            class A1 extends URL {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "url";
            
            new M.URL();
            
            class A1 extends M.URL {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { URL as t } from "url";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('util', () => {
      describe('debuglog', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = debuglog;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { debuglog } from "util";
            
            new debuglog();
            
            class A1 extends debuglog {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { debuglog } from "util";
            
            debuglog();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.debuglog();
            
            class A1 extends M.debuglog {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.debuglog();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { debuglog as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { debuglog as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('format', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = format;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { format } from "util";
            
            new format();
            
            class A1 extends format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { format } from "util";
            
            format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.format();
            
            class A1 extends M.format {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.format();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { format as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('log', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = log;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { log } from "util";
            
            new log();
            
            class A1 extends log {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { log } from "util";
            
            log();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.log();
            
            class A1 extends M.log {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.log();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { log as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { log as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inspect', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inspect;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { inspect } from "util";
            
            new inspect();
            
            class A1 extends inspect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { inspect } from "util";
            
            inspect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.inspect();
            
            class A1 extends M.inspect {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.inspect();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { inspect as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { inspect as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isArray', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isArray;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isArray } from "util";
            
            new isArray();
            
            class A1 extends isArray {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isArray } from "util";
            
            isArray();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.isArray();
            
            class A1 extends M.isArray {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.isArray();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isArray as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isArray as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isRegExp', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isRegExp;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isRegExp } from "util";
            
            new isRegExp();
            
            class A1 extends isRegExp {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isRegExp } from "util";
            
            isRegExp();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.isRegExp();
            
            class A1 extends M.isRegExp {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.isRegExp();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isRegExp as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isRegExp as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isDate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isDate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isDate } from "util";
            
            new isDate();
            
            class A1 extends isDate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isDate } from "util";
            
            isDate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.isDate();
            
            class A1 extends M.isDate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.isDate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isDate as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isDate as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isError', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isError;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isError } from "util";
            
            new isError();
            
            class A1 extends isError {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isError } from "util";
            
            isError();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.isError();
            
            class A1 extends M.isError {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.isError();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isError as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isError as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inherits', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inherits;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { inherits } from "util";
            
            new inherits();
            
            class A1 extends inherits {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { inherits } from "util";
            
            inherits();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.inherits();
            
            class A1 extends M.inherits {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.inherits();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { inherits as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { inherits as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('deprecate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = deprecate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { deprecate } from "util";
            
            new deprecate();
            
            class A1 extends deprecate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { deprecate } from "util";
            
            deprecate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.deprecate();
            
            class A1 extends M.deprecate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.deprecate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { deprecate as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { deprecate as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('promisify', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = promisify;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { promisify } from "util";
            
            new promisify();
            
            class A1 extends promisify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { promisify } from "util";
            
            promisify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.promisify();
            
            class A1 extends M.promisify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.promisify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { promisify as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { promisify as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('callbackify', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = callbackify;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { callbackify } from "util";
            
            new callbackify();
            
            class A1 extends callbackify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { callbackify } from "util";
            
            callbackify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.callbackify();
            
            class A1 extends M.callbackify {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            M.callbackify();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { callbackify as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { callbackify as t } from "util";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TextDecoder', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = TextDecoder;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { TextDecoder } from "util";
            
            new TextDecoder();
            
            class A1 extends TextDecoder {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.TextDecoder();
            
            class A1 extends M.TextDecoder {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { TextDecoder as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('TextEncoder', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = TextEncoder;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { TextEncoder } from "util";
            
            new TextEncoder();
            
            class A1 extends TextEncoder {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "util";
            
            new M.TextEncoder();
            
            class A1 extends M.TextEncoder {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { TextEncoder as t } from "util";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('vm', () => {
      describe('Script', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Script;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createContext } from "vm";
            
            new createContext();
            
            class A1 extends createContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createContext } from "vm";
            
            createContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.createContext();
            
            class A1 extends M.createContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.createContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('isContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = isContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { isContext } from "vm";
            
            new isContext();
            
            class A1 extends isContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { isContext } from "vm";
            
            isContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.isContext();
            
            class A1 extends M.isContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.isContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { isContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { isContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('runInContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = runInContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { runInContext } from "vm";
            
            new runInContext();
            
            class A1 extends runInContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { runInContext } from "vm";
            
            runInContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.runInContext();
            
            class A1 extends M.runInContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.runInContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { runInContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { runInContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('runInDebugContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = runInDebugContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { runInDebugContext } from "vm";
            
            new runInDebugContext();
            
            class A1 extends runInDebugContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { runInDebugContext } from "vm";
            
            runInDebugContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.runInDebugContext();
            
            class A1 extends M.runInDebugContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.runInDebugContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { runInDebugContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { runInDebugContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('runInNewContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = runInNewContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { runInNewContext } from "vm";
            
            new runInNewContext();
            
            class A1 extends runInNewContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { runInNewContext } from "vm";
            
            runInNewContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.runInNewContext();
            
            class A1 extends M.runInNewContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.runInNewContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { runInNewContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { runInNewContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('runInThisContext', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = runInThisContext;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { runInThisContext } from "vm";
            
            new runInThisContext();
            
            class A1 extends runInThisContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { runInThisContext } from "vm";
            
            runInThisContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            new M.runInThisContext();
            
            class A1 extends M.runInThisContext {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "vm";
            
            M.runInThisContext();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { runInThisContext as t } from "vm";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { runInThisContext as t } from "vm";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('zlib', () => {
      describe('Z_NO_FLUSH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_NO_FLUSH;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_PARTIAL_FLUSH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_PARTIAL_FLUSH;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_SYNC_FLUSH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_SYNC_FLUSH;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_FULL_FLUSH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_FULL_FLUSH;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_FINISH', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_FINISH;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_BLOCK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_BLOCK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_TREES', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_TREES;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_OK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_OK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_STREAM_END', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_STREAM_END;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_NEED_DICT', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_NEED_DICT;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_ERRNO', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_ERRNO;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_STREAM_ERROR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_STREAM_ERROR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DATA_ERROR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DATA_ERROR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MEM_ERROR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MEM_ERROR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_BUF_ERROR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_BUF_ERROR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_VERSION_ERROR', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_VERSION_ERROR;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_NO_COMPRESSION', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_NO_COMPRESSION;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_BEST_SPEED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_BEST_SPEED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_BEST_COMPRESSION', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_BEST_COMPRESSION;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_COMPRESSION', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_COMPRESSION;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_FILTERED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_FILTERED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_HUFFMAN_ONLY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_HUFFMAN_ONLY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_RLE', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_RLE;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_FIXED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_FIXED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_STRATEGY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_STRATEGY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_BINARY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_BINARY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_TEXT', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_TEXT;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_ASCII', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_ASCII;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_UNKNOWN', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_UNKNOWN;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFLATED', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFLATED;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_NULL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_NULL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_CHUNK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_CHUNK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_LEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_LEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_MEMLEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_MEMLEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_DEFAULT_WINDOWBITS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_DEFAULT_WINDOWBITS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MAX_CHUNK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MAX_CHUNK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MAX_LEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MAX_LEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MAX_MEMLEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MAX_MEMLEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MAX_WINDOWBITS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MAX_WINDOWBITS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MIN_CHUNK', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MIN_CHUNK;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MIN_LEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MIN_LEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MIN_MEMLEVEL', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MIN_MEMLEVEL;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Z_MIN_WINDOWBITS', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Z_MIN_WINDOWBITS;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('constants', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = constants;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('codes', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = codes;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Zlib', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Zlib;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Zlib } from "zlib";
            
            new Zlib();
            
            class A1 extends Zlib {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Zlib();
            
            class A1 extends M.Zlib {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Zlib as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Deflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Deflate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Deflate } from "zlib";
            
            new Deflate();
            
            class A1 extends Deflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Deflate();
            
            class A1 extends M.Deflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Deflate as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Inflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Inflate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Inflate } from "zlib";
            
            new Inflate();
            
            class A1 extends Inflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Inflate();
            
            class A1 extends M.Inflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Inflate as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Gzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Gzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Gzip } from "zlib";
            
            new Gzip();
            
            class A1 extends Gzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Gzip();
            
            class A1 extends M.Gzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Gzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Gunzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Gunzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Gunzip } from "zlib";
            
            new Gunzip();
            
            class A1 extends Gunzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Gunzip();
            
            class A1 extends M.Gunzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Gunzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('DeflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = DeflateRaw;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { DeflateRaw } from "zlib";
            
            new DeflateRaw();
            
            class A1 extends DeflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.DeflateRaw();
            
            class A1 extends M.DeflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { DeflateRaw as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('InflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = InflateRaw;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { InflateRaw } from "zlib";
            
            new InflateRaw();
            
            class A1 extends InflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.InflateRaw();
            
            class A1 extends M.InflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { InflateRaw as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Unzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Unzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Unzip } from "zlib";
            
            new Unzip();
            
            class A1 extends Unzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.Unzip();
            
            class A1 extends M.Unzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Unzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createDeflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createDeflate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createDeflate } from "zlib";
            
            new createDeflate();
            
            class A1 extends createDeflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createDeflate } from "zlib";
            
            createDeflate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createDeflate();
            
            class A1 extends M.createDeflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createDeflate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createDeflate as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createDeflate as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createInflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createInflate;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createInflate } from "zlib";
            
            new createInflate();
            
            class A1 extends createInflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createInflate } from "zlib";
            
            createInflate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createInflate();
            
            class A1 extends M.createInflate {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createInflate();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createInflate as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createInflate as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createDeflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createDeflateRaw;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createDeflateRaw } from "zlib";
            
            new createDeflateRaw();
            
            class A1 extends createDeflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createDeflateRaw } from "zlib";
            
            createDeflateRaw();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createDeflateRaw();
            
            class A1 extends M.createDeflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createDeflateRaw();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createDeflateRaw as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createDeflateRaw as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createInflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createInflateRaw;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createInflateRaw } from "zlib";
            
            new createInflateRaw();
            
            class A1 extends createInflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createInflateRaw } from "zlib";
            
            createInflateRaw();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createInflateRaw();
            
            class A1 extends M.createInflateRaw {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createInflateRaw();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createInflateRaw as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createInflateRaw as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createGzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createGzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createGzip } from "zlib";
            
            new createGzip();
            
            class A1 extends createGzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createGzip } from "zlib";
            
            createGzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createGzip();
            
            class A1 extends M.createGzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createGzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createGzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createGzip as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createGunzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createGunzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createGunzip } from "zlib";
            
            new createGunzip();
            
            class A1 extends createGunzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createGunzip } from "zlib";
            
            createGunzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createGunzip();
            
            class A1 extends M.createGunzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createGunzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createGunzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createGunzip as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('createUnzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = createUnzip;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { createUnzip } from "zlib";
            
            new createUnzip();
            
            class A1 extends createUnzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { createUnzip } from "zlib";
            
            createUnzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            new M.createUnzip();
            
            class A1 extends M.createUnzip {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "zlib";
            
            M.createUnzip();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { createUnzip as t } from "zlib";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { createUnzip as t } from "zlib";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('deflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = deflate;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('deflateSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = deflateSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('gzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = gzip;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('gzipSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = gzipSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('deflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = deflateRaw;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('deflateRawSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = deflateRawSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unzip;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('unzipSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = unzipSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inflate', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inflate;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inflateSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inflateSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('gunzip', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = gunzip;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('gunzipSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = gunzipSync;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inflateRaw', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inflateRaw;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('inflateRawSync', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = inflateRawSync;
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('assert', () => {
      describe('AssertionError', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = AssertionError;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { AssertionError } from "assert";
            
            new AssertionError();
            
            class A1 extends AssertionError {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "assert";
            
            new M.AssertionError();
            
            class A1 extends M.AssertionError {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { AssertionError as t } from "assert";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('default', () => {
        test('has no test', () => {});
      });
    });

    describe('v8', () => {
      describe('getHeapStatistics', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getHeapStatistics;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getHeapStatistics } from "v8";
            
            new getHeapStatistics();
            
            class A1 extends getHeapStatistics {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getHeapStatistics } from "v8";
            
            getHeapStatistics();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            new M.getHeapStatistics();
            
            class A1 extends M.getHeapStatistics {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            M.getHeapStatistics();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getHeapStatistics as t } from "v8";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getHeapStatistics as t } from "v8";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('getHeapSpaceStatistics', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = getHeapSpaceStatistics;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { getHeapSpaceStatistics } from "v8";
            
            new getHeapSpaceStatistics();
            
            class A1 extends getHeapSpaceStatistics {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { getHeapSpaceStatistics } from "v8";
            
            getHeapSpaceStatistics();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            new M.getHeapSpaceStatistics();
            
            class A1 extends M.getHeapSpaceStatistics {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            M.getHeapSpaceStatistics();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { getHeapSpaceStatistics as t } from "v8";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { getHeapSpaceStatistics as t } from "v8";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('setFlagsFromString', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = setFlagsFromString;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { setFlagsFromString } from "v8";
            
            new setFlagsFromString();
            
            class A1 extends setFlagsFromString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { setFlagsFromString } from "v8";
            
            setFlagsFromString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            new M.setFlagsFromString();
            
            class A1 extends M.setFlagsFromString {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "v8";
            
            M.setFlagsFromString();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { setFlagsFromString as t } from "v8";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { setFlagsFromString as t } from "v8";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });
    });

    describe('repl', () => {
      describe('REPL_MODE_MAGIC', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = REPL_MODE_MAGIC;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('REPL_MODE_SLOPPY', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = REPL_MODE_SLOPPY;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('REPL_MODE_STRICT', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = REPL_MODE_STRICT;
          `)
          ).toMatchSnapshot();
        });
      });

      describe('REPLServer', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = REPLServer;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { REPLServer } from "repl";
            
            new REPLServer();
            
            class A1 extends REPLServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "repl";
            
            new M.REPLServer();
            
            class A1 extends M.REPLServer {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { REPLServer as t } from "repl";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });

      describe('start', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = start;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { start } from "repl";
            
            new start();
            
            class A1 extends start {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable', () => {
          expect(
            transform(`
            import { start } from "repl";
            
            start();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "repl";
            
            new M.start();
            
            class A1 extends M.start {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import namespace', () => {
          expect(
            transform(`
            import * as M from "repl";
            
            M.start();
            
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { start as t } from "repl";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - callable - import renamed', () => {
          expect(
            transform(`
            import { start as t } from "repl";
            
            t();
            
          `)
          ).toMatchSnapshot();
        });
      });

      describe('Recoverable', () => {
        test('variable', () => {
          expect(
            transform(`
            var a = Recoverable;
          `)
          ).toMatchSnapshot();
        });

        test('generated - class', () => {
          expect(
            transform(`
            import { Recoverable } from "repl";
            
            new Recoverable();
            
            class A1 extends Recoverable {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import namespace', () => {
          expect(
            transform(`
            import * as M from "repl";
            
            new M.Recoverable();
            
            class A1 extends M.Recoverable {};
          `)
          ).toMatchSnapshot();
        });

        test('generated - class - import renamed', () => {
          expect(
            transform(`
            import { Recoverable as t } from "repl";
            
            new t();
            
            class A1 extends t {};
          `)
          ).toMatchSnapshot();
        });
      });
    });
  });
});
