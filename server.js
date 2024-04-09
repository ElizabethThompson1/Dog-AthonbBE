const express = require('express');
require('dotenv').config();


// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('dog-athon');
});

// Start the server
const PORT = process.env.PORT || 3308; 
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});