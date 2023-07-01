const express = require('express')
const {
    createClient, getClient, getClients, deleteClient, updateClient
} = require('../controllers/clientController')

const requireAuth = require('../middleware/requireAuth')

const Client = require('../models/clientModel')

const router = express.Router()

// require auth for client information
router.use(requireAuth)

//GET all clients
router.get('/', (getClients))

//GET clients
router.get('/:id', (getClient))

//POST a new client
router.post('/', createClient)

//DELETE a new client
router.delete('/:id', deleteClient)

//UPDATE a new client
router.patch('/:id', updateClient)

module.exports = router