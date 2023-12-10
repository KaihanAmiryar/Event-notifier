const express = require('express')
const router = express.Router()

const eventController = require('../controllers/eventController')
const upload = require('../meddleware/upload')

router.post('/store',upload.single('file'), eventController.store)
router.get('/list',eventController.list)
router.post('/show',eventController.show)
router.post('/update',eventController.update)
router.post('/delete',eventController.destroy)
router.get('/search',eventController.search)

module.exports = router