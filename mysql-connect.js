var mysql = require('mysql2');
require('dotenv').config()

var con = mysql.createConnection({
//   host: "localhost",
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: 6033,
  database: process.env.MYSQL_DATABASE
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

exports.db = con