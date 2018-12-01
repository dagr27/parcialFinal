'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res)=>{
    if(err)return console.log(`Error al conectar ${err}`)
    
})