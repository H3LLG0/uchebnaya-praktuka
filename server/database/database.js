const mysql = require('mysql2');
require('dotenv').config();

class Database {
    async connect() {
        const connection = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            database: "usersdb",
            password: "root"
          });

          return connection;
    }
}

module.exports = new Database;