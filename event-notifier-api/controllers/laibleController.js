const { response } = require("express")
const Laible = require('../models/Lailbe')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = (req,res,next)=>{
    
        let laible = new Laible ({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            password:req.body.password,
            email:req.body.email,
            phone:req.body.phone,
            porvince:req.body.porvince,
            districts:req.body.districts,
            locationL:req.body.locationL
            
        })
        laible.save()
        .then(response =>{
            res.json({
                message:"A laible registered successfully!"
            })
        })
       .catch(err =>{
        res.json({
            message:"err: " + err
        })
       })
      
    }


const show = (req,res,next)=>{
    let laible_Id = req.body.laible_Id
    Laible.findById(laible_Id)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>[
        res.json({
            meessage:"An error accured: " + err
        })
    ])

}

const list = (req,res,next) =>{
    Laible.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            error:err
        })
    })
}

const search = async (req, res, next) => {
    const searchTerm = req.query.query;
    const regex = new RegExp(searchTerm);
    const searchResults = await Laible.find({email: regex});
    res.json(searchResults);
  };



const destroy = (req,res,next)=>{
    let laible_Id = req.body.laible_Id
    Laible.findByIdAndDelete(laible_Id)
   .then(response =>{
    res.json({
        message:"A laible deleted successfylly"
    })
   })
   .catch(err =>{
    res.json({
        message:"an error occurred: " + err
    })
   })
}



module.exports = {register,show,list,destroy,search}