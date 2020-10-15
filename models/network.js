const mongoose = require('mongoose');

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
}, {
    timestamps: true
});

module.exports = mongoose.model(
    'Network', networkSchema
)