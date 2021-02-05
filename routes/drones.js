const express = require('express');

// require the Drone model here
const DroneModel = require('../models/Drone.model')

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
      .then((drones)=>{
           res.render('drones/list' , {drones})
      })
      .catch(()=>{
          console.log('Something went wrong')
      })

});


//GET
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});


//POST
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {myName, myNumPropellers, myNumSpeed} = req.body
  //new Drone
  let myNewDrone = {
        name: myName,
        propellers: myNumPropellers,
        maxSpeed: myNumSpeed
  }
//REDIRECT

      DroneModel.create(myNewDrone)
          .then(()=>{
               res.redirect('/drones')
          })
          .catch(()=>{
               console.log('something went wrong')
          })


});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});


//PATH redirect


module.exports = router;
