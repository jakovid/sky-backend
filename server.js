require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const teacherRoutes = require('./routes/teachers')

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/teachers', teacherRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
    