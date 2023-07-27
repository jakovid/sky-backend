const Content = require('../models/contentModel')
const mongoose = require('mongoose')

// GET all content
const getContents = async (req, res) => {
    const contents = await Content.find({}).sort({_id: 1})

    res.status(200).json(contents)
}

// GET a single piece of content
const getContent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No content found'})
    }

    const content = await Content.findById(id)

    if (!content) {
        return res.status(400).json({error: 'No content found'})
    }

    res.status(200).json(content)
}

// CREATE a new piece of content
const createContent = async (req, res) => {
    const {name, chinese, english} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }

    if(!chinese) {
        emptyFields.push('chinese')
    }

    if(!english) {
        emptyFields.push('english')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the required fields', emptyFields})
    }

    // add doc to db
    try{
        const content = await Content.create({name, chinese, english})
        res.status(200).json(content)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// UPDATE a piece of content
const updateContent = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No content found'})
    }

    const content = await Content.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!content) {
        return res.status(400).json({error: 'No content found'})
    }

    res.status(200).json(content)
}


module.exports = {
    getContents,
    getContent,
    updateContent,
    createContent,
}