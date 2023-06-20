const Client = require('../models/clientModel')
const mongoose = require('mongoose')

// get all clients
const getClients = async (req, res) => {
    const client = await Client.find({}).sort({createdAt: -1})

    res.status(200).json(client)
}


// get single client
const getClient = async (req, res) => {
    console.log(req.params)
    const { id } = req.params

    const client = await Client.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such client'})
    }

    if (!client) {
        return res.status(404).json({error: 'No such client'})
    }

    res.status(200).json(client)
}


// create new client
const createClient = async (req, res) => {

    //add client to db
    const {name, email, phone} = req.body
    try{
        const client = await Client.create({name, email, phone})
        res.status(200).json(client)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


// delete client

const deleteClient = async (req, res) => {
    //delete client from db
    const { id } = req.params

    const client = await Client.deleteOne(id)

    res.status(200).json(client)
}

// update client

module.exports = {
    createClient, getClient, getClients, deleteClient
}