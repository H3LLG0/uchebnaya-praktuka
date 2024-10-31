const Router = require('express');
const express = require('express');
const jsonParser = express.json();

const UserController = require('../controllers/user-controller');

const router = new Router();

router.get('/allUsers', jsonParser, UserController.reg)

module.exports = router;