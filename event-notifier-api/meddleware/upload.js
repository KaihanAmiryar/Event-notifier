const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination:function (req,red,cb){
        cb(null,'uploads/')
    }
    ,filename:function(req,file,cb) {
        let ext = path.extname(file.originalname)
        const filename = Date.now() + ext
        cb(null,filename)

        req.filename = filename
        
    }
})

var upload = multer  ({
    storage:storage,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype=="image/jpg" ||
            file.mimetype=="image/png"
        ){
            callback(null,true)
        }
        else {
            console.log("only apload jpg or png file")
            callback(null,false)
        }   
    },
    filesize:1024 * 1024 * 2

})
module.exports = upload