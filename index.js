const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const (mongoUrl) = require('./keys')


mongoose.connect(mogoUrl)
    useNewUrlParser:true
    useUnifiedTopology:true

mongoose.connection.on('connected',()=>{
    console.log("Connected to mongo")
})

mongoose.connection.on('Error',()=>{
    console.log("This is an Error",err)
})
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('hello')
})



app.listen(PORT,()=>{
    console.log("server running"+PORT)
})