const express = require("express");
const router = express.Router();
const productsService = require("../service/productsService");

router.get("/products", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let products = await productsService.getProducts();
  res.json(products);
});

module.exports = router;
