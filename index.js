var express = require('express')
var app = express()
var port = process.env.port || 8000

app.get('/',(req,res)=>{
res.end('<h1>This is a header<h1/>')
})


app.listen(port)

