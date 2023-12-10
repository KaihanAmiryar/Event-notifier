const express = require("express")
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/register',userController.register)
router.get('/list',userController.list)
router.post('/show',userController.show)
router.post('/login',userController.login)
router.post('/delete',userController.destroy)

module.exports = router