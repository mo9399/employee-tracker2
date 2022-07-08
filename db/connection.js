const mysql = require("mysql2"); // import all necessary dependencies

// connect to database
const db = mysql.createConnection({ 
    host: "localhost",
    // your mysql username
    user: process.env.DB_USER,
    // your mysql password
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  },
  console.log("Connected to database.")
);

module.exports = db;