const { json } = require('body-parser');
const Database = require('../database/database');
const CryptService = require('./crypt-service')
require('dotenv').config();

class UserService {
    async identification(login) {
        const connect = await Database.connect();
        let promise =  await connect.execute(`SELECT * FROM users WHERE login =?`, [login])
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
      let hash_password = CryptService.Crypt(body.password);
      const data = [body.name, body.surname, body.login, hash_password, type];
      let promise = connect.query(`INSERT INTO Users (user_name, user_surname, login, password, type) VALUES (?,?,?,?,?)`, data)
      .then((result)=>{
        return true;
      })
      .catch(err=>{
        console.log(err);
      });

      return promise;
    }
    async GetUser(login, password) {
      const connect = await Database.connect();
      let promise = await connect.execute(`SELECT * FROM Users WHERE login = ?`, [login])
      .then((result) => {
        let password_check = CryptService.Decrypt(password, result[0][0].password);
        console.log(password_check)
      })
      .catch(err => {
        console.log(err);
      });
      return promise;
    }

}

module.exports = new UserService;