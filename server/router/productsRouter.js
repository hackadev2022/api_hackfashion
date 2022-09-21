const express = require("express");
const router = express.Router();
const productsService = require("../service/productsService");

router.get("/products", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let products = await productsService.getProducts();
  res.json(products);
});

router.get("/productStar/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProductStar(productId);
  res.json(products);
});

module.exports = router;
