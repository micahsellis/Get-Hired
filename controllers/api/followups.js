const FollowUp = require('../../models/followup');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const followUps = await FollowUp.find({jobID: req.params.jobID});
    res.status(200).json(followUps);
}

async function show(req, res) {
    const followUp = await FollowUp.findById(req.params.id);
    res.status(200).json(followUp);
}

async function create(req, res) {
    const followUp = await FollowUp.create(req.body);
    res.status(201).json(followUp);
}

async function deleteOne(req, res) {
    const delFollowUp = await FollowUp.findByIdAndRemove(req.params.id);
    res.status(200).json(delFollowUp);
}

async function update(req, res) {
    const updatedFollowUp = await FollowUp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFollowUp);
}