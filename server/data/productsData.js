const db = require("../infra/connection");

exports.getProducts = function () {
  return db.query("SELECT * FROM products");
};

exports.getProductStar = function (productId) {
  return db.query(`SELECT * FROM rating_star WHERE product_id = ${productId}`);
};
