const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    img_id: {
        type: String,
        required: true
    },
    bio: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Teacher', teacherSchema)