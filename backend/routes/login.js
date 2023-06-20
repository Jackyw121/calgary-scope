const express = require('express')
const Client = require('../models/clientModel')

const router = express.Router()

//GET all logins
router.get('/', (req, res) => {
    res.json({mssg: 'GET all logins'})
})

//GET a single login
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single login'})
})

//POST a new login
router.post('/', async (req, res) => {
    const {name, email, phone} = req.body
    try{
        const client = await Client.create({name, email, phone})
        res.status(200).json(client)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELETE a new login
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new login'})
})

//UPDATE a new login
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new login'})
})

module.exports = router