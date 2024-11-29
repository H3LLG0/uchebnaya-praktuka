const Router = require('express');
const {check} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const roleMiddleware = require('../middlewares/role-middleware');

const UserController = require('../controllers/user-controller');

const router = new Router();
//roleMiddleware(['admin','user']),
router.post('/auth',[
    check('login',"поле логин пустое").notEmpty(),
    check('password',"поле пароль пустое").notEmpty()
], UserController.auth);
router.get('/getUserData', authMiddleware, UserController.GetUserData)
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

], UserController.registration)


module.exports = router;