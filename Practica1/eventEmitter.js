'use strict'

// need to use library
var events=require('events')
var myEmitter=new events.EventEmitter()

myEmitter.on('phone call',phoneRings)
myEmitter.on('phone call', phoneVibrate)

function phoneRings(who) {
    if(who==='dad'){
        return;
    }
    console.log('riiiiiinnnng riiiiiiiiiing')
}



function phoneVibrate() {
    console.log('brrbrbrrr')
}

//emit that event
myEmitter.emit('phone call','dad')