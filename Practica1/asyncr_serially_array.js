"use strict"

console.log("starting")

function printAfter2Seconds(text, callback) {
    setTimeout(function () {
        console.log(text)
        callback()
    },2000)
}

// asyncr serially loop

//call a functions N times serially nd when finish call the ending callback

function serially(list, func, callbackFin) {
    if (list.length == 0) {
        callbackFin()
        return
    }

    func(list.shift(), function(){
        serially(list, func, callbackFin)
    })
}


var list=[1,2,3,4,5]

serially(list, printAfter2Seconds, function(){
    console.log('he terminado');
})
