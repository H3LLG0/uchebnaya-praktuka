const { json } = require('body-parser');
const Database = require('../database/database');
const bcrypt = require('bcrypt');
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
      const password = await bcrypt.hash(body.password, process.env.HASH_KEY)
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
    async GetUser(login, password) {
      const connect = await Database.connect();
      const hash_password = await bcrypt.hash(password, process.env.HASH_KEY);
      const body = [login, hash_password];
      console.log(body);
      let promise = connect.query(`SELECT * FROM Users WHERE login = ? AND password = ?`, body)
      .then((result) => {
        console.log(result[0][0])
        return result[0][0];
      })
      .catch(err => {
        console.log(err);
      });

      return promise;
    }

}

module.exports = new UserService;