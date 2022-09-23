const customersData = require("../data/customersData");

exports.getCustomer = function (customer_email) {
  return customersData.getCustomer(customer_email);
};

exports.postCustomer = function (nome, email, senha) {
  return customersData.postCustomer(nome, email, senha);
};

