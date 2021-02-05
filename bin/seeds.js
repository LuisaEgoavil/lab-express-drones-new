// Iteration #1

const mongoose = require('mongoose')
//check out if our db is connected and require 
require('../configs/db.config.js')

//model
let DroneModel = require('../models/Drone.model.js')

//insert 
DroneModel.insertMany([
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
])

    .then(()=>{
         console.log('Data seeded')
         mongoose.connection.close()
    })
    .catch(()=>{
         console.log('Data seeding went wrong')
    })




