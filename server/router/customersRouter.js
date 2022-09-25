const express = require("express");
const router = express.Router();
const customersService = require("../service/customersService");

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

  if(telefone === undefined){

    const rows = await customersService.postCustomer(nome, email, senha);
    
    res.json(rows);
    
  }else{

    const rows = await customersService.postCustomer(nome, email, senha, telefone);

    res.json(rows);

  }

  console.log(typeof telefone)

});

module.exports = router;
