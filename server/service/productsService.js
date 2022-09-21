const productsData = require("../data/productsData");

exports.getProducts = function () {
  return productsData.getProducts();
};

exports.getProduct = function (productId) {
  return productsData.getProduct(productId);
};

exports.getProductStar = function (productId) {
  return productsData.getProductStar(productId);
};
