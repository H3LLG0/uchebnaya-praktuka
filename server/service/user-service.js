const { json } = require('body-parser');
const Database = require('../database/database');
require('dotenv').config();

class UserService {
    async getAll() {
      const con = Database.connect();
      con.query("SELECT * FROM users",
        function(err, results, fields) {
          console.log(err);
          console.log(results); // собственно данные
          console.log(fields); // мета-данные полей 
      });
    }

}

module.exports = new UserService;