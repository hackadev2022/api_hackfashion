const customersData = require("../data/customersData");
const bcrypt = require("bcrypt");

exports.postLogin = async function (customer_email) {
  let customer = await customersData.postLogin(customer_email);

  if (customer[0] === undefined || customer[0] === null) {
    customer = [
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: "notFound",
      },
    ];
  } else {
    customer = [
      {
        customer_id: customer[0].customer_id,
        name: customer[0].name,
        phone: customer[0].phone,
        loged: true,
      },
    ];
  }

  return customer;
};

exports.postCustomer = function (
  nome,
  email,
  senha,
  celular,
  cep,
  endereço,
  numero,
  complemento,
  referencia,
  bairro,
  selectedEstados,
  city
) {
  return customersData.postCustomer(
    nome,
    email,
    senha,
    celular,
    cep,
    endereço,
    numero,
    complemento,
    referencia,
    bairro,
    selectedEstados,
    city
  );
};

exports.customerteste = function (name, email, hashPassword, phone) {
  return customersData.customerteste(name, email, hashPassword, phone);
};

exports.hashPassword = function (loginEmail) {
  return customersData.hashPassword(loginEmail);
};
