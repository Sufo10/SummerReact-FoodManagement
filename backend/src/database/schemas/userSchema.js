const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    email: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model('User', userSchema);
