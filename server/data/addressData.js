const db = require("../infra/connection");

exports.getAddress = function (customer_id) {
  return db.query(
    `SELECT id_address FROM address WHERE customer_id = ${customer_id}`
  );
};

exports.postAddress = function (
  cep,
  endereço,
  numero,
  complemento,
  referencia,
  bairro,
  cidade,
  estados
) {
  return db.query(
    `INSERT INTO address_hackfashion (states, city, cep, address, district, number_house, complement, reference) 
         VALUES ('${estados}', '${cidade}', '${cep}', '${endereço}', '${bairro}', '${numero}', '${complemento}', '${referencia}')`
  );
};
