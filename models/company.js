const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    location: String,
    email: String,
    phone: String,
    website: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
});

module.exports = mongoose.model('Company', companySchema, 'companies');