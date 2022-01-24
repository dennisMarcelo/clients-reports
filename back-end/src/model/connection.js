require('dotenv').config()
const mysql = require('mysql2/promise');

const connection = mysql.createPool(
  {
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
  },
);

module.exports = connection;
