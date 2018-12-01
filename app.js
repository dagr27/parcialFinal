const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use('/api', api)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
module.exports = app