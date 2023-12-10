const { response } = require("express")
const Crime = require("../models/Crime")

const store = (req,res,next) =>{
    let newCrime=new Crime({
        subject:req.body.subject,
        province:req.body.province,
        district:req.body.district,
        location:req.body.location,
        description:req.body.description,
        file:req.body.file,
        date:req.body.date,
        time:req.body.time,
        status:'pending',
        
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phoneN:req.body.phoneN,
        email:req.body.email
    })
    if(req.file){
        newCrime.file=req.file.path
    }
    newCrime.save()
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
    Crime.find()
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
    let crime_Id = req.body.crime_Id
    Crime.findById(crime_Id)
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
    let crime_Id = req.body.crime_Id
    let updateCrime= {
        subject:req.body.subject,
        provine:req.body.provine,
        district:req.body.district,
        location:req.body.location,
        description:req.body.description,
        file:req.body.file,
        date:req.body.date,
        time:req.body.time,
        status:req.body.status,
        
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phoneN:req.body.phoneN,
        email:req.body.email
    }

    Crime.findByIdAndUpdate(crime_Id,{$set:updateCrime})
    .then(response =>{
        res.json({
            response
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
    const searchResults = await Crime.find({subject: regex });
    res.json(searchResults);
  };

const destroy = (req,res,next)=>{
    let crime_Id = req.body.crime_Id
     Crime.findByIdAndDelete(crime_Id)
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