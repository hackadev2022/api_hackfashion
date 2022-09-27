const db = require("../infra/connection");

exports.postLogin = function (customer_email) {
  return db.query(`SELECT * FROM customer WHERE email = '${customer_email}'`);
};

exports.postCustomer = function (nome, email, hashedPassword, telefone, cep, endereço, numero,
  complemento, referencia, bairro, cidade) {

    if(telefone === undefined){
      
      return db.query(
        `INSERT INTO customer (name, email, password) VALUES ('${nome}', '${email}', '${hashedPassword}');
         INSERT INTO address (address, city, cep) VALUES ('${endereço}', '${cidade}', '${cep}')`
        );
        
      }else{
        return db.query(
          `INSERT INTO customer (name, email, password, phone) VALUES ('${nome}', '${email}', '${hashedPassword}', '${telefone}');
           INSERT INTO address (address, city, cep) VALUES ('${endereço}', '${cidade}', '${cep}')`
          )
        }


};
