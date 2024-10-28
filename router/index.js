const Router = require('express');
const express = require('express');
const jsonParser = express.json();

const userController = require('../controllers/user-controller')

const router = new Router();

router.get('/fullName', jsonParser, userController.GetFio);
router.get('/inn', jsonParser, userController.GetInn);


module.exports = router;