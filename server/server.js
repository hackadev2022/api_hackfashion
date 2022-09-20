require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.SERVER_PORT;

server.use("/", require("./router/productsRouter"));

server.listen(port, () => {
  console.log(`servidor escutando na porta ${port}`);
});
