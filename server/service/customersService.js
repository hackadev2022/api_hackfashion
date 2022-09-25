const { json } = require("express");
const customersData = require("../data/customersData");

exports.postLogin = function (customer_email) {
  return customersData.postLogin(customer_email);
};

exports.postCustomer = function (nome, email, senha, telefone) {
  if(nome == ''){
    let qualquer = [{
      status: 'Deu ruim irmão'
    }];
    return qualquer
  }
  return customersData.postCustomer(nome, email, senha, telefone);
};
