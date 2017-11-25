"use strict"

console.log("starting")

function printAfter2Seconds(text, callback) {
    setTimeout(function () {
        console.log(text)
        callback()
    },2000)
}

var ended=0
//asyncr loop in parallel
for(var i =0; i<5;i++){
    printAfter2Seconds("text" + i,function () {
        ended++
        if(ended>=5) console.log("all jobs ended")
    })
}
