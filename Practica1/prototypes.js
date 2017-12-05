'use strict'

function Person(name) {
    this.name=name
}

var person=new Person("Toto")
Person.prototype.sayHi=function () {
    console.log("hello from "+ this.name )
}
console.log(person.name)
person.sayHi()

// inheritance fom Person

function Agent(name) {
    Person.call(this,name) //executes Person constructor with thid from agent, defining in Agent a name property and setting its value to given
}

//asign a person as prototype
Agent.prototype=new Person('Emma')
var agent=new Agent('Luca')
agent.sayHi()

console.log(Object.getPrototypeOf(agent),
agent instanceof Agent,
    agent instanceof Person,
    agent instanceof Object)


// multiple inheritance

function SuperHero() {
    this.fly=function () {
        console.log(this.name+ " can fly!")
    }
    this.throwFire=function () {
        console.log(this.name+ " throw fire!!")
    }
}

Object.assign(Agent.prototype,new SuperHero())

agent.fly()
agent.throwFire()

