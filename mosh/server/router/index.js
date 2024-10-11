const Router = require('express');
const express = require('express');
const jsonParser = express.json();
const resultController = require('../controllers/result-controller')

const router = new Router();

router.post('/resultPlus', jsonParser , resultController.resultPlus);
router.post('/resultMultiply', jsonParser, resultController.resultMultiply);
router.post('/spisokAdd',jsonParser, resultController.spisokAdd)

module.exports = router;