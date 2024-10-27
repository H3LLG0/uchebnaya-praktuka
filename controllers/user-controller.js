const Users = require('../database/database').Users;
const rngService = require('../service/rng-service');

class userController {
    async GetFio(req, res, next) {
        Users.all((err, users) => {
            if(err) return next(err);

            let number = rngService.rng(users.length - 1);

            return res.json({'value': users[number].fio})
        });
    }
}

module.exports = new userController();