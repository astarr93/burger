const dotenv = require('dotenv');
const mysql = require('mysql');


// Prep local SQL database connection by reading .env
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

// Create connection to mysql database
connection.connect((err) => {
    if (err) throw err;
});

// Export connection
module.exports = connection;