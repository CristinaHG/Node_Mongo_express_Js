'use strict'

var express= require('express')
var router=express.Router()
var mongoose=require('mongoose')
var Agent=mongoose.model('Agente')

//get agents list
router.get('/',function (req,res,next) {
    Agent.find().exec(function (err,list) {
        if(err){
            next(err)
            return
        }
        res.json({ok:true,list:list})
    })
})

//create an agent
router.post('/',function (req,res,next) {
    var agent=new Agent(req.body)
    agent.save(function (err,savedAgent) {
        if(err){
            next(err)
            return
        }
        res.json({ok:true,agent:savedAgent})
    })
})
//update an agent
router.put('/:id',function (req,res,next) {
    var id=req.params.id
    Agent.update({_id:id},req.body,function (err,agent) {
        if(err){
            return next(err)
        }
        res.json({ok:true,agent:agent})
    })
})
//delete an angent
router.delete('/:id', function (req,res,next) {
    var id=req.params.id
    Agent.remove({_id:id},function (err,result) {
        if(err){
            return next(err)
        }
        res.json({ok:true,result:result})
    })
    
})

module.exports=router