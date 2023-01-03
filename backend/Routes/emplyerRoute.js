const route = require('express').Router()
const employer = require('../Controllers/contollerEmplyer')

route.post('/add' , employer.AddEmplyer)
// route.get('/all' , employer.AllEmployer)
// route.delete('/delet/:id' , employer.DeletEmployer)
module.exports = route;