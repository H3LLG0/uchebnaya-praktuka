const mysql = require('mysql2');
require('dotenv').config();

        const connection = mysql.createConnection({
            host: process.env.HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: ''
          }).promise();
module.exports = connection;