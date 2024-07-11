const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const projectSchema = new mongoose.Schema({
    title: String,
    class: String,
    description: String,
    image: String,
    model:String,
    year:String,
    software:String
});

const Project = mongoose.model('Project', projectSchema);

const projects = [
{
    title:"test2",
    class:"Freelance",
    description:"testing!2",
    image:"/imgs/alienScanner/2.png",
    model:"/models/test.glb",
    year:"2021",
    software:"Blender"
}
    // Add more projects as needed
];

Project.insertMany(projects)
    .then(() => {
        console.log('Data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting data', err);
        mongoose.connection.close();
    });
