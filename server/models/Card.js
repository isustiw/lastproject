const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CardSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    },
    responsiblePerson: {
        type: String

    },
    deadline: {
        type: String,
        created: Date
    },
    workstatus: {
        type: String
        
    }
});








module.exports = mongoose.model('Card', CardSchema);