const net = require('net');
const broadcast = require('./broadcast');
const { clients, removeClient} = require('./clients');

const chatServer = net.createServer();

chatServer.on('connection', (client) => {
    const clientId = `${client.remoteAddress}:${client.remotePort}`;
    client.id = clientId;

    console.log(`New client connected: ${clientId}`);
    clients.push(client);
    console.log('Clients list: ', clients.map(client => ({ id: client.id, remoteAddress: client.remoteAddress })));

    client.on('data', (data) => {
        const message = data.toString().trim();

        if (message === 'disconnect') {
            client.customDisconnectReason = 'Left the chat';
            client.end();

            return;
        }

        broadcast(message, client);
    });

    client.on('end', () => {
        console.log(`Client disconnected: ${client.id}`);
        const disconnectReason = client.customDisconnectReason || 'Disconnected';
        const disconnectMessage = `Client disconnected: ${disconnectReason}`;

        broadcast(disconnectMessage, client);
        removeClient(client);
    });
});

chatServer.listen(3001, () => {
    console.log('Chat server running on port 3001');
});