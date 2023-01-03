const cors = require('cors')
const express = require('express')
const app = express ()
require('dotenv').config()
const organismeroute = require('./Routes/organismeRoute')
const formationroute = require('./Routes/formationRoute')
const db = require('./ConfigDB/dataBase')
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/organisme',organismeroute)
app.use('/formation',formationroute)





const port = process.env.PORT
app.listen(port)
module.exports = app


