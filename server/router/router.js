const Router = require('express');
const express = require('express');
const jsonParser = express.json();

const UserController = require('../controllers/user-controller');

const router = new Router();

router.get('/auth',jsonParser, UserController.auth)


module.exports = router;