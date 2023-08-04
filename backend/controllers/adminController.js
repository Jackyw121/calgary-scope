const Admin = require("../models/adminModel")
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1h' })
}
//get all AdminProfiles
const getAdminProfiles = async (req, res) => {
    const adminProfile = await Admin.find({}).sort({createdAt: -1})

    res.status(200).json(adminProfile)
}


//get single AdminProfiles
const getAdminProfile = async ( req, res ) => {
    console.log(req.params)
    const { id } = req.params

    const adminProfile = await Admin.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Admin'})
    }

    if (!adminProfile) {
        return res.status(404).json({error: 'No such Admin'})
    }

    res.status(200).json(adminProfile)
}

// delete Admin
const deleteAdmin = async (req, res) => {
    //delete Admin from db
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Admin'})
    }

    const adminProfile = await Admin.findOneAndDelete({_id: id})

    if (!adminDetails) {
        return res.status(404).json({error: 'No such Admin'})
    }

    res.status(200).json(adminProfile)
}


//login Admin
const loginAdmin = async (req, res) => {
    const {email, password, employeeNumber} = req.body

    try {
        const admin = await Admin.login(email, password, employeeNumber)

        //create a token
        const token = createToken(admin._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}


//signup Admin
const signupAdmin = async (req, res) => {
    const {email, password, firstName, lastName, employeeNumber} = req.body

    try {
        const admin = await Admin.signup(email, password, firstName, lastName, employeeNumber)

        //create a token
        const token = createToken(admin._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}

module.exports = { signupAdmin, loginAdmin, getAdminProfiles, getAdminProfile, deleteAdmin }