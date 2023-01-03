const route = require('express').Router()
const organisme = require('../Controllers/controllerOrganisme')

route.post('/add' , organisme.AddOrganisme)
route.get('/all' , organisme.AllOrganisme)
route.delete('/delet/:id' , organisme.DeletOrganisme)
module.exports = route;