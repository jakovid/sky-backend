  const mongoose = require('mongoose');

  const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean,
  });
  
  module.exports = mongoose.model('User', UserSchema);