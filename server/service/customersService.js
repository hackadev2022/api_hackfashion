const customersData = require("../data/customersData");

exports.postLogin = async function (customer_email, loginPassword) {
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
