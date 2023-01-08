const mongoose = require('mongoose')
const FormationSchema = mongoose.Schema({
    name:{
        type:String,
    },
    // image: {
    //     type: String,
    //     default: "default.jpg",
    // },
})
module.exports = mongoose.model('formation',FormationSchema)