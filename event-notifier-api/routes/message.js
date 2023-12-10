const express = require('express')
const router = express.Router()

const MessageController = require('../controllers/messageController')

router.get('/list',MessageController.list)
router.post('/store',MessageController.store)
router.post('/show',MessageController.show)
router.post('/delete',MessageController.destroy)

module.exports = router