const express = require('express')
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
router.post('/', createWebImage)

//UPDATE a web image
router.patch('/:id', updateWebImage)

module.exports = router