const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    //verify user is authenticated
    const { authorization} = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    }

}

const isAdmin = async (req, res, next) => {
    requireAuth(res, req, () => {
        if
        (req.user.isAdmin){
            next()
        }
        else 
        {
        console.log(error)
        res.status(401).json({error: 'You do not have the required privileges'})
        }
    })
}

module.exports = requireAuth, isAdmin