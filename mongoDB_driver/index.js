'use strict'

var MongoClient= require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017',function (err,db) {
    if(err){
        console.log("Error "+err+ " while trying to connect")
        return process.exit()
    }
    var mydb=db.db('cursonode')

    mydb.collection('agentes').find().toArray(function (err,docs) {
        if(err){
            console.log(err)
            return process.exit()
        }
        console.log(docs)
        db.close()
    })
})