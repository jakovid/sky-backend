const express = require('express')
const {
    createTeacher,
    getTeachers,
    getTeacher,
    deleteTeacher,
    updateTeacher
} = require('../controllers/teacherController')

const router = express.Router()

//GET all teachers
router.get('/', getTeachers)

//GET a single teacher
router.get('/:id', getTeacher)

//POST a new teacher
router.post('/', createTeacher)

// DELETE a teacher
router.delete('/:id', deleteTeacher)

//UPDATE a teacher
router.patch('/:id', updateTeacher)

module.exports = router