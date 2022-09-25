const { json } = require("express");
const customersData = require("../data/customersData");

exports.postLogin = async function (customer_email, loginPassword) {
  let customer = await customersData.postLogin(customer_email);

  if (customer[0] === undefined) {
    customer = [
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: "notFound",
      },
    ];
  } else if (customer[0].password != loginPassword) {
    customer = [
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: "wrongPassword",
      },
    ];
  } else if (customer[0].password === loginPassword) {
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

exports.postCustomer = function (nome, email, senha, telefone) {
  if(nome == ''){
    let qualquer = [{
      status: 'Deu ruim irmão'
    }];
    return qualquer
  }
  return customersData.postCustomer(nome, email, senha, telefone);
};
