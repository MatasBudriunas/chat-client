const clients = [];

function removeClient(client) {
    const index = clients.indexOf(client);
    if (index !== -1) {
        console.log(`Removing client with ID: ${client.id}`);
        clients.splice(index, 1);
    }
}

module.exports = {
    clients,
    removeClient
};
