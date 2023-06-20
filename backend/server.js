require('dotenv').config()

const express = require('express')
const loginRoutes = require('./routes/login')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

app.use('/api/login', loginRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port ', process.env.PORT)
    })
