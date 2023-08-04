require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const teacherRoutes = require('./routes/teachers')
const imageRoutes = require('./routes/images')
const contentRoutes = require('./routes/contents')
const webImageRoutes = require('./routes/webImages')


// express app
const app = express()

// middleware
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