const express = require('express')
const {authenticateJWT} = require('../middleware/authenticateJWT')
const {
    getWebImages,
    getWebImage,
    createWebImage,
    updateWebImage
} = require('../controllers/webImageController')

const router = express.Router()

//GET all web images
router.get('/', getWebImages)

//GET a single web image
router.get('/:id', getWebImage)

//POST a new web image
router.post('/', authenticateJWT, createWebImage)

//UPDATE a web image
router.patch('/:id', authenticateJWT, updateWebImage)

module.exports = router