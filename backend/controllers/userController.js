const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1h' })
}
//get all userProfiles
const getUserProfiles = async (req, res) => {
    const userProfile = await User.find({}).sort({createdAt: -1})

    res.status(200).json(userProfile)
}


//get single userProfiles
const getUserProfile = async ( req, res ) => {
    console.log(req.params)
    const { id } = req.params

    const userProfile = await User.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    if (!userProfile) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(userProfile)
}

// delete user
const deleteUser = async (req, res) => {
    //delete user from db
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const userProfile = await User.findOneAndDelete({_id: id})

    if (!UserDetails) {
        return res.status(404).json({error: 'No such user'})
    }

    res.status(200).json(userProfile)
}


//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}


//signup user
const signupUser = async (req, res) => {
    const {email, password, firstName, lastName} = req.body

    try {
        const user = await User.signup(email, password, firstName, lastName)

        //create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})

    }
}

module.exports = { signupUser, loginUser, getUserProfiles, getUserProfile, deleteUser }