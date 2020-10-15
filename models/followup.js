const mongoose = require('mongoose');

const followupSchema = new mongoose.Schema({
    interviewDate: Date,
    interviewAddress: String,
    confirmationEmail: String,
    contactName: String,
    contactPhone: Number,
    contactEmail: {
        type: String,
        lowercase: true
    },
    contactURL: String,
    notes: String,
    active: Boolean,
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    jobID: {
        type: mongoose.Schema.Types.ObjectId, ref: "Job"
    },
    networkID: {
        type: mongoose.Schema.Types.ObjectId, ref: "Network"
    }
})

module.exports = mongoose.model(
    'FollowUp', followupSchema
)