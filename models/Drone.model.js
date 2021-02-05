const mongoose = require('mongoose')

let DroneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

//create the model "myDrone" points to the variable DroneModel
let DroneModel = mongoose.model('mydrone', DroneSchema)

//export the model
module.exports = DroneModel

