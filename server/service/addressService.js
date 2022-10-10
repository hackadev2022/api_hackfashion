const addressData = require("../data/addressData");

exports.getAddress = function (customer_id) {
  return addressData.getAddress(customer_id);
};

exports.postAddress = function (
  cep,
  endereço,
  numero,
  complemento,
  referencia,
  bairro,
  estados
) {
  return addressData.postAddress(
    cep,
    endereço,
    numero,
    complemento,
    referencia,
    bairro,
    estados
  );
};

exports.postAddressTeste = function (customer_id, address, uf, city, cep) {
  return addressData.postAddressTeste(customer_id, address, uf, city, cep);
};
