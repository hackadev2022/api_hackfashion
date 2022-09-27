const express = require("express");
const router = express.Router();
const customersService = require("../service/customersService");
const bcrypt = require('bcrypt')
const path = require('path')

router.post("/login", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let loginEmail = req.body.loginEmail;
  let loginPassword = req.body.loginPassword;
  let customer = await customersService.postLogin(loginEmail, loginPassword);

  res.json(customer);
});

router.post("/customer", async function (req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;
  const telefone = req.body.telefone;

  const cep = req.body.cep;
  const endereço = req.body.endereço;
  const numero = req.body.numero;
  const complemento = req.body.complemento
  const referencia = req.body.referencia
  const bairro = req.body.bairro
  const cidade = req.body.cidade

  const hashedPassword = bcrypt.hashSync(senha, bcrypt.genSaltSync());


  if(telefone === undefined){

    const rows = await customersService.postCustomer(nome, email, hashedPassword, cep, endereço, numero,
      complemento, referencia, bairro, cidade);
    
    res.json(rows);
    
  }else{

    const rows = await customersService.postCustomer(nome, email, hashedPassword, telefone, cep, endereço, numero,
      complemento, referencia, bairro, cidade);

    res.json(rows);

  }

});

module.exports = router;
