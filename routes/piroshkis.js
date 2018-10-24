var express = require('express');
var router = express.Router();
var piroshkis = require('../controllers/piroshkiController');


router.get('/piroshkis', piroshkis.index);
router.get('/piroshkis/new', piroshkis.new);
router.post('/piroshkis', piroshkis.create);
router.get('/piroshkis/:id', piroshkis.show);
router.get('/piroshkis/:id/edit', piroshkis.edit);
router.put('/piroshkis/:id', piroshkis.update);
router.delete('/piroshkis/:id', piroshkis.destroy);

module.exports = router;
