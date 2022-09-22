const express = require("express");
const router = express.Router();
const productsService = require("../service/productsService");

router.get("/products", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let products = await productsService.getProducts();
  res.json(products);
});

router.get("/products/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProduct(productId);
  res.json(products);
});

router.get("/productSize/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProductSize(productId);
  res.json(products);
});

router.get("/productStar/:product_id", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let productId = req.params.product_id;
  let products = await productsService.getProductStar(productId);
  let arrayOfStars = [];
  let totalStars = 0;
  let numberOfStars = 1;
  let ratingStar = 0;

  arrayOfStars[0] = await products[0].one_star;
  arrayOfStars[1] = await products[0].two_star;
  arrayOfStars[2] = await products[0].three_star;
  arrayOfStars[3] = await products[0].four_star;
  arrayOfStars[4] = await products[0].five_star;
  totalStars = await (products[0].one_star +
    products[0].two_star +
    products[0].three_star +
    products[0].four_star +
    products[0].five_star);

  for (let i = 0; i < 5; i++) {
    let aux = ratingStar;
    ratingStar = await arrayOfStars[i];
    if (aux > ratingStar) {
      ratingStar = aux;
    }
  }
  numberOfStars = arrayOfStars.lastIndexOf(ratingStar) + 1;

  let resp = [{ totalStars, numberOfStars }];

  res.json(resp);
});

module.exports = router;
