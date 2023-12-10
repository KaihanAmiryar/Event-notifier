const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnnSchma = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    status:{
        type:String
    }
},{timestamps:true})

const Ann = mongoose.model('Ann',AnnSchma)
module.exports = Ann