const mysql = require("mysql2");
const DB = require('../Database/DB')

class UserController {
    async GetUser(req, res, next){
        let con = DB.CreateConnection();
        con.query("SELECT * FROM users", function(err, results, fields) {

            return res.json({'value': `${results[0].name} ${results[0].surname} ${results[0].pathronumic}`});
        })
    }
}

module.exports = new UserController();