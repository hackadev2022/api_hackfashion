const smsData = require("../data/smsData");

exports.getSmsData = function (pedido_id) {
  return smsData.getSmsData(pedido_id);
};