const { response } = require('express')
const Message = require('../models/Message')

const store = (req,res,next) =>{
    let newMessage =new Message({
        name:req.body.name,
        message:req.body.message,
        email:req.body.email,
        status:'pinding'

    })
    newMessage.save()
    .then(response =>{
        res.json({
            message:"Your message added successfully!"
        })
    })
    .catch(err =>{
        res.json({
            message:"An error accured: " + err
        })
    })
}

let list = (req,res,next)=>{
    Message.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:"An error accured: " + err
        })
    })
}

let show = (req,res,next) =>{
    let message_Id = req.body.message_Id
    Message.findById(message_Id)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            messaga:"An error occurredd: "+err
        })
    })
}

const destroy = (req,res,next)=>{
    let message_Id = req.body.message_Id
    Message.findByIdAndDelete(message_Id)
    .then(response =>{
        res.json({
            message:"message deleted succesfully!"
        })
    })
    .catch(err =>{
        res.json({
            message:"An error occurred!" + err
        })
    })
}
module.exports = {store,list,show,destroy}