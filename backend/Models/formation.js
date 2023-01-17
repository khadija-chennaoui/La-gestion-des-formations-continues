const mongoose = require('mongoose')
const FormationSchema = mongoose.Schema({
    name:{
        type:String,
    },
   
    date_debut:{
        type: String
    },

    date_fin:{
        type: String
    }
})
module.exports = mongoose.model('formation',FormationSchema)