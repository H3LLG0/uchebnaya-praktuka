const Router = require('express');
const express = require('express');
const jsonParser = express.json();

const UserController = require('../controllers/user-controller');

const router = new Router();

router.post('/registration', jsonParser, UserController.reg);
router.post('/authorisation', jsonParser, UserController.Auth)

module.exports = router;