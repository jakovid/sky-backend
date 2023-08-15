const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const postUser = async (req, res) => {
  try {
      const { username, password } = req.body;

      // Find user by username
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ error: 'User not found' });

      // Check password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json({ error: 'Invalid password' });

      // Generate JWT token
      const token = jwt.sign({ _id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY);

      res.json({ token });
  } catch (error) {
      console.error("Error in postUser:", error);
      res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { postUser };