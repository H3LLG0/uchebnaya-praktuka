const { json } = require('body-parser');
const Database = require('../database/database');
const bcrypt = require('bcrypt');

class UserService {
    async FindUser(login) {
        const connect = await Database.connect();
        let promise = connect.execute(`SELECT * FROM users WHERE login =?`, [login])
        .then((result) =>{
            if (!result[0][0]) {
                return true
            } else {
                return false
            }
          })
          .catch(err =>{
            console.log(err);
          });

          return promise;
    }
    async RegisterUser(body) {
      const connect = await Database.connect();
      const type = 'user';
      const password = await bcrypt.hash(body.password, 10)
      const data = [body.name, body.surname, body.login, password, type];
      let promise = connect.query(`INSERT INTO Users (user_name, user_surname, login, password, type) VALUES (?,?,?,?,?)`, data)
      .then((result)=>{
        return true;
      })
      .catch(err=>{
        console.log(err);
      });

      return promise;
    }

}

module.exports = new UserService;