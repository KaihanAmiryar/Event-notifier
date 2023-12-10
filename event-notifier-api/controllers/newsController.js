const { response } = require('express')
const News = require('../models/News')

const store = (req,res,next)=>{
    let newNews = new News({
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        location:req.body.location,
        file:req.filename
        
    })
    if(req.file){
        newNews.file = req.file.path
    }
    newNews.save()
    .then(response =>{
        res.json({
            message:"An news added succesfully!"
        })
    })
    .catch(err =>{
        res.json({
            message:'An error occurred : ' +err
        })
    })
}

const list =(req,res,next)=>{
    News.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.josn({
            message:"An error occurred: "+err
        })
    })
}
const show =(req,res,next)=>{
    let news_Id = req.body.news_Id
    News.findById(news_Id)
   .then(response =>{
    res.json({
        response
    })
   })
   .catch(err =>{
    res.json({
        message:"An error Occurred: " + err
    })
   })
}

const update = (req,res,next)=>{
    let news_Id = req.body.news_Id
    let updateNews = {
        title:req.body.title,
        description:req.body.description,
        location:req.body.location,
        file:req.body.file,
        date:req.body.date
    }
   News.findByIdAndUpdate(news_Id,{$set:updateNews})
   .then(response =>{
    res.json({
        message:"news update successfully"
    })
   })
   .catch(err =>{
    res.josn({
        message:"An error occurred!"+ err
    })
   })
}
const destroy = (req,res,next)=>{
    let news_Id = req.body.news_Id
    News.findByIdAndDelete(news_Id)
    .then(response =>{
        res.json({
            message:"message deleted successfully!"
        })
    })
    .catch(err =>{
        res.josn({
            message:"An error occurred: "+err
        })
    })
}


module.exports ={list,show,store,destroy,update}