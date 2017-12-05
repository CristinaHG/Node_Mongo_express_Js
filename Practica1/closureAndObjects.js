'use strict'

function createAgent(name) {
    var age=0
    return { //return an object
        setName:function (newname) {
            name=newname
        },
        readName: function () {
            return name
        },

        setAge:function (newage) {
            age=newage
        },
        readAge: function () {
            return age
        },
        write:function () {
            console.log(' I am '+name +' I am '+age )
        }

    }
}

var myagent=new createAgent('Cris')

myagent.setAge(24)

var alexAgent=new createAgent('Alex')

alexAgent.setAge(26)

console.log(myagent.readName()+ ' '+ myagent.readAge())
console.log(alexAgent.readName()+ ' '+ alexAgent.readAge())

setTimeout(myagent.write,1000)