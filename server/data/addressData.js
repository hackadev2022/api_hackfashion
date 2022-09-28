const db = require("../infra/connection");

exports.getAddress = function (customer_id) {
  return db.query(
    `SELECT id_address FROM address WHERE customer_id = ${customer_id}`
  );
};
