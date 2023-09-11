const { removeClient } = require('./clients');
const broadcast = require('./broadcast');

function disconnect(client, reason) {
    console.log(`Client disconnected: ${reason}`);
    client.end(reason);
    removeClient(client);
    broadcast(`Client disconnected: ${reason}`, client);
}

module.exports = disconnect;
