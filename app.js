const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use('/', api)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
module.exports = app