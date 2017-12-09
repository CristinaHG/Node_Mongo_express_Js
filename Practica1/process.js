'use strict'
// get information about process
var info={
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    tittle: process.title,
    arguments:process.argv,
    execPath: process.execPath,
    folder: process.cwd()
}

console.log('entering in ',info)
process.on('exit',function () {
    console.log('bye!')
})
console.log('process end')

process.exit(0) //ends all execution

console.log('the process is ended so it is not executed')