const { clients } = require('./clients');

module.exports = function broadcast(message, sender) {
    clients.forEach(client => {
        if (client === sender) return;
        client.write(message);
    });
}
