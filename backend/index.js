const express = require('express');
const WebSocket = require('ws'); // Import ws library

const app = express();
const port = 3001;

// A simple GET route
app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

// Start the HTTP server and save the instance
const server = app.listen(port, () => {
  console.log(`Backend HTTP server listening at http://localhost:${port}`);
  console.log(`WebSocket server is also running on the same port.`);
});

// Create a WebSocket server instance, attached to the HTTP server
const wss = new WebSocket.Server({ server });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');

  // Handle messages from clients
  ws.on('message', (message) => {
    // Convert message to string if it's a Buffer
    const messageString = message.toString();
    console.log('Received WebSocket message:', messageString);
    // Echo the message back to the client
    ws.send(`Server received: ${messageString}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected from WebSocket');
  });

  ws.send('Welcome to the WebSocket server!');
});

console.log('WebSocket server setup complete and attached to HTTP server.');
