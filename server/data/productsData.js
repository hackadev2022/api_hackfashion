const db = require("../infra/connection");

exports.getProducts = function () {
  return db.query("SELECT * FROM products");
};
