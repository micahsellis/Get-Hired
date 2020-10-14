var express = require('express');
var router = express.Router();
var jobsCtrl = require('../../controllers/api/jobs');

router.get('/', jobsCtrl.index);
router.get('/:id', jobsCtrl.show);
router.post('/', jobsCtrl.create);
router.delete('/:id', jobsCtrl.delete);
router.put('/:id', jobsCtrl.update);

module.exports = router;