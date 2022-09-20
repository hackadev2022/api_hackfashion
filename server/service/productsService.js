const productsData = require("../data/productsData");

exports.getProducts = function () {
  return productsData.getProducts();
};
