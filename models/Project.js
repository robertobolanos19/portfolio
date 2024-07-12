const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: [String],
    model: String,
    class: String,
    year: String,
    software: String
});

module.exports = mongoose.model('Project', projectSchema);
