const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
   user: 'root',
   database: 'node-complete',
   password: 'Money@+%9039'
})

module.exports = pool.promise();