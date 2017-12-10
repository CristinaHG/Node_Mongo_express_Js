'use strict'

var express= require('express')
var router=express.Router()
var mongoose=require('mongoose')
var Agent=mongoose.model('Agente')

router.get('/',function (req,res,next) {
    Agent.find().exec(function (err,list) {
        if(err){
            next(err)
            return
        }
        res.json({ok:true,list:list})
    })
})

module.exports=router