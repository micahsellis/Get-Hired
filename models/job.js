const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    jobURL: String,
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    address: String,
    phone: Number,
    email: {
        type: String,
        lowercase: true
    },
    manager: String,
    managerTitle: String,
    managerEmail: {
        type: String,
        lowercase: true
    },
    managerPhone: Number,
    active: Boolean,
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
}, {
    timestamps: true
});

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

const networkSchema = new mongoose.Schema({
    name: String,
    address: String,
    date: Date,
    activity: String,
    servicesUsed: String,
    applicationMethod: String,
    workType: String,
    contactName: String,
    contactPhone: Number,
    contactEmail: {
        type: String,
        lowercase: true
    },
    other: String,
    active: Boolean,
    jobIDs: {
        type: String,
        enum: [],
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    }
})


module.exports = mongoose.model(
    'Job', jobSchema,
    'FollowUp', followupSchema,
    'Network', networkSchema
)