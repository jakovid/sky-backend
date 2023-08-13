const express = require('express')
const {
    postAdmin,
} = require('../controllers/loginController')

const router = express.Router()

//POST a new web image
router.post('/', [postAdmin])


module.exports = router