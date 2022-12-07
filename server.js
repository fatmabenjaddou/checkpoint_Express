const express = require('express')
const app = express()
const path = require('path')
const time = require('./middleware/hours')


app.use(time)

app.get("/",(req,res)=>{

res.sendFile(path.join(__dirname,"public","homePage.html"))

})
app.get("/contact",(req,res)=>{

    res.sendFile(path.join(__dirname,"public","contactUs.html"))
    
    })
    app.get("/services",(req,res)=>{

        res.sendFile(path.join(__dirname,"public","ourServices.html"))
        
        })

app.listen(4000,()=>console.log('server is runing on port 4000'))

