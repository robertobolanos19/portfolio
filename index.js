const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection
const mongoUri = process.env.MONGODB_URI || 'your_mongo_uri_here';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1); // Exit the application if the connection fails
  });

// Middleware
app.use(cors());
app.use(express.json());

// Simple Project model
const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  // Add other fields as necessary
});
const Project = mongoose.model('Project', projectSchema);

// Routes
app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Error fetching projects', details: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});
