const express = require("express");
const router = express.Router();
const orderDetailsService = require("../service/orderDetailsService");

router.post("/orderDetails", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let product_id = req.params.customer_id;
  let pedido_id = req.params.pedido_id;
  let quantity = req.params.quantity;
  let size = req.params.size;

  await orderDetailsService.postOrderDetails(
    product_id,
    pedido_id,
    quantity,
    size
  );
  res.send("orderDetails criada");
});

module.exports = router;
