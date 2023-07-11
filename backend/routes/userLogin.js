const express = require('express')

//controller functions
const { signupUser, loginUser, getUserProfile, getUserProfiles, deleteUser } = require('../controllers/userController')

const router = express.Router()

//get user route
router.get('/:id', getUserProfile )

//get all user route

router.get('/', getUserProfiles)

//delete user route

router.get('/:id', deleteUser)

//user login route
router.post('/login', loginUser)


//signup route
router.post('/signup', signupUser)

module.exports = router