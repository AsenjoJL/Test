//app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the routes from the items.js file
const itemsRoute = require('./routes/items');

// Use the routes for the `/items` endpoint
app.use('/items', itemsRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});