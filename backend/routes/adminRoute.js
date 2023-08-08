const express = require('express')

//controller functions
const { signupAdmin, loginAdmin, getAdminProfile, getAdminProfiles, deleteAdmin } = require('../controllers/adminController')

const router = express.Router()

//get Admin route
router.get('/:id', getAdminProfile )

//get all Admin route

router.get('/', getAdminProfiles)

//delete Admin route

router.get('/:id', deleteAdmin)

//Admin login route
router.post('/login', loginAdmin)


//signup route
router.post('/signup', signupAdmin)

module.exports = router