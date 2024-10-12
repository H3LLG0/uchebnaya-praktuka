const mysql = require("mysql2");
const sequelize = require('sequelize');

const UserModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const User = sequelize.define('User', {
        UserId: {type: INTEGER, primaryKey: true, autoIncrement: true},
        UserName: {type: STRING},
        UserSurname: {type: STRING},
        UserPathronumic: {type: STRING},
        UserInn: {type: INTEGER},
        UserPhone: {type: INTEGER}
    })
    return User
}

module.exports = UserModel