const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
    host: process.env.AWS_DB_HOST,
    user: process.env.AWS_DB_USER,
    password: process.env.AWS_DB_PASSWORD,
    database:process.env.AWS_DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = mysqlPool;