'use strict'

var express=require('express')
var router= express.Router()

// do midleware at router level
router.use(function (req,res,next) {
    console.log('middleware of clients route')
    res.send('response')
    next()
})

router.get('/',function (req,res,next) {
    console.log('req query',req.query)
    res.send('answer to clients')
}) //load route to router

//define route with params
router.get('/:id',function (req,res,next) {
    res.send('param received '+req.params.id)
})

router.post('/',function (req,res,next) {
    console.log('req.body',req.body)
    res.json({received:req.body.num})
})

module.exports=router