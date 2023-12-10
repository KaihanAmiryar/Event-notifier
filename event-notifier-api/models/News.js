const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
   
    location:{
        type:String
    },
    file:{
        type:String
    },
    date:{
        type:String
    }
  
},{timestamps:true})

const News = mongoose.model("News",newsSchema)
module.exports = News