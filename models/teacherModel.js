const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    img: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Teacher', teacherSchema)