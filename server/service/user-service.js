const { json } = require('body-parser');
const connection = require('../database/database');
require('dotenv').config();

class UserService {
  async GetUser(login, password) {
    let user = connection.query(`SELECT * FROM users WHERE login=? AND password=?`, [login, password])
    .then(([rows, fields]) =>{
      return rows;
    })
    .catch(err =>{
      console.log(err);
    });

    return await user;
  }
  async FindOne(login) {
    let user = connection.query(`SELECT * FROM users WHERE login=?`, [login])
    .then(([rows, fields]) =>{
      return rows;
    })
    .catch(err =>{
      console.log(err);
    });

    return await user;
  }
  async AddUser(payload) {
    let add = connection.query("INSERT INTO users(surname, name, pathronumic, sex, phone, BDay, email, RegDay, login, password) VALUES(?,?,?,?,?,?,?,?,?,?)", payload)
    .then(([rows, fields]) =>{
      return {message:"Пользователь зарегистрирован"};
    })
    .catch(err =>{
      console.log(err);
    });

    return await add;
  }
  async GetAll() {
    let users = connection.query("SELECT * FROM users")
    .then(([rows, fields]) =>{
      return rows;
    })
    .catch(err => console.log(err))

    return await users;
  }

}

module.exports = new UserService;