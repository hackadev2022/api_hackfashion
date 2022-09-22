const db = require("../infra/connection");

exports.getProducts = function () {
  return db.query("SELECT * FROM products");
};

exports.getProduct = function (productId) {
  return db.query(`SELECT * FROM products WHERE product_id = ${productId}`);
};

exports.getProductSize = function (productId) {
  return db.query(
    `SELECT p, m, g, gg FROM product_sizes WHERE product_id = ${productId}`
  );
};

exports.getProductStar = function (productId) {
  return db.query(
    `SELECT one_star, two_star, three_star, four_star, five_star FROM rating_star WHERE product_id = ${productId}`
  );
};
