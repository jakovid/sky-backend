const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer({ dest: 'uploads/'})
const Image = require('../models/imageModel');
const authenticateJWT = require('../middleware/authenticateJWT')


//config cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// POST - upload image
router.post('/upload', authenticateJWT, upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        const image = new Image({
            public_id: result.public_id,
            url: result.url,
        });
        await image.save();
        res.json(image);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'error uploading image' })
    }
})

//DELETE - delete an image
router.delete('/:public_id', authenticateJWT, async (req, res) => {
    try {
        const image = await Image.findOne({ public_id: req.params.public_id });
        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }
        console.log(image);
        const result = await cloudinary.uploader.destroy(image.public_id);
        await Image.deleteOne({ public_id: req.params.public_id });
        res.json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error deleting image' })
    }
});

module.exports = router;