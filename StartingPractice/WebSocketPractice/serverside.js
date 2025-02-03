 // server.js
const WebSocket = require('ws')
const server = new WebSocket.Server({ port: 1234 });

server.on('connection', (socket) => {
    console.log('A new client connected!');

    // Send a welcome message to the client
    socket.send('Welcome to the WebSocket server!');

    // Listen for messages from the client
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);

        // Echo the message back to the client
        socket.send(`You said: ${message}`);

    });

    // Handle client disconnection
    socket.on('close', () => {
        console.log('A client disconnected.');
    });
});

console.log('WebSocket server is running on ws://localhost:1234');