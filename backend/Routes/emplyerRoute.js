const route = require('express').Router()
const storage = require("local-storage");
const employer = require('../Controllers/contollerEmplyer')

route.post('/add' , employer.AddEmplyer)
route.get('/all' , employer.AllEmployer)
route.post('/login' , employer.LoginUser)
route.get('/logout' , employer.logout)
route.delete('/delet/:id' , employer.DaletEmplyer)
module.exports = route;