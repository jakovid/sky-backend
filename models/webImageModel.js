const mongoose = require('mongoose')

const Schema = mongoose.Schema

const webImageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    img_id: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model('WebImage', webImageSchema)