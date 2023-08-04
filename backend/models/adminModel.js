const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')


const Schema = mongoose.Schema

const adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employeeNumber: {
        type: String,
        required: true
    }
})

//static signup method
adminSchema.statics.signup = async function (email, password, firstName, lastName, employeeNumber) {
    // validation
    if (!email || !password || !firstName || !lastName || !employeeNumber) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error ('Password is not strong enough')
    }

    
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10) 
    const hash = await bcrypt.hash(password, salt)

    const admin = await this.create({ email, firstName, lastName, password: hash, employeeNumber})

    return admin
}

//static login method
adminSchema.statics.login = async function(email, password) {
    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    const admin = await this.findOne({ email })

    if (!admin) {
        throw Error('Invalid login credentials')
    }

    const match = await bcrypt.compare(password, admin.password)

    if (!match) {
        throw Error('Invalid login credentials')
    }

    return admin
}

module.exports = mongoose.model('Admin', adminSchema)