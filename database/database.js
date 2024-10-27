const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('demo.db');

db.serialize(() => {
    const sql = `CREATE TABLE IF NOT EXISTS Users
                (id integer primary key, fio TEXT);`;

    db.run(sql);
})

class Users {
    static all(cb) {
        db.all('SELECT * FROM Users', cb);
    }
}

module.exports = db;
module.exports.Users = Users;