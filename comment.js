// Create web server
const express = require('express');
const app = express();

// Create a route for the path /comment
app.get('/comment', (req, res) => {
    res.send('Hello, comment');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

