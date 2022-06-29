const express = require('express')
const morgan = require('morgan')
// const bodyParser = require('body-parser')
const storeRoutes = require('./routes/Store.js')

const products = require('./data/db.json')
const app = express()

// app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('tiny'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/store', storeRoutes)
app.get('/store/:productId', storeRoutes)
app.post('/store/', storeRoutes)

app.get('/', (req, res) => {
    res.status(200).send({"ping": "pong"})
  })

module.exports = app
