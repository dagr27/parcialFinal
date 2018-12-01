'use strict'
const carro = require('../models/materia')
async function saveCarro(req,res){
    let car = new carro()
    car.marca = req.body.marca
    car.modelo = req.body.modelo
    car.anio = req.body.anio
    try{
        await car.save()
        return res.status(200).json({message : `Se inserto el carro`})
    }catch{
        if(err) res.status(500).send({message: `Error al insertar el carro ${err}`})
    }
}

async function getCarros(req, res){
    let car = await carro.find()
    return res.status(200).json(car)
}

async function deleteCarros(req, res){
    let carroId = req.params.carroId
    carro.findById(carroId, (err, carro)=>{
        if(err) return res.status(500).send({message:'Se borro el carrito'})
        carro.remove(err=>{
            if(err) return res.status(500).send({message:`Error al borrar ${err}`})
            res.status(200).json({message: 'Se borro'})
        })
    })
}

async function updateCarro(req, res){
    let carroId = req.params.carroId
    let update = req.body
    carro.findByIdAndUpdate(carroId, update, (err, carroUpdated) =>{
        if(err)return res.status(500).send({message:`Error al actualizar ${err}`})
        res.status(200).json({message:'Se actualizo'})
    })
}
async function getCarro(req, res){
    let carroId = req.params.carroId 
    carro.findById(carroId, (err, carro)=>{
        if(err) return res.status(500).send({message: `Errors ${err}`})
        if(!carro) return res.status(404).send({carro})
        res.status(200).json({carro})
    })
}
module.exports = {
    saveCarro,
    getCarros,
    getCarro,
    updateCarro,
    deleteCarros
}