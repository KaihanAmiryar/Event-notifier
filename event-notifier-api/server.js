const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const CrimeRoute= require('./routes/crime')
const UserRoute = require('./routes/user')
const MessageRoute = require('./routes/message')
const NewsRoute = require('./routes/news')
const AnnRoute = require('./routes/announcement')
const EventRoute = require('./routes/event')
const LaibleRoute = require('./routes/laible')

mongoose.connect('mongodb://localhost:27017/testdb')
const db = mongoose.connection
db.on("error",(err)=>{
    console.log(err)
})
db.once("open", ()=>{
    console.log("database connection established!")
})
const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server is running on port " + PORT)
})

app.use(express.static("./uploads"));

app.use('/api/crime',CrimeRoute)
app.use('/api/user',UserRoute)
app.use('/api/message',MessageRoute)
app.use('/api/news',NewsRoute)
app.use('/api/announcement',AnnRoute)
app.use('/api/event',EventRoute)
app.use('/api/laible',LaibleRoute)