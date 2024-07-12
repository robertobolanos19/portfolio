// verifyData.js

const mongoose = require('mongoose');
const Project = require('./models/Project'); // Adjust the path according to your directory structure
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri)
    .then(() => {
        console.log('Connected to MongoDB');
        verifyData();
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));

async function verifyData() {
    try {
        const projects = await Project.find();
        projects.forEach(project => {
            if (!project.image) {
                console.log(`Project ${project.title} is missing the image field`);
            }
        });
        mongoose.connection.close();
    } catch (err) {
        console.error('Error fetching projects', err);
        mongoose.connection.close();
    }
}
