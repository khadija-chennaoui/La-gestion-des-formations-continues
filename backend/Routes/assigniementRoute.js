const route = require('express').Router()
const assigniement = require('../Controllers/controllerAssigniement')

route.post('/add',assigniement.AddAssigniement)
route.get('/all',assigniement.AllAssigniement)
route.get('/maformation/:token',assigniement.MonAssigniment)
module.exports = route