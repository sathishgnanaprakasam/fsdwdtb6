// import mongoose
const mongoose = require('mongoose');

// create a schema
const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    salary: Number,
    experience: String,
    skills: [String],
    type: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'],
        default: 'Full-time'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    applicants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Job', jobSchema, 'jobs');