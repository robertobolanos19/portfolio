const express = require('express');
const cors = require('cors');
const dbData = require('./db.json'); // Adjust the path according to your directory structure

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the 'imgs' directory
app.use('/imgs', express.static('imgs')); // Adjust the directory name as needed

// Endpoint to fetch data from db.json
app.get('/projects', (req, res) => {
    res.json(dbData); // Send JSON data as response
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});
