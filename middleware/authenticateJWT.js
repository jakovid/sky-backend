const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        console.log("No token provided");
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log("Token verification error:", err);
            return res.status(403).json({ error: "Forbidden: Token verification failed." });
        }        
        
        req.user = user;
        next();
    });
}

module.exports = { authenticateJWT } 