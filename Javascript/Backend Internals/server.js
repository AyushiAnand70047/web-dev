const express = require('express')

const app = express();

app.use((req,res,next)=>{
    next()
})

app.get('/',(req,res)=>{
    res.end('Home page')
})

app.get('/contact-us',(req,res)=>{
    res.end('Contact us page')
})

app.listen(8000,(req,res)=>{
    console.log('Server started')
})