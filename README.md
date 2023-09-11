# Chat Client

A simple chat client built with Node.js, allowing users to connect, send messages, and disconnect gracefully.

## Features

- Connect to the chat server via a TCP socket.
- Send messages to the chat server, which are broadcasted to all connected clients.
- Gracefully disconnect from the chat server with a custom disconnect reason.
- Real-time chat functionality.

## Installation

To run the chat client, you will need Node.js 18.17.1 (LTS) installed on your system.

1. Clone this repository:

    ```bash
    git clone https://github.com/MatasBudriunas/chat-client.git
    cd chat-client
    ```

2. Install dependencies:

    ```bash
   npm install
    ```

4. Start the chat server:

    ```bash
    node index.js
    ```

## Usage

Once the chat server is running, clients can connect to it using a TCP socket. You can use Telnet or create custom client applications to connect to the server.

### Connecting to the Chat Server

Use a Telnet client or create a custom client to connect to the server at `localhost` on port `3001`.

```bash
telnet localhost 3001
```

### Sending Messages
Once connected, you can send messages to the chat server by typing your message and pressing Enter. Your message will be broadcasted to all connected clients.

### Disconnecting
Gracefully disconnect from the chat server.

### Contributing
If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the ISC License.
