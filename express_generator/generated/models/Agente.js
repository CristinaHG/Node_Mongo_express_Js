'use strict'

//schema creation
var monggose=require('mongoose')
var agentScheme=monggose.Schema({
    name: String,
    age: Number
    }
)

agentScheme.statics.list=function (filter,limit,skip,fields,sort,cb) {
    var query=Agent.find(filter)
    query.limit(limit)
    query.skip(skip)
    query.select(fields)
    query.sort(sort)
    query.exec(cb)

}


//model creation
var Agent=monggose.model('Agente',agentScheme)
