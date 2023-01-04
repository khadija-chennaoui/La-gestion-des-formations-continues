const route = require('express').Router()
const employer = require('../Controllers/contollerEmplyer')

route.post('/add' , employer.AddEmplyer)
route.get('/all' , employer.AllEmployer)
route.post('/login' , employer.LoginUser)
route.delete('/delet/:id' , employer.DaletEmplyer)
module.exports = route;