const mysql = require('mysql2/promise');

const connection = mysql.createPool(
  {
    user: 'dennis',
    password: 'ppk24.bat',
    host: 'localhost',
    database: 'tempus_database',
  },
);

module.exports = connection;
