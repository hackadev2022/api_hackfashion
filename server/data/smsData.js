require("dotenv").config({
  path: ".././.env",
});

const accountSid = process.env.SID;
const authToken = process.env.AUTHTOKEN;

console.log(accountSid)
console.log(authToken)

const client = require('twilio')(accountSid, authToken);

const numeroZapZap = 'whatsapp:+556293176806';

exports.getSmsData = async function (name, pedido_id) {
  console.log(pedido_id)
  console.log(name)
    
    client.messages 
.create({ 
  body:  `Ola ${name} a compra foi finalizada com sucesso, Nº ${pedido_id}`, 
  from: 'whatsapp:+14155238886',       
  to: numeroZapZap    
}) 
.then(message => console.log('mensagem enviada',message.sid)) 
.done();
  };

