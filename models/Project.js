const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: true },
    model: { type: String, required: true },
    class: { type: String, required: true },
    year: { type: Number, required: true },
    software: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);
