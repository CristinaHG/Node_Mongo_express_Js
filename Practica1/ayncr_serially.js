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

function serially(n, func, callbackFin) {
    if (n == 0) {
        callbackFin()
        return
    }
    n--
    func(n, function(){
        serially(n, func, callbackFin)
    })
}

serially(5, printAfter2Seconds, function(){
    console.log('he terminado');
})