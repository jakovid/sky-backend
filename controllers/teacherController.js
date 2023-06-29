const Teacher = require('../models/teacherModel')
const mongoose = require('mongoose')

// GET all teachers
const getTeachers = async (req, res) => {
    const teachers = await Teacher.find({}).sort({createAt: 1})

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
    const {name, country, img, bio} = req.body

    // add doc to db
    try{
        const teacher = await Teacher.create({name, country, img, bio})
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