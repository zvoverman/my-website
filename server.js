const express = require('express');
const path = require('path');

const app = express();
const port = 3000;  // You can choose any available port

// Serve static files from the 'assets' directory (or any folder you specify)
app.use(express.static(path.join(__dirname, '')));

// Default route (optional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});