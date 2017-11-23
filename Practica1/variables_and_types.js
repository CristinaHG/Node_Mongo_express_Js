var number=1
console.log(number)
console.log(typeof (number))
number='hola'
console.log(typeof (number))

console.log("probe text".split(' '))
//multiline text
var longtext1=
    'Linea1\n' +
    'Linea2\n'
console.log(longtext1)


var longtext2=[
    'Linea1',
    'Linea2',
    'Linea3'
].join('\n')
console.log(longtext2)


//object declaration

var object={
    number:1,
    text:"hola",
    isZero:function (v) {
        return v==0
    }
}

console.log(object.number)
console.log(object.text)
console.log(object.isZero(0))


//array declaration

var array=[
    1,
    'hello',
    function (v) { return v+2},
    {value:"hello"}
]
//accesing array elements
console.log(array[0])
console.log(array[2])

//hoisting example
var x =100

function y() {
    if(x==20){
        var x=30
    }
    return x
}

console.log(x,y())