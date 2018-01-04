const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const MobileSchema = require('./Mobile');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
		type: Array,
		content: [MobileSchema]
	},
});

const User = module.exports = mongoose.model('Users', UserSchema);
