const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    public_id: String,
    url: String,
});

module.exports = mongoose.model('Image', ImageSchema);