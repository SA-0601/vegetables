const mongoose = require('mongoose');

//defining the properties of fields which is Schema
//Mongoose Vegetable Schema (blueprint)
const vegetableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
})

//Mongoose model
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

//exporting the model
module.exports = Vegetable;

