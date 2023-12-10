const { response } = require("express")
const User = require('../models/User')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = (req,res,next)=>{
    bcrypt.hash(req.body.password, 10, function(err,hashedpass) {
        if(err) {
            res.json({
                error:err
            })
        }

        let user = new User ({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            password:hashedpass,
            email:req.body.email,
            phone:req.body.phone
            
        })
        user.save()
        .then(response =>{
            res.json({
                message:"A user login successfully!"
            })
        })
        .catch(err=>{
            res.json({
                message:"an error found" + err
            })
        })
    })
}

const show = (req,res,next)=>{
    let user_Id = req.body.user_Id
    User.findById(user_Id)
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
    User.find()
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

const login = (req,res,next)=>{
    var username=req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username},{phone:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
               if(result){
                    let token = jwt.sign({name:user.name},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                        status: 200,
                        message:"Login successfully!",
                        token
                    })
                }
                else {
                    res.json({
                        status: 401,
                        message:"password does not matched"
                    })
                }
            })
        }
        else{
            res.json({
                status: 404,
                message:"Non found the user"
            })
        }
    })
}

const destroy = (req,res,next)=>{
    let userId = req.body.userId
    User.findByIdAndDelete(userId)
   .then(response =>{
    res.json({
        message:"A user deleted successfylly"
    })
   })
   .catch(err =>{
    res.json({
        message:"an error occurred: " + err
    })
   })
}

module.exports = {register,show,login,list,destroy}