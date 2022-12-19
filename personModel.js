const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('persons',new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number 
    },
    favoriteFoods:[]
}))