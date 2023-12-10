const express = require('express')
const router = express.Router()

const annController = require('../controllers/announncement')

router.post('/store',annController.store)
router.get('/list',annController.list)
router.post('/show',annController.show)
router.post('/update',annController.update)
router.post('/delete',annController.destroy)

module.exports = router