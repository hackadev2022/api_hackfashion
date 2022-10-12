const express = require("express");
const router = express.Router();
const smsService = require("../service/smsService");

router.post("/sms", async function (req, res) {
    const pedido_id = req.body.pedido_id;
    await smsService.getSmsData(pedido_id)
    
});


module.exports = router