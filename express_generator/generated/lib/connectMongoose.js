'use strict'

var mongoose=require('mongoose')


var db=mongoose.connection


db.on('error',function (err) {
    console.log(err)
})

db.once('open',function () {
    console.info('Conected to Mongodb')
})

mongoose.connect('mongodb://localhost:27017/cursonode')