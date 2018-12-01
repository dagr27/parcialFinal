'use strict'
const express = require('express')
const cControllers = require('../controllers/carro')
const api = express.Router()
api.get('/', (req, res) =>{
    res.render('index')
})
api.get('/carro',cControllers.getCarros)
api.get('/carro/:carroId', cControllers.getCarro)
api.post('/carro', cControllers.saveCarro)
api.put('/carro/:carroId', cControllers.updateCarro)
api.delete('/carro/:carroId', cControllers.deleteCarros)

module.exports = api