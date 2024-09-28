const { log } = require('console');
const fs = require('fs')

fs.writeFile('abc.txt','hello! this is first write',(err)=>{
    if (err) throw err;
    console.log("file created successfully!")
})

fs.readFile('abc.txt','utf8',(err,data) =>{
    if(err) throw err;
    console.log("file data = {"+data+" }")
    console.log("file read sucessfully!")
})

fs.appendFile('abc.txt','\nthis is append write',(err) =>{
    if(err) throw err;
    console.log("file update sucessfully!")
})

fs.readFile('abc.txt','utf8',(err,newData)=>{
    if(err) throw err;
    console.log("new data : "+newData)
})

fs.unlink('abc.txt',(err)=>{
    if(err) throw err;
    console.log("file deleted sucessfully!");
})