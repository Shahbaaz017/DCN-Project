const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to receive data through URL (query parameters) and JSON body
app.all('/receive-data', (req, res) => {
    const data = req.query.message || req.body.message;
    console.log('Received data:', data);
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

