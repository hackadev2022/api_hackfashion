const db = require("../infra/connection");

exports.getCustomer = function (customer_email) {
  return db.query(`SELECT * FROM customer WHERE email = '${customer_email}'`);
};
