// const mysql2 = require("mysql2");
// const dotenv = require("dotenv");
// dotenv.config();
// const dbConnection = mysql2.createPool({
//   user: process.env.USER,
//   database: process.env.DATABASE,
//   host: "localhost",
//   password: process.env.PASSWORD,
//   connectionLimit: 10,
// });

// module.exports = dbConnection.promise();

const mysql2 = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = mysql2.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST, // Ensure this uses the HOST variable from .env
  password: process.env.PASSWORD,
  connectionLimit: 10,
  port: process.env.PORT,
});

module.exports = dbConnection.promise();
