const net = require('net');
const assert = require('assert');

describe('Chat Library', () => {
    it('should broadcast messages to all connected clients', (done) => {
        const message = 'Hello, World!';

        Promise.all([
            new Promise(resolve => {
                const client1 = net.connect({ port: 3001 }, () => {
                    resolve(client1);
                });
            }),
            new Promise(resolve => {
                const client2 = net.connect({ port: 3001 }, () => {
                    resolve(client2);
                });
            }),
        ]).then(([client1, client2]) => {
            let onData = (data) => {
                assert.strictEqual(data.toString(), message);
                client1.end();
                client2.end();
                client2.removeListener('data', onData);
                done();
            };

            client1.write(message);
            client2.on('data', onData);
        });
    });

    it('should notify other clients when a user disconnects', (done) => {
        const client1 = net.connect({ port: 3001 });
        const client2 = net.connect({ port: 3001 });

        client2.once('data', (data) => {
            const message = data.toString();
            assert.strictEqual(message, 'Client disconnected: Left the chat');

            client1.end();
            client2.end();

            done();
        });

        client1.once('connect', () => {
            client1.write('disconnect');
        });
    });
});