const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    initializeApp();
  })
  .catch(err => {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1); // Exit the application if the connection fails
  });

async function initializeApp() {
  const connection = mongoose.connection;
  const bucket = new GridFSBucket(connection.db, { bucketName: 'uploads' });

  const app = express();
  const port = process.env.PORT || 3001;

  // Use CORS middleware
  const allowedOrigins = ['http://localhost:3001', 'https://inexplicablejourney.com'];
  const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

  // Use express.json() for parsing application/json
  app.use(express.json());

  const Project = require('./models/Project');

  app.get('/projects', async (req, res) => {
    try {
      const projects = await Project.find();
      res.setHeader('Access-Control-Allow-Origin', '*'); // Explicitly set CORS header
      res.json(projects);
    } catch (err) {
      console.error('Error fetching projects:', err); // Log the error
      res.status(500).json({ error: 'Error fetching projects', details: err.message });
    }
  });

  app.get('/file/:filename', (req, res) => {
    bucket.find({ filename: req.params.filename }).toArray((err, files) => {
      if (err) {
        console.error('Error finding file:', err); // Log the error
        return res.status(500).json({ error: 'Error finding file', details: err.message });
      }
      if (!files || files.length === 0) {
        return res.status(404).json({ error: 'No file exists' });
      }
      const readstream = bucket.openDownloadStreamByName(req.params.filename);
      readstream.pipe(res);
    });
  });

  app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
  });
}
