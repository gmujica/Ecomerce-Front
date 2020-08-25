const mongoose = require('mongoose')

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    //description: String,
    description:  {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    /*type: {
        type: String,
        require: true
    },*/
    //date: Date.now
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Items', ItemSchema)