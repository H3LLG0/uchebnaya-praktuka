const UserService = require('../service/user-service')

class UserController {
    async auth(req, res, next) {
        await UserService.getAll();
    }
}

module.exports = new UserController;