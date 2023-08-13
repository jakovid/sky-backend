const express = require('express')
const { authenticateJWT } = require('../server')
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
router.post('/', authenticateJWT, createTeacher)

// DELETE a teacher
router.delete('/:id', authenticateJWT, deleteTeacher)

//UPDATE a teacher
router.patch('/:id', authenticateJWT, updateTeacher)

module.exports = router