const mongoose = require('mongoose');

var MobileSchema = new mongoose.Schema({
  mobile_number: String,
  pre_text: String,
  username: String
});

module.exports = mongoose.model('Mobile', MobileSchema);
