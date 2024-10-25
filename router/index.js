const Router = require('express');
const express = require('express');
const jsonParser = express.json();

const userController = require('../controllers/user-controller')

const router = new Router();

// router.post('/resultPlus', jsonParser , resultController.resultPlus);
// router.get("/getUser",jsonParser, userController.GetUser);

router.get('/fullName', jsonParser, userController.GetByFio)

module.exports = router;