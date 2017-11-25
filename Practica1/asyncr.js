"use strict"

console.log("starting")

function printAfter2Seconds(text, callback) {
    setTimeout(function () {
        console.log(text)
        callback()
    },2000)
}

printAfter2Seconds(" two seconds gone!", function () {
    console.log("end")

    printAfter2Seconds(" another two seconds gone!", function () {
        console.log("end2")
    })
})


