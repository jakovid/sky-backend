const express = require('express')
const {
    createTeacherImage,
    deleteTeacherImage,
    updateTeacherImage
} = require('../controllers/imageController.js')

const router = express.Router()


//POST a new teacher
router.post('/teachers/', createTeacherImage)

// DELETE a teacher
router.delete('/teachers/:id', deleteTeacherImage)

//UPDATE a teacher
router.patch('/teachers/:id', updateTeacherImage)

module.exports = router