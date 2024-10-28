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
    async GetInn(req, res, next) {
        Users.inn((err, inn) => {
            if(err) return next(err);

            let number = rngService.rng(inn.length - 1);

            return res.json({'value': inn[number].inn})
        });
    }
}

module.exports = new userController();