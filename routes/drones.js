const express = require('express');
const router = express.Router();

// require the Drone model here
const DroneModel = require('../models/Drone.model')

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

//GET
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //grab the dronw id from the url
  let id = req.params.id

  DroneModel.findById(id)
       .then((drone)=>{
            res.render('drones/update-form.hbs', {drone})
       })
       .catch(()=>{
            console.log('Something went wrong while getting a drone')
       })
});

//POST
router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let id = req.params.id

  const {myName, myNumPropellers, myNumSpeed} = req.body

  let editedDrone = {
    name: myName,
    propellers: myNumPropellers,
    maxSpeed: myNumSpeed
  }

  DroneModel.findByIdAndUpdate(id, editedDrone)
      .then(()=>{
             res.redirect('/drones')
      })
      .catch(()=>{
             console.log('Edited failed')
      }) 
});




router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  
   let id = req.params.id
   DroneModel.findByIdAndDelete(id)
       .then(()=>{
             res.redirect('/drones')
       })
       .catch(()=>{
             console.log('Delete failed!')
       })
});

module.exports = router;
