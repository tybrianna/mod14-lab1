const express = require("express");
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  role: { type: String, default: 'user' }
});
 
const User = model('User', userSchema);
