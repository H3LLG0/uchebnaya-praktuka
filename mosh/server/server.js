const express = require('express');
const jsonParser = express.json();
const cors = require('cors');
const router = require('./router/index');
const cookieParser = require('cookie-parser');
const mysql = require("mysql2");
const DB = require('./config/database')

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
    } catch (e) {
        console.log(e);
    }
}

start();