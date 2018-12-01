'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carroSchema = Schema({
    marca: String,
    modelo: String,
    anio : Number
})
module.exports = mongoose.model('Carro', carroSchema)