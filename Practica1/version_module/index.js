"use strict"

//load modules
var fs=require('fs')
var path=require('path')

//function that reads module version
var versionModule= function (moduleName,callback) {
    //construct module file path
    var file=path.join('./node_modules',moduleName,'package.json')
    // read
    fs.readFile(file,'utf8',function (err,data) {
        if(err){
            callback(err)
            return
        }
        //if there was no error convert contect in an object
        var packageJson
        try{
            packageJson=JSON.parse(data)
        }catch(e){
            callback("error" + e + " while parsing" + file )
            return
        }

        if(packageJson && !packageJson.version){
            callback("VERSION TAG not found")
            return
        }
        //return result via callback
        callback(null,packageJson.version)
    })
}

// using our function
var module='chance'
versionModule(module,function (err,version) {
    if(err){
        console.log("ERROR PRODUCED: "+err)
        return
    }
    console.log(" version of module " + module + " is: " + version)
})