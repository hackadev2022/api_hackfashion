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
