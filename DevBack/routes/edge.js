var express = require('express');
var router = express.Router();
const edgeController= require('../controllers/edge.controller');

/* GET users listing. */
router.post('/', edgeController.addEdge);

module.exports = router;