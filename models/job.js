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


module.exports = mongoose.model(
    'Job', jobSchema
)