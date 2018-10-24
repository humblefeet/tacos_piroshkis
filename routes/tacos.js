//Require necessities
const express = require('express');
const router = express.Router();
const tacos = require('../controllers/tacosController');

//**Routes  Where we define the "url patterns"

router.get('/tacos', tacos.index); // returns all tacos
router.get('/tacos/new', tacos.new); //we are getting the form to create a new taco
router.post('/tacos', tacos.create); //we are adding that form data to database
router.get('/tacos/:id', tacos.show); //returns ONE taco. anything you put in front of a colon becomes a variable, we can use it in the controller
router.get('/tacos/:id/edit', tacos.edit); //gives us the form to edit taco
router.post('/tacos/:id', tacos.update); // put. sends the form to update the database item
router.delete('/tacos/:id', tacos.destroy); // removes taco from database. A shares the same url as 2 above. but verb is different



module.exports = router;