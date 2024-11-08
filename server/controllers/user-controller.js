const UserService = require('../service/user-service')

class UserController {
    async reg(req, res, next) {
        try {
            let find = await UserService.identification(req.body.login);
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
        try {
            let find = await UserService.identification(req.body.login);
            switch(find) {
                case true:
                    res.json({'messege':'Ошибка: неверный логин или пароль'});
                    break;
                case false:
                    const user = UserService.GetUser(req.body.login, req.body.password);

                    res.json(user);
                    break;
            }
        } catch (next) {
            console.log(next);
        }
    }
}

module.exports = new UserController;