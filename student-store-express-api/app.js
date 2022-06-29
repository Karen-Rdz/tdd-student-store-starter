const express = require('express')
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const storeRoutes = require('./routes/Store.js')

const products = require('./data/db.json')
const app = express()

// app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get('/store', storeRoutes)
app.get('/store/:productId', storeRoutes)

app.get('/', (req, res) => {
    res.status(200).send({"ping": "pong"})
  })

module.exports = app
