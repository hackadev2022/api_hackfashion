const accountSid = 'ACfff5e2af0f32932b357eae69c772fd20'; 
const authToken = 'f252731ad31f44fa069ac62d6a236eac'; 
const client = require('twilio')(accountSid, authToken);
const numeroZapZap = '';

exports.getSmsData = async function (name, pedido_id) {
  console.log(pedido_id)
    
    client.messages 
.create({ 
  body:  `Ola ${name} a compra foi finalizada com sucesso, Nº ${pedido_id}`, 
  from: 'whatsapp:+14155238886',       
  to: numeroZapZap    
}) 
.then(message => console.log('mensagem enviada',message.sid)) 
.done();
  };

