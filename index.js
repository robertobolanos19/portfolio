require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// MongoDB connection string
const mongoUri = process.env.MONGODB_URI; // Use environment variable

// Connect to MongoDB
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a schema for your projects
const projectSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    imageUrl: String,
    // Add other fields as needed
});

// Create a model for your projects
const Project = mongoose.model('Project', projectSchema);

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors({ origin: 'http://inexplicablejourney.com/' })); // Update this to your frontend URL if different

// Serve static files from the 'imgs' directory
app.use('/imgs', express.static('imgs')); // Adjust the directory name as needed

// Endpoint to fetch data from MongoDB
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects); // Send JSON data as response
    } catch (err) {
        res.status(500).send('Error fetching projects');
    }
});

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});