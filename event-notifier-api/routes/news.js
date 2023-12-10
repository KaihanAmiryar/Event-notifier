const express =require("express")
const router = express.Router()

const newController = require("../controllers/newsController")
const upload = require("../meddleware/upload")

router.post('/store',upload.single('file'),newController.store)
router.get('/list',newController.list)
router.post('/show',newController.show)
router.post('/update',newController.update)
router.post('/delete',newController.destroy)

module.exports = router