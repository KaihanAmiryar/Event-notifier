const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema ({
    username:{
        type:String
    },
    password:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    startD:{
        type:String
    },
    endD:{
        type:String
    },
    startT:{
        type:String
    },
    endT:{
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
    status:{
        type:String
    }
})

const Event = mongoose.model("Event",eventSchema)
module.exports = Event