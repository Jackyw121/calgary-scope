require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const clientRoutes = require('./routes/client')
const userRoutes = require('./routes/userLogin')
const cors = require("cors");




//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})


app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    // listen for requests
app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port ', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

//routes
app.use('/api/client', clientRoutes)
app.use('/api/user', userRoutes)

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers","Origin", "Content-Type", "Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });