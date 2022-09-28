const addressData = require("../data/addressData");

exports.getAddress = function (customer_id) {
  return addressData.getAddress(customer_id);
};
