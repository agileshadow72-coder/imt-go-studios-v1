const express = require('express');
const app = express();
const port = 3001; // Port for the backend server

// A simple GET route
app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
