const WebImage = require('../models/webImageModel')
const mongoose = require('mongoose')

// GET all web images
const getWebImages = async (req, res) => {
    const webImages = await WebImage.find({}).sort({_id: 1})

    res.status(200).json(webImages)
}

// GET a single web image
const getWebImage = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No web image found'})
    }

    const webImage = await WebImage.findById(id)

    if (!webImage) {
        return res.status(400).json({error: 'No web image found'})
    }

    res.status(200).json(webImage)
}

// CREATE a new web image
const createWebImage = async (req, res) => {
    const {name, img_url, img_id} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }

    if(!img_url) {
        emptyFields.push('img_url')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the required fields', emptyFields})
    }

    // add doc to db
    try{
        const webImage = await WebImage.create({name, img_url, img_id})
        res.status(200).json(webImage)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a web image
const deleteWebImage = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No web image found'})
    }

    const webImage = await WebImage.findOneAndDelete({_id: id})

    if (!webImage) {
        return res.status(400).json({error: 'No web image found'})
    }

    res.status(200).json(webImage)

}

// UPDATE a web image
const updateWebImage = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No web image found'})
    }

    const webImage = await WebImage.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!webImage) {
        return res.status(400).json({error: 'No web image found'})
    }

    res.status(200).json(webImage)
}


module.exports = {
    createWebImage,
    getWebImages,
    getWebImage,
    deleteWebImage,
    updateWebImage
}