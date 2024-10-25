const express = require('express');
const jsonParser = express.json();
const cors = require('cors');
const router = require('./router/index');
const sqlite3 = require('sqlite3').verbose();
const connection = require('./database/Connect');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json());
app.use(cors());

app.use('/api',router)
const start = async () => {
    try{
        app.listen(PORT, () => console.log(`сервер запущен на порту ${PORT}`));

        let db = connection.connect();

        console.log(db);
    } catch (e) {
        console.log(e);
    }
}

start();