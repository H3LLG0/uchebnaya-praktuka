const UserService = require('../service/user-service');
const TokenService = require("../service/token-service");
const jwt = require('jsonwebtoken');

class UserController {
    async auth(req, res, next) {
        try {
            const user = await UserService.GetUser(req.body.login, req.body.password);
            if (!await user[0]) {
                res.status(400).json({'messege':'Неверный логин или пароль'});
            }
            else {
                const token = TokenService.generateAccessToken(user[0]);
                res.clearCookie();
                res.cookie('token', token ,{
                    maxAge: 3600*24,
                    httpOnly:true
                })
                res.json({token: token});
            }
        } catch (e) {
            console.log(e);
            next(e);
        }
    }
    async registration(req, res, next) {
        try {
            const {surname, name, pathronumic, sex, phone, BDay, email, RegDay, login, password} = req.body;
            const user = await UserService.FindOne(login);
            if (!await user[0]) {
                const payload = [surname, name, pathronumic, sex, phone, BDay, email, RegDay, login, password];
                let result = await UserService.AddUser(payload);
                res.json(await result);

            } else {
                res.status(400).json({'messege':'Такой пользователь уже существует'});
            }

        } catch (e) {

        }
    }
    async GetUserData (req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodedData = jwt.verify(token,process.env.JWT_SECRET);
            res.json(decodedData);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new UserController;