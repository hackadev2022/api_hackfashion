const express = require("express");
const router = express.Router();
const addressService = require("../service/addressService");

router.get("/address/:customer_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let customer_id = req.params.customer_id;
  let address = await addressService.getAddress(customer_id);

  let lastAddress = address[address.length - 1].id_address;

  res.json(lastAddress);
});

module.exports = router;
