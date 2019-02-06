let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tripCounselor',
    password: ''
});

connection.connect();

module.exports = connection;