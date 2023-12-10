const express = require("express")
const router = express.Router()

const laibleController = require('../controllers/laibleController')

router.post('/register',laibleController.register)
router.get('/list',laibleController.list)
router.post('/show',laibleController.show)
router.post('/delete',laibleController.destroy)
router.get('/search',laibleController.search)

module.exports = router