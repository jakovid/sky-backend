const express = require('express')
const {authenticateJWT} = require('../middleware/authenticateJWT')
const {
    getContents,
    getContent,
    createContent,
    updateContent
} = require('../controllers/contentController')

const router = express.Router()

//GET all teachers
router.get('/', getContents)

//GET a single teacher
router.get('/:id', getContent)

//POST a new teacher
router.post('/', authenticateJWT, createContent)

//UPDATE a teacher
router.patch('/:id', authenticateJWT, updateContent)

module.exports = router