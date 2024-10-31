const сonection = require('../database/database');

class UserService {
    async GetAllUsers() {
        сonection.query("SELECT * FROM users",
            function(err, results, fields) {
              console.log(err);
              console.log(results); // собственно данные
              console.log(fields); // мета-данные полей 
          });
    }
}

module.exports = new UserService;