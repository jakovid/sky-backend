const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const postUser = async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('User not found');

  // Check password
  const validPassword = bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  // Generate JWT token
  const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY);

  res.send({ token });
};

module.exports = {
    postUser
}