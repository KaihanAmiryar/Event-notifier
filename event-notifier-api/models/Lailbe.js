const mongoose = require("mongoose")
const Schema = mongoose.Schema

const laibleSchema = new Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    province:{
        type:String
    },
    districts:{
        type:String
    },
    locationL:{
        type:String
    }
},{timestamps:true}  
)

const Laible = mongoose.model('Laible',laibleSchema)

module.exports = Laible;

