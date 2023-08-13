require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const teacherRoutes = require('./routes/teachers')
const imageRoutes = require('./routes/images')
const contentRoutes = require('./routes/contents')
const webImageRoutes = require('./routes/webImages')
const loginRoutes = require('./routes/login')
const jwt = require('jsonwebtoken');


// express app
const app = express()

// JWT Authentication Middleware
function authenticateJWT(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
}

// middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/teachers', teacherRoutes)
app.use('/api/images', imageRoutes)
app.use('/api/content', contentRoutes)
app.use('/api/web-images', webImageRoutes)
app.use('/api/login', loginRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db and listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

module.exports.authenticateJWT = authenticateJWT;