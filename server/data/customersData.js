const db = require("../infra/connection");

exports.postLogin = function (customer_email) {
  return db.query(`SELECT * FROM customer WHERE email = '${customer_email}'`);
};

exports.postCustomer = function (nome, email, hashedPassword, telefone, cep, endereço, numero,
  complemento, referencia, bairro, city, selectedEstados) {

    if(telefone === undefined){
      
      return db.query(
        `INSERT INTO user_hackfashion (name, email, password) VALUES ('${nome}', '${email}', '${hashedPassword}');
        INSERT INTO address_hackfashion (states, city, cep, address, district, number_house, complement, reference) 
        VALUES ('${city}', '${selectedEstados}', '${cep}', '${endereço}', '${bairro}', '${numero}', '${complemento}', '${referencia}')`
        );
        
      }else{
        return db.query(
          `INSERT INTO user_hackfashion (name, email, phone, password) VALUES ('${nome}', '${email}', '${telefone}', '${hashedPassword}');
          INSERT INTO address_hackfashion (states, city, cep, address, district, number_house, complement, reference) 
          VALUES ('${city}', '${selectedEstados}', '${cep}', '${endereço}', '${bairro}', '${numero}', '${complemento}', '${referencia}')`
          )
        }


};
