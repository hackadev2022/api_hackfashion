// const express = require("express");
// const router = express.Router();
// const addressService = require("../service/addressService");

// router.get("/address/:customer_id", async function (req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   let customer_id = req.params.customer_id;
//   let address = await addressService.getAddress(customer_id);

//   let lastAddress = address[address.length - 1].id_address;

//   res.json(lastAddress);
// });

// router.post("/customer", async function (req, res) {
//   const cep = req.body.cep;
//   const endereço = req.body.endereço;
//   const numero = req.body.numero;
//   const complemento = req.body.complemento;
//   const referencia = req.body.referencia;
//   const bairro = req.body.bairro;
//   const cidade = req.body.cidade;
//   const estados = req.body.estados;

  
//     const rows = await addressService.addressData(
//       cep,
//       endereço,
//       numero,
//       complemento,
//       referencia,
//       bairro,
//       cidade,
//       estados

//     );

//     res.json(rows);
//   }

// )

// module.exports = router;
