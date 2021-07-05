//
// app.js
// main program
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const CF = require('./config')

const app = express()

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(express.json())

// middleware
app.use('/api/test', require('./api/test'))


//these 3 lines make sure that Angular and express app are coming from the same server
const frontEndPath = path.join(__dirname, CF.frontEndPath)
app.use(express.static(frontEndPath))
app.get('/', function(req, res) {
    res.sendFile('index.html',  { root: frontEndPath } )
})


if (CF.use_mongo) {
    // connect db first, then start server
    mongoose.connect(CF.dburl+CF.dbname, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then( (result) => {
        console.log('... db connect to ' + CF.dburl+CF.dbname)
        // start server app
        app.listen(CF.port, () => {
            console.log('... ' + CF.appName +' server started, listening to port: ' + CF.port.toString())
        })
    }).catch( (e) => {
        console.log('... db NOT connect to ' + CF.dburl+CF.dbname)
    })
} else {
    app.listen(CF.port, () => {
        console.log('... ' + CF.appName +' server started, listening to port: ' + CF.port.toString())
    })
}
