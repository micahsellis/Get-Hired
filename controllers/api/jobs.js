const Job = require('../../models/job');

module.exports = {
    index,
    show,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const jobs = await Job.find({});
    res.status(200).json(jobs);
}

async function show(req, res) {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
}

async function create(req, res) {
    const job = await Job.create(req.body);
    res.status(201).json(job);
}

async function deleteOne(req, res) {
    const delJob = await Job.findByIdAndRemove(req.params.id);
    res.status(200).json(delJob);
}

async function update(req, res) {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedJob);
}