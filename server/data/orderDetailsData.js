const db = require("../infra/connection");

exports.postOrderDetails = function (product_id, pedido_id, quantity, size) {
  return db.query(`INSERT INTO order_details (product_id, pedido_id, quantity, size)
  VALUES (${product_id},${pedido_id},${quantity}, '${size}');
  `);
};
