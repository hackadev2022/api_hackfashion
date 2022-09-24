const customersData = require("../data/customersData");

exports.postLogin = function (customer_email) {
  return customersData.postLogin(customer_email);
};

exports.postCustomer = function (nome, email, senha) {
  return customersData.postCustomer(nome, email, senha);
};
