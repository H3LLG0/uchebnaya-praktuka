const mysql = require("mysql2");
require('dotenv').config();

class Database {
    HOST = process.env.HOST;
    USER = process.env.USER;
    DATABASE = process.env.DATABASE;

    GetConnection() {
        try {
                const connection = mysql.createConnection({
                host: this.HOST,
                user: this.USER,
                database: this.DATABASE,
                password:'',
                port: 3307
                    });
            
                    return connection;
            } catch(e) {
                console.log(e);
            }
    } 
}

module.exports = new Database();