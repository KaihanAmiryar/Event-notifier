const { response } = require('express')
const Ann = require('../models/Announcement')

const store = (req,res,next) =>{
    let newAnn = new Ann({
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        status:req.body.status
    })
    newAnn.save()
    .then(response=>{
        res.json({
            message:"Your announcement added successfully"
        })
    })
    .catch(err =>{
        res.json({
            message:"an error occurred: " + err
        })
    })
}

const list = (req,res,next )=>{
    Ann.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err=>{
        res.json({
            message:"An error :" + err
        })
    })
}

const show = (req, res,next)=>{
    let ann_Id = req.body.ann_Id
    Ann.findById(ann_Id)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:"can not find:" + err
        })
    })
}

const update = (req,res,next)=>{
    let ann_Id = req.body.ann_Id
    const updateAnn = {
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        status:req.body.status
    }
    Ann.findByIdAndUpdate(ann_Id,{$set:updateAnn})
    .then(response=>{
        res.json({
            message:"an announce updated successfully!"
        })
    })
    .catch(err =>{
        res.json({
            message:"can not update: " + err
        })
    })
}

const destroy = (req,res,next)=>{
    let ann_Id= req.body.ann_Id
    Ann.findByIdAndDelete(ann_Id)
    .then(response=>{
        res.json({
            message:"your announcement deleted successfully!"
        })
    })
    .catch(err =>{
        res.josn({
            message:"can not delete: "+ err
        })
    })
}

module.exports = {store,show,list,update,destroy}