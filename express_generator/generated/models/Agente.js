'use strict'

//schema creation
var monggose=require('mongoose')
var agentScheme=monggose.Schema({
    name: String,
    age: Number
    }
)

//model creation
monggose.model('Agente',agentScheme)
