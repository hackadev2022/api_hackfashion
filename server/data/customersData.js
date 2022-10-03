const db = require("../infra/connection");

// exports.postLogin = function (customer_email) {
//   return db.query(`SELECT * FROM customer WHERE email = '${customer_email}'`);
// };

exports.postCustomer = function (nome, email, senha, celular, cep, endereço, numero, complemento,
  referencia, bairro, selectedEstados, city) {
 

  
    
    if(celular === undefined){
      
      return db.query(
        `INSERT INTO usuario (name, email, password) VALUES ('${nome}', '${email}', '${senha}');
        INSERT INTO endereço (states, city, cep, address, district, number, complement, reference) 
        VALUES ('${selectedEstados}', '${city}', '${cep}', '${endereço}', '${bairro}', '${numero}', '${complemento}', '${referencia}')`
        );
        
      }else{
        return db.query(
          `INSERT INTO usuario (name, email, phone, password) VALUES ('${nome}', '${email}', '${celular}', '${senha}');
          INSERT INTO endereço (states, city, cep, address, district, number, complement, reference) 
          VALUES ('${selectedEstados}', '${city}', '${cep}', '${endereço}', '${bairro}', '${numero}', '${complemento}', '${referencia}')`
          )
        }
};
