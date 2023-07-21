const Teacher = require('../models/teacherModel')
const mongoose = require('mongoose')

// GET all teachers
const getTeachers = async (req, res) => {
    const teachers = await Teacher.find({}).sort({order: 1})

    res.status(200).json(teachers)
}

// GET a single teacher
const getTeacher = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No teacher found'})
    }

    const teacher = await Teacher.findById(id)

    if (!teacher) {
        return res.status(400).json({error: 'No teacher found'})
    }

    res.status(200).json(teacher)
}

// CREATE a new teacher
const createTeacher = async (req, res) => {
    const {name, country, img_url, img_id, bio, order} = req.body

    let emptyFields = []

    if(!name) {
        emptyFields.push('name')
    }

    if(!country) {
        emptyFields.push('country')
    }

    if(!img_url) {
        emptyFields.push('img_url')
    }

    if(!order) {
        emptyFields.push('order')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all the required fields', emptyFields})
    }

    // add doc to db
    try{
        const teacher = await Teacher.create({name, country, img_url, img_id, bio, order})
        res.status(200).json(teacher)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a teacher
const deleteTeacher = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No teacher found'})
    }

    const teacher = await Teacher.findOneAndDelete({_id: id})

    if (!teacher) {
        return res.status(400).json({error: 'No teacher found'})
    }

    res.status(200).json(teacher)

}

// UPDATE a teacher
const updateTeacher = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No teacher found'})
    }

    const teacher = await Teacher.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!teacher) {
        return res.status(400).json({error: 'No teacher found'})
    }

    res.status(200).json(teacher)
}


module.exports = {
    createTeacher,
    getTeachers,
    getTeacher,
    deleteTeacher,
    updateTeacher
}