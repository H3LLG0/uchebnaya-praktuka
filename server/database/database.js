const mysql = require('mysql2');
require('dotenv').config();

class Database {
    async connect() {
        const connection = await mysql.createConnection({
            host: process.env.HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_USER_PASSWORD
          });

          return connection;
    }
}

module.exports = new Database;