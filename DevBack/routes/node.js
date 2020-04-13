var express = require('express');
var router = express.Router();
const nodeController= require('../controllers/node.controller');

/* GET users listing. */
router.post('/', nodeController.addNode);

module.exports = router;