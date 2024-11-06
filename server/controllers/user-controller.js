const UserService = require('../service/user-service')

class UserController {
    async reg(req, res, next) {
        try {
            let find = await UserService.FindUser(req.body.login);
            switch(find) {
                case true:
                    UserService.RegisterUser(req.body);
                    res.json({'messege':'Пользователь зарегистрирован'})
                    break;
                case false:
                    res.json({'messege':'Пользователь с таким логин уже существует'});
                    break;
            }
        } catch (next) {
            console.log(next);
        }
    }
    async Auth(req,res,next) {
        
    }
}

module.exports = new UserController;