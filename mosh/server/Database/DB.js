const mysql = require("mysql2");

require('dotenv').config();

class Database {
    CreateConnection() {
        let con = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            password: '',
            database: process.env.DATABASE,
            port: 3307
          });
    
          return con;
    }
}

module.exports = new Database();