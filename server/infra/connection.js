require("dotenv").config();
const pg = require("pg-promise")();
const bd = pg({
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  host: process.env.HOST_BD,
  port: process.env.PORT_BD,
  database: process.env.NAME_BD,
});

module.exports = bd;
