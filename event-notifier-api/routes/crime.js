const express = require("express")
const router = express.Router()

const crimeController = require('../controllers/crimeController')
const upload = require("../meddleware/upload")

router.get('/list',crimeController.list)
router.post('/show',crimeController.show)
router.post('/store',upload.single('file'),crimeController.store)
router.post('/update',crimeController.update)
router.post('/delete',crimeController.destroy)
router.get('/search',crimeController.search)

module.exports = router