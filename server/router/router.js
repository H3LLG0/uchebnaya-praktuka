const Router = require('express');
const {check} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const roleMiddleware = require('../middlewares/role-middleware');

const UserController = require('../controllers/user-controller');
const ServiceController = require('../controllers/service-controller');

const router = new Router();
router.post('/auth',[
    check('login',"поле логин пустое").notEmpty(),
    check('password',"поле пароль пустое").notEmpty()
], UserController.auth);
router.post('/reg',[
    check('surname','поле пустое').notEmpty(),
    check('name','поле пустое').notEmpty(),
    check('pathronumic','поле пустое').notEmpty(),
    check('sex','поле пустое').notEmpty(),
    check('phone','поле пустое').notEmpty(),
    check('BDay','поле пустое').notEmpty(),
    check('email','поле пустое').isEmail(),
    check('RegDate','поле пустое').isDate(),
    check('login',"поле логин пустое").notEmpty(),
    check('password',"поле пароль пустое").isLength({min:4, max:30})

], UserController.registration);
router.get('/getUserData', authMiddleware, UserController.GetUserData);
router.get('/getAllUsers', authMiddleware, roleMiddleware(['admin']), UserController.GetAllUsers);
router.get('/GetAllServices',authMiddleware,roleMiddleware(['admin','user']),ServiceController.ReadService);


module.exports = router;