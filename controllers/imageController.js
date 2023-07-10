const Teacher = require('../models/teacherModel')
const mongoose = require('mongoose')
require('dotenv').config()
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


// CREATE a new teacher
const createTeacherImage = async (req, res) => {
    console.log('CREATE teacher image')
}

// DELETE a teacher
const deleteTeacherImage = async (req, res) => {
    console.log('DELETE teacher image')

}

// UPDATE a teacher
const updateTeacherImage = async (req, res) => {
    console.log('UPDATE teacher image')
}


module.exports = {
    createTeacherImage,
    deleteTeacherImage,
    updateTeacherImage
}