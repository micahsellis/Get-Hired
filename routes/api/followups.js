var express = require('express');
var router = express.Router();
var followUpCtrl = require('../../controllers/api/followups');

router.get('/:jobID', followUpCtrl.index);
router.get('/:id', followUpCtrl.show);
router.post('/:jobID', followUpCtrl.create);
router.delete('/:id', followUpCtrl.delete);
router.put('/:id', followUpCtrl.update);

module.exports = router;