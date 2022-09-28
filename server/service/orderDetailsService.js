const orderDetailsData = require("../data/orderDetailsData");

exports.postOrderDetails = function (product_id, pedido_id, quantity, size) {
  return orderDetailsData.postOrderDetails(
    product_id,
    pedido_id,
    quantity,
    size
  );
};
