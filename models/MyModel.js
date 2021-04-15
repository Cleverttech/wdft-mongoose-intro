const mongoose = require('mongoose');
//Structure of Collection
let MySchema = new mongoose.Schema( {
    name:String,
    age: Number
})
let MyModel = mongoose.model('ironhacker', MySchema)

module.exports = MyModel