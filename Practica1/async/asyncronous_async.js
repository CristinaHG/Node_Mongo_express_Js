"use strict"

var async=require('async')

console.log("starting")

function printAfter2Seconds(text, callback) {
    setTimeout(function () {
        console.log(text)
        callback()
    },2000)
}

// asyncr serially loop

//call a functions N times serially nd when finish call the ending callback

var list=[1,2,3,'four',5]

async.eachSeries(list, printAfter2Seconds, function(){
    console.log('im finished! ');
})
