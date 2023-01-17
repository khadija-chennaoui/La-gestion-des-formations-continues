const mongoose = require('mongoose')
const AssignmentSchema = mongoose.Schema({

    formation_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'formation',
        }
    ],
    employer_id: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ]

})
module.exports = mongoose.model('assignment',AssignmentSchema)
