const UserService = require('../service/user-service')

class UserController {
    async reg(req, res, next) {
        const data = UserService.GetAllUsers();

        res.json(data);
    }
    async auth(req, res, next) {

    }
}

module.exports = new UserController;