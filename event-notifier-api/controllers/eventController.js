const { response } = require("express")
const Event = require("../models/Event")
let Laible = require('../models/Lailbe')

const store = (req,res,next) =>{
    let newEvent=new Event({
        title:req.body.title,
        province:req.body.province,
        district:req.body.district,
        location:req.body.location,
        description:req.body.description,
        file:req.body.file,
        startD:req.body.startD,
        endD:req.body.endD,
        startT:req.body.startT,
        endT:req.body.endT,
        status:'pending',
        username:req.body.username,
        password:req.body.password
    })

    

    // if(req.file){
    //     newEvent.file = req.file.path
    // }
 
    newEvent.save()
    .then(response =>{
        res.json({
           message:"An event added successfully"
        })
    })
    .catch(err=>{
        res.json({
            message:"error:" + err
        })
    })
}

const list = (req,res, next)=>{
    Event.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:"Can not find the list of Events"
        })
    })
}

const show = (req,res,next)=>{
    let event_Id = req.body.event_Id
    Event.findById(event_Id)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:"can not find this crime"
        })
    })
}
const update = (req,res,next)=>{
    let event_Id = req.body.event_Id
    let updateEvent= {
        title:req.body.title,
        province:req.body.province,
        district:req.body.district,
        location:req.body.location,
        description:req.body.description,
        file:req.body.file,
        date:req.body.date,
        startT:req.body.startT,
        endT:req.body.endT,
        status:req.body.status,
        username:req.body.username,
        password:req.body.password
        
    }

    Event.findByIdAndUpdate(event_Id,{$set:updateEvent})
    .then(response =>{
        res.json({
            message:"event update successfully"
        })
        
    })
    .catch(err =>{
        res.json({
            message:'Can not update the event'
        })
    })
}

const search = async (req, res, next) => {
    const searchTerm = req.query.query;
    const regex = new RegExp(searchTerm);
    const searchResults = await Event.find({ title: regex });
    res.json(searchResults);
  };

const destroy = (req,res,next)=>{
    let event_Id = req.body.event_Id
     Event.findByIdAndDelete(event_Id)
     .then(() =>{
         res.json({
             message:'delate an event successfully!'
         })
     })
     .catch(err =>{
         res.json({
             message:'can not remove the event!'
         })
     })
 }

 module.exports ={store,show,list,destroy,update,search}