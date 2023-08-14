const express = require('express')
const {
    postUser,
} = require('../controllers/loginController')

const router = express.Router()

//POST a new web image
router.post('/', postUser)


module.exports = router