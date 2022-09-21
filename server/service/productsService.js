const productsData = require("../data/productsData");

exports.getProducts = function () {
  return productsData.getProducts();
};

exports.getProductStar = function (productId) {
  return productsData.getProductStar(productId);
};
