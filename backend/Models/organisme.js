const mongoose = require('mongoose')
const OrganismeSchema = mongoose.Schema({
    name :{
        type:String
    },
    phone:{
        type: Number,
    },
    address:{
        type:String
    }
})
module.exports = mongoose.model('organisme' , OrganismeSchema)