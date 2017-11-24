//literal object definition

var employee={
    name:"cristina",
    job:"computer scientist",
    age:24,
    pc:["linux","sony"]
}

console.log(employee)


var serialized=JSON.stringify(employee)
console.log(serialized)

serialized=serialized+'}'
//unserialize : fron string to object
var read

try{
    read=JSON.parse(serialized)
}catch (err){
    console.log("ERROR PARSING STRING")
}

if(typeof read !="undefined"){
    console.log("something there!")
}else{
    console.log("nothing there!")
}


for(var i =0; i  < employee.pc.length;i++){
    var data=employee.pc[i]
    console.log(employee.name+ ' owns a '+ (data =="linux" ? "debian" : data + " vaio") + ' laptop' )
}
