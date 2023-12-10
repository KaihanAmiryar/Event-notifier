const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const crimeSchema = new Schema({
    subject:{
        type:String
    },
    province:{
        type:String
    },
    district:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    file:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    phoneN:{
        type:Number
    },
    email:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    status:{
        type:String
    }

   
},{timestamps:true})

const Crime = mongoose.model("Crime",crimeSchema)
module.exports = Crime;