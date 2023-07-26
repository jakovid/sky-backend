const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    chinese: {
        type: String,
        required: true
    },
    english: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('Content', contentSchema)