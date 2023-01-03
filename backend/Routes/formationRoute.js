const route = require('express').Router()
const formation = require('../Controllers/controllerFormation')

route.post('/add' , formation.AddFormation)
route.get('/all' , formation.AllFormation)
route.delete('/delet/:id' , formation.DeletFormation)
module.exports = route;