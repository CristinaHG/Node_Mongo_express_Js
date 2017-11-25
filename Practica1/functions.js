
// basic function

function basic() {
    console.log("im so basic!")
}

basic()

// function as declaration with arguments and return
function add(a,b) {
    return a+b
}

console.log(add(2,3))

//function as expression

var multiply=function (a,b) {
    return a*b
}

console.log(multiply(2,3))

var lang='en'

function contextAccess() {
    console.log("the context language is:" +lang)
}

contextAccess()

//method of an object

var agent={
    name:"louis",
    sayhello: function () {
        console.log("hello from "+this.name)
    }
}

agent.sayhello()


// object constructor

function Fruit(name) {

    this.getName=function () {
        return name
    }
    this.setName=function (value) {
        name=value
    }

    return{
        name:this.name
    }
}

// create fruit object

var orange=new Fruit("Orange")

console.log(orange)
console.log(orange.getName())
orange.setName('mandarin')
console.log(orange.getName())
