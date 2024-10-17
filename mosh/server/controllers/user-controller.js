const mysql = require("mysql2");

class UserController {
    async GetUser(req, res, next){
       console.log(123)
    }
}

module.exports = new UserController();