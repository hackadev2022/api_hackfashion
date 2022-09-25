const db = require("../infra/connection");

exports.postLogin = function (customer_email) {
  return db.query(`SELECT * FROM customer WHERE email = '${customer_email}'`);
};

exports.postCustomer = function (nome, email, senha, telefone) {

if(telefone === undefined){
  
  return db.query(
    `INSERT INTO customer (name, email, password) VALUES ('${nome}', '${email}', '${senha}')`
  );

}else{
  return db.query(
    `INSERT INTO customer (name, email, password, phone) VALUES ('${nome}', '${email}', '${senha}', '${telefone}')`
  )
}

};
