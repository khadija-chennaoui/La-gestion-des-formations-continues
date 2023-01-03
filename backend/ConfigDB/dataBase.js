const mongoose = require('mongoose');
require('dotenv').config()
mongoose.set('strictQuery', true)
module.exports = mongoose.connect(process.env.DB)
.then(()=>{
    console.log('Connected')
})
.catch(() => {
    console.log('Not Connected');
  })