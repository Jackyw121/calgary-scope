const express = require('express')

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
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new login'})
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