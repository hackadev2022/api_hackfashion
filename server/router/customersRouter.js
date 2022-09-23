const express = require("express");
const router = express.Router();
const customersService = require("../service/customersService");

router.get("/customers/:email", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let customer_email = req.params.email;
  let customer = await customersService.getCustomer(customer_email);
  res.json(customer);
});

router.post('/custumer', async function(req, res) {
  const nome = req.body.nome
  const email = req.body.email
  const senha = req.body.senha
  // const { nome, email, senha } = req.body;
  const rows  = await customersService.postCustomer(nome, email, senha);
  res.status(201).send({
    message: "Usuario cadastrado com sucesso",
  });

})

module.exports = router;
