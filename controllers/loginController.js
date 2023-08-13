const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

// admin login
const postAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        // Generate JWT Token
        const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).send('Invalid Credentials');
}


module.exports = {
    postAdmin
}