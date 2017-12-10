'use strict'

//load modules
var express=require('express')
var morgan=require('morgan')


var app=express() // function that creates express App when called
app.use(morgan('dev')) //tells express App to use morgan

app.get('/',function (request,response) {
    console.log("petition to /")
    response.send('Hello world')
})

var server=app.listen(3000, function () {
    var port=server.address().port
    console.log("server running at port: " , port)
})

