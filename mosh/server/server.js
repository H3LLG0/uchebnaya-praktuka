const express = require('express');
const jsonParser = express.json();
const cors = require('cors');
const router = require('./router/index');
const cookieParser = require('cookie-parser');
const mysql = require("mysql2");

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api',router)
const start = async () => {
    try{
        app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`));
        const connection = mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            database: process.env.DATABASE,
            password:'',
            port: 3307
        });
        connection.connect(function(err){
            if (err) {
              return console.error("Ошибка: " + err.message);
            }
            else{
              console.log("Подключение к серверу MySQL успешно установлено");
            }
         });
    } catch (e) {
        console.log(e);
    }
}

start();