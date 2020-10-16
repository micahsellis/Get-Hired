var express = require('express');
var router = express.Router();
var followUpCtrl = require('../../controllers/api/followups');

router.get('/', followUpCtrl.index);
router.get('/:id', followUpCtrl.show);
router.post('/', followUpCtrl.create);
router.delete('/:id', followUpCtrl.delete);
router.put('/:id', followUpCtrl.update);

module.exports = router;