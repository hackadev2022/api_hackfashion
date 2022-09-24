const express = require("express");
const router = express.Router();
const customersService = require("../service/customersService");

router.post("/login", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let loginEmail = req.body.loginEmail;
  let loginPassword = req.body.loginPassword;
  let customer = await customersService.postLogin(loginEmail);

  if (customer[0] === undefined) {
    res.json([
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: "notFound",
      },
    ]);
  } else if (customer[0].password != loginPassword) {
    res.json([
      {
        customer_id: "",
        name: "",
        phone: "",
        loged: "wrongPassword",
      },
    ]);
  } else if (customer[0].password === loginPassword) {
    res.json([
      {
        customer_id: customer[0].customer_id,
        name: customer[0].name,
        phone: customer[0].phone,
        loged: true,
      },
    ]);
  }
});

router.post("/custumer", async function (req, res) {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  const rows = await customersService.postCustomer(nome, email, senha);
  res.status(201).send({
    message: "Usuario cadastrado com sucesso",
  });
});

module.exports = router;
