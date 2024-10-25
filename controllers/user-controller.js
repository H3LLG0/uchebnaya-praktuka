const connection = require('../database/Connect');

class userController {
    async GetByFio(req, res, next) {
        let db = connection.connect();

        return res.json(db);
    }
}

module.exports = new userController();