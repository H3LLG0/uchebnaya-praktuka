const sqlite3 = require('sqlite3').verbose();

class Connection {
    async connect() {
        let db = new sqlite3.Database('demo.db', sqlite3.OPEN_READWRITE, (err) => {
            if (err) {
                return console.error(err.message);
            }
        });
        return db;
    }
}

module.exports = new Connection();