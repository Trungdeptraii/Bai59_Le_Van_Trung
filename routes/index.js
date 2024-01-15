var express = require('express');
var router = express.Router();
var Controler = require('../controllers/email.controler.js');
var validate = require('../middleware/validate.error.js')

/* GET home page. */
router.get('/', validate, Controler.index);
router.post('/send', Controler.send);
router.get('/lists', Controler.getLists);

module.exports = router;
