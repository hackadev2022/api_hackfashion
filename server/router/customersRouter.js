const express = require("express");
const router = express.Router();
const customersService = require("../service/customersService");

router.get("/customers/:email", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let customer_email = req.params.email;
  // let password = req.params.password;
  let customer = await customersService.getCustomer(customer_email);
  res.json(customer);
});

module.exports = router;
