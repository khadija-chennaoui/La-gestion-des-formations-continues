const cors = require('cors')
const express = require('express')
const app = express ()
require('dotenv').config()
require('./Models/automatiqueRole')
const organismeroute = require('./Routes/organismeRoute')
const formationroute = require('./Routes/formationRoute')
const emplyerroute = require('./Routes/emplyerRoute')
const assigniement = require('./Routes/assigniementRoute')
const statistic = require('./Routes/statisticRoute')
const db = require('./ConfigDB/dataBase')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/organisme',organismeroute)
app.use('/formation',formationroute)
app.use('/emplyer',emplyerroute)
app.use('/assigniement',assigniement)
app.use('/statistic',statistic)




const port = process.env.PORT
app.listen(port)
module.exports = app


