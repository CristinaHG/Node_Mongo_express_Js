'use strict'

function createAdder(value) {
    return function (value2) {
        return value + value2
    }
}

var cl1=createAdder(5)
console.log(cl1(2))

