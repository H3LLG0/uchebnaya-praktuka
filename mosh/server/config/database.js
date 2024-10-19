const mysql = require("mysql2");
require('dotenv').config();


class Database {
    HOST;
    USER;
    DATABASE;
    PASSWORD;
    PORT;

    constructor(Host, User, Database_name, Password, Port) {
        this.HOST = Host;
        this.USER = User;
        this.DATABASE = Database_name;
        this.PASSWORD = Password;
        this.PORT = Port;
    }

    Connect() {
        let connection = mysql.createConnection({
            host: HOST,
            user: USER,
            database: DATABASE,
            password: PASSWORD,
            port: PORT
                });

                return connection;
    }
}

module.exports = new Database();