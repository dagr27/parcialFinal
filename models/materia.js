'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const carroSchema = Schema({
    marca: string,
    modelo: string,
    anio : int
})
module.exports = mongoose.model('Carro', carroSchema)